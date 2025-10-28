import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((b) => b.category === "Free"));
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 mt-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Free Offered Courses
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Discover our most popular books and learning materials available completely free!
        </p>
      </div>

      <Slider {...settings}>
        {book.map((item) => (
          <div key={item.id} className="px-2">
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;

// Custom Next Arrow
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(1,1,2,0.4)",
        color: "#fff",
        borderRadius: "50%",
        right: "-15px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(1,1,2,0.4)",
        color: "#fff",
        borderRadius: "50%",
        left: "-15px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}
