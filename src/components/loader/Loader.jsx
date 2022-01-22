import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { BallTriangle } from "react-loader-spinner";
import "./loader.scss";

const LoaderContainer = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress && (
        <div id="loader" className={"loader-container"}>
          <div className={"loader-content"}>
            <BallTriangle color="#00bfff" height={100} width={100} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoaderContainer;
