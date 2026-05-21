// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8085"
// });

// export default api;
import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:8085",

  headers: {
    "Content-Type": "application/json",
  }

});

export default api;