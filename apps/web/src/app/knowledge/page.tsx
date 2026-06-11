'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Upload, Search, FileText, Plus, Bot, BarChart3, Filter } from 'lucide-react';
import { api } from '@/lib/api';

const INDUSTRY_LABELS: Record<string, string> = {
  UAV: '无人机制造',
  SMT: 'SMT 电子制造',
  EV: '新能源汽车',
  PLATFORM: '平台与多智能体',
};

export default function KnowledgePage() {
  const [bases, setBases] = useState<Array<Record<string, unknown>>>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Array<Record<string, unknown>>>([]);
  const [stats, setStats] = useState<Record<string, unknown> | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [searchResults, setSearchResults] = useState<Array<Record<string, unknown>>>([]);
  const [organizeReport, setOrganizeReport] = useState<Record<string, unknown> | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getKnowledgeBases().then(setBases).catch(console.error);
  }, []);

  const selectBase = async (id: string) => {
    setSelectedId(id);
    setOrganizeReport(null);
    const detail = await api.getKnowledgeBase(id);
    setDocuments((detail.documents as Array<Record<string, unknown>>) || []);
    const s = await api.getKnowledgeStats(id);
    setStats(s);
  };

  const handleCreate = async () => {
    const kb = await api.createKnowledgeBase({ name: newName });
    setBases([kb, ...bases]);
    setShowCreate(false);
    setNewName('');
  };

  const handleSearch = async () => {
    if (!selectedId || !searchQuery) return;
    const results = await api.searchKnowledge(selectedId, searchQuery, industryFilter || undefined);
    setSearchResults(results);
  };

  const handleOrganize = async () => {
    if (!selectedId) return;
    setLoading(true);
    try {
      const report = await api.organizeKnowledge(selectedId);
      setOrganizeReport(report);
      await selectBase(selectedId);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedId || !e.target.files?.[0]) return;
    await api.uploadKnowledgeDocument(selectedId, e.target.files[0]);
    selectBase(selectedId);
  };

  const filteredDocs = industryFilter
    ? documents.filter((d) => d.industry === industryFilter)
    : documents;

  return (
    <AppLayout>
      <Header title="企业知识库" subtitle="80 份行业文档 · RAG 向量检索 · 多 Agent 智能整理" />
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {bases.map((kb) => (
              <button
                key={kb.id as string}
                onClick={() => selectBase(kb.id as string)}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                  selectedId === kb.id
                    ? 'bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {kb.name as string}
                {(kb.isSystem as boolean) && <span className="ml-1 text-xs text-cyber-green">[系统]</span>}
                <span className="ml-2 text-xs text-muted-foreground">({(kb.documentCount as number) || 0})</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-1 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue text-sm"
          >
            <Plus className="w-4 h-4" /> 新建知识库
          </button>
        </div>

        {showCreate && (
          <GlassCard className="p-4 flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="知识库名称"
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
            />
            <button onClick={handleCreate} className="px-4 py-2 bg-cyber-blue rounded-lg text-sm">创建</button>
            <button onClick={() => setShowCreate(false)} className="px-4 py-2 bg-white/5 rounded-lg text-sm">取消</button>
          </GlassCard>
        )}

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><FileText className="w-4 h-4" /> 文档总数</div>
              <p className="text-2xl font-bold text-cyber-blue">{stats.documentCount as number}</p>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><BarChart3 className="w-4 h-4" /> RAG 切片</div>
              <p className="text-2xl font-bold text-cyber-green">{stats.chunkCount as number}</p>
            </GlassCard>
            <GlassCard className="p-4 col-span-2">
              <div className="text-xs text-muted-foreground mb-2">行业分布</div>
              <div className="flex flex-wrap gap-2">
                {((stats.byIndustry as Array<{ industry: string; count: number }>) || []).map((i) => (
                  <span key={i.industry} className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                    {INDUSTRY_LABELS[i.industry] || i.industry}: {i.count}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {selectedId && (
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {['', 'UAV', 'SMT', 'EV', 'PLATFORM'].map((v) => (
              <button
                key={v || 'all'}
                onClick={() => setIndustryFilter(v)}
                className={`px-3 py-1 rounded-full text-xs border ${
                  industryFilter === v ? 'bg-cyber-blue/20 border-cyber-blue/40 text-cyber-blue' : 'bg-white/5 border-white/10'
                }`}
              >
                {v ? INDUSTRY_LABELS[v] : '全部行业'}
              </button>
            ))}
            <button
              onClick={handleOrganize}
              disabled={loading}
              className="ml-auto flex items-center gap-1 px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green text-sm disabled:opacity-50"
            >
              <Bot className="w-4 h-4" /> {loading ? '整理中...' : '智能体整理文档'}
            </button>
          </div>
        )}

        {organizeReport && (
          <GlassCard className="p-4 border-cyber-green/30">
            <p className="text-sm text-cyber-green mb-2">{organizeReport.message as string}</p>
            <div className="flex flex-wrap gap-2">
              {((organizeReport.agentReport as Array<{ agent: string; documents: number }>) || []).map((r) => (
                <span key={r.agent} className="text-xs px-2 py-1 rounded bg-white/5">{r.agent}: {r.documents} 份</span>
              ))}
            </div>
          </GlassCard>
        )}

        {selectedId && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">文档列表 ({filteredDocs.length})</h3>
                {!(bases.find((b) => b.id === selectedId)?.isSystem as boolean) && (
                  <label className="flex items-center gap-1 px-3 py-1.5 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue text-sm cursor-pointer">
                    <Upload className="w-4 h-4" /> 上传
                    <input type="file" className="hidden" accept=".pdf,.docx,.xlsx,.txt,.md" onChange={handleUpload} />
                  </label>
                )}
              </div>
              <div className="space-y-2 max-h-[480px] overflow-y-auto">
                {filteredDocs.map((doc) => (
                  <div key={doc.id as string} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-cyber-blue shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{doc.name as string}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {INDUSTRY_LABELS[String(doc.industry || '')] || String(doc.industry || '通用')} · {String(doc.category || '—')} · {Number(doc.chunkCount || 0)} chunks
                        </p>
                        {typeof doc.summary === 'string' && doc.summary && (
                          <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{doc.summary}</p>
                        )}
                        <p className="text-xs text-cyber-green mt-1">整理: {String(doc.organizedBy || '—')}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredDocs.length === 0 && (
                  <p className="text-center text-muted-foreground py-8 text-sm">暂无文档，运行 start.bat 初始化行业知识库</p>
                )}
              </div>
            </GlassCard>

            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">向量检索 (RAG)</h3>
              <div className="flex gap-2 mb-4">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="例如：SMT 换线优化、无人机 MPS、电池追溯..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-cyber-blue rounded-lg">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 max-h-[480px] overflow-y-auto">
                {searchResults.map((result, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-cyber-blue">
                        #{(result.metadata as Record<string, unknown>)?.documentName as string || i + 1}
                      </span>
                      <span className="text-xs text-cyber-green">{((result.score as number) * 100).toFixed(1)}%</span>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-4">{result.content as string}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
