import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p className="photographer">{data.photographer}</p>
      <p className="download">
        <a target="_blank" href={data.src.large}>
          Download
        </a>
      </p>
    </div>
  );
};

export default Picture;
