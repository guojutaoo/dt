import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonGroup from "../common/buttonGroup";
import "../css/myModal.css"

const MyModal = props => {
  const {
    visible,
    check,
    effect,
    closeModal,
    books,
    iconStyle,
    onOpen,
    onSubmit,
    selectedVerseId,
    onClear,
    title,
    onExit
  } = props;
  
  return (
    <Modal
      visible={visible === check}
      width="1000"
      height="910"
      effect={effect}
      onClickAway={() => closeModal()}
    >
      <div>
        <div className="btn-group-row">
          <button
            className="btn"
            id="buttons"
            href="javascript:void(0);"
            onClick={() => closeModal()}
          >
            <FontAwesomeIcon icon={iconStyle} />
          </button>
        <div>
          {selectedVerseId && selectedVerseId.length > 0 && (
            <button
              className="btn btn-right"
              id="buttons"
              href="javascript:void(0);"
              onClick={() => onSubmit()}
            >
              <FontAwesomeIcon icon={"check"} />
            </button>
          )}
                    <button
            className="btn btn-right"
            id="buttons"
            href="javascript:void(0);"
            onClick={() => onExit()}
          >

            <FontAwesomeIcon icon={"times"} />
          </button>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            position: "flex",
            flexDirection: "row"
          }}
        >
          <h2>
            {title}{" "}
            <button
              className="btn btn-right"
              id="buttons"
              href="javascript:void(0);"
              onClick={() => {
                onClear();
              }}
            >
                <FontAwesomeIcon icon={"sync-alt"} />{" "}
            </button>
          </h2>
        </div>

        <div className="buttons">
          <ButtonGroup
            books={books}
            onOpen={onOpen}
            selectedVerseId={selectedVerseId}
            visible={visible}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
