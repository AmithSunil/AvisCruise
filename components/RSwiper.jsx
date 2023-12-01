import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCard from "./SwiperCard"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import styles from "./Swiper.module.css"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

export default function RSwiper({ TrendingData, handleSubmit }) {
  return (
    <div className={styles.main}>
      {/* <p>Featured Destinations </p> */}
      <Swiper
        navigation={false}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.swiper}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {TrendingData.map((slide, index) => {
          return (
            <SwiperSlide className={styles.swiperslide} key={index}>
              <SwiperCard
                className={styles.swipercard}
                title={slide.name}
                slide={slide}
                image={slide.image}
                price={slide.price}
                text={slide.desc}
                onSelect={handleSubmit}
                
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
