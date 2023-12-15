import axios from "axios";

const instance = axios.create({
  baseURL: "https://port-0-bando-ubora-server-2cev92alq5bjutb.sel4.cloudtype.app",
  timeout: 4000,
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
