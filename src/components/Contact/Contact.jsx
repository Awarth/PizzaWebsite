import "./Contact.css";
import { useState, useEffect } from "react";
import restImg from "../../images/restaurant.jpg";
import manager from "../../images/manager.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    setFormStatus("Form submitted successfully!");

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus("");
      }, 5000);

      // Cleanup the timer if the component unmounts or if formStatus changes
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const latitude = 28.626330828;
  const longitude = 77.218499126;

  const gmapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="w-full contactPage">
      <div className="contactOne">
        <h1>Come, try. Welcome</h1>
        <p>VISIT OUR RESTAURANT</p>
      </div>
      <div className="contactSecond">
        <div className="restaurantImgSection">
          <img src={restImg} alt="restaurant img" />
        </div>
        <div className="restaurantDetails">
          <div className="storeInfo">
            <h1>Pizzeria</h1>
            <a href={gmapUrl} target="_blank" rel="noopener noreferrer">
              <p>
                Connaught Place <br /> New Delhi,India
                <br /> 110001
              </p>
            </a>
            <p>
              We work for all <br /> day of the week <br />
              10:00am to 10:00pm
            </p>
          </div>
          <div className="managerInfo">
            <h1>Contact the manager</h1>
            <div className="picAndImg">
              <img src={manager} alt="manager" />
              <div>
                <p className="name">Ashish Singh</p>
                <p className="profession">Manager</p>
                <a href="mailto:pizzeria@gmail.com">
                  <span>pizzeria@gmail.com</span>
                </a>
                <a href="tel:+91 95553-50284">+91 95553-50284</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFormSection">
        <div className="contactContainer">
          <h1>Send a message</h1>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send a message</button>
          </form>
          {formStatus && <p className="formStatus">{formStatus}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
