import Head from "next/head";
import Editor from "../components/Editor";
import useCodeMirror from "../lib/hooks";
import dynamic from "next/dynamic";

const Evaluator = dynamic(() => import("../components/Evaluator"), {
  ssr: false,
});

export default function Home() {
  const [editorRef, state] = useCodeMirror({ doc: exampleProgram });

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
        <div className="w-full h-0 flex-grow flex flex-row">
          <Editor editorRef={editorRef} />
          <Evaluator editorState={state} />
        </div>
      </div>
    </>
  );
}

const exampleProgram = `data Option:
    | some(v)
    | none()
end

data List:
    | link(f,r)
    | empty()
end

data Tree:
    | node(v,l,r)
    | leaf()
end

def map(func, l):
    match l:
        | link(f,r) => link(func(f), map(func, r))
        | empty() => empty()
    end
end

def filter(func, l):
    match l:
        | link(f,r) => if func(f):
                link(f, filter(func, r))
            else:
                filter(func, r)
            end
        | empty() => empty()
    end
end

def fold(func, l, default):
    match l:
        | link(f,r) => func(f, fold(func, r, default))
        | empty() => default
    end
end

let list = link(1, link(2, link(3, link(4, empty()))))

map(lambda(x): x + 1 end, list)

filter(lambda(x): x == 2 end, list)

fold(lambda(n,a): n + a end, list, 0)
`;
