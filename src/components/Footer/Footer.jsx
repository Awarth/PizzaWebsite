import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

import "./Footer.css";

const latitude = 28.626330828;
const longitude = 77.218499126;

const gmapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

function Footer() {
  return (
    <footer className="w-full">
      <div className="widgetCollection">
        <div className="widget">
          <h2>Localization</h2>
          <a href={gmapUrl} target="_blank" rel="noopener noreferrer">
            Connaught Place <br /> New Delhi
            <br /> 110001 <br /> India
          </a>
        </div>
        <div className="widget">
          <h2>Contact</h2>
          <a href="mailto:pizzeria@gmail.com">
            <span>pizzeria@gmail.com</span>
          </a>
          <a href="tel:+91 95553-50284">+91 95553-50284</a>
        </div>
        <div className="widget">
          <h2>Opening hours</h2>
          <p>
            We work for all <br /> day of the week <br />
            10:00am to 10:00pm
          </p>
        </div>
        <div className="widget">
          <h2>Social Media</h2>
          <div className="socialIcons">
            <div className="encircle">
              <a href="">
                <FiFacebook />
              </a>
            </div>
            <div className="encircle">
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className="encircle">
              <a href="">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        @2024 Pizzeria by <span>Adarsh</span> | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
