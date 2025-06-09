import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import "./SideInfoSlide.css";
import slide1 from "../slideshow/slide1.avif";
import slide2 from "../slideshow/slide2.avif";
import slide3 from "../img/LocationsImg/bonitaArt1.avif";
import slide4 from "../slideshow/slide4.avif";

const Slide = () => {
  const images = [slide1, slide2, slide3];

  const OPTIONS = {
    loop: true,
    draggable: true,
    align: "start",
  };

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel(OPTIONS, [autoplay]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              {index === images.length - 1 ? (
                <div className="last-slide">
                  <div className="dual-image-container">
                    <div className="image-container remove-div">
                      <img
                        src={slide3}
                        alt="Art by Carolina U."
                        className="slide-half-slide"
                      />
                      <p className="image-caption-bottom">
                        Art by Carolina U., Age 14, Watercolors
                      </p>
                    </div>
                    <div className="image-container">
                      <img
                        src={slide4}
                        alt="Art by Paloma H."
                        className="slide-half-slide"
                      />
                      <p className="image-caption-top">
                        Art by Paloma H., Age 12, Oils
                      </p>
                    </div>
                  </div>

                  <div className="social-media-section">
                    <p className="social-text">
                      Check out our students' art work on:
                    </p>
                    <div className="slide-icons">
                      <a
                        aria-label="Go to our Facebook"
                        href="https://www.facebook.com/artwithlarisse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="slide-socials"
                      >
                        <FaFacebookSquare />
                      </a>
                      <a
                        aria-label="Go to our Instagram"
                        href="https://www.instagram.com/artwithlarisse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="slide-socials"
                      >
                        <BsInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slide"
                  />
                  <div className="slide-text-container">
                    {index === 0 && (
                      <>
                        <div className="slide-text">
                          Try your first class for free!
                        </div>
                        <Link
                          to="/childrens-art-classes"
                          className="free-class-button"
                        >
                          Learn More
                        </Link>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="slide-text">
                          Check out our summer art camps!
                        </div>
                        <Link to="/summer-art-camp" className="free-class-button">
                          View Schedule
                        </Link>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
