import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7kckQHFGjVG9L0_8k4jzeFrvhjsOF2bkz3Hxiv36Tw0",
  },
});
