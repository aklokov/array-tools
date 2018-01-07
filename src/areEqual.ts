import { areEqualInternal } from "./areEqualInternal";
export function areEqual<T>(arr1: T[], arr2: T[]): boolean;
export function areEqual<TItem, TVal>(arr1: TItem[], arr2: TItem[], selector: (item: TItem) => TVal): boolean;
export function areEqual<TItem, TVal>(arr1: TItem[], arr2: TItem[], selector?: (item: TItem) => TVal): boolean {
  if (arr1 === arr2) {
    return true;
  }

  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  return areEqualInternal(arr1, arr2, selector);
}
