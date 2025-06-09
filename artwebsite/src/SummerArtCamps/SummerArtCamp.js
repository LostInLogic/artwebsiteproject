import React from "react";
import "./SummerArtCamp.css";
import SummerCampBooking from "../emails/CampRSVP";
import Camp1 from "../img/SummerArtCampsImg/artcamp1.avif";
import Camp2 from "../img/SummerArtCampsImg/artcamp2.avif";
import Camp3 from "../img/SummerArtCampsImg/artcamp3.avif";
import Camp4 from "../img/SummerArtCampsImg/artcamp4.avif";
import Camp5 from "../img/SummerArtCampsImg/artcamp5.avif";

const SummerArtCamp = () => {
  return (
    <div>
      <div className="summer-header">
        <div className="summer-images">
          <img src={Camp1} alt="Camp Craft" className="summer-img" />
        </div>
        <div className="summer-intro">
          <p className="summer-title">Summer Art Camp 2025</p>
          <p className="summer-intro">Fine Art | Crafts</p>
          <p className="summer-intro">4 days | 10 AM - 1 PM | $220</p>
        </div>
        <div className="summer-images">
          <img
            src={Camp2}
            alt="Students showing off bracelets"
            className="summer-img"
          />
        </div>
      </div>

      <div className="summer-schedule-container">
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Camp Weeks</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Availability</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Camp Info</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Location</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 16th - June 19th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 23rd - June 27th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 23rd - June 26th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 7th - June 10th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Wed, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 7th - July 10th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 14th - July 17th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 9-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 14th - July 18th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 21st - July 25th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 28th - August 1st</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <div className="summer-body-intro">
        <p>
          Come join our 4 day summer camps to build upon your creativity,
          explore new techniques, and most of all, have fun!
        </p>
        <div className="summer-body-images">
          <img
            src={Camp3}
            alt="Camp Craft on Window"
            className="summer-body-img"
          />
          <img
            src={Camp4}
            alt="Popsicle Stick Camp Craft"
            className="summer-body-img"
          />
          <img
            src={Camp5}
            alt="Fox in Den Camp Craft"
            className="summer-body-img"
          />
        </div>
      </div>

      <div className="summer-body">
        <div className="summer-body-text">
          <p>Learn to draw fine art and create new crafts every day!</p>
          <p>
            Last year, our summer camp spots filled up fast, so don’t wait to
            reserve your spot!
          </p>
          <p>
            To secure your spot, full payment is required. Please email us with
            the camp/studio you’re interested in to begin the reservation
            process.
          </p>
          <p>
            Our regular art classes run year-round—check the studio links above
            for schedules.
          </p>
          <div className="summer-body-subtext">
            <p className="summer-subtitle bigger-fontsize">
              Art Camp Schedule:
            </p>
            <p>
              Camps run for 4 days from 10 AM to 1 PM, with afternoon classes
              continuing during camp weeks. All supplies and snacks are included
              for $220 per session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummerArtCamp;