import React from "react";
import "../css/buttonGroup.css";

const ButtonGroup = props => {
  const { books, onOpen, selectedVerseId, visible } = props;
  let c = 0;
  let flag1 = false,
    flag2 = false;
  let result = [];

  if (visible === 1) {
    for (let i = 0; i < selectedVerseId.length; i++) {
      result.push(selectedVerseId[i].split("."));
    }
    for (let t = 0; t < books.length; t++) {
      for (let i = 0; i < selectedVerseId.length; i++) {
        for (let j = 0; j < selectedVerseId[0].length; j++) {
          if (books[t].id.split(".")[0] === result[i][0]) {
            flag1 = true;
          }
        }
      }
      if (flag1) {
        books[t].class = "btn-marked";
      } else {
        books[t].class = "btn-original";
      }
      flag1 = false;
    }
  }

  if (visible === 2) {
    for (let i = 0; i < selectedVerseId.length; i++) {
      result.push(selectedVerseId[i].split("."));
    }
    for (let t = 0; t < books.length; t++) {
      for (let i = 0; i < selectedVerseId.length; i++) {
        for (let j = 0; j < selectedVerseId[0].length; j++) {
          if (books[t].id.split(".")[0] === result[i][0]) {
            flag1 = true;
          }
          if (
            books[t].id.split(".")[0] === result[i][0] &&
            books[t].id.split(".")[1] === result[i][1]
          ) {
            flag2 = true;
          }
        }
      }
      if (flag2) {
        books[t].class = "btn-marked";
      } else {
        books[t].class = "btn-original";
      }
      flag2 = false;
    }
  }

  return (
    <React.Fragment>
      {books.map(book => (
        <button
          className={
            visible < 3
              ? visible === 1
                ? book.class
                : visible === 2
                ? book.class
                : selectedVerseId.length > 0
                ? selectedVerseId.map(id =>
                    id.includes(book.id) ? "btn-marked" : "btn-original"
                  )
                : "btn-original"
              : selectedVerseId.length > 0
              ? selectedVerseId.includes(book.id)
                ? "btn-marked"
                : "btn-original"
              : "btn-original"
          }
          id="book-button"
          onClick={() => onOpen(book.id)}
        >
          {book.id}
        </button>
      ))}
    </React.Fragment>
  );
};

export default ButtonGroup;
