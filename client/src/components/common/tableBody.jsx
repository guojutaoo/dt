import React from "react";
import "../css/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getToday } from "../utils/getToday";
import "../css/tableBody.css";

const TableBody = props => {
  const {
    pastVerses,
    currentPage,
    onDelete,
    onUpdate,
    onCreate,
    showButton
  } = props;
  const [day, today, timeStamp] = getToday();

  return (
    <tbody className="fix">
      {currentPage === 1 && (
        <tr key="0">
          <td scope="row" style={{ textAlign: "center" }}>
            {today}
          </td>
          <td scope="row" style={{ textAlign: "center" }}>
            {day}
          </td>
          <td scope="row" className="text-right">
              <FontAwesomeIcon id="icon-create" icon="plus" onClick={() => onCreate(today, day, timeStamp)}/>
          </td>
        </tr>
      )}
      {pastVerses.map(pastVerse => (
        <tr key={pastVerse}>
          <td scope="row" style={{ textAlign: "center" }}>
            {pastVerse.date}
          </td>
          <td style={{ textAlign: "center" }}>{pastVerse.day}</td>
          <td className="text-right">
            <a
              href={"daily-devotion/" + pastVerse.date}
              style={{textDecoration:"none"}}
            >
              {pastVerse.verse}
            </a>{" "}
            {!showButton && (
              <React.Fragment>
                  <FontAwesomeIcon id="icon-delete" icon="trash-alt" onClick={() => onDelete(pastVerse.id)}/>
                  <FontAwesomeIcon id="icon-update" icon="pencil-alt" onClick={() => onUpdate(pastVerse.verse)}/>
              </React.Fragment>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
