import React, { useState } from 'react';

function Pagination({ totalEntries, entriesPerPage, currentPage, onPageChange, style }) {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  // Define how many page numbers to show in the pagination
  const maxPageLinks = 5; // You can adjust this number

  const handlePageChange = (page) => {
    if (page >= 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Calculate the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageLinks / 2));

  const endPage = Math.min(totalPages, startPage + maxPageLinks - 1);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage + 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i - 1)}>
            {i}
          </button>
        </li>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className="d-flex justify-content-between flex-wrap pt-3">
      <div className="dataTables_info" id="example_info" role="status" aria-live="polite">
        Showing {Math.min(currentPage * entriesPerPage + 1, totalEntries)} to{' '}
        {Math.min(currentPage * entriesPerPage + entriesPerPage, totalEntries)} of {totalEntries} entries
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage + 1 === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
              <span aria-hidden="true">
                <svg width="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.5 19L8.5 12L15.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </li>
          {renderPageNumbers()}
          <li className={`page-item ${currentPage + 1 === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
              <span aria-hidden="true">
                <svg width="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 5L15.5 12L8.5 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
