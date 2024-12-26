import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { subscribeWithSelector } from "zustand/middleware";

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

export const useCountStore = create<State & Actions>()(
  subscribeWithSelector(
    immer((set) => ({
      ...initialState,
      actions: {
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decrease: () => {
          set((state) => {
            state.count -= 1;
          });
        },
        resetState: () => set(initialState),
      },
    }))
  )
);

/**
 * count의 값을 listen
 * double은 count 값의 두배로 업데이트
 */
// useCountStore.subscribe(
//   (state) => state.count, // Selector
//   (count) => {
//     console.log(useCountStore.getState().double);
//     useCountStore.setState(() => ({ double: count * 2 }));
//   }
// );
