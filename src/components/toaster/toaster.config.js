import { Bounce } from "react-toastify";

const CONFIG = {
  position: "top-center",
  autoClose: process.env.MODE === "test" ? false : 5000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  transition: Bounce,
};

export default CONFIG;
