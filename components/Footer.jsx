// YourFooter.js

import React from "react"
import {
  FaMapMarker,
  FaPhone,
  FaEnvelopeOpen,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa"
import iata from "../assets/IATA.png.webp"
import asta from "../assets/asta.png"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <Image src="" className="img-fluid" alt="Company_logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consectetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-logo">
                <Image
                  width={130}
                  height={130}
                  src={iata}
                  className="img-fluid"
                  alt="iata"
                />
                <Image
                  width={100}
                  height={100}
                  src={asta}
                  className="img-fluid"
                  alt="asta"
                />
              </div>
              <div className="footer-social-icon">
                <a href="#">
                  <FaFacebook className="footer-socail-icon-logo" />
                </a>
                <a href="#">
                  <FaTwitter className="footer-socail-icon-logo" />
                </a>
                <a href="#">
                  <FaGooglePlusG className="footer-socail-icon-logo" />
                </a>
                <a href="#">
                  <FaInstagram className="footer-socail-icon-logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul className="useful-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
