import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [animSlide, setAnimSlide] = useState({
    index: 1,
    inProgress: false,
  });
  const nextSlide = () => {
    if (animSlide.index !== dataSlider.length && !animSlide.inProgress) {
      setAnimSlide({ index: animSlide.index + 1, inProgress: true });
      setTimeout(() => {
        setAnimSlide({ index: animSlide.index + 1, inProgress: false });
      }, 500);
    } else if (animSlide.index === dataSlider.length && !animSlide.inProgress) {
      setAnimSlide({ index: 1, inProgress: true });
      setTimeout(() => {
        setAnimSlide({ index: 1, inProgress: false });
      }, 500);
    }
  };
  const prevSlide = () => {
    if (animSlide.index !== 1 && !animSlide.inProgress) {
      setAnimSlide({ index: animSlide.index - 1, inProgress: true });
      setTimeout(() => {
        setAnimSlide({ index: animSlide.index - 1, inProgress: false });
      }, 500);
    } else if (animSlide.index === 1 && !animSlide.inProgress) {
      setAnimSlide({ index: 5, inProgress: true });
      setTimeout(() => {
        setAnimSlide({ index: 5, inProgress: false });
      }, 500);
    }
  };
  const moveDot = (index)=> {
      setAnimSlide({index:index, inProgress:false})
  }
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              animSlide.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <div className="container-dots">
          {Array.from({length:5}).map((item,index)=> {
              return (
                  <button className={animSlide.index===index+1?"dot active":"dot"}
                  onClick={()=> {moveDot(index+1)}}
                  >

                  </button>
              )
          })}

      </div>
    </div>
  );
}
