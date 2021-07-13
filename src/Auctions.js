import React from "react";
import "./Auctions.css";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auctions({ image, time, user, product, avatar, price }) {
  return (
    <div className="cards">
      <Card
        style={{
          width: "18rem",
          color: "#fff",
          backgroundColor: "black",
          border: "1px solid #555",
          padding: "10px 20px 20px",
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Badge variant="warning">{time}</Badge>
          <Card.Title>
            <h3>{product}</h3>
          </Card.Title>
          <Card.Text as="div">
            <div className="user-row">
              <img src={avatar} alt={avatar} />
              <p>@{user}</p>
            </div>
          </Card.Text>
        </Card.Body>
        <div className="card-bottom">
          <p>${price}</p>
          <Link to="/items">
            <Button variant="primary" size="sm">
              Purchase
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Auctions;
