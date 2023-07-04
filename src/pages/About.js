import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile}
          alt={"a sunset"}
          />
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Davion Thompson</div>
        <div className="brief_description">
          Queens New York native with a passion for music, tech, and mixed martial arts. A strong fan of language exchange and learning more about other cultures. Amogst my free time i spend mixing my hobbies into code.
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}