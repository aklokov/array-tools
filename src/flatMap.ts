export function flatMap<TIn>(input: TIn[][]): TIn[];
export function flatMap<TIn, TOut>(input: TIn[], selector: (item: TIn) => TOut[]): TOut[];
export function flatMap<TIn, TOut>(input: TIn[], selector?: (item: TIn) => TOut[]): TOut[] {
  let result: TOut[] = [];
  if (selector) {
    input.forEach(item => {
      const selected = selector(item);
      if (Array.isArray(selected) && selected.length) {
        result = result.concat(selected);
      }
    });
  } else {
    input.forEach(item => {
      if (Array.isArray(item) && item.length) {
        result = result.concat(item);
      }
    });
  }
  return result;
}
