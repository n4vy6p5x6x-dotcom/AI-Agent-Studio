export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER' | 'OPERATOR';
  avatar?: string;
}

export interface CreateAgentDto {
  name: string;
  description?: string;
  systemPrompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  tools?: string[];
  category?: AgentCategory;
  workflowId?: string;
}

export interface UpdateAgentDto extends Partial<CreateAgentDto> {
  status?: AgentStatus;
}

export type AgentCategory =
  | 'PLANNER'
  | 'DATA_ANALYST'
  | 'SCHEDULER'
  | 'DISPATCHER'
  | 'DESIGNER'
  | 'QUALITY'
  | 'SIMULATOR'
  | 'DECISION'
  | 'CUSTOM';

export type AgentStatus =
  | 'IDLE'
  | 'THINKING'
  | 'EXECUTING'
  | 'WAITING'
  | 'ERROR'
  | 'OFFLINE';

export interface AgentResponse {
  id: string;
  name: string;
  description?: string;
  systemPrompt: string;
  model: string;
  temperature: number;
  maxTokens: number;
  tools: string[];
  status: AgentStatus;
  category: AgentCategory;
  isTemplate: boolean;
  workflowId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkflowDto {
  name: string;
  description?: string;
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
}

export interface UpdateWorkflowDto extends Partial<CreateWorkflowDto> {
  status?: WorkflowStatus;
}

export type WorkflowStatus = 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'ARCHIVED';

export interface WorkflowNode {
  id: string;
  type: 'start' | 'end' | 'agent' | 'http' | 'condition' | 'rag' | 'tool' | 'parallel' | 'merge';
  position: { x: number; y: number };
  data: Record<string, unknown>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface WorkflowResponse {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  status: WorkflowStatus;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateKnowledgeBaseDto {
  name: string;
  description?: string;
  embeddingModel?: string;
  chunkSize?: number;
  chunkOverlap?: number;
}

export interface KnowledgeBaseResponse {
  id: string;
  name: string;
  description?: string;
  embeddingModel: string;
  chunkSize: number;
  chunkOverlap: number;
  documentCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface DocumentResponse {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX' | 'EXCEL' | 'TXT' | 'MD';
  size: number;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  chunkCount: number;
  createdAt: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

export interface ChatRequest {
  agentId: string;
  messages: ChatMessage[];
  stream?: boolean;
}

export interface ChatResponse {
  content: string;
  tokens: number;
  toolCalls?: ToolCallInfo[];
}

export interface ToolCallInfo {
  id: string;
  toolName: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  status: 'pending' | 'running' | 'success' | 'failed';
}

export interface AgentCollaborationEvent {
  type: 'agent_thinking' | 'agent_executing' | 'agent_message' | 'tool_call' | 'task_assigned' | 'status_sync';
  agentId: string;
  agentName: string;
  data: Record<string, unknown>;
  timestamp: string;
}

export interface DashboardMetrics {
  totalAgents: number;
  activeAgents: number;
  totalTasks: number;
  completedTasks: number;
  totalTokens: number;
  apiCalls: number;
  knowledgeBases: number;
  documents: number;
}

export interface ScenarioResponse {
  id: string;
  name: string;
  type: 'UAV_MANUFACTURING' | 'SMT_MANUFACTURING' | 'EV_MANUFACTURING';
  description?: string;
  config: Record<string, unknown>;
  data: Record<string, unknown>;
  status: string;
}

export interface LogEntry {
  id: string;
  level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
  message: string;
  agentId?: string;
  taskId?: string;
  createdAt: string;
}

export interface WorkflowExecutionRequest {
  workflowId: string;
  input?: Record<string, unknown>;
}

export interface WorkflowExecutionResult {
  executionId: string;
  status: 'running' | 'completed' | 'failed';
  steps: WorkflowStepResult[];
  output?: Record<string, unknown>;
}

export interface WorkflowStepResult {
  nodeId: string;
  nodeType: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  duration?: number;
  logs: string[];
}

export interface ContractNetBid {
  agentId: string;
  agentName: string;
  taskId: string;
  bidScore: number;
  estimatedTime: number;
  capabilities: string[];
}

export interface ContractNetAssignment {
  taskId: string;
  assignedAgentId: string;
  assignedAgentName: string;
  bids: ContractNetBid[];
  reason: string;
}
