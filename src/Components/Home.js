import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background3.png";
import BannerImage from "../Assets/home-banner-image.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Modal from 'react-modal'; 

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Lorem
          </h1>
          <p className="primary-text">
           
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum odio in nisl sollicitudin mollis.
 Vestibulum tellus diam, elementum mattis mattis mollis, finibus in ex. Cras ac augue pellentesque, viverra odio a, 
 dolor sit amet, consectetur adipiscing elit. Proin vestibulum odio in isl sollicitudin mollis.
 Vestibulum tellus diam, elementum mattis mattis mollis, finibus in ex. Cras ac augue pellentesque, viverra odio a, 
 
          </p>
          <button className="secondary-button" onClick={() => setVisible(true)}>
            Log In <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Modal
                isOpen={visible}
                onRequestClose={() => setVisible(false)}
                contentLabel="Login Modal"
                className="Modal">

                <h2 className="h2">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <button type="button" onClick={() => setVisible(false)} className="btn btn-secondary">Close</button>
                </form>
            </Modal>
    </div>
  );
};

export default Home;
