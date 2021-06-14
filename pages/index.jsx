import Head from "next/head";
import Editor from "../components/Editor";
import useCodeMirror from "../lib/hooks";
import dynamic from "next/dynamic";

const Evaluator = dynamic(() => import("../components/Evaluator"), {
  ssr: false,
});

export default function Home() {
  const [editorRef, state] = useCodeMirror({});

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
        <div className="w-full h-10 bg-gray-800 text-white flex flex-row items-center">
          <div className="p-2">Skiff</div>
        </div>
        <div className="w-full h-full flex flex-row">
          <Editor editorRef={editorRef} />
          <Evaluator editorState={state} />
        </div>
      </div>
    </>
  );
}
