import React, { useEffect, useCallback } from "react";
import { Overlay, Img } from "./Modal.styled";
import PropTypes from "prop-types";

const Modal = ({ bigImg, closeModal }) => {
  const escCloseModal = useCallback(
    (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", escCloseModal);

    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [escCloseModal]);

  const handleCloseModal = (e) => {
    if (e.target.getAttribute("name") === "overvay") {
      closeModal();
    }
  };

  return (
    <Overlay name="overvay" onClick={handleCloseModal}>
      <div>
        <Img src={bigImg} alt="BigImage" />
      </div>
    </Overlay>
  );
};

export { Modal };

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
