export function flatMap<TIn, TOut>(input: TIn[], selector: (item: TIn) => TOut[]): TOut[] {
  let result: TOut[] = [];
  input.forEach(item => {
    const selected = selector(item);
    if (Array.isArray(selected) && selected.length) {
      result = result.concat(selector(item));
    }
  });
  return result;
}
