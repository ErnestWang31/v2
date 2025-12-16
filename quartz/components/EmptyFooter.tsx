import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const EmptyFooter: QuartzComponent = () => {
  return <></>
}

export default (() => EmptyFooter) satisfies QuartzComponentConstructor

