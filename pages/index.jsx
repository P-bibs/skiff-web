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
  const [editorRef, state, view] = useCodeMirror({
    doc: examplePrograms["Language Tour"],
  });

  const setEditorContent = (text) => {
    view.current.dispatch({
      changes: { from: 0, to: state.doc.length, insert: text },
    });
  };

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
          <div className="py-2 flex flex-row items-center justify-center">
            Skiff
            <a
              className="text-black"
              href="https://github.com/p-bibs/skiff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Skiff on Github"
                className="w-4 h-4 m-3 inline "
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/githubicon.png"}
              />
            </a>
          </div>
          <ExamplePicker setEditorContent={setEditorContent} />
        </div>
        <div className="w-full h-0 flex-grow flex flex-row">
          <Editor editorRef={editorRef} />
          <Evaluator editorState={state} />
        </div>
      </div>
    </>
  );
}
