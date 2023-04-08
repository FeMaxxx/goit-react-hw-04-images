import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import { Modal } from "components/Modal";
import "react-toastify/dist/ReactToastify.min.css";

class ImageGallery extends Component {
  state = {
    modalOpen: false,
    bigImg: null,
  };

  openModal = (e) => {
    const bigImg = e.currentTarget.getAttribute("data-big-img");
    this.setState({ modalOpen: true, bigImg });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen, bigImg } = this.state;
    const { images } = this.props;

    return (
      <div>
        {images.length !== 0 && (
          <>
            <List>
              {images.map((image) => {
                return (
                  <ImageGalleryItem
                    key={image.id}
                    image={image}
                    openModal={this.openModal}
                  />
                );
              })}
            </List>
          </>
        )}

        {modalOpen && <Modal bigImg={bigImg} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export { ImageGallery };

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
