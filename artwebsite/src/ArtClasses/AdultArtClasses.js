import React from "react";
import './AdultArtClasses.css';
import { Link } from "react-router-dom";

import paintingPicture from "../img/AdultArtClassesImg/adultPortrait.avif";
import aboutTrialsPicture from "../img/AdultArtClassesImg/lizardDrawing.avif";
import adultClassPaintingPicture from "../img/AdultArtClassesImg/adultclasspaintingpicture.avif";

const AdultArtClasses = () => {
  return (
    <div className="AdultArtClass">
      <div className="title-text">
        <h2>Adult Art Classes</h2>
      </div>
      <div className="img-photos">
        <img
          src={paintingPicture}
          alt="Student Art Work"
          className="adult-classes-top-pic"
        ></img>
      </div>
      <div className="top-content">
        <p>Welcome to our Studio!</p>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="class-options">
        <div className="bg-rectt">
          <div className="class-options-content">
            <div className="class-options-text">
              <h4>
                We offer two choices when it comes to adult participation:
              </h4>
              <p>
                1. We welcome adults to attend our all-ages classes at any of
                our studios. We have mostly children attending, but there are
                adults sprinkled within those classes. You can simply call the
                studios directly to establish a trial class and give it a try.
              </p>
              <p>
                2. We also have an adult only class option. Currently we only
                have one of these classes in La Mesa on Tuesday evening from
                6:00 to 8:30PM. This is considered a double class and only is
                attendance twice a month. Spaces are limited. Please email to
                check availability for this adult only class.
              </p>
              <a
                className="adult-class-email"
                href="mailto:artwithlarisse@gmail.com"
              >
                artwithlarisse@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img-photo">
        <img
          src={adultClassPaintingPicture}
          className="adult-class-painting-pic"
          alt="Student Painting"
        ></img>
      </div>
      <div className="about-classes">
        <h4>About our Classes:</h4>
        <ul>
          <li>
            We have 3 locations,{" "}
            <Link to="/locations/art-classes-la-mesa" className="location-link">
              La Mesa
            </Link>
            ,{" "}
            <Link to="/locations/art-classes-santee" className="location-link">
              Santee
            </Link>
            , and {" "}
            <Link to="/locations/bonita" className="location-link">
              Bonita
            </Link>
            .
          </li>
          <li>
            All of our studios offer fine art classes to children and adults
            ages 5 and up.
          </li>
          <li>
            Our classroom is set up to teach multiple ages and abilities all in
            one class. Students receive individualized instruction as no two
            students are working on the same project.
          </li>
          <li>
            Students will learn how to use pastels, watercolors, and eventually
            oil paints. Our instructors are trained to work with all levels of
            students in this one-hour class.
          </li>
          <li>
            We provide a full hour of instruction followed by 15 minutes of
            clean up time after the class.
          </li>
          <li>
            Pastel supplies will be provided during the first trial class,
            supploes will then need to be purchased before the next class. Our
            supplies are very specific to our studio so we will explain what
            will be needed during the first trial class.
          </li>
          <li>
            Whether the student has previous experience with art or not, we can
            establish where you are and how you would like to continue to learn.
            We are able to provide lessons in any of the mediums that we work
            within the studio.
          </li>
        </ul>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="about-trials">
        <div className="bg-rectt">
          <div className="about-trials-contents">
            <div className="img-photos">
              <img
                src={aboutTrialsPicture}
                alt="Bearded Dragon Art Work"
                className="trials-pic"
              ></img>
            </div>
            <div className="about-trials-text-content">
              <h4>About our Trials:</h4>
              <p>
                {" "}
                For a trial lesson at the studio, please call and leave a
                message. They will call you back with more information. The
                first trial class will be invoiced before the first lesson. If
                you like the class and would like to sign up for a month, you
                will receive one class credit to apply to that first month
                tuition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdultArtClasses