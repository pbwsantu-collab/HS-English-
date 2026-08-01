import create from 'zustand';
import { User } from '../types';

type AuthState = {
  user: User | null;
  setUser: (u: User | null) => void;
};

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  setUser: user => set({ user })
}));
