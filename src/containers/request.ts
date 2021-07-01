const axios = require("axios");

const doRequest = () => {
  try {
    return axios.get("https://thegreatapi.org/v1");
  } catch (error) {
    console.error(error);
  }
};

const callAPI = async () => {
  const response = doRequest()
    .then((response) => {
      console.log(response);
      console.log("It works!");
    })
    .catch((error) => {
      console.log(error);
    });
};
