import * as _ from "lodash"
import { CollectionChain } from "lodash"

Array.prototype.count = function (): number {
  return this.length
}

Array.prototype.isEmpty = function (): boolean {
  return this.length === 0
}

Array.prototype.isNotEmpty = function (): boolean {
  return this.length !== 0
}

Array.prototype.toCollect = function <T>(): CollectionChain<T> {
  const array = this as T[]
  return _.chain(array)
}
