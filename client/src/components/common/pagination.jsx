import React from "react";
import propTypes from "prop-types";

const Pagination = props => {
  const { currentPage, maxPage, onPageChange } = props;
  console.log(currentPage); //check if meet the maximum page
  let previousClass = "page-item";
  let nextClass = "page-item";
  let startPageState = currentPage < 3 ? true : false;
  let stopPageState = currentPage > maxPage - 3 ? true : false;
  if (currentPage === 1) previousClass += " disabled";
  if (currentPage === maxPage) nextClass += " disabled";
  return (
    <nav aria-label="Page navigation example">
      {maxPage !== 1 && maxPage !==0 && (
        <ul className="pagination justify-content-center">
          <li className={previousClass}>
            {" "}
            {/* next */}
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>{" "}
          {/* 1 */}
          <li
            className={
              startPageState && currentPage === 1
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={() =>
                onPageChange(
                  !stopPageState ? (startPageState ? 1 : currentPage - 2) : 1
                )
              }
            >
              {!stopPageState ? (startPageState ? 1 : currentPage - 2) : 1}
            </a>
          </li>{" "}
          {/* 2 */}
          <li
            className={
              startPageState && currentPage === 2
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={() =>
                onPageChange(
                  !stopPageState ? (startPageState ? 2 : currentPage - 1) : 2
                )
              }
            >
              {!stopPageState ? (startPageState ? 2 : currentPage - 1) : 2}
            </a>
          </li>{" "}
          {/* 1... */}
          {stopPageState && maxPage > 5 && (
                        <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => onPageChange(currentPage - 1)}
                      >
                        ...
                      </button>
          )}{" "}
          {/* 3 */}
          {maxPage > 4 && (
            <li
              className={
                !startPageState && currentPage <= maxPage - 2
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() =>
                  onPageChange(
                    !stopPageState
                      ? startPageState
                        ? 3
                        : currentPage
                      : maxPage - 2
                  )
                }
              >
                {!stopPageState
                  ? startPageState
                    ? 3
                    : currentPage
                  : maxPage - 2}
              </a>
            </li>
          )}{" "}
          {/* 2... */}
          {!stopPageState && maxPage > 5 && (
            <button
              type="button"
              className="btn btn-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              ...
            </button>
          )}{" "}
          {/* 4 */}
          {maxPage > 3 && (
            <li
              className={
                currentPage === maxPage - 1 ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(maxPage - 1)}
              >
                {maxPage - 1}
              </a>
            </li>
          )}{" "}
          {/* 5 */}
          {maxPage > 2 && (
            <li
              className={
                currentPage === maxPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(maxPage)}
              >
                {maxPage}
              </a>
            </li>
          )}
          <li className={nextClass}>
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  maxPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
};

export default Pagination;
