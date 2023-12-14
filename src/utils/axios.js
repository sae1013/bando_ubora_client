import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosRequest = async (endpoint, params) => {
  try {
    const response = await instance.post(endpoint,params);
    return response.data;
  } catch (error) {
    console.error("Axios Error", error);
    throw error;
  }
};

export {
  axiosRequest,
};
