import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import { getPastVerses } from "./fakeBackEndService/fakePastVersesService";
import Pagination from "./common/pagination";
import { paginate, getMaxPageNum } from "./utils/paginate";
import "./css/pastVerses.css";


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

    return (
      <React.Fragment>
        <h1 className="table-text">Daily Devotion</h1>
        <table className="table table-bordered table-striped">
          <TableHeader />
          <TableBody
            pastVerses={filtered}
            showButton={true}
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
