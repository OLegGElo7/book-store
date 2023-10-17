import React from "react";
import Button from "../Components/UI/Button/Button";
import "../style/Error.scss";

const Error = () => {
  return (
    <section className="error">
      <img src="\img\Error\Books.svg" alt="Error" />
      <h1>404</h1>
      <h2>Looks like you’ve got lost...</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
    </section>
  );
};

export default Error;
