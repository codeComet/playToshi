import React from "react";
import "./Auctions.css";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auctions({ image, time, user, product, avatar, price, hide }) {
  return (
    <div className="cards">
      <Card className="card_single">
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
          {hide ? null : (
            <Link to="/items">
              <Button variant="primary" size="sm">
                Purchase
              </Button>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Auctions;
