import React, { Component } from "react";
import Cards from "./common/cards";
import { getBooks } from "./server/getBible";
import Key from "./key.json";
import "./css/bibleCards.css";

class ReadBible extends Component {
  state = { books: [], rowNum: [0] };
  async componentDidMount() {
    const books = await getBooks(Key["ESV"]);
    this.setState({ books });
    const rowNum = Array.apply(null, {
      length: Math.ceil(books.length / 4)
    }).map(Number.call, Number);
    this.setState({ rowNum });
    // console.log(this.state.books)
  }

  render() {
    const books = this.state.books;
    const rowNum = this.state.rowNum;
    const link = "/read-bible/";
    return (
      <React.Fragment>
        <Cards books={books} rowNum={rowNum} link={link} />
      </React.Fragment>
    );
  }
}

export default ReadBible;
