import React from "react";
import "./CharterSchool.css"

import corgyPicture from "../img/CharterSchoolImg/corgyPicture.avif";
import vanGoghPicture from "../img/CharterSchoolImg/vanGoghPicture.avif";

const CharterSchool = () => {
  return (
    <div>
      <div className="charter-header">
        <div className="title-section">
          <div className="img-photo">
            <img
              src={corgyPicture}
              alt="Corgy Art Work"
              className="pict-image"
            ></img>
          </div>
          <p className="charter-title">Charter School Art Program</p>
          <div className="img-photo">
            <img
              src={vanGoghPicture}
              alt="Van Gogh Art Work"
              className="pict-image"
            ></img>
          </div>
        </div>
        <p className="charter-intro-subtitle">Welcome to Our Art Program!</p>
        <div className="charter-desc">
          <p>
            We are so glad that you have chosen to use our services. We have
            been working with charter schools since we opened our first studio
            in 2001. Because the charter schools do things a little differently,
            we have taken the time to help explain the process to make it easier
            for everyone.
          </p>
          <p>The first class is always free for new students ages 5-17!</p>
          <p>
            Whether you are a charter school or not, we recommend that all our
            students try out our program to make sure it is a good fit before
            they sign up for the classes. Please make sure you get that first
            free class set up and then we can go from there.
          </p>
        </div>
      </div>

      <div className="charter-partnership">
        <p className="charter-subtitle">Current Charter School Partnerships</p>
        <ul>
          <li>Pacific Coast Academy</li>
          <li>Literacy First Freedom Academy</li>
          <li>SoCal Scholars Academy</li>
          <li>Julian Charter School</li>
          <li>Springs Charter</li>
          <li>
            San Diego Regional Center{" "}
            <span className="charter-condition">
              (not a charter, but we follow similar protocols)
            </span>
          </li>
        </ul>
      </div>

      <div className="charter-prices">
        <p className="charter-subtitle">Costs</p>
        <div className="charter-costs-container">
          <div className="charter-costs-box"></div>
          <div className="charter-costs-box">
            <p className="charter-sub-title">Price</p>
          </div>
          <div className="charter-costs-box">
            <p className="charter-sub-title">Notes</p>
          </div>
          <div className="charter-costs-box">
            <p className="charter-sub-title">1-hour lesson</p>
          </div>
          <div className="charter-costs-box-price">$28.00</div>
          <div className="charter-costs-box">
            Charter Prices are different than regular because of the
            administrative work to process the paperwork each month
          </div>
          <div className="charter-costs-box">
            <p className="charter-sub-title">1 box of pastels</p>
          </div>
          <div className="charter-costs-box-price">$55.00</div>
          <div className="charter-costs-box">
            Can be shared between 2 students
          </div>
        </div>
        <p className="charter-condition">
          These are the initial expenses. Pastels are used for the first 8-12
          months, followed by watercolor (~1 year), and then oil painting.{" "}
        </p>
      </div>

      <div className="charter-funds">
        <p className="charter-subtitle">Requesting Funds</p>
        <div className="fund-steps">
          <p className="fund-subtitle">Step 1</p>
          <p>Schedule a trial class by giving us a call.</p>
        </div>
        <div className="fund-steps">
          <p className="fund-subtitle">Step 2</p>
          <p>Request the funds for that class and the pastel supplies. </p>
          <ul>
            <li>
              Be sure to request the right number of classes based on the day
              the student attends. Each month is different, there might be 4 or
              even 5 classes for the month.
            </li>
          </ul>
        </div>
        <div className="fund-steps">
          <p className="fund-subtitle">Step 3</p>
          <p>
            To hold your spot in class for the following month, just put in a
            request 30 days before the next month. Please do this early to avoid
            delays in processing.
          </p>
        </div>
      </div>

      <div className="charter-policies">
        <h4 className="charter-subtitle">Policies</h4>
        <ul>
          <li>
            Studio discounts for 12 weeks or siblings do not apply to charter
            school payments.
          </li>
          <li>Parents are responsible for any unpaid classes.</li>
          <li>
            Avoid putting in individual class requests. If you are attending for
            the month, put in a request for the full month in one certificate.
          </li>
          <li>
            Notice how many weekdays there are in the month before putting in a
            request.
          </li>
          <li>
            All classes paid for by a charter, including make-up classes, will
            need to be scheduled and used during the academic year. Credits are
            not to be rolled over into summer or the following school year.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharterSchool;