import { create } from 'zustand';
import { api } from '@/lib/api';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loadProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  login: async (email, password) => {
    const res = await api.login(email, password);
    api.setToken(res.accessToken);
    set({ user: res.user, isAuthenticated: true, isLoading: false });
  },

  register: async (email, password, name) => {
    const res = await api.register(email, password, name);
    api.setToken(res.accessToken);
    set({ user: res.user, isAuthenticated: true, isLoading: false });
  },

  logout: () => {
    api.setToken(null);
    set({ user: null, isAuthenticated: false });
  },

  loadProfile: async () => {
    try {
      const token = api.getToken();
      if (!token) {
        set({ isLoading: false, isAuthenticated: false });
        return;
      }
      const user = await api.getProfile();
      set({ user, isAuthenticated: true, isLoading: false });
    } catch {
      api.setToken(null);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));

interface AppState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  activeAgentId: string | null;
  setActiveAgentId: (id: string | null) => void;
  logs: Array<{ id: string; level: string; message: string; createdAt: string }>;
  addLog: (log: { id: string; level: string; message: string; createdAt: string }) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  activeAgentId: null,
  setActiveAgentId: (id) => set({ activeAgentId: id }),
  logs: [],
  addLog: (log) => set((s) => ({ logs: [log, ...s.logs].slice(0, 100) })),
}));
