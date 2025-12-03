import React from 'react';

export const WhyTerra: React.FC = () => {
    const features = [
        {
            title: "No fads, just fundamentals",
            body: "No celebrity routines, no short-term challenges. Your plan uses proven strength, mobility, and lifestyle principles that can grow with you."
        },
        {
            title: "Whole-person approach",
            body: "Training, nutrition, and mindset sit together in one place. If you quit easily, feel shy, or struggle with diets, your plan includes specific strategies to support your mind as well as your body."
        },
        {
            title: "Support that fits real life",
            body: "Your plan adapts to busy London workdays, parenting, health conditions, and energy levels. Enes is there to help you adjust rather than judge you when life happens."
        }
    ];

    return (
        <section id="why-terra" className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-xs sm:text-sm text-terracotta-600 font-semibold tracking-wide uppercase mb-2">
                        Why Terra Wellness
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        More than a plan, it is a partnership.
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        You are not buying a PDF. You are working with a coach who believes everyone can improve their wellbeing, whatever their age, confidence, or starting point.
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
                                {feature.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
