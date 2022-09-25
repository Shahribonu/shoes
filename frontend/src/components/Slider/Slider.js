import React, { useState } from "react";
import "./Slider.css";
import slider1 from "../../assets/images/product1.jpg";
import slider2 from "../../assets/images/image-product-2.jpg";
import slider3 from "../../assets/images/image-product-3.jpg";
import slider4 from "../../assets/images/image-product-4.jpg";

function Slider() {
  const imgs = [
    { id: 0, value: slider1 },
    { id: 1, value: slider2 },
    { id: 2, value: slider3 },
    { id: 3, value: slider4 },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  return (
    <div className="flex items-center justify-center flex-col mt-[80px]">
      <div className="h-[450px] w-[400px]">
        <img
          src={wordData.value}
          className="object-cover h-[450px] w-[400px] rounded-lg"
        />
      </div>

      <div className="flex_row">
        {imgs.map((data, i) => (
          <div className="thumbnail h-[70px] w-[100px] rounded-lg" key={i}>
            <img
              className={
                wordData.id == i
                  ? "clicked h-[70px] w-[100px] object-cover rounded-lg"
                  : ""
              }
              src={data.value}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
