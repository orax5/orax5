import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      1;
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function youmTest() {
  const items = [
    "/Img/dummy/1.jpg",
    "/Img/dummy/5.jpg",
    "/Img/dummy/9.jpg",
    "/Img/dummy/1.jpg",
    "/Img/dummy/5.jpg",
    "/Img/dummy/1.jpg",
    "/Img/dummy/5.jpg",
  ];
  const itemSize = items.length;
  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  const transitionStyle = `transform 1s ease-in-out`;
  const SIDE_DATA = 3;
  const [currentIndex, setCurrentIndex] = useState(SIDE_DATA);
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideX, setSlideX] = useState(null);
  const [prevSlideX, setPrevSlideX] = useState(false);
  let isResizing = useRef(false);

  let slides = setSlides();
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < SIDE_DATA) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  useInterval(
    () => {
      handleSlide(currentIndex + 1);
    },
    !isSwiping && !prevSlideX ? 2000 : null
  );

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(index);
    }, 1000);
  }

  function handleSlide(index) {
    setCurrentIndex(index);
    if (index - SIDE_DATA < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - SIDE_DATA >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function handleSwipe(direction) {
    setIsSwiping(true);
    handleSlide(currentIndex + direction);
  }

  function getItemIndex(index) {
    index -= SIDE_DATA;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  return (
    <div className="slider-area">
      <div className="slider">
        <SlideButton direction="prev" onClick={() => handleSwipe(-1)}>
          &lt;
        </SlideButton>
        <SlideButton direction="next" onClick={() => handleSwipe(1)}>
          &gt;
        </SlideButton>
        <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
          <div
            className="slider-track"
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${
                (-100 / slides.length) * (0.5 + currentIndex)
              }% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`slider-item ${
                    currentIndex === slideIndex ? "current-slide" : ""
                  }`}
                  style={{ width: "20rem" || "auto" }}
                >
                  <img src={items[itemIndex]} alt={`banner${itemIndex}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const SlideButton = styled.button`
  font-size: large;
  color: red;
`;
export default youmTest;
