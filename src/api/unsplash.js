import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 62ac3ef66258fac175e0a0dd288103288b33d69d1ba6664e42d50df634c03c0b"
  }
});
