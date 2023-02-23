import styles from "./Slider.module.css";
import React, { useRef, useEffect, useState } from "react";

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
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Slider() {
  const items = ["/Img/91.jpg", "/Img/92.jpg", "/Img/93.jpg", "/Img/94.jpg", "/Img/95.jpg", "/Img/96.jpg"];
  const itemSize = items.length;
  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const 양끝에_추가될_데이터수 = 2;
  const [currentIndex, setCurrentIndex] = useState(양끝에_추가될_데이터수);
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideX, setSlideX] = useState(null);
  const [prevSlideX, setPrevSlideX] = useState(false);

  let slides = setSlides();
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  // 스피드 영향 미침 1.2초 한번씩 슬라이드
  useInterval(
    () => {
      handleSlide(currentIndex + 1);
    },
    !isSwiping && !prevSlideX ? 1200 : null
  );

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  }

  function handleSlide(index) {
    setCurrentIndex(index);
    if (index - 양끝에_추가될_데이터수 < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - 양끝에_추가될_데이터수 >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function getItemIndex(index) {
    index -= 양끝에_추가될_데이터수;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  function getClientX(event) {
    return event._reactName === "onTouchStart"
      ? event.touches[0].clientX
      : event._reactName === "onTouchMove" || event._reactName === "onTouchEnd"
      ? event.changedTouches[0].clientX
      : event.clientX;
  }

  // 호버클릭이랑 관련되어있음
  function handleTouchMove(e) {
    if (prevSlideX) {
      setSlideX((slideX) => getClientX(e) - prevSlideX);
    }
  }

  return (
    <div className={styles.sliderArea}>
      <div className={styles.slider}>
        <div className={styles.sliderList} style={{ padding: sliderPaddingStyle }}>
          <div
            className={styles.sliderTrack}
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${(-100 / slides.length) * (0.5 + currentIndex)}% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`${styles.sliderItem} ${currentIndex === slideIndex ? styles.currentSlide : ""}`}
                  style={{ width: "35rem" }}
                  onTouchMove={handleTouchMove}
                  onMouseMove={handleTouchMove}
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

export default Slider;
