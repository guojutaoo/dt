import React, { Component } from "react";
import Cards from "./common/cards";
import { getBooks } from "./server/getBible";
import key from "./key.json";
import "./css/bibleCards.css";

// import "react-datepicker/dist/react-datepicker-cssmodules.css";

class Test extends Component {
  state = { books: [], rowNum: [0] };
  async componentDidMount() {
    const books = await getBooks(key["ESV"]);
    this.setState({ books });
    const rowNum = Array.apply(null, Array(Math.ceil(books.length/3))).map(function () {})
    this.setState({rowNum})
  }

  render() {
    const books = this.state.books;
    const rowNum = this.state.rowNum;
    return null;
  }
}

export default Test;
