import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

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
    signOut: () => void;
    setDisplayName: (name: string) => void;
  };
}

const initialState: State = {
  user: null,
};
export const useUserStore = create<State & Actions>()(
  devtools(
    persist(
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
          signOut: () => {
            set({
              user: null,
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
      })),
      {
        name: "userStore",
        partialize: (state) => state.user,
      }
    )
  )
);
