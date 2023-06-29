import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6b0b2babb6104f358fae02b579e0969a",
  },
});
