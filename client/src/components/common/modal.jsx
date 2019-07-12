import React, { Component } from "react";
import { getBooks } from "../server/getBible";
import Key from "../key.json";

class Modal extends Component {
  state = { books: [], rowNum: [0] };
  async componentDidMount() {
    const books = await getBooks(Key["ESV"]);
    this.setState({ books });
    const rowNum = Array.apply(null, {
      length: Math.ceil(books.length / 4)
    }).map(Number.call, Number);
    this.setState({ rowNum });
  }
  render() {
    return (
      <React.Fragment>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add a new verse
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="column">
                    <select class="selectpicker" data-style="btn-info">
                      {this.state.books.map(book => (
                        <option>{book.name}</option>
                      ))}
                    </select>
                  </div>{" "}
                  <div className="column">
                    <select class="selectpicker" data-style="" placeholder="Book">
                      {this.state.books.map(book => (
                        <option>{book.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
