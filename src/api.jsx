import axios from "axios";

export const searchImages = async (value, page) => {
  const baceURL = "https://pixabay.com/api/";
  const config = {
    baceURL,
    params: {
      key: "34101690-d1afb1df4c50c6485dfb9e98d",
      q: value,
      orientation: "horizontal",
      per_page: 12,
      page,
    },
  };

  const response = await axios.get(baceURL, config);
  return response;
};
