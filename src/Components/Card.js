import React from "react";

const Card = (props) => {
  const { image, title, description, tags, link } = props;
  return (
    <div className="Card">
      <a href={link}>
        <div className="Card-image">
          <img
            draggable="false"
            src={image}
            style={{ height: "100%" }}
            alt="Preview"
          />
        </div>
      </a>

      <div className="Card-title">{title}</div>
      <div className="Card-description">{description}</div>
      <div className="Card-tags">
        {tags.map((tag, index) => {
          return (
            <div className="Card-tag" key={index}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
