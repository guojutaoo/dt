import React, { Component } from "react";
import { getImageUrl } from "./../fakeBackEndService/renderLocalImage";
import Image1 from "../images/cityscapes-dual-theme.jpg";
import Image2 from "../images/dark-fantasy-landscape-theme.jpg";
import Image3 from "../images/avengers-endgame-theme.jpg";
import Image4 from "../images/spirit-away.jpg";

class Cards extends Component {
  state = {};
  render() {
    const { books, rowNum, link } = this.props;
    const imageUrl = getImageUrl();
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
          {rowNum.map(num => (
            <div className="w3-container-4" key={num}>
              <div className="row">
                {Array.prototype.slice
                  .call(books, 4 * num, 4 * (num + 1))
                  .map(book => (
                    <div
                      className="col-sm-3"
                      key={book.id}
                      style={{ marginBottom: "50px" }}
                    >
                      <div
                        className="w3-card w3-margin"
                        style={{ marginBottom: "50px" }}
                      >
                        <div className="flip">
                          <div className="front">
                            <img
                              className="card_img"
                              src={images[Math.floor(Math.random() * 4)]}
                              style={{ width: "100%" }}
                              onClick={() =>
                                (window.location.href = link + book.id)
                              }
                            />
                            <p className="card_title">
                              {book.name}
                              {book.id}
                            </p>
                          </div>
                          <div
                            className="back"
                            onClick={() =>
                              (window.location.href = link + book.id)
                            }
                          >
                            <div className="content"><h4 className="text title">
                              Daily Devotion Verse</h4><p className="text content">24 But let justice roll on like a river, righteousness like a never-failing stream! </p></div>
                          </div>
                        </div>
                        {/* <p className="card_content">why God created us?</p> */}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
