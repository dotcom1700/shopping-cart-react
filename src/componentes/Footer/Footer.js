import React from "react";
import "./Footer.css";
import brand_icon from "../../resources/img/brand-icon.png";
import fb_icon from "../../resources/img/facebook-icon.png";
import insta_icon from "../../resources/img/instagram-icon.png";
import * as STRING_CONSTANTS from "../../constants/string-constants";

function Footer() {
  return (
    <div className="bg-primary row w-100 mx-0 mt-2 pb-5 d-flex justify-content-center">
      <div className="col-8 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
        <img
          src={brand_icon}
          alt="Coffee Beans"
          className="my-4 mx-2 icon-xl"
        />
          <span className="text-light text-xs">{STRING_CONSTANTS.RIGHTS}</span>
        </div>
        <div>
          <span className="text-light text-xs me-2">Follow Us</span>
          <img src={fb_icon} className="rounded mx-1 icon-sm" />
          <img src={insta_icon} className="rounded  icon-sm" />
        </div>
      </div>
    </div>
  );
}

export { Footer };
