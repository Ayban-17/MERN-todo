import { create } from "zustand";

export const useUserStore = create((set) => ({
  userInfo: null,
  setUserInfo: (value) => {
    set(() => ({
      userInfo: value,
    }));
  },

  error: "",
  setError: (value) => {
    set(() => ({
      error: value,
    }));
  },

  isLoading: null,
  setIsLoading: (value) => {
    set(() => ({
      isLoading: value,
    }));
  },
}));

export const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (value) => {
    set(() => ({
      todos: value,
    }));
  },

  personalTodos: [],
  setPersonalTodo: (value) => {
    set(() => ({
      personalTodos: value,
    }));
  },
}));
