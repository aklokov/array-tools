export function except<T>(src: T[], exclusion: T[]): T[] {
  const set = new Set(exclusion);
  return src.filter(item => !set.has(item));
}

export function intersect<T>(src: T[], inter: T[]): T[] {
  const set = new Set(inter);
  return src.filter(item => set.has(item));
}
