import { useEffect, useState } from "react";
import Evaluator from "../components/Evaluator";

function App() {
  const [wasm, setWasm] = useState(null);

  useEffect(async () => {
    const wasm = await import("skiff-lang");
    setWasm(wasm);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Evaluator wasm={wasm} />
    </div>
  );
}

export default App;
