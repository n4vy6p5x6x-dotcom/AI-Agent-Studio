import { chunkText, simpleEmbedding, cosineSimilarity } from '@ai-studio/utils';

export interface DocumentChunkData {
  id: string;
  content: string;
  embedding: number[];
  metadata: Record<string, unknown>;
}

export interface SearchResult {
  chunk: DocumentChunkData;
  score: number;
}

/** RAG 文档处理器 */
export class DocumentProcessor {
  processDocument(
    text: string,
    options: { chunkSize?: number; chunkOverlap?: number; metadata?: Record<string, unknown> } = {},
  ): DocumentChunkData[] {
    const { chunkSize = 512, chunkOverlap = 50, metadata = {} } = options;
    const chunks = chunkText(text, chunkSize, chunkOverlap);

    return chunks.map((content, index) => ({
      id: `chunk-${index}`,
      content,
      embedding: simpleEmbedding(content),
      metadata: { ...metadata, chunkIndex: index, totalChunks: chunks.length },
    }));
  }

  /** 模拟 PDF/DOCX/Excel 文本提取 */
  extractText(fileName: string, fileType: string): string {
    const templates: Record<string, string> = {
      PDF: `[${fileName}] 这是一份工业制造领域的技术文档。内容涵盖 MPS/MRP 生产计划方法论、物料需求计算规则、产能约束分析等核心知识点。`,
      DOCX: `[${fileName}] 企业标准操作规程(SOP)文档。详细描述了 SMT 贴片产线的操作流程、换线标准、质量控制检查点等内容。`,
      EXCEL: `[${fileName}] 生产数据报表。包含月度产能统计、设备利用率、良品率趋势、物料消耗明细等结构化数据。`,
    };

    return templates[fileType] || `[${fileName}] 文档内容已提取。`;
  }
}

/** RAG 向量检索引擎 */
export class VectorSearchEngine {
  private index: DocumentChunkData[] = [];

  addChunks(chunks: DocumentChunkData[]): void {
    this.index.push(...chunks);
  }

  removeByDocument(documentId: string): void {
    this.index = this.index.filter((c) => c.metadata.documentId !== documentId);
  }

  search(query: string, topK = 5): SearchResult[] {
    const queryEmbedding = simpleEmbedding(query);

    const results = this.index
      .map((chunk) => ({
        chunk,
        score: cosineSimilarity(queryEmbedding, chunk.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return results;
  }

  getStats(): { totalChunks: number; dimensions: number } {
    return {
      totalChunks: this.index.length,
      dimensions: this.index[0]?.embedding.length || 128,
    };
  }
}

/** 从数据库切片列表中检索（持久化 RAG） */
export function searchChunks(
  chunks: DocumentChunkData[],
  query: string,
  topK = 5,
): SearchResult[] {
  const queryEmbedding = simpleEmbedding(query);
  return chunks
    .map((chunk) => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/** RAG 问答链 */
export class RAGChain {
  private searchEngine: VectorSearchEngine;

  constructor(searchEngine?: VectorSearchEngine) {
    this.searchEngine = searchEngine || new VectorSearchEngine();
  }

  retrieve(query: string, topK = 3): string {
    const results = this.searchEngine.search(query, topK);

    if (results.length === 0) {
      return '未找到相关知识。';
    }

    return results
      .map((r, i) => `[${i + 1}] (相关度: ${(r.score * 100).toFixed(1)}%) ${r.chunk.content}`)
      .join('\n\n');
  }

  buildPrompt(query: string, context: string): string {
    return `基于以下知识库内容回答问题。如果知识库中没有相关信息，请说明。

## 知识库内容
${context}

## 用户问题
${query}

## 回答`;
  }
}

export { DocumentProcessor as default };
