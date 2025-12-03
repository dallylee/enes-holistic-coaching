import React from 'react';

export const ThreePillars: React.FC = () => {
    const pillars = [
        {
            title: "Fitness",
            description: "Safe, realistic movement built around your body, your age and your injuries.",
            bullets: [
                "Home or gym options, beginner to experienced",
                "Modifications for pain, injuries and health conditions",
                "Clear guidance on form, intensity and when to stop"
            ],
            shadowColor: "shadow-orange-200"
        },
        {
            title: "Nutrition",
            description: "Everyday eating that fits your family, your cravings and your budget.",
            bullets: [
                "Family meals with simple tweaks, not separate \"diet food\"",
                "Allergies, preferences and culture fully respected",
                "Sweets allowed, handled mindfully and without guilt"
            ],
            shadowColor: "shadow-green-200"
        },
        {
            title: "Mindfulness",
            description: "Breath, mindset and self-talk that support your change instead of sabotaging it.",
            bullets: [
                "Short daily breathing and grounding practices",
                "Tools for stress, guilt and \"all or nothing\" thinking",
                "Reflection prompts that connect mind, food and movement"
            ],
            shadowColor: "shadow-blue-200"
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        How This Works: Three Pillars, One Integrated Plan
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        Most programmes focus on workouts alone. I build your plan on three pillars that work together, because your mental state affects your food choices, your stress affects recovery, and your body affects your confidence. You cannot separate them, so we do not.
                    </p>
                </div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg ${pillar.shadowColor} border border-stone-100 hover:shadow-xl transition-shadow duration-300`}
                        >
                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-3 font-serif">
                                {pillar.title}
                            </h3>

                            {/* Description */}
                            <p className="text-stone-600 leading-relaxed mb-4">
                                {pillar.description}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2">
                                {pillar.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm text-stone-600">
                                        <svg className="w-5 h-5 text-sage-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
