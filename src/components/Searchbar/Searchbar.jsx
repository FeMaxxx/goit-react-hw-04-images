import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import {
  Header,
  SearchForm,
  Input,
  Button,
  SearchIcon,
} from "./Searchbar.styled";

class Searchbar extends Component {
  state = {
    imagesSearch: "",
  };

  handleSubmit = () => {
    if (this.state.imagesSearch === "") {
      return;
    }

    this.props.onSubmitForm(this.state.imagesSearch);
    this.setState({ imagesSearch: "" });
  };

  handleSearchImages = (e) => {
    this.setState({ imagesSearch: e.target.value.trim().toLowerCase() });
  };

  render() {
    return (
      <Header>
        <Formik initialValues={{ image: "" }} onSubmit={this.handleSubmit}>
          <SearchForm onChange={this.handleSearchImages}>
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
  }
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
