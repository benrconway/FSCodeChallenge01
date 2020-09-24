import axios from "axios";

const baseURL = "http://localhost:3010";
const requestHelper = axios.create({
  baseURL,
});

async function getData(endpoint) {
  let response;
  try {
    response = await requestHelper.get(endpoint);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function postData(endpoint, data) {
  let response;
  try {
    response = await requestHelper.post(endpoint, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function putData(endpoint, data) {
  let response;
  try {
    response = await requestHelper.post(endpoint, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

async function deleteData(endpoint, data) {
  let response;
  try {
    response = await requestHelper.delete(endpoint, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export { getData, postData, putData, deleteData };
