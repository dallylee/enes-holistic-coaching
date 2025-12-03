import React from 'react';

export const IsThisForMe: React.FC = () => {
    const cards = [
        {
            title: "If you are new to exercise",
            body: "For people who have never worked out, feel nervous in gyms or do not know where to start.",
            bullets: [
                "Safe, simple sessions at home or in the gym",
                "Build confidence step by step",
                "Learn without feeling watched or embarrassed"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "If you want strength without pressure",
            body: "Support for women of all ages, including postpartum and perimenopause, who want sustainable strength and confidence.",
            bullets: [
                "Respectful, body-positive approach",
                "Energy-friendly plans designed for real life",
                "Support around confidence, stress and motivation"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "If you prefer home workouts or gentle training",
            body: "Ideal for middle-aged and older adults who want to improve balance, mobility and core strength at home.",
            bullets: [
                "Low-impact, joint-friendly movements",
                "Focus on daily stability and strength",
                "Tailored around your health conditions or injuries"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "If you go to the gym but see no results",
            body: "For people who train regularly but feel stuck, plateaued or unsure how to progress.",
            bullets: [
                "Form correction and technique coaching",
                "Progressive overload plans",
                "Clear structure to reach new strength goals"
            ],
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section id="is-this-4me" className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Who I Work With
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        My coaching is designed for people who want to feel stronger, more confident and more capable, without feeling judged or overwhelmed. Whatever your age, confidence level or physical ability, your plan is built around you.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sage-100 text-sage-700 mb-4">
                                {card.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-3 font-serif">
                                {card.title}
                            </h3>

                            {/* Body */}
                            <p className="text-stone-600 leading-relaxed mb-4">
                                {card.body}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2">
                                {card.bullets.map((bullet, i) => (
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
