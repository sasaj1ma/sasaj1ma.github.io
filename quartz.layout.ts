import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    // 何も描画しない。全ページに palt 組版を適用するために先頭に置く。
    Component.Typesetting(),
    Component.PageTitle(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta({ showReadingTime: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [],
  right: [],
  afterBody: [
    // タグがある記事だけ出る（TagList は tags が空なら null を返す）
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Writing",
        limit: Infinity,
        linkToMore: false,
        showTags: false,
        filter: (f) => f.slug?.startsWith("writing/") && f.slug !== "writing/index",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  // タグページは「Tag:」＋タグ名の2段見出しにする
  beforeBody: [Component.ListTitle()],
  left: [],
  right: [],
}
