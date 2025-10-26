import { CollectionChain } from "lodash"

import "@/lib/global-array"

declare global {


  interface Array<T> {
    count(): number

    isEmpty(): boolean

    isNotEmpty(): boolean

    toCollect(): CollectionChain<T>
  }

}
