import { useEffect } from "react";
import "./App.css";
import { useCountStore } from "./store/count";

export default function App() {
  const count = useCountStore((state) => state.count);
  const double = useCountStore((state) => state.double);
  const { increase, decrease, resetState } = useCountStore(
    (state) => state.actions
  );

  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (count) => {
        useCountStore.setState(() => ({ double: count * 2 }));
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <main className="App">
      <div>
        <h2>Count</h2>
        <h2>{count}</h2>
      </div>
      <div>
        <h2>Double</h2>
        <h2>{double}</h2>
      </div>

      <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={resetState}>reset</button>
      </div>
    </main>
  );
}
