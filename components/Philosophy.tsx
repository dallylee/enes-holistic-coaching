import React from 'react';
import enesImage from '../src/assets/meet-enes-gym.png';

export const Philosophy: React.FC = () => {
  return (
    <section id="meet-enes" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bio Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-12 lg:mb-20">
          <div className="relative mb-8 lg:mb-0 order-first lg:order-last">
            <div className="absolute inset-0 bg-sage-100 rounded-3xl transform rotate-3 scale-105"></div>
            {/* Using a nature/fitness oriented image to match the 'farming/outdoor' vibe */}
            <img
              src={enesImage}
              alt="Enes - Holistic Trainer"
              className="relative rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[450px] lg:h-[600px] grayscale-0"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-stone-100 max-w-xs hidden md:block">
              <p className="font-serif text-sage-800 italic text-lg">"Health is built like a garden—with care, consistency, and patience."</p>
            </div>
          </div>

          <div className="order-last lg:order-first">
            <h2 className="text-base text-terracotta-600 font-semibold tracking-wide uppercase mb-3">Meet Enes</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Not your typical London trainer.
            </h3>

            <div className="prose prose-lg text-stone-600 space-y-6">
              <p className="text-lg">
                I’m Enes. My approach to fitness is shaped by a philosophy forged in the simple, hardworking traditions of <strong>Croatia</strong>.
              </p>

              <div>
                <h4 className="text-xl font-bold text-stone-800 mb-2 font-serif">A Life Built on Dedication</h4>
                <p>
                  For over 20 years, fitness hasn't just been a job—it's been a lifestyle. But my true connection to health comes from working the land, spending countless hours on farms, and valuing a simple, healthy life. This background taught me that true strength isn't just about quick fixes; it's about <strong>consistency, resilience, and genuine effort</strong>.
                </p>
                <p className="mt-2 italic border-l-4 border-sage-300 pl-4 bg-sage-50 py-2 pr-2 rounded-r-md">
                  I believe a healthy body is built with the same care and dedication you put into tending a garden or completing a day of hard, honest work.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-stone-800 mb-2 font-serif">My Passion Project</h4>
                <p>
                  This business is my passion project, driven by a genuine desire to help people, not just build a business. Whether you're struggling to start, hitting a wall, or simply want to improve your core stability from home, I genuinely love helping others become the best version of themselves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid - Updated with new text points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div className="bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="h-14 w-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">No Fads, Just Fundamentals</h3>
            <p className="text-stone-600 leading-relaxed">
              I don't offer generic, 'out-of-the-bag' celebrity routines. I offer grounded, personalized plans that respect your individual starting point, your busy London schedule, and your specific goals.
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="h-14 w-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Holistic Health</h3>
            <p className="text-stone-600 leading-relaxed">
              For me, coaching goes beyond reps and sets. It’s about creating a holistic plan—integrating movement, practical nutrition, and mindfulness—to foster real, sustainable growth.
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="h-14 w-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Affordable Support</h3>
            <p className="text-stone-600 leading-relaxed">
              I am committed to making this level of deeply personalized coaching accessible. I want to see you succeed, and that starts with support that doesn't break the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};