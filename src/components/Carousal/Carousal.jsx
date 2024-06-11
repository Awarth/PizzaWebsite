import { useState , useEffect } from "react";
import "./Carousal.css";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const customerMessages = [
    {
      message: "Best pizza I've ever had!",
      name: "Rajan",
    },
    {
      message: "Amazing flavors and great service.",
      name: "Sakshi",
    },
    {
      message: "A delightful experience, highly recommended.",
      name: "Kishan",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % customerMessages.length);
    }, 3000); // Change page every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [customerMessages.length]);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="carousel">
      <div className="carouselContent">
        <div
          className="carouselInner"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {customerMessages.map((message, index) => (
            <div key={index} className="carouselItem">
              <div className="customerMessage">{message.message}</div>
              <div className="customerName">{message.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="carouselDots">
        {customerMessages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
