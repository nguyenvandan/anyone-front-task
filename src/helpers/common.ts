export const formatCurruncy = function (value: string) {
  return value
    .toString()
    .replace(/[\D]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
