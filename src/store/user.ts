import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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
export const useUserStore = create<State & Actions>()(
  immer((set) => ({
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
            state.user.displayName = name;
          }
        });
      },
    },
  }))
);
