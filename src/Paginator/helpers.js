export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

export const range = (pages, principalIndex, adjacents, pagesArray) => {
  const blocks = (principalIndex, depth) => {
    const range = []
    for (let i = principalIndex; i < principalIndex + depth; i++) {
      range.push(i + 1)
    }
    return range
  }
  if (pages <= 5) {
    return pagesArray
  }
  if (pages >= 6) {
    return pagesArray.slice(1, pages - 1).reduce((results, page, i) => {
      switch (true) {
        case adjacents === 2: {
          if (page === principalIndex) {
            results.push(...blocks(principalIndex, 7))
          }
          break
        }
        case adjacents === 1: {
          if (page === principalIndex) {
            results.push(...blocks(principalIndex, 5))
          }
          break
        }
        default: {
          if (page === principalIndex) {
            results.push(...blocks(principalIndex, 3))
          }
          break
        }
      }
      return results
    }, [])
  }
}
