import React, { Component } from "react";
import Cards from "./common/cards";
import { getChapters } from "./server/getBible";
import axios from "axios"
import Key from "./key.json";


class ReadChapter extends Component {
  state = { chapterId: "", chapters: [], rowNum: [0] };
  async componentDidMount() {
    window.scrollTo(0, 0);
    const chapterId = this.props.match.params.id;
    this.setState({ chapterId });
    axios
    .post("http://localhost:8080/chapters", {url: chapterId})
    .then(res=> {
      this.setState({chapters: res.data.data}), console.log(res.data.data);
    });
  }
  render() {
    console.log(this.state.chapters)
    const link = "/read-bible/text/";
    const chapters = [...this.state.chapters];
    const rowNum = this.state.rowNum;
    return (
      <React.Fragment>
        <Cards books={chapters} rowNum={rowNum} link={link} />
      </React.Fragment>
    );
  }
}

export default ReadChapter;
