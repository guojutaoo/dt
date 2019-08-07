import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import MyModal from "./common/myModal";
import Pagination from "./common/pagination";
import { paginate, getMaxPageNum } from "./utils/paginate";
import { getToday } from "./utils/getToday";
import { getBooks, getChapters, getVerses } from "./server/getBible";
import { confirmAlert } from "react-confirm-alert";
import { getPastVerses } from "./fakeBackEndService/fakePastVersesService";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./css/admin.css";
import Key from "./key.json";
import GetChapterText from "./getChapterText";
import PastVerses from "./pastVerses";

class Admin extends Component {
  state = {
    pastVerses: "",
    books: "",
    showChapter: false,
    bookId: "",
    chapters: "",
    showVerse: false,
    chapterId: "",
    verses: "",
    currentPage: 1,
    itemPerPage: 10,
    maxPage: 10,
    visible: 0,
    selectedVerseId: []
  };

  componentDidMount = async () => {
    const pastVerses = getPastVerses();
    this.setState({ pastVerses });
    const maxPage = getMaxPageNum(pastVerses, this.state.itemPerPage);
    this.setState({ maxPage });
    const books = await getBooks(Key["ESV"]);
    this.setState({ books });

    if (this.state.showVerses && this.state.bookId) {
      const verseId = await getVerses(Key["ESV"], this.state.verseId);
      this.setState({ verseId });
    }
  };

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

  handleUpdate = id => {
    let selectedVerseId = "";
    if (!Array.isArray(id)) {
      selectedVerseId = new Array();
      selectedVerseId.push(id);
    } else {
      selectedVerseId = id;
    }
    this.setState({ selectedVerseId });
    this.handleCreate();
  };

  closeModal = () => {
    this.setState({
      visible: 0,
      selectedVerseId: []
    });
  };

  backModal = () => {
    this.setState({ visible: this.state.visible - 1 });
  };

  openBook = async bookId => {
    //getChapters
    const chapters = await getChapters(Key["ESV"], bookId);
    this.setState({ chapters });
    this.setState({ visible: 2 });
    this.setState({ bookId });
  };

  openChapter = async chapterId => {
    //getVerses
    const verses = await getVerses(Key["ESV"], chapterId);
    this.setState({ verses });
    this.setState({ visible: 3 });
  };

  onSelectVerse = verseId => {
    if (this.state.selectedVerseId) {
      let selectedVerseId = this.state.selectedVerseId;
      if (selectedVerseId.includes(verseId)) {
        // console.log(selectedVerseId.length)
        selectedVerseId = selectedVerseId.filter(id => id !== verseId);
        this.setState({ selectedVerseId });

        return;
      }
    }
    const selectedVerseId = [...this.state.selectedVerseId, verseId];
    this.setState({ selectedVerseId });
  };

  handleCreate = () => {
    //click + button
    this.setState({ visible: 1 });
  };

  handleSumbitVerse = () => {
    //push new verse into db
    const selectedVerseId = this.state.selectedVerseId;
    const pastVerses = this.state.pastVerses;
    const [day, date, id] = getToday();
    pastVerses.unshift({
      date: date,
      day: day,
      verse: selectedVerseId,
      id: id
    });
    this.setState({ pastVerses });
    const maxPage = getMaxPageNum(pastVerses, this.state.itemPerPage);
    this.setState({ maxPage });
    this.setState({ selectedVerseId: "" });
    this.closeModal();
  };

  handleClear = () => {
    this.setState({ selectedVerseId: "" });
  };
  handleExit = () => {
    this.setState({ visible: 0 });
  };
  render() {
    const pastVerses = [...this.state.pastVerses];
    const filtered = paginate(
      pastVerses,
      this.state.currentPage,
      this.state.itemPerPage
    );
    const visible = this.state.visible;
    const selected = this.state.selectedVerseId;
    const openInput = this.state.openInput;
    return (
      <React.Fragment>
        <section>
          {visible > 0 && (
            <div>
              <MyModal
                visible={this.state.visible}
                check={1}
                effect="fadeInLeft"
                books={this.state.books}
                closeModal={this.closeModal}
                iconStyle={"chevron-left"}
                onOpen={this.openBook}
                onSubmit={this.handleSumbitVerse}
                selectedVerseId={this.state.selectedVerseId}
                title={"Select Book"}
                onClear={this.handleClear}
                onExit={this.handleExit}
              />

              {visible === 2 && (
                <MyModal
                  visible={this.state.visible}
                  check={2}
                  effect="fadeInRight"
                  books={this.state.chapters}
                  closeModal={this.backModal}
                  iconStyle={"chevron-left"}
                  onOpen={this.openChapter}
                  onSubmit={this.handleSumbitVerse}
                  selectedVerseId={this.state.selectedVerseId}
                  title={"Select Chapter"}
                  onClear={this.handleClear}
                  onExit={this.handleExit}
                />
              )}
              {visible === 3 && (
                <MyModal
                  visible={this.state.visible}
                  check={3}
                  effect="fadeInLeft"
                  books={this.state.verses}
                  closeModal={this.backModal}
                  iconStyle={"chevron-left"}
                  onOpen={this.onSelectVerse}
                  onSubmit={this.handleSumbitVerse}
                  selectedVerseId={this.state.selectedVerseId}
                  onClear={this.handleClear}
                  title={"Select Verse"}
                  onExit={this.handleExit}
                />
              )}
            </div>
          )}
        </section>

        <div className="container">
          <table className="table table-bordered table-striped">
            <TableHeader />
            <TableBody
              pastVerses={filtered}
              currentPage={this.state.currentPage}
              onDelete={this.handleDelete}
              onUpdate={this.handleUpdate}
              onCreate={this.handleCreate}
              onUpdate={this.handleUpdate}
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
