import React, { Component } from "react";
import StickyHeader from "react-sticky-header";
import DatePicker from "react-datepicker";
import Admin from "../admin";
import { Link, NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import { getPastVerses } from "../fakeBackEndService/fakePastVersesService";
import "react-sticky-header/styles.css";
import "../css/calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  state = {
    pastVerses: [],
    searchKey: "",
    startDate: new Date(),
    isOpen: false,
    redirect: false,
    lockStyle: "lock"
  };
  handleChange = input => {
    const searchKey = input.target.value;
    this.setState({ searchKey });
  };

  componentDidMount() {
    const pastVerses = getPastVerses();
    this.setState({ pastVerses });
  }

  handleDateChange = date => {
    this.setState({ startDate: date });
    this.toggleCalendar();
  };

  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    if (this.state.isOpen) this.setState({ redirect: true });
  };

  addDays = (today, day, month, year) => {
    today = new Date();
    today.setUTCDate(day);
    today.setUTCMonth(month - 1);
    today.setUTCFullYear(year);
    return today;
  };

  unLock = () => {
    this.setState({ lockStyle: "lock-open" });
  };
  Lock = () => {
    this.setState({ lockStyle: "lock" });
  };

  render() {
    const pastVerses = [...this.state.pastVerses];
    var format = require("dateformat");
    let activeDays = this.state.pastVerses.map(pastVerse => [
      pastVerse.date.split("-")
    ]);
    activeDays = activeDays.map(activeDay => [
      parseInt(activeDay[0][0]),
      parseInt(activeDay[0][1]),
      parseInt(activeDay[0][2])
    ]);
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          push
          to={
            "/daily-devotion/" +
            (this.state.startDate.getFullYear() +
              "-" +
              (this.state.startDate.getMonth() + 1) +
              "-" +
              this.state.startDate.getDate())
          }
        />
      );
    }

    return (
      <StickyHeader
        header={
          <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="#">
                <FontAwesomeIcon icon="cross" /> Devotion
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/home">
                      <FontAwesomeIcon icon="home" /> Home{" "}
                      <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/daily-devotion">
                      <FontAwesomeIcon icon="lightbulb" /> Daily Devotion
                    </NavLink>
                  </li>
                  <div>
                    <button
                      className="btn btn-dark"
                      onClick={this.toggleCalendar}
                    >
                      {format(this.state.startDate, "yyyy-mm-dd")}
                    </button>
                    {this.state.isOpen && (
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        includeDates={activeDays.map(activeDay =>
                          this.addDays(
                            new Date(),
                            parseInt(activeDay[2]),
                            parseInt(activeDay[1]),
                            parseInt(activeDay[0])
                          )
                        )}
                        withPortal
                        inline
                      />
                    )}
                  </div>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon="clock" /> Past Verses
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {pastVerses
                        .slice(0, 7)
                        .reverse()
                        .map(verse => (
                          <NavLink
                            className="dropdown-item"
                            key={verse.date}
                            to={"/daily-devotion/" + verse.date}
                          >
                            {verse.date} {verse.verse}
                          </NavLink>
                        ))}
                      <div className="dropdown-divider" />
                      <NavLink className="dropdown-item" to="/past-verses">
                        See all
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/read-bible">
                      <FontAwesomeIcon icon="bible" /> Bible
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={this.unLock}
                    onMouseLeave={this.Lock}
                  >
                    <NavLink className="nav-link" to="/admin">
                      <FontAwesomeIcon icon={this.state.lockStyle} /> Admin
                    </NavLink>
                  </li>
                </ul>
                <form
                  className="form-inline my-2 my-lg-0"
                  onChange={this.handleChange}
                >
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <FontAwesomeIcon icon="search" /> Search
                  </button>
                </form>
                <a href="https://localhost:8080/verses/EXO.1">Click me</a>
              </div>
            </nav>
          </React.Fragment>
        }
      />
    );
  }
}

export default Navbar;
