import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TrendingProductBanner.css";
import bannerWomen from "../Assets/banner_women.png";
import bannerMen from "../Assets/banner_mens.png";
import bannerKid from "../Assets/banner_kids.png";

const TrendingProductBanner = () => {
  return (
    <div className="trending-banner">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
      >
        <div>
          <img src={bannerWomen} alt="Women's Fashion" />
        </div>
        <div>
          <img src={bannerMen} alt="Men's Fashion" />
        </div>
        <div>
          <img src={bannerKid} alt="Kids' Fashion" />
        </div>
      </Carousel>
    </div>
  );
};

export default TrendingProductBanner;
