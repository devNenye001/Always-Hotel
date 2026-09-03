import React from "react";
import "./not-found.css";
import Button from "../../components/button/button";
import SEO from "../../components/seo/SEO";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be found on Always Hotel Minna website."
        canonicalPath="/404"
      />
      <div>
        <h1>404</h1>
        <p>Ooops, Page not found!</p>
        <span>
          The page you are looking for does not exist or has been moved. Explore our 
          luxurious rooms or return to our homepage.
        </span>
        <div style={{ marginTop: "1.5rem" }}>
          <Button onClick={() => navigate("/")} label="Go Back Home" />
        </div>
      </div>
    </div>
  );
};

export default Notfound;
