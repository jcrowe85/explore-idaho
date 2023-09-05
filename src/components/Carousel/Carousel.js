import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./Carousel.module.css";

export const CarouselItem = ({
  children,
  width,
  handleTouchStart,
  handleTouchEnd,
}) => {
  return (
    <div
      className={classes["carousel-item"]}
      style={{ width: width }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (activeIndex + 1 >= children.length) {
        setActiveIndex(0)
      }
      if (activeIndex + 1 < children.length) {
        setActiveIndex(prevState => prevState + 1)
      }
    }, 5000);
    return () => {
      clearTimeout(timer1);
    }
  }, [activeIndex])

  const checkDirection = () => {
    if (touchStartX > touchEndX && activeIndex + 1 != children.length) {
      setActiveIndex((prevState) => prevState + 1);
    }
    if (touchStartX < touchEndX && activeIndex != 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
    checkDirection();
  };

  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className={classes["carousel"]}>
      <div
        className={classes["inner"]}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            handleTouchStart,
            handleTouchEnd,
            width: "100%",
          });
        })}
      </div>
      <div className={classes["indicators"]}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? classes["active"] : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
