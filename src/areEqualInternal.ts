export function areEqualInternal<TItem, TVal>(arr1: TItem[], arr2: TItem[], selector: (item: TItem) => TVal): boolean {
  let i = arr1.length;
  if (selector) {
    while (i--) {
      if (selector(arr1[i]) !== selector(arr2[i])) {
        return false;
      }
    }
  } else {
    while (i--) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}
