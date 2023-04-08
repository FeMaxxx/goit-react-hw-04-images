import React, { Component } from "react";
import { Overlay, Img } from "./Modal.styled";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.escCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.escCloseModal);
  }

  closeModal = (e) => {
    const { closeModal } = this.props;

    if (e.target.getAttribute("name") === "overvay") {
      closeModal();
    }
  };

  escCloseModal = (e) => {
    if (e.code === "Escape") {
      const { closeModal } = this.props;

      closeModal();
    }
  };

  render() {
    const { bigImg } = this.props;

    return (
      <Overlay name="overvay" onClick={this.closeModal}>
        <div>
          <Img src={bigImg} alt="BigImage" />
        </div>
      </Overlay>
    );
  }
}

export { Modal };

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
