import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Wallet.css";

function Wallet() {
  return (
    <div>
      <div className="wallet-header">
        <h1>Connect Your Wallet</h1>
        <p>
          Connect with one of your favorite wallet provider to create a wallet
        </p>
        <a
          href="https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet"
          target="_blank"
          rel="noreferrer"
        >
          What is a wallet?
        </a>
      </div>
      <div className="wallet-cards">
        <Card className="wallet-card">
          <Card.Body>
            <Card.Title>
              <img src="./icons/binance.png" alt="binance" />
            </Card.Title>
            <Card.Text>Connect to your Binance Account.</Card.Text>
            <Button variant="primary">Connect</Button>{" "}
          </Card.Body>
        </Card>

        <Card className="wallet-card">
          <Card.Body>
            <Card.Title>
              <img src="./icons/coinbase.png" alt="coinbase" />
            </Card.Title>
            <Card.Text>Connect to your Coinbase Account.</Card.Text>
            <Button variant="primary">Connect</Button>{" "}
          </Card.Body>
        </Card>

        <Card className="wallet-card">
          <Card.Body>
            <Card.Title>
              <img src="./icons/bitcoin-1.png" alt="bitcoin" />
              <img
                src="./icons/ethereum.png"
                alt="ethereum"
                style={{ margin: "0px 5px" }}
              />
              <img src="./icons/bitcoin.png" alt="bitcoin" />
            </Card.Title>
            <Card.Text>Connect to other Crypto Wallets.</Card.Text>
            <Button variant="primary">Connect</Button>{" "}
          </Card.Body>
        </Card>

        <Card className="wallet-card">
          <Card.Body>
            <Card.Title>
              <img src="./icons/card.png" alt="cards" />
            </Card.Title>
            <Card.Text>Connect your Credit Card Anytime.</Card.Text>
            <Button variant="primary">Connect</Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Wallet;
