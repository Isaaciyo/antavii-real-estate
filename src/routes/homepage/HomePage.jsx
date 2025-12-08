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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            eaque rem necessitatibus, perferendis voluptatibus assumenda veniam.
            Atque dicta explicabo dolorum ipsa impedit? Officiis provident
            vitae, consectetur molestias ut aut vel.
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
