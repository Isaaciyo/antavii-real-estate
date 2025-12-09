import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar.jsx";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Home</h1>
          <p>
            Discover comfortable, secure living made truly accessible for
            everyone. Our trusted housing network connects you with quality
            homes at prices that fit your budget. Explore safe communities,
            transparent listings, and supportive guidance at every step. Find
            your place with confidence, comfort, and peace of mind.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Exeprience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>{">"}2000</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imageContainer">
        <img
          src="/antavii-real-estate/bg.png"
          alt="background"
          className="backgroundImage"
        />
      </div>
    </div>
  );
}
