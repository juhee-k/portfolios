import React from "react";
import "./projectBox.scss";


const projectBox = (props) => (
  <div className="portfolio__box">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
        <p className="font12 weight500"><a href={props.live} className="font12 weight500">{props.live}</a></p>
        <p className="font12 weight500"><a href={props.project} className="font12 weight500">{props.project}</a></p>
        <a href={props.url} className="cta-btn cta-btn--resume">Live link</a>

      </div>
    </div>
  </div>
);

export default projectBox;
