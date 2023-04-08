import React, { useState, useEffect, useCallback } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { ToastContainer } from "react-toastify";
import { Loader } from "components/Loader";
import { toast } from "react-toastify";
import { searchImages } from "api";
import { Button } from "components/Button";

const App = () => {
  const [imagesSearch, setImagesSearch] = useState("");
  const [status, setStatus] = useState("idle");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getImages = useCallback(() => {
    setStatus("pending");

    searchImages(imagesSearch, page)
      .then((images) => {
        const totalPages = images.data.totalHits / 12;

        if (images.data.total === 0) {
          toast.error(`Images ${imagesSearch} Not Found`);

          setStatus("rejected");
          setTotalPages(totalPages);
        } else {
          if (page === 1) {
            toast.success(`We found ${images.data.totalHits} pictures`);

            setTotalPages(totalPages);
          }

          setImages((prevState) => [...prevState, ...images.data.hits]);
          setStatus("good");
        }
      })
      .catch(() => {
        toast.error(`Images ${imagesSearch} Not Found`);

        setStatus("rejected");
      });
  }, [imagesSearch, page]);

  useEffect(() => {
    if (!imagesSearch) return;

    if (page === 1) {
      setImages([]);
    }

    getImages();
  }, [getImages, imagesSearch, page]);

  function handleFormSubmit(imagesSearch) {
    setPage(1);
    setImagesSearch(imagesSearch);
  }

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmitForm={handleFormSubmit} />
      <ImageGallery images={images} />

      {status === "pending" && <Loader />}

      {status !== "pending" && totalPages >= page && page !== 0 && (
        <Button onClick={nextPage} />
      )}

      <ToastContainer autoClose={3000} />
    </>
  );
};

export { App };
