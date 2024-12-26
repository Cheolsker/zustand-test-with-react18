import { create } from "zustand";

interface State {
  count: number;
  double: number;
  min: number;
  max: number;
}
interface Actions {
  actions: {
    increase: () => void;
    decrease: () => void;
    resetState: () => void;
  };
}

const initialState: State = {
  count: 0,
  double: 2,
  min: 0,
  max: 99,
};

export const useCountStore = create<State & Actions>((set, get) => ({
  ...initialState,
  actions: {
    increase: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    decrease: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    resetState: () => set(initialState),
  },
}));
