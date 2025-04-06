import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeedBack() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "TechStart Inc.",
      handle: "AI Development Team",
      image: "https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?w=500&auto=format&fit=crop&q=60",
      text: "The AI Team Grouper helped us assemble the perfect team for our machine learning project. The skill matching was spot-on!"
    },
    {
      name: "DataFlow Solutions",
      handle: "Data Science Team",
      image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&auto=format&fit=crop&q=60",
      text: "Our team's productivity increased by 40% after using the platform. The AI-powered team formation was incredibly effective."
    },
    {
      name: "InnovateAI",
      handle: "Research Team",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      text: "The platform's ability to match complementary skills has transformed how we build our research teams. Highly recommended!"
    },
    {
      name: "FutureTech Labs",
      handle: "Development Team",
      image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&auto=format&fit=crop&q=60",
      text: "We found the perfect balance of skills and personalities for our AI project. The team dynamics are amazing!"
    },
    {
      name: "Quantum AI",
      handle: "Engineering Team",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      text: "The AI Team Grouper's matching algorithm created a team that exceeded our expectations. Game-changing platform!"
    }
  ];

  return (
    <section className='justify-center items-center flex'>
      <div className="w-full max-w-5xl flex flex-col justify-center items-center px-4 py-20 gap-10 md:gap-20">
        <div className="mb-8 lg:mb-0 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center">
            Success Stories
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-loose text-center">
            Discover how teams are achieving remarkable results with AI Team Grouper.
            See what our users have to say about their experience.
          </p>
        </div>
        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 flex flex-col">
                  <div className="flex flex-row items-center gap-4">
                    <img
                      className="rounded-full object-cover h-12 w-12"
                      alt={testimonial.name}
                      src={testimonial.image}
                    />
                    <div className="flex flex-col w-full">
                      <figcaption className="text-sm font-medium text-white">
                        {testimonial.name}
                      </figcaption>
                      <p className="text-xs font-medium text-gray-500">{testimonial.handle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 flex-grow">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
