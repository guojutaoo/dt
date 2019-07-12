import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import { getPastVerses } from "./fakeBackEndService/fakePastVersesService";
import Pagination from "./common/pagination";
import { paginate, getMaxPageNum } from "./utils/paginate";
// import {
//   getBibleVersion,
//   getBooks,
//   getChapters,
//   getSections,
//   getVerses,
//   getChapterText
// } from "./server/getBible";

class PastVerses extends Component {
  state = {
    pastVerses: "",
    currentPage: 1,
    itemPerPage: 10,
    maxPage: 10
  };
  componentDidMount() {
    const pastVerses = getPastVerses();
    this.setState({ pastVerses });
    const maxPage = getMaxPageNum(pastVerses, this.state.itemPerPage);
    this.setState({ maxPage });
  }
  // handleStatusChange = readStatus => {
  //   readStatus = !readStatus;
  //   this.setState({ readStatus });
  // };
  handlePageChange = currentPage => {
    this.setState({ currentPage });
  };
  render() {
    const pastVerses = [...this.state.pastVerses];
    const filtered = paginate(
      pastVerses,
      this.state.currentPage,
      this.state.itemPerPage
    );
    console.log(filtered)

    return (
      <React.Fragment>
        <h1>Daily Devotion</h1>
        <table className="table table-bordered">
          <TableHeader />
          <TableBody
            pastVerses={filtered}
          />
        </table>
        <Pagination
          currentPage={this.state.currentPage}
          itemPerPage={this.state.itemPerPage}
          maxPage={this.state.maxPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default PastVerses;
