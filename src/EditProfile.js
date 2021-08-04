import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./EditProfile.css";

function EditProfile() {
  const [input, setInput] = useState({
    name: "Jerome Bell",
    twitter: "@jeromebell",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto facilis obcaecati aperiam rerum alias molestias libero nihil quas veniam error!",
    url: "playtoshi://jerome",
    portfolio: "https://",
    changed: false,
  });

  const handleInput = (e) => {
    e.preventDefault();
    setInput({ [e.target.name]: e.target.value, changed: true });
  };

  const handleSubmit = () => {
    input.changed
      ? toast.success("Profile Updated😀", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.success("Nothing to change", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  };

  return (
    <div className="profile">
      <h1>Edit Profile</h1>
      <p>
        You can set your preffered display name, customize branded url and
        manage other personal settings.
      </p>
      <div className="upload-image">
        <img src="images/user1.jpg" alt="user" />
        <p>We recommend you to upload a 400x400 photo</p>
        <Button>Upload</Button>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Custom URL</Form.Label>
          <Form.Control
            type="text"
            name="url"
            value={input.url}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ display: "block" }}>Bio</Form.Label>
          <textarea
            name="bio"
            id="bio"
            cols="40"
            rows="5"
            value={input.bio}
            onChange={handleInput}
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Twitter Username</Form.Label>
          <Form.Text>
            Connect your twitter to gain more trust in the marketplace.
          </Form.Text>
          <Form.Control
            type="text"
            name="twitter"
            value={input.twitter}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Personal site or Portfolio</Form.Label>
          <Form.Control
            type="text"
            name="portfolio"
            value={input.portfolio}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Text>Your email for marketplace notifications.</Form.Text>
          <Form.Control type="email" placeholder="something@email.com" />
        </Form.Group>
        <Button onClick={handleSubmit}>Update Profile</Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default EditProfile;
