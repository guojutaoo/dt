import React, { Component } from "react";
import Pagination from "./common/pagination";
// import { getArticle } from "./fakeBackEndService/fakeArticle";
import { paginate, getMaxPageNum } from "./utils/paginate";

import {
  getBibleVersion,
  getBooks,
  getChapters,
  getSections,
  getVerses,
  getChapterText
} from "./server/getBible";

class Home extends Component {
  state = {
    currentPage: 1,
    itemPerPage: 10000,
    maxPage: 10,
    versions: "",
    books: "",
    verses: "",
    chapters: "",
    sections: "",
    chapterText: "",
    textShow: ""
  };

  async componentDidMount() {
    const versions = await getBibleVersion();
    const books = await getBooks("9879dbb7cfe39e4d-01");
    const chapters = await getChapters("9879dbb7cfe39e4d-01", "EXO");
    // const verses = await getVerses("9879dbb7cfe39e4d-01", "EXO");
    const chapterText = await getChapterText("9879dbb7cfe39e4d-01", "EXO.1");
    const sections = await getSections("9879dbb7cfe39e4d-01", "EXO");
    const maxPage = getMaxPageNum(chapterText, this.state.itemPerPage);
    this.setState({
      versions,
      maxPage,
      books,
      chapters,
      // verses,
      sections,
      chapterText
    });
  }

  handlePageChange = currentPage => {
    this.setState({ currentPage });
  };

  render() {
    const chapterText = this.state.chapterText;
    const textShow = paginate(
      chapterText,
      this.state.currentPage,
      this.state.itemPerPage
    );
    const filtered = textShow
      .join()
      .split(",")
      .join("");
    const chapters = [...this.state.chapters]

    return (
      <React.Fragment>
        <div className="container">
          <div className="title" />
          {chapters.filter(chapter=><p>{chapter.id}</p>)}
          <div className="body">
            <div dangerouslySetInnerHTML={{ __html: filtered }} />
          </div>
        </div>
        <div className="bodyElement">
          <Pagination
            currentPage={this.state.currentPage}
            itemPerPage={this.state.itemPerPage}
            maxPage={this.state.maxPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
