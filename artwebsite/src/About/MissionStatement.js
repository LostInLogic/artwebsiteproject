import React from "react";
import "./MissionStatement.css"

import Lightbox from "yet-another-react-lightbox";
import {msSlides} from "./MissionStatementSlides.js";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const MissionStatement = () => {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);
  const [autoplay, setAutoplay] = React.useState(true);
  const [delay, setDelay] = React.useState(5000);

  return (
    <div>
      <div className="mission-header">
        <p className="mission-pg-title">Mission Statement</p>
        <div className="mission-text">
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
      <div className='line-container'>
        <div className='line'></div>
      </div>

      <Lightbox
        index={index}
        slides={msSlides}
        slideshow={{ autoplay, delay }}
        plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3/2",
            margin: "50px auto",
          },
        }}
      />

    </div>
  );
}

export default MissionStatement;