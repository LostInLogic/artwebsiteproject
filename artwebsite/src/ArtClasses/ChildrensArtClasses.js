import React from "react";
import { Link } from "react-router-dom";
import './ChildrensArtClasses.css';

import mainPicture from "../img/ChildrensArtClassesImg/childrensartclassestoppicture.avif";
import aboutTrialsPicture from "../img/ChildrensArtClassesImg/childrensartclassestrialpicture.avif";

const ChildrensArtClasses = () => {
  return (
    <div className="ChildrensArtClass">
      <div className="title-text">
        <h2>Art Classes</h2>
      </div>
      <div className="img-photo">
        <img
          src={mainPicture}
          alt="Instructor and Student"
          className="reg-classes-top-pic"
        ></img>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="class-options">
        <div className="bg-rect">
          <div className="class-options-content">
            <div className="class-options-texts">
              <h4>About our Classes:</h4>
              <ul>
                <li>We have 3 locations:</li>
                <div className="class-options-location-boxes">
                  <button className="button2">
                    <Link to="/locations/art-classes-la-mesa">La Mesa</Link>
                  </button>
                  <button className="button2">
                    <Link to="/locations/art-classes-bonita">Bonita</Link>
                  </button>
                  <button className="button2">
                    <Link to="/locations/art-classes-santee">Santee</Link>
                  </button>
                </div>
                <li>
                  All of our studios offer fine art classes to children and
                  adults ages 5 and up.
                </li>
                <li>
                  Students will learn how to use pastels, watercolors, and
                  eventually oil paints. Our instructors are trained to work
                  with all levels of students in this one-hour class.
                </li>
                <li>
                  We provide a full hour of instruction followed by 15 minutes
                  of clean up time after the class.
                </li>
                <li>
                  Pastel supplies will be provided during the first trial class,
                  supplies will then need to be purchased before they continue.
                  Our supplies are very specific to our studio so we will
                  explain what will need to be purchased after the initial trial
                  class.
                </li>
                <li>
                  We will ask that parents remain outside the studio during the
                  class to keep a professional environment for the students with
                  limited distractions.
                </li>
                <li>
                  To contact one of the studios for scheduling or a trial class,
                  please select the studio and give them a call!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="about-trials">
        <div className="bg-rect">
          <div className="about-trials-content">
            <div className="img-photo">
              <img
                src={aboutTrialsPicture}
                alt="Student using Pastels"
                className="about-trials-picture"
              ></img>
            </div>
            <div className="about-trials-texts">
              <h4>About our Trials:</h4>
              <p>
                We offer a free trial class to students ages 5-17 who have never
                attended before. For a trial lesson at the studio, please call
                and leave a message. We will call you back with more
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildrensArtClasses