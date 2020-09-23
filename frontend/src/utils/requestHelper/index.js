import axios from "axios";

const baseURL = "http://localhost:3030";
const requestHelper = axios.create({
  baseURL,
});

function getData(endpoint) {}

function postData(endpoint, data) {}

function putData(endpoint, data) {}

function deleteData(endpoint, data) {}

export { getData, postData, putData, deleteData };
