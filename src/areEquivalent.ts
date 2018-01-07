import { areEqualInternal } from "./areEqualInternal";
import { sort } from "./sort";

export function areEquivalent<T>(arr1: T[], arr2: T[]): boolean;
export function areEquivalent<TItem, TVal>(arr1: TItem[], arr2: TItem[], selector: (item: TItem) => TVal): boolean;
export function areEquivalent<TItem, TVal>(arr1: TItem[], arr2: TItem[], selector?: (item: TItem) => TVal): boolean {
  if (arr1 === arr2) {
    return true;
  }

  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  return areEqualInternal(sort(arr1, selector), sort(arr2, selector), selector);
}
