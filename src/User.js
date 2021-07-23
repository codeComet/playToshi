import React from "react";
import { Button, Tab, Tabs, Badge } from "react-bootstrap";
import "./User.css";
import Auctions from "./Auctions";
// import NavbarUser from "./NavbarUser";

function User() {
  return (
    <div>
      {/* <NavbarUser /> */}
      <div className="user-parent">
        <div className="user-header">
          <div className="user-info">
            <img src="./images/user2.jpg" alt="user" />
            <h3>Jerome Bell</h3>
            <div className="account-number">
              <p>0xf423442442114...1231</p>
              <Button>
                <img
                  src="https://img.icons8.com/dusk/64/000000/copy.png"
                  alt="copy"
                />
              </Button>
            </div>
            <div className="user-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                expedita hic repellendus, laborum doloribus voluptas
                perspiciatis recusandae nemo quod incidunt, sapiente debitis
                dignissimos amet unde.
              </p>
            </div>

            <div className="socials">
              <div className="twitter">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/twitter.png"
                  alt="twitter"
                />
                <p>@jeromebell</p>
              </div>
              <div className="facebook">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/facebook.png"
                  alt="facebook"
                />
                <p>facebook.com/jerome</p>
              </div>
            </div>
            <div className="buttons">
              <Button className="edit-profile">Edit Profile</Button>
              <Button className="upload-button">
                <img
                  src="https://img.icons8.com/fluent-systems-filled/48/000000/upload.png"
                  alt="upload"
                />
              </Button>
            </div>
          </div>
          <div className="user-productImg">
            <img src="./images/art11.jpg" alt="arts" />
          </div>
        </div>
        <div className="owned">
          <Tabs defaultActiveKey="onsale" className="mb-3">
            <Tab
              eventKey="onsale"
              title={
                <React.Fragment>
                  On sale
                  <Badge variant="light" className="ml-1">
                    8
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
            <Tab
              eventKey="owned"
              title={
                <React.Fragment>
                  Owned
                  <Badge variant="light" className="ml-1">
                    15
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
            <Tab
              eventKey="created"
              title={
                <React.Fragment>
                  Created
                  <Badge variant="light" className="ml-1">
                    19
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
            <Tab
              eventKey="liked"
              title={
                <React.Fragment>
                  Liked
                  <Badge variant="light" className="ml-1">
                    59
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
            <Tab
              eventKey="follower"
              title={
                <React.Fragment>
                  Follower
                  <Badge variant="light" className="ml-1">
                    8k
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
            <Tab
              eventKey="following"
              title={
                <React.Fragment>
                  Followingg
                  <Badge variant="light" className="ml-1">
                    7.9k
                  </Badge>
                </React.Fragment>
              }
            >
              <Owned />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const Owned = () => (
  <div>
    <div className="img-gallery">
      <Auctions
        image="./images/art5.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user2.jpg"
        price="1.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art8.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user4.jpg"
        price="2.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art5.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user3.jpg"
        price="3.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art8.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user7.jpg"
        price="4.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art5.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user2.jpg"
        price="1.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art8.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user4.jpg"
        price="2.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art5.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user3.jpg"
        price="3.07 BNB"
        hide="true"
      />
      <Auctions
        image="./images/art8.jpg"
        time="3hr 47min left"
        user="Bored Elon"
        product="Digital Art"
        avatar="./images/user7.jpg"
        price="4.07 BNB"
        hide="true"
      />
    </div>
  </div>
);

export default User;
