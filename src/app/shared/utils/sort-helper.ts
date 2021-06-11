export function compare<T, K extends keyof T>(a: T, b: T, isAsc: boolean, property: K): number {
  return (a[property] < b[property] ? -1 : 1) * (isAsc ? 1 : -1);
}