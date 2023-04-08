import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import {
  Header,
  SearchForm,
  Input,
  Button,
  SearchIcon,
} from "./Searchbar.styled";

const Searchbar = ({ onSubmitForm }) => {
  const [imagesSearch, setImagesSearch] = useState("");

  const handleSubmit = () => {
    if (imagesSearch === "") {
      return;
    }

    onSubmitForm(imagesSearch);
    setImagesSearch("");
  };

  const handleSearchImages = (e) => {
    setImagesSearch(e.target.value.trim().toLowerCase());
  };

  return (
    <Header>
      <Formik initialValues={{ image: "" }} onSubmit={handleSubmit}>
        <SearchForm onChange={handleSearchImages}>
          <Button type="submit">
            <SearchIcon />
          </Button>

          <Input
            name="image"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

export { Searchbar };

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
