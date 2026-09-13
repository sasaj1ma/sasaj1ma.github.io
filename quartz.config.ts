import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "sasaj1ma",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "sasaj1ma.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "'NHaasGroteskTXPro-55Rg', 'TazuganeGothicStdN-Book', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        body: "'NHaasGroteskTXPro-55Rg', 'TazuganeGothicStdN-Book', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        code: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
      },
      colors: {
        lightMode: {
          light: "#FFFCF0",
          lightgray: "#E6E4D9",
          gray: "#B7B5AC",
          darkgray: "#6F6E69",
          dark: "#100F0F",
          secondary: "#205EA6",
          tertiary: "#3AA99F",
          highlight: "rgba(206, 205, 195, 0.15)",
          textHighlight: "#D0A21588",
        },
        darkMode: {
          light: "#100F0F",
          lightgray: "#282726",
          gray: "#6F6E69",
          darkgray: "#CECDC3",
          dark: "#FFFCF0",
          secondary: "#4385BE",
          tertiary: "#3AA99F",
          highlight: "rgba(87, 86, 83, 0.15)",
          textHighlight: "#AD830188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
