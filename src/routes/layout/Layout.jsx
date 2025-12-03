import React from "react";
import Navbar from "../../components/navBar/NavBar.jsx";
import { Outlet } from "react-router";
import "./layout.scss";

export default function Layout({ profile }) {
  // profile = false;
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
    </div>
  );
}
