import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://gmhnc2vklb.execute-api.ap-northeast-2.amazonaws.com/ver1",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosRequest = async (endpoint, params) => {
  try {
    const response = await instance.post(endpoint, params);
    return response.data;
  } catch (error) {
    console.error("Axios Error", error);
    throw error;
  }
};

export { axiosRequest };
