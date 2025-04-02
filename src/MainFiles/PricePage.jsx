import React from "react";

export default function PricePage() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-semibold pb-12 flex justify-center items-center">
        Price Page
      </h2>

      <main className='flex flex-col lg:flex-row items-center justify-evenly gap-6 px-6'>
        {[
          { name: "Basic", price: "$0 (Free)", features: ["1 User", "Basic Support", "Access to limited features", "Community Forums", "Email Support", "Basic Security", "Data Limit: 1GB", "No Custom Branding", "Basic Analytics", "Limited Integrations"] },
          { name: "Premium", price: "$10 (Monthly)", features: ["5 Users", "Priority Support", "Advanced Features", "Community Forums", "Email & Chat Support", "Enhanced Security", "Data Limit: 10GB", "Custom Branding", "Advanced Analytics", "Extended Integrations"] },
          { name: "Team", price: "$15 (Monthly)", features: ["10 Users", "24/7 Support", "All Features", "Dedicated Account Manager", "Phone, Email & Chat Support", "Enterprise Security", "Unlimited Data", "Full Customization", "Detailed Analytics", "All Integrations"] }
        ].map((plan, index) => (
          <div key={index} className="relative p-6 md:p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-zinc-800 to-black transition duration-300 shadow-lg w-full max-w-sm text-center">
            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            <p className="text-xl md:text-2xl font-semibold text-zinc-500 mt-2 mb-6">{plan.price}</p>
            <ul className="text-zinc-400 space-y-2 md:space-y-3 text-sm md:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="inline-block w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-white text-black font-semibold text-xs md:text-sm rounded-lg hover:bg-zinc-300 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </main>
    </section>



  );
}
