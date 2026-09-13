import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"

// 一覧ページの見出し。
// タグページは「Tag:」を小さく載せ、タグ名そのものを見出し1にする。
// フォルダページなど他の一覧ページは従来どおりタイトルだけを出す。
const ListTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (!title) {
    return null
  }

  const slug = fileData.slug ?? ""
  // TagContent と同じ導出。frontmatter の "Tag: xxx" は locale に依存するので使わない。
  // tags/index は simplifySlug が "/" を返す（タグ一覧ページ）。これは個別タグではない。
  const tag = slug.startsWith("tags/") ? simplifySlug(slug.slice("tags/".length) as FullSlug) : null
  const isTagPage = tag !== null && tag !== "/"
  const heading = isTagPage ? tag : (title as string)

  return (
    <div class={classNames(displayClass, "list-title")}>
      {isTagPage && <p class="list-title-eyebrow">Tag:</p>}
      <h1 class="article-title">{heading}</h1>
    </div>
  )
}

export default (() => ListTitle) satisfies QuartzComponentConstructor
