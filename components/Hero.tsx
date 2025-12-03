import React from 'react';
import { Button } from './Button';
import heroImage from '@/assets/hero-coaching.jpg';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-stone-50 pt-20 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="lg:col-span-6 lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs sm:text-sm font-medium mb-4 lg:mb-6 uppercase tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-sage-600 mr-2"></span>
              London-based & Online Coaching
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-stone-900 leading-tight font-serif">
              Your Body. Your Life. Your Pace.
            </h1>

            {/* Subheading */}
            <p className="mt-4 lg:mt-6 text-lg sm:text-xl text-stone-700 leading-relaxed max-w-2xl font-medium">
              Your personalised fitness, nutrition and mindfulness programme, designed to fit your real life.
            </p>

            {/* Main Paragraph */}
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              I'm Enes, and I work with people who feel intimidated by gyms, are managing injuries, have demanding schedules or are training later in life. You get one-to-one support shaped entirely around your real circumstances, not a modified template.
            </p>

            {/* CTAs */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={onContactClick} className="px-6 py-3 text-base sm:text-lg font-semibold">
                Start Your Free Chat
              </Button>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-sage-600 text-base sm:text-lg font-semibold rounded-full text-sage-700 bg-transparent hover:bg-sage-50 transition-all duration-300"
              >
                How My Coaching Works
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="mt-8 lg:mt-0 lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Enes coaching a client with personalised support"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};