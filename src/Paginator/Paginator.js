import React, { Fragment, useReducer } from 'react'
import PropTypes from 'prop-types'
import { ArrowBlock, LimitBlock, Block, Card, chunk, range } from './'
import './_paginator.scss'

function Paginator({ records, rows, adjacents }) {
  const pages = Math.ceil(records.length / rows)
  const initialState = {
    chunkedPages: chunk(records, rows),
    pagesArray: [...Array(pages).keys()],
    adjacentPages: adjacents ? adjacents : 0,
    rangeLength: 2 + adjacents * 2,
    indexValues: {
      currentPage: 0,
      principalIndex: 1,
    },
  }

  // TODO
  // if pages < 6 return only range plus left and right arrows
  // handle range === 7 && adjacents === 1 - this causes a skip on right arrow
  // handle range === 9 && adjacents === 2 - this causes a skip on right arrow
  // accessibility
  // core styling
  // handle chunked array to be passed as data over chunk(records/rows)

  function reducer(state, { type, payload }) {
    switch (type) {
      case 'SET_INDEX_VALUES':
        const { currentPage, principalIndex } = payload
        return {
          ...state,
          indexValues: {
            currentPage,
            principalIndex,
          },
        }
      case 'SET_ADJACENT_PAGES':
        const { adjacentPages } = payload
        return { ...state, adjacentPages }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    chunkedPages,
    pagesArray,
    adjacentPages,
    rangeLength,
    indexValues: { currentPage, principalIndex },
  } = state

  console.log(`currentPage ${currentPage}`)

  return (
    <Fragment>
      {chunkedPages[currentPage].map(({ title, value }) => {
        return <Card key={title} title={title} value={value} />
      })}
      <nav>
        <ul className='o-row'>
          <ArrowBlock
            dispatch={dispatch}
            content='<'
            pages={pages}
            currentPage={currentPage}
            blockType='leftArrow'
            adjacentPages={adjacentPages}
          />
          <LimitBlock
            dispatch={dispatch}
            content='1'
            currentPage={currentPage}
            blockType='first'
            adjacentPages={adjacentPages}
          />
          {range(
            pages,
            principalIndex,
            adjacentPages,
            pagesArray,
            dispatch
          ).map((page, blockIndex) => {
            return (
              <Block
                key={`${page.title}${blockIndex}`}
                dispatch={dispatch}
                content={page + 1}
                currentPage={currentPage}
                page={page}
                pages={pages}
                principalIndex={principalIndex}
                blockIndex={blockIndex}
                adjacentPages={adjacentPages}
                rangeLength={rangeLength}
              />
            )
          })}
          <LimitBlock
            dispatch={dispatch}
            content={pages}
            currentPage={currentPage}
            blockType='last'
            pages={pages}
            adjacentPages={adjacentPages}
          />
          <ArrowBlock
            dispatch={dispatch}
            content='>'
            pages={pages}
            blockType='rightArrow'
            currentPage={currentPage}
            adjacentPages={adjacentPages}
          />
        </ul>
      </nav>
    </Fragment>
  )
}

export default Paginator

Paginator.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rows: PropTypes.number.isRequired,
  Pages: PropTypes.number,
}

Paginator.defaultProps = {
  adjacents: 0,
}
