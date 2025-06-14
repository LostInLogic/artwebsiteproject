import React from 'react'
import './ArtBirthdayParties.css'
import BirthdayBooking from '../emails/BirthdayBooking'

import bdayArtPartyPic from "../img/bdayArtPartyPicture.avif";
import bdayArtPartyGamePic from "../img/birthdayArtPartyGamePicture.avif";
import bdayArtParty1 from "../img/birthdayParty1.avif";

const ArtBirthdayParties = () => {
  return (
    <div className='birthday-section'>
      <p className="birthday-title">Celebrate Your Birthday With Us!</p>
      <div className="birthday-header">
        <div className="birthday-image">
          <img src={bdayArtPartyPic} alt="Girl using pastels on toucan art piece " className="pic-image"></img>
        </div>
        <div className="birthday-intro">
          <div className="birthday-intro-desc">
            <p className="birthday-intro-desc-text bottom-spacing">
              Celebrate your birthday with us! Enjoy your time with friends and
              family with a private art lesson and birthday activities.
            </p>
            <p className='birthday-contact'>
              <p className="birthday-intro-desc-contact">Email us to book now!</p>
              <BirthdayBooking />
            </p>
          </div>
        </div>
      </div>

      <div className='line-container'>
        <div className='line'></div>
      </div>

      <div className="birthday-body">
        <div className="birthday-section-block">
          <p className="birthday-subtite bolded">What We Offer</p>
          <p className="birthday-info text-font">
            Our birthday parties provide 2 hours of fun and creativity,
            including a 1-hour 15-minute pastel art lesson, time for food,
            setup, and even games if requested.
            <ul className="text-font">
              <li>Tailored for ages 5 and up.</li>
              <li>All art supplies provided.</li>
              <li>Focus on drawing, coloring, and shading techniques.</li>
              <li>Create a personalized pastel art piece.</li>
            </ul>
          </p>
          <div className="birthday-section-pictures">
            <div className="birthday-section-picture-block">
                <div className="birthday-image">
                    <img src={bdayArtPartyGamePic} alt="Girl playing pin the color on the paint palette" className="pict-images"></img>
                    <p className="top-small-space1">Game in progress!</p>
                </div>
            </div>
            <div className="birthday-section-picture-block">
                <div className="birthday-image">
                    <img src={bdayArtParty1} alt="Birthday Party holding art pieces" className="pict-images"></img>
                    <p className="top-small-space2">End results!</p>
                </div>
            </div>
          </div>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite bolded">Pricing</p>
          <div className='line-container2'>
            <div className='line2'></div>
          </div>
          <div className="birthday-pricing">
            <div className="package-info">
              <p className="birthday-subtite bolded">Base Price</p>
              <p className="text-font">$250 for a minimum of 8 children</p>
            </div>
            <div className="package-info">
              <p className="birthday-subtite bolded">Additional Guests</p>
              <p className="text-font">$25 per additional child</p>
              <p className="text-font">(up to 20 students)</p>
            </div>
          </div>
          <div className='line-container2'>
            <div className='line2'></div>
          </div>
          <div className="birthday-addon">
            <p className="birthday-subtite bolded">Optional Add-On</p>
            <p className="birthday-info bottom-spacing text-font">
              <span className='bolded'>$10 per mat:</span> Party favor mats for the kids' finished artwork
            </p>
            <p className="birthday-info bottom-spacing text-font">
              These mats allow the children to take home a ready-to-hang
              masterpiece! If not purchased, the artwork will be rolled up, as
              we do in regular art classes.
            </p>
          </div>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite bolded">What's Included?</p>
          <p className="birthday-info">
            <ul className="text-font">
              <li>All supplies for a pastel art project.</li>
              <li>A 1-hour 15-minute guided art lesson.</li>
              <li>
                A party table for food, gifts, or decorations (you may bring
                your own tablecloth and decor).
              </li>
              <li>
                30 minutes after the lesson for food, cake, and celebrations.
              </li>
            </ul>
          </p>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite bolded">Booking and Policies</p>
          <p className="birthday-info">
            <ul className="text-font">
              <li><span className='bolded'>Payment:</span> Required 7 days before the event</li>
              <li>
                <span className='bolded'>Final Participation Number:</span> We ask that you provide the number
                of participants you will have 7 days before your event so we can
                send an invoice. If participants cancel or no show to event, no
                refunds will be given for those participants missing the event.
              </li>
              <li>
                <span className='bolded'>Cancellation of event:</span> A full refund is available if you provide
                a notice of cancellation email 24 hours before the event starts.
              </li>
              <li>
                <span className='bolded'>Dining Area:</span> We recommend food that doesn't require seating, as
                formal dining areas are not available at the studio.
              </li>
              <li>
                <span className='bolded'>Parent Guidelines:</span> Parents drop off kids for the lesson; only
                the birthday child's parents may stay to minimize distractions.
                All parents are welcome for the final 30 minutes for food and
                cake.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="birthday-booking">
        <div>
            <p className="text-font bottom-spacing">Ready to Book?</p>
        </div>
        <div>
            <p className="text-font"> Email: <BirthdayBooking/></p>
        </div>
      </div>
    </div>
  );
}

export default ArtBirthdayParties