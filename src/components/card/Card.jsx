import React from "react";
import { Link } from "react-router";
import "./card.scss";

export default function Card({ item }) {
  return (
    <div className="card">
      <Link className="imgContainer" to={`/antavii-real-estate/${item.id}`}>
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/antavii-real-estate/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/antavii-real-estate/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/antavii-real-estate/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/antavii-real-estate/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/antavii-real-estate/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/antavii-real-estate/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
