import { useState } from "react";

const Evaluator = ({ wasm }) => {
  const [program, setProgram] = useState("1");
  const [output, setOutput] = useState("");

  const evaluate_program = () => {
    let r = wasm.evaluate(program);
    setOutput(r);
  };

  return (
    <div>
      <textarea value={program} onChange={(e) => setProgram(e.target.value)} />
      <button onClick={evaluate_program}>Evaluate</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
};

export default Evaluator;
