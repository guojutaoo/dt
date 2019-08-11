import React, { Component } from "react";
import Cards from "./common/cards";
import { getChapters } from "./server/getBible";
import Key from "./key.json";

class ReadChapter extends Component {
  state = { chapterId: "", chapters: [], rowNum: [0] };
  async componentDidMount() {
    window.scrollTo(0, 0);
    const chapterId = this.props.match.params.id;
    this.setState({ chapterId });
    const chapters = await getChapters(Key["ESV"], chapterId);
    this.setState({ chapters });
    const rowNum = Array.apply(null, {
      length: Math.ceil(chapters.length / 4)
    }).map(Number.call, Number);
    this.setState({ rowNum });
  }
  render() {
    // console.log(this.state.chapters)
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
