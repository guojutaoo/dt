import React, { Component } from "react";
import { getSingleVerse } from "./fakeBackEndService/fakePastVersesService";
import "./css/renderPastVerses.css"

class RenderPastVerse extends Component {
  state = { date: "", verse: [], date1: "" };
  async componentDidMount() {
    const date = this.props.match.params.id;
    this.setState({ date });
    const verse = await getSingleVerse(date);
    this.setState({ verse });
  }
  async componentWillReceiveProps(newProps) {
    const date = newProps.match.params.id;
    this.setState({ date });
    const verse = await getSingleVerse(date);
    this.setState({ verse });
  }
  render() {
    const { date, verse } = this.state;
    return (
      <React.Fragment>
        <div className="daily-text">
          <h1>{date}</h1>
          <h2>{verse.date}</h2>
          <h3>{verse.verse}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderPastVerse;
