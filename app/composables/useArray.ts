export function useArray() {
  function valueFilter(value: string) {
    if (!value) return ''

    return value.replace(/^"(.+)"$/, '$1').replace(/'/g, '')
  }

  return { valueFilter }
}
