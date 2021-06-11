import { setup, EditorState, EditorView } from "./codeMirrorSetup";
import { Transaction, Text } from "@codemirror/state";
import { MutableRefObject, useEffect, useReducer, useRef } from "react";

export default function useCodeMirror(options) {
  const element = useRef(null);
  const view = useRef(null);

  const [state, dispatch] = useReducer(
    (state, transaction) => state.update(transaction).state,
    undefined,
    () =>
      EditorState.create({
        doc: options.doc,
        extensions: setup,
      })
  );

  useEffect(() => {
    if (!element.current) return;

    if (!view.current) {
      view.current = new EditorView({
        state,
        dispatch,
        parent: element.current,
      });
    } else if (view.current.state !== state) {
      // TODO: We probably want to dispatch transactions for perf,
      // rather than completely resetting state, but the main idea
      // is that we need to update the view to the latest state here
      view.current.setState(state);
    }

    return () => {
      if (!element.current) {
        view.current?.destroy();
        view.current = null;
      }
    };
  }, [state]);

  return [element, state];
}
