import axios from "axios";

const baseURL = "http://localhost:3010";
const requestHelper = axios.create({
  baseURL,
});

async function getData(endpoint) {
  requestHelper
    .get(endpoint)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

async function postData(endpoint, data) {}

async function putData(endpoint, data) {}

async function deleteData(endpoint, data) {}

export { getData, postData, putData, deleteData };
