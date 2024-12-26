import { create } from "zustand";

interface State {
  user: {
    email: string;
    displayName: string;
    isValid: boolean;
  } | null;
}
interface Actions {
  actions: {
    signIn: () => void;
    setDisplayName: (name: string) => void;
  };
}

const initialState: State = {
  user: null,
};
export const useUserStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    signIn: () => {
      set({
        user: {
          email: "thesecon@gmail.com",
          displayName: "HEROPY",
          isValid: true,
        },
      });
    },
    setDisplayName: (name) => {
      set((state) => {
        if (state.user) {
          return {
            user: {
              ...state.user,
              displayName: name,
            },
          };
        }
        return {}; // 병합할 상태, 상태 변경 없음!
      });
    },
  },
}));
