import { parser } from "../grammar/parser";
import {
  foldNodeProp,
  foldInside,
  indentNodeProp,
  delimitedIndent,
} from "@codemirror/language";
import { styleTags, tags as t } from "@codemirror/highlight";
import { LezerLanguage } from "@codemirror/language";
import { completeFromList } from "@codemirror/autocomplete";
import { LanguageSupport, continuedIndent } from "@codemirror/language";
import {
  Completion,
  snippetCompletion as snip,
} from "@codemirror/autocomplete";

export const skiffLanguage = LezerLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "if elif else match": t.controlKeyword,
        "import def lambda data": t.definitionKeyword,
        "end with as print": t.keyword,

        VariableName: t.variableName,
        "FunCallExpr/VariableName": t.function(t.variableName),
        "FunctionExpr/FunctionName": t.definition(t.function(t.variableName)),
        Type: t.typeName,
        Pattern: t.special(t.variableName),

        Number: t.number,
        String: t.string,
        Boolean: t.bool,
        none: t.null,

        Comment: t.comment,

        "+ - % **": t.arithmeticOperator,
        "not and or": t.operatorKeyword,
        "== > < >= <=": t.compareOperator,
        "& ^": t.bitwiseOperator,
        "=": t.definitionOperator,
        "( )": t.paren,
        ".": t.derefOperator,
        ",": t.separator,
      }),
      indentNodeProp.add({
        "Body MatchExpr DataDeclarationExpr IfExpr": delimitedIndent({
          closing: "end",
        }),
      }),
      foldNodeProp.add({
        "Body MatchExpr IfExpr FunctionExpr DataDeclarationExpr": foldInside,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "#" },
    closeBrackets: { brackets: ["("] },
    indentOnInput: /^\s*(end|elif|else)$/,
  },
});

// export const skiffCompletion = skiffLanguage.data.of({
//   autocomplete: completeFromList([
//     { label: "def", type: "keyword" },
//     { label: "let", type: "keyword" },
//     { label: "match", type: "keyword" },
//     { label: "if", type: "function" },
//     { label: "elif", type: "function" },
//     { label: "else", type: "function" },
//     { label: "data", type: "function" },
//   ]),
// });

export const snippets = [
  snip("def ${name}(${params}):\n\t${}\nend", {
    label: "function",
    detail: "definition",
    type: "keyword",
  }),
  snip(
    "if ${condition1}:\n\t${body1}\nelif #{condition2}:\n\t${body2}\nelse:\n\t${body3}\nend",
    {
      label: "if",
      detail: "conditional",
      type: "keyword",
    }
  ),
  snip(
    "match ${target}:\n\t| ${pattern1} => ${body1}\n\t| ${pattern2} => ${body2}\nend",
    {
      label: "match",
      detail: "pattern match",
      type: "keyword",
    }
  ),
];

export function skiff() {
  return new LanguageSupport(
    skiffLanguage,
    skiffLanguage.data.of({
      autocomplete: completeFromList(snippets),
    })
  );
}
