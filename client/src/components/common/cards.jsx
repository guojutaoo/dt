import React, { Component } from "react";
import { getImageUrl } from "./../fakeBackEndService/renderLocalImage";
import Image1 from "../images/cityscapes-dual-theme.jpg";
import Image2 from "../images/dark-fantasy-landscape-theme.jpg";
import Image3 from "../images/avengers-endgame-theme.jpg";
import Image4 from "../images/spirit-away.jpg";
import "../css/cards.css";

class Cards extends Component {
  state = {};
  render() {
    const { books, rowNum, link } = this.props;
    let images = [Image1, Image2, Image3, Image4];
    return (
      <React.Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <script src="https://unpkg.com/react-image/umd/index.js" />
        <div className="cards">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr >
                  <td onClick={() => (window.location.href = link + book.id)} className="bible-table">
                    {book.id}
                  </td>
                  <td>{book.name}</td>
                  <td>{book.nameLong}{book.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
