import logo from "./assets/imgs/logo.png";
import classes from "./App.module.css";
import HeroBackground from "./assets/imgs/hero-background.png";
import CabinImg from "./assets/imgs/cabin-interior.jpg";
import LodgeImg from "./assets/imgs/lodge-room.jpg";
import RVSiteImg from "./assets/imgs/rv-site.jpg";
import VideosBackground from "./assets/imgs/videos-image.png";
import VideoCover from "./assets/imgs/video-cover.jpg";
import FlyFishing from "./assets/imgs/fly-fishing.jpg";
import Doggo from "./assets/imgs/doggo.png";
import TripAdvisor from "./assets/imgs/trip-advisor.png";
import Carousel, { CarouselItem } from "./components/Carousel/Carousel";
import YoutubeEmbed from "./components/YoutubeEmbed/YoutubeEmbed";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import IntroVideo from "./assets/video/intro.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faStore,
  faBathtub,
  faWifi,
  faTemperatureArrowUp,
  faKitchenSet,
  faMugHot,
  faFire,
  faSnowflake,
  faRadio,
  faXRay,
  faCaravan,
  faPlug,
  faCarSide,
  faWater,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const headline = params.get("headline");

  return (
    <div className={classes["app"]}>
      <div class="dicknose"></div>
      <div className={classes["container"]}>
        <header>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes["phone-number"]}>
            <a href="tel:+2087426634">
              Call to Book:
              <br />
              (208) 742-6634
            </a>
          </div>
        </header>
        <div className={classes["section1"]}>
          <div
            className={classes["hero-background"]}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${HeroBackground})`,
              height: "100%",
            }}
          >
            <div className={`${classes["container"]} ${classes["content"]}`}>
              <p>River's Fork Lodge</p>
              <h1>{headline}</h1>
              {/* <h1>Remote Trout Fishing Trip In North Fork Idaho</h1> */}
              <p>
                <img
                  src={TripAdvisor}
                  alt=""
                  style={{ width: "20px", height: "20px", marginRight: "3px" }}
                />
                Rated #1 Lodges in North Fork Idaho by Tripadvisor. Book your
                next fishing trip at River’s Fork Lodge.
              </p>
              <button
                type="button"
                className="bookRes1"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://hotels.cloudbeds.com/reservation/pJf7oH";
                }}
              >
                Book Reservation
              </button>
            </div>
          </div>
        </div>
        <div className={classes["section2"]}>
          <div className={`${classes["content"]}`}>
            <h1>River's Fork Lodge Accommodations</h1>
            <p>
              Clean and refreshing, our large cabin and lodge rooms are perfect
              for winding down following a long day of fishing.
            </p>
            <Carousel>
            <CarouselItem>
                <div className={classes["listing"]}>
                  <div className={classes["listing__image"]}>
                    <img src={CabinImg} alt="" style={{ width: "100%" }} />
                  </div>
                  <div className={classes["listing__title"]}>
                    <h3>Riverfront Private Cabin</h3>
                    <p>Situated where the Salmon &amp; North Fork River Meet</p>
                  </div>
                  <div className={classes["listing__amenities"]}>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faBed} />
                      <span>Sleeps 14</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faBathtub} />
                      <span>Bathroom</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faKitchenSet} />
                      <span>Kitchen</span>
                    </div>
                    <div className={classes["break"]}></div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faWifi} />
                      <span>Free Wifi</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faFire} />
                      <span>Fireplace</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faStore} />
                      <span>Market</span>
                    </div>
                  </div>
                  <div className={classes["listing__price__availability"]}>
                    <div className={classes["listing__price"]}>
                      <span>Call for Details</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://hotels.cloudbeds.com/reservation/pJf7oH";
                      }}
                      className={`${classes["listing__availability"]} viewAvail1`}
                    >
                      View Availability
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className={classes["listing"]}>
                  <div
                    className={classes["listing__image"]}
                    style={{ position: "relative" }}
                  >
                    <img
                      src={LodgeImg}
                      alt=""
                      style={{ width: "100%", position: "relative" }}
                    />
                    {/* <div
                      style={{
                        position: "absolute",
                        top: "0",
                        height: "100%",
                        width: "50px",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        console.log('click left')
                      }}
                    >
                      {"<"}
                    </div> */}
                  </div>
                  <div className={classes["listing__title"]}>
                    <h3>Riverfront Double Queen</h3>
                    <p>Situated where the Salmon &amp; North Fork River Meet</p>
                  </div>
                  <div className={classes["listing__amenities"]}>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faBed} />
                      <span>2 Qeens</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faBathtub} />
                      <span>Bathroom</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faWifi} />
                      <span>Free Wifi</span>
                    </div>
                    <div className={classes["break"]}></div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faXRay} />
                      <span>Microwave</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faSnowflake} />
                      <span>Mini Fridge</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faMugHot} />
                      <span>Coffee</span>
                    </div>
                  </div>
                  <div className={classes["listing__price__availability"]}>
                    <div className={classes["listing__price"]}>
                      $169<span>/Night</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://hotels.cloudbeds.com/reservation/pJf7oH";
                      }}
                      className={`${classes["listing__availability"]} viewAvail2`}
                    >
                      View Availability
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className={classes["listing"]}>
                  <div className={classes["listing__image"]}>
                    <img src={RVSiteImg} alt="" style={{ width: "100%" }} />
                  </div>
                  <div className={classes["listing__title"]}>
                    <h3>Riverfront RV Pad</h3>
                    <p>Situated where the Salmon &amp; North Fork River Meet</p>
                  </div>
                  <div className={classes["listing__amenities"]}>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faCaravan} />
                      <span>8 Sites</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faWater} />
                      <span>Riverfront</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faPlug} />
                      <span>Hookups</span>
                    </div>
                    <div className={classes["break"]}></div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faWifi} />
                      <span>Free Wifi</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faCarSide} />
                      <span>Parking</span>
                    </div>
                    <div className={classes["listing__amenity"]}>
                      <FontAwesomeIcon icon={faBolt} />
                      <span>20/30/50</span>
                    </div>
                  </div>
                  <div className={classes["listing__price__availability"]}>
                    <div className={classes["listing__price"]}>
                      $49<span>/Night</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://hotels.cloudbeds.com/reservation/pJf7oH";
                      }}
                      className={`${classes["listing__availability"]} viewAvail3`}
                    >
                      View Availability
                    </button>
                  </div>
                </div>
              </CarouselItem>

            </Carousel>
          </div>
        </div>
        <div className={classes["section3"]}>
          <div
            className={classes["videos-background"]}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${VideosBackground})`,
            }}
          >
            <div className={`${classes["container"]} ${classes["content"]}`}>
              <h1>Tour Our Beautiful Fishing Destination</h1>
              <p>
                Discover tranquility, take a break from the noise, get knee-deep
                in the trout-filled springs of North Fork Idaho.
              </p>
              {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
              {/* <YoutubeEmbed embedId="m4Jf0Hiv4tU" /> */}
              <video width="100%" controls style={{ marginBottom: "1rem" }} poster={VideoCover}>
                <source src={IntroVideo} type="video/mp4" />
              </video>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  className="bookRes2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://hotels.cloudbeds.com/reservation/pJf7oH";
                  }}
                >
                  Book Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["section4"]}>
          <div className={`${classes["content"]}`}>
            <h1>Frequently Asked Questions</h1>
            <p>
              Here are some common questions from our guest, if you don't spot
              the answer you're looking for, feel free to call us.
            </p>
            <div className={classes["questions"]}>
              <div className={classes["question"]}>
                <h4>Is a kitchen available in the Lodge and Cabin?</h4>
                <p>
                  Our Cabin provides a spacious kitchen, fully stocked with all
                  necessary appliances and kitchenware. <br />
                  <br /> Our lodge (hotel), has a microwave, mini fridge, and
                  Keurig coffee machine.
                </p>
              </div>
              <div className={classes["question"]}>
                <h4>How far is the closest market place?</h4>
                <p>
                  The North Fork General Store is walking distance from our
                  compound.
                  <br />
                  <br />
                  You will find many supplies there, including most household
                  items, tools, fishing tackle, ice, medicine, wine and spirits,
                  they even have a fresh ice cream stand, and some really cool
                  souvenirs.
                  <br />
                  <br />
                  For food we recommend visiting the city of Salmon, which is a
                  20 minute drive south on the 93.
                </p>
              </div>
              <div className={classes["question"]}>
                <h4>How far is the nearest town or city?</h4>
                <p>
                  The quaint city of Salmon is just 20 minutes (20 miles) by
                  car.
                  <br />
                  <br />
                  Anything not found in the general store can be found in
                  Salmon.
                </p>
              </div>
              <div className={classes["question"]}>
                <h4>Are pets permitted to stay overnight, is there a fee?</h4>
                <p>
                  We welcome your pets, but we do require a pet fee of $75 per
                  each animal.
                </p>
              </div>
            </div>
            <div className={classes["addtl-questions"]}>
              <img src={Doggo} alt="" />
              <h4>Still have questions?</h4>
              <p>
                Can’t find the answer you’re looking for? <br /> Please contact
                us.
              </p>
              <div className={classes["phone-number"]}>
                <a href="tel:+2087426634">
                  <h3>Call Us: 208-742-6634</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
