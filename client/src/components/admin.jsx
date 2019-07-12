import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import Modal from "./common/modal";
import { getPastVerses } from "./fakeBackEndService/fakePastVersesService";
import Pagination from "./common/pagination";
import { paginate, getMaxPageNum } from "./utils/paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./css/admin.css";
import PastVerses from "./pastVerses";

class Admin extends Component {
  state = {
    openInput: false,
    pastVerses: "",
    currentPage: 1,
    itemPerPage: 10,
    maxPage: 10
  };

  handleInputForm = () => {
    this.setState({ openInput: !this.state.openInput });
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

  handleDelete = id => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.updateDelete(id)
        },
        {
          label: "No"
        }
      ]
    });
  };

  updateDelete = id => {
    const pastVerses = this.state.pastVerses.filter(
      pastVerse => pastVerse.id !== id
    );
    this.setState({ pastVerses });
    const maxPage = getMaxPageNum(pastVerses, this.state.itemPerPage);
    this.setState({ maxPage });
  };

  handleUpdate = id => {};

  handleCreate = (date, day, id) => {
    const pastVerses = [{date:date, day:day, verse:"", id:id}, ...this.state.pastVerses];
    this.setState({ pastVerses });
    const maxPage = getMaxPageNum(pastVerses, this.state.itemPerPage);
    this.setState({ maxPage });
  };
  createVerse = () => {};
  render() {
    const pastVerses = [...this.state.pastVerses];
    console.log(pastVerses);
    const filtered = paginate(
      pastVerses,
      this.state.currentPage,
      this.state.itemPerPage
    );

    const openInput = this.state.openInput;
    return (
      <React.Fragment>
        <div className="container">
          {/* <button
            id="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="btn btn-success"
            onClick={() => this.createVerse}
            style={{ position: "absolute", right: "397px", top: "-40px" }}
          >
            Add a new verse
          </button> */}
          <Modal />
          <table className="table table-bordered">
            <TableHeader />
            <TableBody
              pastVerses={filtered}
              onDelete={this.handleDelete}
              onUpdate={this.handleUpdate}
              onCreate={this.handleCreate}
            />
          </table>
        </div>
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

export default Admin;
