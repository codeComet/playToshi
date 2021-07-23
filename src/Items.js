import React, { useState, useEffect } from "react";
import { Button, Tabs, Tab, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./Timer";
import "./Items.css";

function Items() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () =>
    toast.success("Bid Placed Sucessfully!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className="item-container">
      <div className="product-image">
        <img src="./images/art8.jpg" alt="artwork" />
        <div className="bid-info">
          <div className="current-bid">
            <p>Current Bid</p>
            <h2>1.73 BNB</h2>
            <p>$500.43</p>
          </div>
          <div className="end-time">
            <p>Auction Ending in</p>
            <Timer />
          </div>
        </div>
        <Button onClick={handleShow}>Place a Bid</Button>
      </div>
      <div className="product-details">
        <div className="name-price">
          <h1>Space Ranger</h1>
          <div className="owner">
            <p>Owned by</p>
            <div className="owner-flex">
              <img src="./images/user1.jpg" alt="user" />
              <p>@Bored Elon</p>
            </div>
          </div>
          <p className="highest-bid">Higest Bid</p>
          <h3>1.73 BNB</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            officia animi dicta pariatur reprehenderit quas fugiat consequuntur
            architecto, commodi quae.
          </p>
        </div>
        <div className="creator-collection">
          <div className="creator">
            <img src="./images/user1.jpg" alt="user" />
            <div className="creator-name">
              <h5>Bored Elon</h5>
              <p>Creator</p>
            </div>
          </div>
          <div className="collection">
            <img src="./images/user2.jpg" alt="user" />
            <div className="collection-name">
              <h5>Snowball</h5>
              <p>Collection</p>
            </div>
          </div>
        </div>
        <div className="tabs">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="bids" title="Bids">
              <Bids />
            </Tab>
            <Tab eventKey="details" title="Details">
              <Bids />
            </Tab>
            <Tab eventKey="history" title="History">
              <Bids />
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* Bidding Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place Your Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bid_body">
            <Button
              variant="danger"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </Button>
            <h3>{count}</h3>
            <Button
              variant="success"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              notify();
              // setTimeout(function () {
              //   handleClose();
              // }, 2000);
            }}
          >
            Place Bid
          </Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>

      {/* Bootstrap confirmation message */}
    </div>
  );
}

const Bids = () => (
  <div className="bids">
    <div className="bids-inner">
      <div className="first">
        <img src="./images/user1.jpg" alt="user" />

        <div className="user">
          <h4>1.43 BNB by Jane Cooper</h4>
          <p>12/07/2021 8:53pm</p>
        </div>
      </div>
      <div className="second">
        <img src="./images/user2.jpg" alt="user" />

        <div className="user">
          <h4>1.22 BNB by Bored Elon</h4>
          <p>12/07/2021 7:53pm</p>
        </div>
      </div>
    </div>
  </div>
);

export default Items;
