import React, { Component } from "react";
import { getChapterText } from "./server/getBible";
import "./css/text.css";
import Key from "./key.json";

class GetChapterText extends Component {
  state = { chapterId: "", chapterText: [] };
  async componentDidMount() {
    const chapterId = this.props.match.params.id;
    this.setState({ chapterId });
    const chapterText = await getChapterText(Key["ESV"], chapterId);
    this.setState({ chapterText });
  }
  render() {
    const chapterId = this.state.chapterId;
    const chapterText = this.state.chapterText;
    console.log(chapterId, chapterText)
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title">{chapterId}</h1>
          <div className="body">
            <div dangerouslySetInnerHTML={{ __html: chapterText }}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GetChapterText;
