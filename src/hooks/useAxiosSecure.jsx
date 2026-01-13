import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://mrs-restaurant-server.vercel.app/",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
