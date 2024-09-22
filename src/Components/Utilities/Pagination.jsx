import React from 'react'

const Pagination = ({ page, totalPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handlePageNext = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePagePrev = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  return (
    <div className='flex justify-center items-center py-4 px-2 text-primary gap-4 text-2xl'>
      {page <= 1 ? null
        : <button onClick={handlePagePrev}>Prev</button>
      }
      <p>{page} of {totalPage}</p>
      {page >= totalPage ? null
        : <button onClick={handlePageNext}>Next</button>
      }
    </div>
  )
}

export default Pagination
