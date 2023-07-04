import React from "react";

const Themeitem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className="theme__img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default Themeitem;
