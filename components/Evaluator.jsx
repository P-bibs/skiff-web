import { useState, useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const Evaluator = ({ editorState }) => {
  const [wasm, setWasm] = useState(null);
  const terminalRef = useRef(null);
  const [term, setTerm] = useState(null);

  // set window write function on load
  useEffect(() => {
    if (!terminalRef.current) {
      return;
    }
    if (!term) {
      const term = new Terminal();
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      term.open(terminalRef.current);
      fitAddon.fit();

      window.writeToTerm = (s) => term.writeln(s);
      setTerm(term);

      term.writeln("\x1B[1;3;31mSkiff\x1B[0m initialized");
    }
  });

  useEffect(async () => {
    const wasm = await import("skiff-lang");
    setWasm(wasm);
  });

  const evaluate_program = () => {
    let program = editorState.doc.text.join("\n");
    let r = wasm.evaluate(program);
  };

  return (
    <div className="w-half h-full flex flex-col">
      <div className="flex flex-row  p-2 bg-gray-500 text-white items-center">
        <div>Actions:</div>
        <button className="btn mx-2" onClick={evaluate_program}>
          Run
        </button>
        <button className="btn mx-2">Verify</button>
      </div>

      <div className="h-full" ref={terminalRef}></div>
    </div>
  );
};

export default Evaluator;
