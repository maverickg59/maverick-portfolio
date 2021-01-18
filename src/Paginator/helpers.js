const handleInsufficientRange = (
  pages,
  minPages,
  defaultRange,
  range,
  adjacents,
  dispatch
) => {
  if (pages < minPages) {
    dispatch({
      type: 'SET_ADJACENT_PAGES',
      payload: { adjacentPages: adjacents },
    })
  }
  return pages < minPages ? defaultRange : range
}

export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

export const range = (
  pages,
  principalIndex,
  adjacentPages,
  pagesArray,
  dispatch
) => {
  const blockIndices = (principalIndex, depth) => {
    const range = []
    for (let i = principalIndex; i < principalIndex + depth; i++) {
      range.push(i)
    }
    return range
  }
  if (pages <= 5) {
    return pagesArray
  }
  if (pages >= 6) {
    return pagesArray.slice(1, pages - 1).reduce((results, page) => {
      switch (true) {
        case adjacentPages === 2: {
          if (page === principalIndex) {
            results.push(
              ...blockIndices(
                principalIndex,
                handleInsufficientRange(pages, 9, 5, 7, 1, dispatch)
              )
            )
          }
          break
        }
        case adjacentPages === 1: {
          if (page === principalIndex) {
            results.push(
              ...blockIndices(
                principalIndex,
                handleInsufficientRange(pages, 7, 3, 5, 0, dispatch)
              )
            )
          }
          break
        }
        default: {
          if (page === principalIndex) {
            results.push(...blockIndices(principalIndex, 3))
          }
          break
        }
      }
      return results
    }, [])
  }
}
