import Head from "next/head";
import Editor from "../components/Editor";
import useCodeMirror from "../lib/hooks";
import dynamic from "next/dynamic";
import ExamplePicker from "../components/ExamplePicker";
import examplePrograms from "../lib/examplePrograms";

const Evaluator = dynamic(() => import("../components/Evaluator"), {
  ssr: false,
});

export default function Home() {
  const [editorRef, state, view] = useCodeMirror({ doc: examplePrograms["Language Tour"] });

  const setEditorContent = (text) => {
    view.current.dispatch({changes: {from: 0, to: state.doc.length, insert: text}})
  }

  return (
    <>
      <Head>
        <title>Skiff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ width: "100vw", height: "100vh" }}
        className="flex flex-col"
      >
        <div className="w-full h-10 px-3 bg-gray-800 text-white flex flex-row items-center justify-between">
          <div className="py-2">Skiff</div>
          <ExamplePicker setEditorContent={setEditorContent}/>
        </div>
        <div className="w-full h-0 flex-grow flex flex-row">
          <Editor editorRef={editorRef} />
          <Evaluator editorState={state} />
        </div>
      </div>
    </>
  );
}
