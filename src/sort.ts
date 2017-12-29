export function sort<T>(array: T[]): T[];
export function sort<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem[];
export function sort<TItem, TVal>(array: TItem[], func?: (item: TItem) => TVal): TItem[] {
  if (!func) {
    return [...array].sort();
  }

  return [...array].sort((item1, item2) => {
    const val1 = func(item1);
    const val2 = func(item2);
    if (val1 < val2) {
      return - 1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  });
}
