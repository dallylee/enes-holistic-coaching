import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, targetAudience }) => (
  <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300 h-full">
    <div className="p-8 flex-1">
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-sage-50 rounded-lg text-sage-600">
          {icon}
        </div>
        <span className="text-xs font-semibold tracking-wider text-stone-400 uppercase">{targetAudience}</span>
      </div>
      <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">{title}</h3>
      <p className="text-stone-600 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="px-8 py-4 bg-stone-50 border-t border-stone-100">
      <p className="text-sm font-medium text-terracotta-600">Affordable rates available</p>
    </div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "The Beginner's Foundation",
      targetAudience: "New to Fitness",
      description: "Never been to a gym? Don't like the gym atmosphere? I provide a safe, judgment-free zone to learn the basics. We build confidence and technique together, ensuring you feel comfortable in your own skin.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "Gym Progression",
      targetAudience: "Stuck & Frustrated",
      description: "For those who go to the gym but aren't seeing the results they want. We'll audit your current routine, fix form issues, and implement progressive overload to break through that plateau.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
      title: "Stability & Vitality",
      targetAudience: "Elderly / Seniors",
      description: "Gentle, effective home workouts focused on core strength, balance, and stability. Designed to improve daily life quality, reduce fall risk, and keep you moving pain-free.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    {
      title: "Women's Wellness",
      targetAudience: "Women of All Ages",
      description: "A supportive approach tailored to women's specific physiological needs. Whether you're postpartum, managing stress, or looking to build strength without bulk, we create a plan that honors your body.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-terracotta-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
            How I Can Help
          </p>
          <p className="mt-3 lg:mt-4 max-w-2xl text-lg lg:text-xl text-stone-600 mx-auto">
            Whether in-person in London or online, everything is customized. No generic PDFs, just real care.
          </p>
        </div>
        <div className="mt-12 lg:mt-16 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};