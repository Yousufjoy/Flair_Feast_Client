import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Note: It should be 'baseURL', not 'baseUrl'
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
