import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-btn">Go Back Home</Link>
    </div>
  );
};

export default Error;
