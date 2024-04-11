export const slugKebab = (str) => {
  return str.toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[.,]/g, '')
}