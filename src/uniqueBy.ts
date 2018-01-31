import * as objectHash from "object-hash";

export interface BySelector<T> { (t: T): any; }

export function uniqueBy<T>(arr: T[], ...by: BySelector<T>[]): T[] {
  switch (by.length) {
    case 0: return arr;
    case 1: return uniqueByOne(arr, by[0]);
    default: return uniqueBySeveral(arr, by);
  }
}

function uniqueByOne<T>(arr: T[], by: BySelector<T>): T[] {
  const set = new Set();
  return arr.filter(item => {
    const key = by(item);
    if (set.has(key)) {
      return false;
    }
    set.add(key);
    return true;
  });
}

function uniqueBySeveral<T>(arr: T[], by: BySelector<T>[]): T[] {
  const map = new Map<string, T[]>();
  return arr.filter(item => {
    const obj = createObj(item, by);
    const hash = objectHash(obj);
    const mappedItems = map.get(hash);
    if (!mappedItems) {
      map.set(hash, [obj]);
      return true;
    }

    if (mappedItems.some(item => compareObj(item, obj, by.length))) {
      return false;
    }

    mappedItems.push(obj);
    return true;
  });
}

function createObj<T>(item: T, by: BySelector<T>[]): any {
  const obj = {};
  let i = by.length;
  while (i--) {
    obj[i] = by[i](item);
  }
  return obj;
}

function compareObj(obj1: any, obj2: any, length: number): boolean {
  let i = length;
  while (i--) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }

  return true;
}
