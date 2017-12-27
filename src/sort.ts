export function sort<T>(array: T[]): T[];
export function sort<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem[];
export function sort<TItem, TVal>(array: TItem[], func?: (item: TItem) => TVal): TItem[] {
  if (!func) {
    return [...array].sort();
  }

  return [...array].sort((item1, item2) => <any>func(item1) - <any>func(item2));
}
