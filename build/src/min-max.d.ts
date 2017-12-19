export declare function max<T>(array: T[]): T;
export declare function max<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TVal;
export declare function min<T>(array: T[]): T;
export declare function min<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TVal;
export declare function maxBy<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem;
export declare function minBy<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem;
