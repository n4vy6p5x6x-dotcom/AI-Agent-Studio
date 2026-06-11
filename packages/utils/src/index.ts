/** 格式化文件大小 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/** 格式化日期时间 */
export function formatDateTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/** 生成唯一 ID */
export function generateId(prefix = ''): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`;
}

/** 延迟函数 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 文本切片 - 用于 RAG 文档处理 */
export function chunkText(
  text: string,
  chunkSize = 512,
  overlap = 50,
): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));
    start += chunkSize - overlap;
  }

  return chunks;
}

/** 计算余弦相似度 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

/** 简单哈希 embedding（本地开发用，生产环境应使用真实 embedding API） */
export function simpleEmbedding(text: string, dimensions = 128): number[] {
  const embedding = new Array(dimensions).fill(0);
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    embedding[i % dimensions] += charCode / 1000;
  }
  const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return norm === 0 ? embedding : embedding.map((val) => val / norm);
}

/** 截断文本 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/** Agent 类别中文名 */
export const AGENT_CATEGORY_LABELS: Record<string, string> = {
  PLANNER: 'AI 计划员',
  DATA_ANALYST: 'AI 数据员',
  SCHEDULER: 'AI 排程员',
  DISPATCHER: 'AI 调度员',
  QUALITY: 'AI 质量员',
  SIMULATOR: 'AI 仿真员',
  DECISION: '协同决策员',
  CUSTOM: '自定义 Agent',
};

/** Agent 状态中文名 */
export const AGENT_STATUS_LABELS: Record<string, string> = {
  IDLE: '空闲',
  THINKING: '思考中',
  EXECUTING: '执行中',
  WAITING: '等待中',
  ERROR: '错误',
  OFFLINE: '离线',
};

/** 场景类型中文名 */
export const SCENARIO_TYPE_LABELS: Record<string, string> = {
  UAV_MANUFACTURING: '无人机制造',
  SMT_MANUFACTURING: 'SMT 制造',
  EV_MANUFACTURING: '新能源汽车制造',
};
