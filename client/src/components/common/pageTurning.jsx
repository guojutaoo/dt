import React, { Component } from "react";
import "../css/pageTurning.css";

const PageTurning = props => {
  const prev = props.prev;
  const next = props.next;
  let prevNum = "";
  let nextNum = "";
  let prevId = "";
  let nextId = "";
  if (prev != null) {
    prevNum = prev.number;
    prevId = prev.id;
  }
  if (next != null) {
    nextNum = next.number;
    nextId = next.id;
  }
  console.log(prevNum);
  console.log(nextNum);
  return (
    <React.Fragment>
      <div className="btn-turn">
        <button
          className="btn btn-primary"
          id="btn-previous"
          onClick={() =>
            (window.location.href =
              "http://localhost:3000/read-bible/text/" + prevId)
          }
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          id="btn-next"
          onClick={() =>
            (window.location.href =
              "http://localhost:3000/read-bible/text/" + nextId)
          }
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default PageTurning;
