import React, { Component } from "react";
import Cards from "./common/cards";
import { getBooks } from "./server/getBible";
import axios from "axios";
import Key from "./key.json";

class ReadBible extends Component {
  state = { books: [], rowNum: [0] };
  async componentDidMount() {
    await axios
    .post("http://localhost:8080/books")
    .then(res=> {
      this.setState({books: res.data.data}), console.log(res.data);
    });
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
