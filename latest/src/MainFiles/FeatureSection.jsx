import React from "react";

export default function FeatureSection() {
  return (
    <section className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-semibold pb-10">Features</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        <div class="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 lg:col-span-2 row-span-1">
          <div class="relative z-10 flex flex-col gap-4">
            <div class="text-5xl md:text-6xl text-zinc-500 mb-3">📈</div>
            <h3 class="text-xl md:text-2xl font-bold text-white">
              Scalability
            </h3>
            <p
              class="text-zinc-400 text-sm md:text-base mt-2 leading-5"
           
            >
              Easily adapt to your growing business needs with flexible plans.
            </p>
          </div>
        </div>
        <div class="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 col-span-1 row-span-1">
          <div class="relative z-10 flex flex-col gap-4">
            <div class="text-5xl md:text-6xl text-zinc-500 mb-3">🔒</div>
            <h3 class="text-xl md:text-2xl font-bold text-white">Security</h3>
            <p
              class="text-zinc-400 text-sm md:text-base mt-2 leading-5"
             
            >
              Top-notch security features to keep your data safe.
            </p>
          </div>
        </div>
        <div class="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 col-span-1 row-span-1">
          <div class="relative z-10 flex flex-col gap-4">
            <div class="text-5xl md:text-6xl text-zinc-500 mb-3">🤝</div>
            <h3 class="text-xl md:text-2xl font-bold text-white">Support</h3>
            <p
              class="text-zinc-400 text-sm md:text-base mt-2 leading-5"
             
            >
              24/7 customer support to assist you anytime.
            </p>
          </div>
        </div>
        <div class="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 lg:col-span-3 row-span-1">
          <div class="relative z-10 flex flex-col gap-4">
            <div class="text-5xl md:text-6xl text-zinc-500 mb-3">🔗</div>
            <h3 class="text-xl md:text-2xl font-bold text-white">
              Integrations
            </h3>
            <p
              class="text-zinc-400 text-sm md:text-base mt-2 leading-5"
             
            >
              Seamless integrations with tools you already use. Connect with
              popular platforms like Slack, Google Workspace, and Microsoft
              Teams effortlessly, enhancing your productivity by integrating our
              solution into your existing workflows without interruption.
            </p>
          </div>
        </div>
        <div class="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black hover:bg-zinc-800 transition duration-500 col-span-1 row-span-1">
          <div class="relative z-10 flex flex-col gap-4">
            <div class="text-5xl md:text-6xl text-zinc-500 mb-3">📊</div>
            <h3 class="text-xl md:text-2xl font-bold text-white">Analytics</h3>
            <p
              class="text-zinc-400 text-sm md:text-base mt-2 leading-5"
              
            >
              Gain insights into your operations with powerful analytics tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
