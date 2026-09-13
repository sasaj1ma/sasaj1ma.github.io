import { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/typesetting.inline"
// palt-typesetting が生成する span 群のスタイル（ling-one フォント、thin space など）
import style from "./styles/typesetting.scss"

// 何も描画しない。組版スクリプトとスタイルを全ページに載せるためだけのコンポーネント。
const Typesetting: QuartzComponent = () => null

Typesetting.css = style
Typesetting.afterDOMLoaded = script

export default (() => Typesetting) satisfies QuartzComponentConstructor
