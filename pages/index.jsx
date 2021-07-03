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

const exampleProgram = `
data List:
	| link(first,rest)
	| empty()
end
let mt = empty()

data Option:
    | some(v)
    | none()
end

def singles(lst, to_replace):
    match to_replace:
        | some(v) => 
            match lst:
                | link(f,r) => 
                    if f == v:
                        singles(r, to_replace)
                    else:
                        link(f, singles(r, some(f)))
                    end
                | empty() => empty()
            end
        | none() =>
            match lst:
                | link(f,r) => link(f, singles(r, some(f)))
                | empty() => empty()
            end
    end
end

let one_through_four = link(1,link(2,link(3,link(4,mt))))
let with_dups1 = link(1,link(1,link(2,link(2,link(3,link(4,mt))))))
let with_dups2 = link(1,link(2,link(3,link(3,link(3,link(4,mt))))))

singles(mt, none()) == mt

singles(one_through_four, none()) == one_through_four

singles(with_dups1, none()) == one_through_four

singles(with_dups2, none()) == one_through_four
`;
