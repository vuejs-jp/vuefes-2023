export function useArray() {
  function valueFilter(value: string) {
    if (!value) return ''

    return value.replace(/^"(.+)"$/, '$1').replace(/'/g, '')
  }

  function unique<T>(items: T[], key: keyof T) {
    return Array.from(new Map(items.map((item) => [item[key], item])).values())
  }

  return { valueFilter, unique }
}
