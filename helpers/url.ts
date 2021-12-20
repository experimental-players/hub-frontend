export function isAbsoluteURL (url: string): boolean {
  return RegExp('^(?:[a-z]+:)?//', 'i').test(url);
}
