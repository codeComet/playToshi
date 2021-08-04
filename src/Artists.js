import React from "react";
import "./Artists.css";

function Artists() {
  return (
    <div className="parent-row">
      <h1>Top Sellers</h1>
      <div className="row">
        <div className="parent">
          <div className="avatar">
            <img src="./images/user1.jpg" alt="user1" />
          </div>
          <div className="desc">
            <h3 className="userName">Bored Elon</h3>
            <p className="sales">21.42 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user7.jpg" alt="user" />
          </div>
          <div className="desc">
            <h3 className="userName">Kerry Mitchell</h3>
            <p className="sales">23.12 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user4.jpg" alt="user1" />
          </div>
          <div className="desc">
            <h3 className="userName">Marcos Steele</h3>
            <p className="sales">86.33 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user2.jpg" alt="user1" />
          </div>
          <div className="desc">
            <h3 className="userName">Mable Chavez</h3>
            <p className="sales">25.55 BNB</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="parent">
          <div className="avatar">
            <img src="./images/user3.jpg" alt="user" />
          </div>
          <div className="desc">
            <h3 className="userName">Dustin Garcia</h3>
            <p className="sales">54.43 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user4.jpg" alt="user" />
          </div>
          <div className="desc">
            <h3 className="userName">Celia Torres</h3>
            <p className="sales">55.45 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user5.jpg" alt="user1" />
          </div>
          <div className="desc">
            <h3 className="userName">Joan Graham</h3>
            <p className="sales">43.32 BNB</p>
          </div>
        </div>
        <div className="parent">
          <div className="avatar">
            <img src="./images/user6.jpg" alt="user1" />
          </div>
          <div className="desc">
            <h3 className="userName">Sandy Lewis</h3>
            <p className="sales">21.42 BNB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
