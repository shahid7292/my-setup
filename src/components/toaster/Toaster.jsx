import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CONFIG from "./toaster.config";

function Toaster() {
  return <ToastContainer {...CONFIG} />;
}

export default Toaster;
