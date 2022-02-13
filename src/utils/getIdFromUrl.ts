const idRegex = /\/(\d+)\/$/

export const getIdFromUrl = (url: string) => {
  return idRegex.exec(url)![1]
}
