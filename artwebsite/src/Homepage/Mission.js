import React from "react"
import missionimg from "../img/HomepageImg/homemissionimg.avif"
import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission">
      <div className="photo">
        <img src={missionimg} alt="Flower vase piece" className="mission-img"></img>
      </div>
      <div className="statement">
        <p className="mission-title">Our Mission Statement:</p>
        <div className="text">
          <p>
            Art brings light, expression, and meaning into our lives. 
            At our studios, we provide the space, instruction, and inspiration to help you uncover that joy for yourself.
          </p>
          <p>
            We’ve proudly provided art lessons in San Diego for over 20 years, 
            offering a welcoming environment that nurtures creativity at every level—from curious beginners to seasoned artists.
          </p>
          <p>
            Our teaching is inspired by the timeless brilliance of the Renaissance masters, 
            helping each student connect with their inner artist through proven techniques and thoughtful guidance.
          </p>
          <p>
            Whether you're picking up a brush for the first time or refining your craft, 
            we’re here to support your artistic journey—and to help you create something truly joyful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission