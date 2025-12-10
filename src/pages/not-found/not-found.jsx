import React from "react";
import "./not-found.css";
import Button from "../../components/button/button";

const Notfound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <p>Ooops, Page not found!</p>
        <span>
          This page cant be transcribed. It looks like this page has left the
          meeting - or maybe it never joined.
        </span>
        <Button label="Go Back Home" />
      </div>
    </div>
  );
};

export default Notfound;
