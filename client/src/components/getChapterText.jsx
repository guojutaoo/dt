import React, { Component } from "react";
import { getChapterText } from "./server/getBible";
import PageTurning from './common/pageTurning';
import axios from "axios";
import "./css/text.css";
import Key from "./key.json";

class GetChapterText extends Component {
  state = { chapterId: "", text:[] };
  async componentDidMount() {
    const chapterId = this.props.match.params.id;
    axios
    .post("http://localhost:8080/chapter-text", {url: chapterId})
    .then(res=> {
      this.setState({text: res.data.data})
    });
  }
  render() {
    const chapterId = this.state.chapterId;
    const text = this.state.text;
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title">{chapterId}</h1>
          <div className="body">
            <div dangerouslySetInnerHTML={{ __html: text.content }}/>
          </div>
          
        </div>
        <PageTurning prev={text.previous} next={text.next}/>
      </React.Fragment>
    );
  }
}

export default GetChapterText;
