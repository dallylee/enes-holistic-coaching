import React from 'react';

export const WhatMakesDifferent: React.FC = () => {
    const features = [
        {
            title: "Built for YOUR body",
            text: "Every exercise includes modifications for your specific injuries, age and ability level. Bad knee, lower back issues, reduced mobility – we do not just avoid problem areas, we guide you through safe alternatives with detailed form instructions."
        },
        {
            title: "Fits YOUR life",
            text: "Cooking for a family – we adapt meals they will eat too. Shift worker – we work around your schedule. Limited budget – we design within it. Your plan respects your actual circumstances."
        },
        {
            title: "No guilt, no shame",
            text: "Crave sweets – we build them in. Missed a week – that is life, not failure. No arbitrary rules, no \"starting over\". Sustainable change means working with your reality, not fighting it."
        },
        {
            title: "Your personal dashboard",
            text: "Not just a PDF sent once. Log in daily to see today's workout, today's meals and today's mindfulness practice. Track progress, access your full programme and message me directly, all in one place."
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        What Makes This Different
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        You have probably tried programmes before. Here is why this one works when others did not:
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100"
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-3 font-serif">
                                {feature.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
