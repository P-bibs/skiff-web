// This file was generated by lezer-generator. You probably shouldn't edit it.
import {Parser} from "lezer"
const spec_identifier = {__proto__:null,false:8, true:10, if:18, lambda:28, end:34, def:38, data:44, match:52, let:58, elif:60, else:62}
export const parser = Parser.deserialize({
  version: 13,
  states: "1|QVQPOOOwQPO'#CcOOQO'#Cb'#CbOOQO'#DX'#DXOOQO'#C}'#C}QVQPOOOOQO'#C_'#C_O#RQPO'#CiO#WQPO'#CnO#]QPO'#CqO#bQPO'#CuO#bQPO'#CdO$VQPO'#C|O$[QPO,59QOOQO-E6{-E6{O$[QPO,59TOOQO'#Cp'#CpO$dQPO,59YOOQO'#Cs'#CsO$iQPO,59]OOQO'#DZ'#DZO#bQPO'#DZO$nQPO,59aO$VQPO'#CxO$sQPO,59OO$xQPO'#CgO%WQPO,59hO%]QPO'#D]O%eQPO1G.lO%jQPO1G.oO$[QPO1G.tO%oQPO1G.wO%wQPO,59uO%|QPO1G.{O&UQPO,59dO#bQPO'#CkO&ZQPO1G.jO&cQPO,59RO#bQPO1G/SO$VQPO'#DPO&kQPO,59wOOQO7+$W7+$WO$sQPO7+$ZO&sQPO7+$`OOQO'#Ct'#CtO&xQPO7+$cO&}QPO7+$cOOQO1G/a1G/aO'SQPO'#DRO%|QPO7+$gOOQO'#Cl'#ClOOQO7+$g7+$gO#bQPO1G/OOOQO,59V,59VO'bQPO7+$UO#bQPO'#DTO$sQPO7+$UO'jQPO1G.mO'xQPO'#ChO(TQPO'#ChOOQO7+$n7+$nOOQO,59k,59kOOQO-E6}-E6}O(lQPO<<GuO(qQPO<<GzO$[QPO<<G}O(yQPO<<G}OOQO'#Cw'#CwO)OQQO'#CwO)WQQO,59mOOQO-E7P-E7POOQO<<HR<<HRO#bQPO7+$jOOQO-E7R-E7RO$sQPO<<GpO$sQPO,59oO(lQPO<<GpO&cQPO,59SO)]QPO'#D`O)kQPO,59SO)pQPO,59SOOQOAN=aAN=aO(lQPOAN=fO&cQPOAN=fO){QPOAN=iO$[QPOAN=iO*QQPO,59cO#bQPO1G/XOOQO<<HU<<HUO(lQPOAN=[OOQO1G/Z1G/ZOOQOAN=[AN=[OOQO1G.n1G.nO&cQPO'#DOO*cQPO,59zO*nQPO1G.nO*sQPO1G.nOOQOG23QG23QO*xQPOG23QO+QQPOG23TO+YQPOG23TO+_QPO'#DfO+gQPO'#CwO+rQPO1G.}OOQO7+$s7+$sOOQOG22vG22vO+wQPO,59jOOQO-E6|-E6|O&cQPO7+$YOOQO7+$Y7+$YO(lQPOLD(lO&}QPO'#DQO+QQPOLD(oOOQOLD(oLD(oO+QQPOLD(oO,VQPO'#DSO,eQPO,5:QOOQO7+$i7+$iO,mQPO<<GtOOQO!$'LW!$'LWO-RQPO,59lOOQO-E7O-E7OOOQO!$'LZ!$'LZO+QQPO!$'LZOOQO,59n,59nOOQO-E7Q-E7QO$[QPO1G/WOOQO!)9Au!)9AuO-WQPO7+$rOOQO<<H^<<H^",
  stateData: "-]~OzOS~OQROSUOTUOXZO^VOcWOfXOjYOm[O|PO~O!O]OQVXSVXTVXXVX^VXcVXfVXjVXmVXxVX|VX!QVX!UVXnVXoVXaVX!XVX~O!O_O~O|`O~O|bO~OQdOSUOTUOXZO^VOcWOfXOjYOmgO|PO!OeO~O|iO~O|iO!U!PP~O!OnO~O!QoO~O!QqO~O!QsO~O!QuO![ZX!TZX!UZX~O![vO~O!TwO!U!PX~O!UyO~O!UzO~O||O!X!OO~O!U!PO~Oa!SO!X!QO~O![!UO~On!XOo!YO~O|!]O!O![O~O!TwO!U!Pa~O!U!bO~O!O!cO~O||O~OQ!eOSUOTUO|!fO~On!XOo!lO~O!R!oO![Zi!TZi!UZi~O|!]O!O![O!U!SP~O!V!rO!R[X![[X!T[X!U[X!W[X!Q[X~Oa!SO~O!QsO!R!uO~O!O!wO~O!O!xO!ZkX~O!Z!yO~O!R!oO!T#PO!U!SX!W!SX~O!U#RO~O|!]O!O![O!W!SP~O!U#VO~OQ!eOSUOTUO|#YO!U!YP~O!T#PO!U!Sa!W!Sa~O!R#`O~O!W#aO~O!QsO!R!oO~Oa!SO!X#cO~O!U#fO~O!T#gO!U!YX~O!O!xO!TkX!UkX~O!U#iO~O!R!oO!Tra!Ura!Wra~OQ!eOSUOTUO|#YO~O!T#gO!U!Ya~O!R!oO![[y!T[y!U[y!W[y!Q[y~O!O#rO~O!U#uO~O",
  goto: "(S!ZPPP![PP!p#P!pP!p#^#o!pP$S$iP!pP%Y!pP%]%`!pP%i!tPPP%r%v%|&S&Y&d&j&pPPP&vP&zP'gPP'yPPPPP(PSROTbdYZesv!U!X!j!yV!e!Q!x#gSROTcdYZesv!U!X!j!ygQOTYZesv!U!X!j!yQj[[k]_n!c!w#rQrgR!_wQ!ZuS!p![!rQ#O!oQ#U!uQ#^#PR#j#`QthQ!azQ!n!YQ!t!bQ!{!lQ!|!mR#b#UQ!TqQ!i!RQ!s!aQ!}!nQ#T!tQ#]!{Q#e#VQ#k#bS#n#d#fR#s#oRaWRcXQ}oQ!d!OR#l#cQ!g!QQ#X!xR#p#gTROTQTOR^TQ#Q!pR#_#QQxkR!`xQ#d#VS#m#d#oR#o#fQ!RqR!h!RQ#h#XR#q#hQ!WtR!k!WTSOTQfYQhZQpeQ!VsQ!^vQ!j!UQ!m!XQ!z!jR#[!yQl]Qm_Q{nQ!v!cQ#W!wR#t#rQ!q![R#S!rR#Z!x",
  nodeNames: "⚠ Program Number Boolean false true VariableExpr VariableName IfExpr if FunCallExpr IdentifierDecl Type LambdaExpr lambda Body End end FunctionExpr def FunctionName DataDeclarationExpr data DataName DataVariantName MatchExpr match Pattern LetExpr let elif else LetExprTopLevel",
  maxTerm: 58,
  skippedNodes: [0],
  repeatNodeCount: 7,
  tokenData: "%S~RfX^!gpq!gxy#[yz#a|}#f}!O#k!Q![#v![!]$O!^!_$T!_!`$Y!`!a$g!c!}$l#T#o$l#p#q$}#y#z!g$f$g!g#BY#BZ!g$IS$I_!g$I|$JO!g$JT$JU!g$KV$KW!g&FU&FV!g~!lYz~X^!gpq!g#y#z!g$f$g!g#BY#BZ!g$IS$I_!g$I|$JO!g$JT$JU!g$KV$KW!g&FU&FV!g~#aO!O~~#fO!U~~#kO!T~~#nP!`!a#q~#vO!R~~#{PQ~!Q![#v~$TO!Q~~$YO!V~R$_P![P!`!a$bQ$gO!ZQ~$lO!W~~$qS|~!Q![$l!c!}$l#R#S$l#T#o$l~%SO!X~",
  tokenizers: [0, 1],
  topRules: {"Program":[0,1]},
  specialized: [{term: 44, get: value => spec_identifier[value] || -1}],
  tokenPrec: 0
})
