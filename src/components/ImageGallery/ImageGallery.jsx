import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import { Modal } from "components/Modal";
import "react-toastify/dist/ReactToastify.min.css";

const ImageGallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bigImg, setBigImg] = useState(null);

  const openModal = (e) => {
    const bigImg = e.currentTarget.getAttribute("data-big-img");

    setModalOpen(true);
    setBigImg(bigImg);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
                  openModal={openModal}
                />
              );
            })}
          </List>
        </>
      )}

      {modalOpen && <Modal bigImg={bigImg} closeModal={closeModal} />}
    </div>
  );
};

export { ImageGallery };

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
