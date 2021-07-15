import React from "react";
import { Button } from "react-bootstrap";
import "./User.css";

function User() {
  return (
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
              expedita hic repellendus, laborum doloribus voluptas perspiciatis
              recusandae nemo quod incidunt, sapiente debitis dignissimos amet
              unde.
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
    </div>
  );
}

export default User;
