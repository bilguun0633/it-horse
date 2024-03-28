import axios from "axios";

const API_ENTRYPOINT = process.env.NEXT_PUBLIC_ENTRYPOINT;

const fetcher = axios.create({
  baseURL: API_ENTRYPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json, charset=utf-8",
  },
});

fetcher.interceptors.response.use(
  (response) => response,
  (error) => console.error(error),
);

export default fetcher;
