import { useState } from "react"
import React from "react"
import TabSection from "./TabSection"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="left">
          <a href="/">
            {/* <Image src="" className="img-fluid" alt="Company_logo" /> */}
            AvisCruise
          </a>
        </div>
        {/* <div className="contact">
          <p>
            <FaWhatsapp style={{ fontSize: "25px", marginRight: "10px" }} />
            +91 98474 09704
          </p>
          <p>
            <MdOutlineEmail style={{ fontSize: "25px", marginRight: "10px" }} />
            aujo222@gmail.com
          </p>
        </div> */}
        <div className="right"></div>
      </div>
      {/* <div className="tab-wrapper">
        <TabSection />
      </div> */}
    </div>
  )
}

export default Navbar // Export the Navbar component as default
