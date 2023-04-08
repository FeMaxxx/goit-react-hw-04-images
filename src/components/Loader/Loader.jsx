import React from "react";
import { ProgressBar } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3f51b5"
        barColor="#3f51b5"
      />
    </LoaderBox>
  );
};
