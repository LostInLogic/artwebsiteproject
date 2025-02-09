import React from "react";
import "./Team.css";
import Larisse from "./img/instruc-larisse.jpg";
import Jessica from "./img/instruc-jessica.jpg";
import Jelisa from "./img/instruc-jelisa.jpg";
import Macie from "./img/instruc-macie.jpg";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-header">Meet Our Instructors</div>
      <div className="team-grid">
        <div className="team-item">
          <div className="team-imgs">
            <img src={Larisse} alt="Larisse Robinson" className="team-img" />
          </div>
          <p className="team-name">Larisse Robinson</p>
          <p className="team-des">Business Owner</p>
          <p className="bio">
            She has enjoyed art from a young age and has won awards for her art
            over the years. She started teaching art in 1998 in Los Angeles,
            California at a well known and successful company called Mission:
            Renaissance (Fine Art Classes). While attending an extensive and
            thorough art training course, she learned all the techniques
            necessary to teach fine art. With a couple of years of art
            instruction experience, she moved down to San Diego, California.
            Soon after, she began creating an art studio of her own. She held
            her first art class in 2001 and in one year went from 8 art students
            to an impressive 80 art students. She teaches students various basic
            and advanced art techniques according to their skill level. Larisse
            thoroughly enjoys teaching art and is looking forward to seeing more
            students come aboard to join the fun.
          </p>
        </div>

        <div className="team-item">
          <div className="team-imgs">
            <img src={Jessica} alt="Jessica Velazquez" className="team-img" />
          </div>
          <p className="team-name">Jessica Velazquez</p>
          <p className="team-des">Santee Studio Program Director</p>
          <p className="bio">
            Jessica joined us in 2012. She really enjoys working with oils and
            watercolors. She enjoys seeing her students grow and develop on
            their artistic journey. She . also has found time for face painting
            and balloon twisting. When not at the studio she can be found
            creating art and memories with her two amazing kids and loving
            husband.
          </p>
        </div>

        <div className="team-item">
          <div className="team-imgs">
            <img src={Jelisa} alt="Jelisa Corpuz" className="team-img" />
          </div>
          <p className="team-name">Jelisa Corpuz</p>
          <p className="team-des">Bonita Studio Program Director</p>
          <p className="bio">
            Jeslisa joined us in 2015. Her preferred art materials include
            watercolors, pastel on velour, and digital art -- in which her style
            stems from the anime/manga genre (sometimes realism), mixed into the
            fine arts program that is used at Art with Larisse. Jelisa has taken
            on other forms of art such as face painting and enjoys doing various
            crafts such as sticker decorating and sewing. In her spare time, she
            is working towards becoming a preschool teacher to help nurture and
            grow curious minds of children. She appreciates a classroom balance
            of trust, friendship. autonomy, and communication between herself
            and the students and their guardians.
          </p>
        </div>

        <div className="team-item">
          <div className="team-imgs">
            <img src={Macie} alt="Macie Deniz" className="team-img" />
          </div>
          <p className="team-name">Macie Deniz</p>
          <p className="team-des">La Mesa Studio Program Director</p>
          <p className="bio">
            Macie joined us in 2022. She really enjoys working with oils and
            especially enjoys art with bright colors and fun characters. She
            also hosts paint parties and is currently working on getting more
            into illustrating. If she's not at the studio you can always find
            her at the beach or cozied up to watch a good show.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
