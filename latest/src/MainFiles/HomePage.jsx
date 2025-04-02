import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  // Define logo data array
  const logos = [
    "https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_640.png",
    "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
    "https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_640.png",
    "https://cdn.pixabay.com/photo/2014/04/02/10/19/unicef-303450_640.png",
    "https://framerusercontent.com/images/Qvd78eUVBy9feOrLCQ4ZBwlnM.svg",
  ];

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2900,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <>
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pb-20">
        <div className="space-y-8 max-w-5xl">
          <a className="pb-10" href="/">
            <button className="relative px-6 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 py-1 rounded-full text-sm shadow-2xl overflow-hidden hover:bg-zinc-800/70 transition-all duration-300">
              <span className="flex items-center justify-center gap-4 text-white/90">
                Introducing Huddle{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </span>
            </button>
          </a>
          <h1 className="text-4xl md:text-7xl pt-6 font-extrabold leading-tight tracking-tight">
            <span className="hero-text">Made for modern</span>{" "}
            <span className="hero-text-gradient">product teams</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            Powering the world's best product teams with cutting-edge solutions
            and seamless collaboration.
          </h2>
          <div className="pt-12">
            <button className="relative px-10 bg-white/5 backdrop-blur-sm py-4 rounded-full font-medium text-sm md:text-base shadow-2xl overflow-hidden shimmer-border inline-flex items-center text-white hover:bg-white/10 transition-all duration-300">
              Get Started
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Organisations Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-bold text-3xl md:text-4xl text-white">
              Trusted By Organisations
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of product development with our innovative platform.
            </p>
          </div>

          {/* Logo Carousel using react-slick */}
          <div className="px-4">
            <Slider {...settings}>
              {logos.map((src, index) => (
                <div key={index} className="px-4">
                  <div className="flex justify-center items-center h-16">
                    <img
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                      alt={`Company Logo ${index + 1}`}
                      src={src}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}