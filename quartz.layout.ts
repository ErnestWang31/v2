import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import EmptyFooter from "./quartz/components/EmptyFooter"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: EmptyFooter(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}


Component.Explorer({
  filterFn: (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["authoring content", "tags", "hosting", "hidden"])
    return !omit.has(node.name.toLowerCase())
  },
})
