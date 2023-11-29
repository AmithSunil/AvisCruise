import { useState } from "react"
import React from "react"
import TabSection from "./TabSection"
import Image from "next/image"

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
        <div className="right"></div>
      </div>
      <div className="tab-wrapper">
        <TabSection />
      </div>
    </div>
  )
}

export default Navbar // Export the Navbar component as default
