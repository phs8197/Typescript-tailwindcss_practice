import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Main1 from "../img/main01.png";
import Main2 from "../img/main02.png";
import Main3 from "../img/main03.png";
import Main4 from "../img/main04.png";

function Main() {
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Main1})` }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Main2})` }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Main3})` }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Main4})` }}
            className="h-screen"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Main;
