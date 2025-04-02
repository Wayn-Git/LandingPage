import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeedBack() {

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
    <section className='justify-center items-center flex'>
      <div class="w-full max-w-5xl flex flex-col justify-center items-center px-4 py-20 gap-10 md:gap-20">
        <div class="mb-8 lg:mb-0 flex flex-col justify-center">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center">
            What Our Clients Say!!
          </h2>
          <p class="text-gray-400 text-sm md:text-base leading-loose text-center">
            We value our clients' feedback and strive to provide the best
            service possible. Here's what they have to say about us.
          </p>
        </div>
        <div class="flex justify-center w-full">
          <div class="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black rounded-lg">
            <div class="w-full overflow-hidden">
              <div class="flex w-full">
                <div class="flex">
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="John"
                        src="https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          John
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@john</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing service! Highly recommended.
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Jane"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Jane
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Jane</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing experience, will come back for sure!
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="David"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          David
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@David</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Really satisfied with the support I received.
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Emma"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Emma
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Emma</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Top-notch quality and fast delivery!
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Max"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Max
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Max</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing work, will come back for sure!
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="John"
                        src="https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          John
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@john</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing service! Highly recommended.
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Jane"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Jane
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Jane</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing experience, will come back for sure!
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="David"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          David
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@David</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Really satisfied with the support I received.
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Emma"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Emma
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Emma</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Top-notch quality and fast delivery!
                    </p>
                  </div>
                  <div class="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
                    <div class="flex flex-row items-center gap-4">
                      <img
                        class="rounded-full object-cover h-10 w-10"
                        alt="Max"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&amp;auto=format&amp;fit=crop&amp;q=60"
                      />
                      <div class="flex flex-col w-full">
                        <figcaption class="text-sm font-medium text-white">
                          Max
                        </figcaption>
                        <p class="text-xs font-medium text-gray-500">@Max</p>
                      </div>
                    </div>
                    <p class="mt-2 text-xs text-gray-300">
                      Amazing work, will come back for sure!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
