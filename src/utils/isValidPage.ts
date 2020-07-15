export const isPRPage = () => {
  const loc = window.location.href
  return /\/pull\/[0-9]+$/.test(loc)
}
