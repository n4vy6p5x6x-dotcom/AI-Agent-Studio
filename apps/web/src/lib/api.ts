const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
    if (typeof window !== 'undefined') {
      if (token) localStorage.setItem('token', token);
      else localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (this.token) return this.token;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    const token = this.getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${API_URL}/api${path}`, { ...options, headers });

    if (!res.ok) {
      const body = await res.json().catch(() => ({} as { message?: string | string[] }));
      const message = Array.isArray(body.message)
        ? body.message.join('；')
        : body.message || res.statusText || 'Request failed';

      if (res.status === 401) {
        this.setToken(null);
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }

      throw new Error(message);
    }

    return res.json();
  }

  get<T>(path: string) {
    return this.request<T>(path);
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined });
  }

  put<T>(path: string, body?: unknown) {
    return this.request<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined });
  }

  delete<T>(path: string) {
    return this.request<T>(path, { method: 'DELETE' });
  }

  // Auth
  login(email: string, password: string) {
    return this.post<{ accessToken: string; user: { id: string; email: string; name: string; role: string } }>(
      '/auth/login', { email, password },
    );
  }

  register(email: string, password: string, name: string) {
    return this.post<{ accessToken: string; user: { id: string; email: string; name: string; role: string } }>(
      '/auth/register', { email, password, name },
    );
  }

  getProfile() {
    return this.get<{ id: string; email: string; name: string; role: string }>('/auth/profile');
  }

  // Agents
  getAgents() {
    return this.get<Array<Record<string, unknown>>>('/agents');
  }

  getAgent(id: string) {
    return this.get<Record<string, unknown>>(`/agents/${id}`);
  }

  createAgent(data: Record<string, unknown>) {
    return this.post<Record<string, unknown>>('/agents', data);
  }

  updateAgent(id: string, data: Record<string, unknown>) {
    return this.put<Record<string, unknown>>(`/agents/${id}`, data);
  }

  deleteAgent(id: string) {
    return this.delete(`/agents/${id}`);
  }

  assignTask(taskDescription: string) {
    return this.post<Record<string, unknown>>('/agents/assign-task', { taskDescription });
  }

  getAgentStatuses() {
    return this.get<Array<Record<string, unknown>>>('/agents/statuses');
  }

  // Workflows
  getWorkflows() {
    return this.get<Array<Record<string, unknown>>>('/workflows');
  }

  getWorkflow(id: string) {
    return this.get<Record<string, unknown>>(`/workflows/${id}`);
  }

  createWorkflow(data: Record<string, unknown>) {
    return this.post<Record<string, unknown>>('/workflows', data);
  }

  updateWorkflow(id: string, data: Record<string, unknown>) {
    return this.put<Record<string, unknown>>(`/workflows/${id}`, data);
  }

  executeWorkflow(id: string, input?: Record<string, unknown>) {
    return this.post<Record<string, unknown>>(`/workflows/${id}/execute`, { input });
  }

  // Knowledge
  getKnowledgeBases() {
    return this.get<Array<Record<string, unknown>>>('/knowledge');
  }

  createKnowledgeBase(data: { name: string; description?: string }) {
    return this.post<Record<string, unknown>>('/knowledge', data);
  }

  getKnowledgeBase(id: string) {
    return this.get<Record<string, unknown>>(`/knowledge/${id}`);
  }

  getKnowledgeStats(id: string) {
    return this.get<Record<string, unknown>>(`/knowledge/${id}/stats`);
  }

  searchKnowledge(id: string, query: string, industry?: string) {
    return this.post<Array<Record<string, unknown>>>(`/knowledge/${id}/search`, { query, industry });
  }

  organizeKnowledge(id: string) {
    return this.post<Record<string, unknown>>(`/knowledge/${id}/organize`, {});
  }

  uploadKnowledgeDocument(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    const token = this.getToken();
    return fetch(`${API_URL}/api/knowledge/${id}/upload`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    }).then((r) => {
      if (!r.ok) throw new Error('上传失败');
      return r.json();
    });
  }

  // Scenarios
  getScenarios() {
    return this.get<Array<Record<string, unknown>>>('/scenarios');
  }

  getScenario(id: string) {
    return this.get<Record<string, unknown>>(`/scenarios/${id}`);
  }

  // Dashboard
  getDashboardMetrics() {
    return this.get<Record<string, unknown>>('/dashboard/metrics');
  }

  getDashboardCharts() {
    return this.get<Record<string, unknown>>('/dashboard/charts');
  }

  // Tasks
  getTasks() {
    return this.get<Array<Record<string, unknown>>>('/tasks');
  }

  getRecentLogs(limit = 50) {
    return this.get<Array<Record<string, unknown>>>(`/tasks/logs/recent?limit=${limit}`);
  }

  // Chat
  chat(agentId: string, messages: Array<{ role: string; content: string }>) {
    return this.post<{ content: string; tokens: number; agentId: string; agentName: string }>(
      '/chat', { agentId, messages },
    );
  }
}

export const api = new ApiClient();
