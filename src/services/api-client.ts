import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bd8ba3d0582d4d04af6bfa0d9817d8e4",
  },
});
