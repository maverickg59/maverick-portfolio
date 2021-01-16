const Block = ({ page, i, currentPage, onClick }) => {
  return (
    <li
      key={page}
      className={`page-item${currentPage === page ? ' active' : ''}`}>
      <button className='page-link' onClick={() => onClick(page, i)}>
        {page}
      </button>
    </li>
  )
}

export default Block
