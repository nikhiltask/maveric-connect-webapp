import React from "react";
// import image from"""
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="Container">
        <div className="row">
        <hr/>
        <div className="card-footer bg-transparent border-success">
        <img
          src='maveric-logo-white.png'
          width="243"
          height="52"
          class="d-inline-block align-top" alt
        />
        <p className="col-sm">
        &copy;Copyright, Maveric System Ltd  {new Date().getFullYear()}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
