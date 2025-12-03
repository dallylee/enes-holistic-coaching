import React from 'react';

export const WhyDifferent: React.FC = () => {
    const features = [
        {
            title: "No fads or quick fixes",
            text: "You get real, sustainable training based on fundamentals, not short-term challenges."
        },
        {
            title: "Mindset, movement and nutrition together",
            text: "Your plan includes support for motivation, confidence, stress and habits, not just reps and sets."
        },
        {
            title: "Built around your lifestyle",
            text: "Your plan adapts to busy schedules, health conditions, energy levels and everyday demands."
        }
    ];

    return (
        <section id="why-different" className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Why This Coaching Is Different
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        Coaching that respects your life, not just your goals.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-3 font-serif">
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
