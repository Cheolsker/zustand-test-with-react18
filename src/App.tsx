import "./App.css";
import { useCountStore } from "./store/count";

export default function App() {
  const count = useCountStore((state) => state.count);
  const { increase, decrease, resetState } = useCountStore(
    (state) => state.actions
  );

  return (
    <main className="App">
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={resetState}>reset</button>
    </main>
  );
}
