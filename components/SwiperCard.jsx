import Image from "next/image"
import style from "./SwiperCard.module.css"

const SwiperCard = ({ title, image, price, onSelect, slide }) => {
  const handleBookNow = () => {
    onSelect(slide)
  }
  return (
    <div className={style.swipercard}>
      <div className={style.image}>
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/${image}`}
          alt=""
        />
      </div>
      <div className={style.tbody}>
        <div className={style.trending}>TRENDING</div>
        <div className={style.text}>
          <h2
            className="small-title"
            style={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "60px",
            }}
          >
            {title}
          </h2>
          <h2>
            INR{" "}
            <span
              className="small-title"
              style={{
                background: "#ffb703",
                color: "black",
                padding: " 0px 12px",
                fontSize: "40px",
                fontWeight: 600,
                borderRadius: "20px",
                marginLeft: "10px",
              }}
            >
              {price}/-
            </span>
          </h2>
        </div>
        <div className={style.price_line}>
          <a href="#booking">
            <button onClick={handleBookNow} class="contact-button">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SwiperCard
