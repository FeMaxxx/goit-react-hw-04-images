import React, { Component } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { ToastContainer } from "react-toastify";
import { Loader } from "components/Loader";
import { toast } from "react-toastify";
import { searchImages } from "api";
import { Button } from "components/Button";

class App extends Component {
  state = {
    imagesSearch: "",
    status: "idle",
    images: [],
    page: 1,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imagesSearch } = this.state;
    const { page } = this.state;

    if (prevState.imagesSearch !== imagesSearch) {
      this.setState({ page: 1, images: [] }, () => this.getImages());
    } else if (prevState.page < page) {
      this.getImages();
    }
  }

  getImages() {
    const { imagesSearch } = this.state;
    const { page } = this.state;

    this.setState({ status: "pending" });

    searchImages(imagesSearch, page)
      .then((images) => {
        const totalPages = images.data.totalHits / 12;

        if (images.data.total === 0) {
          toast.error(`Images ${imagesSearch} Not Found`);
          this.setState({
            status: "rejected",
            totalPages,
          });
        } else {
          if (page === 1) {
            toast.success(`We found ${images.data.totalHits} pictures`);
            this.setState({
              totalPages,
            });
          }
          this.setState((prevState) => ({
            images: [...prevState.images, ...images.data.hits],
            status: "good",
          }));
        }
      })
      .catch(() => {
        toast.error(`Images ${imagesSearch} Not Found`);
        this.setState({
          status: "rejected",
        });
      });
  }

  handleFormSubmit = (imagesSearch) => {
    this.setState({ imagesSearch });
  };

  nextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, images, totalPages, page } = this.state;

    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery images={images} />

        {status === "pending" && <Loader />}

        {status !== "pending" && totalPages >= page && page !== 0 && (
          <Button onClick={this.nextPage} />
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export { App };
