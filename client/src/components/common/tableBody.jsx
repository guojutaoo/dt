import React from "react";
import "../css/admin.css";
import { paginate } from "./../utils/paginate";

const TableBody = props => {
  const { pastVerses, onDelete, onUpdate, onCreate } = props;
  let today = new Date();
  let timeStamp = new Date().getTime();
  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = weekday[today.getDay()];
  today = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

  return (
    <tbody className="fix">
      <tr key="0">
        <td scope="row">{today}</td>
        <td scope="row">{day}</td>
        <td scope="row" className="text-right">
        <button
              className="btn btn-info"
              id="button"
              onClick={() => onCreate(today, day, timeStamp)}
            >
              <i class="fa fa-plus" aria-hidden="true" />
            </button>
        </td>
      </tr>
      {pastVerses.map(pastVerse => (
        <tr key={pastVerse}>
          <td scope="row" style={{ textAlign: "center" }}>
            {pastVerse.date}
          </td>
          <td>{pastVerse.day}</td>
          <td className="text-right">
            <a
              href={"daily-devotion/" + pastVerse.date}
              style={{ color: "black" }}
            >
              {pastVerse.verse}
            </a>{" "}
            <button
              className="btn btn-danger"
              id="button"
              onClick={() => onDelete(pastVerse.id)}
            >
              <i class="fa fa-minus" aria-hidden="true" />
            </button>{" "}
            <button
              className="btn btn-info"
              id="button"
              onClick={() => onUpdate(pastVerse.id)}
            >
              <i class="fa fa-plus" aria-hidden="true" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
