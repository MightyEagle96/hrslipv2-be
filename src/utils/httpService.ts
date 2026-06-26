import axios from "axios";
const route = "https://mindtech.ng/centredata";

const httpService = axios.create({
  baseURL: route,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response) {
      return { data: error.response.data, status: error.response.status };
    }
    return { data: "Cannot establish connection", status: 500 };
  },
);

export { httpService };
