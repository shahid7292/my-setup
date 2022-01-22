import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./utility.scss";
import "react-toastify/dist/ReactToastify.css";
import Toaster from "./components/toaster/Toaster.jsx";
import Loader from "./components/loader/Loader.jsx";
import configureStore from "./redux/store";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  const storeObject = configureStore();
  const { store, persistor } = storeObject;
  return (
    <div>
      <Provider store={store}>
        <Toaster />
        <Loader />
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="auth/*" element={<AuthLayout />} />
            <Route path="app/*" element={<MainLayout />} />
            <Route path="/" element={<Navigate to="auth/*" />} />
            <Route path="*" replace element={<Navigate to="/auth/login" />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
