import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Block = ({
  dispatch,
  content,
  currentPage,
  page,
  pages,
  principalIndex,
  blockIndex,
  adjacentPages,
  rangeLength,
}) => {
  const handlePageChange = () => {
    const adjacents = adjacentPages * 2
    if (blockIndex === 0) {
      const minPage = page <= 1 ? principalIndex : page - 1
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: minPage },
      })
    } else if (blockIndex === rangeLength) {
      const maxPage =
        page >= pages - 2 ? principalIndex : page - (1 + adjacents)
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: maxPage },
      })
    } else {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex },
      })
    }
  }

  return (
    <li>
      <button
        className={cn({
          'c-paginator__block--active': content - 1 === currentPage,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </button>
    </li>
  )
}

Block.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  principalIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
  adjacentPages: PropTypes.number.isRequired,
  rangeLength: PropTypes.number.isRequired,
}

export default Block
