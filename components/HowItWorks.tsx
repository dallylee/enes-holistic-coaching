import React from 'react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Free chat",
            body: "A friendly conversation about your goals, worries, lifestyle and preferences. No pressure. You decide if coaching with me feels right."
        },
        {
            number: "2",
            title: "Personal questionnaire",
            body: "You receive a detailed questionnaire covering your age, routine, injuries, confidence level and goals. Using your answers, I design a complete plan tailored only to you."
        },
        {
            number: "3",
            title: "Your personal dashboard",
            body: "You get login access to your own page with workouts, progress trackers, nutrition tools, mindfulness support and a direct button to ask me anything when you need help.\n\nYour initial plan covers 8–12 weeks. From there you can continue with monthly updates (Lite membership) or weekly support (Plus membership) to keep progressing."
        }
    ];

    return (
        <section id="how-it-works" className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        How It Works
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        The process is straightforward. You talk to me, share your story and I build a practical, personalised plan that lives on your own private page inside the site.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Number */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage-600 text-white text-2xl font-bold mb-4 mx-auto md:mx-0">
                                {step.number}
                            </div>

                            {/* Connector Line (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-sage-200" style={{ width: 'calc(100% - 64px)' }}></div>
                            )}

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-3 font-serif">
                                    {step.number}. {step.title}
                                </h3>
                                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                                    {step.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
