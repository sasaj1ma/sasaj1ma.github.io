import Typesetter from "palt-typesetting"

// 組版を適用する範囲。code/pre/script などはライブラリ側で保護される。
const SELECTORS = [".article-title", "article", ".recent-notes", ".backlinks", "footer"]

const typesetter = new Typesetter({
  useWordBreak: true,
  wrapLatin: true,
  noSpaceBetweenNoBreaks: true,
  insertThinSpaces: true,
  thinSpaceWidth: "0.2em",
})

// renderToElements は innerHTML を書き換えるため、
// SPA 遷移で残る要素を二重に処理しないよう印をつける。
const PROCESSED = "data-typeset"

function typeset() {
  const targets: Element[] = []
  for (const selector of SELECTORS) {
    for (const el of document.querySelectorAll(selector)) {
      if (el.hasAttribute(PROCESSED)) continue
      el.setAttribute(PROCESSED, "")
      targets.push(el)
    }
  }
  typesetter.renderToElements(targets)
}

document.addEventListener("nav", typeset)

// 下の 1 行は型のためだけに置いている。
// Quartz の inline-script-loader は読み込み時にこの宣言を文字列リテラルへ落とす。
// 注意: ローダーは最初に現れた該当キーワードを機械的に削るので、
// このファイルの他の場所に同じ綴りを書かないこと。
export default ""
