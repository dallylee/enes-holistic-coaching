import React from 'react';

export const PlansAndPricing: React.FC = () => {
    const plans = [
        {
            title: "Personal Wellness Set-Up",
            price: "£149 one-off",
            description: "A personalised 8–12 week plan created entirely around you.",
            features: [
                "Free consultation call",
                "Detailed questionnaire & full review",
                "Custom workout plan in your dashboard",
                "Nutrition guidance & calorie/portion tools",
                "Mindfulness and mindset exercises",
                "Follow-up call in the first month"
            ],
            isPopular: false
        },
        {
            title: "Coaching Membership Lite",
            price: "£69 per month",
            description: "Monthly accountability and plan updates.",
            features: [
                "Access to your personal dashboard",
                "Monthly plan refresh",
                "One 30-min check-in each month",
                "Message support (reply within 48 hours)"
            ],
            isPopular: true
        },
        {
            title: "Coaching Membership Plus",
            price: "£109 per month",
            description: "Weekly feedback and closer support for bigger goals.",
            features: [
                "Everything in Lite",
                "Weekly written check-ins",
                "Additional 15-min call each month",
                "Priority message replies within 24 hours"
            ],
            isPopular: false
        }
    ];

    return (
        <section id="plans-pricing" className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
                        Plans & Pricing
                    </h2>
                    <p className="mt-4 lg:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed">
                        Every journey starts with a free chat. Transparent pricing, no hidden fees.
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-stone-600">
                        <strong>How it works:</strong> Start with the Personal Wellness Set-Up (£149 one-off). This creates your custom plan. Then choose ongoing support that fits your needs.
                    </p>
                </div>

                {/* Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${plan.isPopular ? 'border-sage-600 transform scale-105' : 'border-stone-200'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sage-600 text-white uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-stone-900 mb-2 font-serif">
                                {plan.title}
                            </h3>

                            {/* Price */}
                            <p className="text-3xl font-bold text-sage-700 mb-3">
                                {plan.price}
                            </p>

                            {/* Description */}
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-stone-600">
                                        <svg className="w-5 h-5 text-sage-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* In-Person Sessions Block */}
                <div className="bg-stone-50 rounded-2xl p-6 lg:p-8 border border-stone-200">
                    <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-3 font-serif">
                        In-person training (Buckinghamshire)
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        60-minute sessions available locally, subject to availability.
                    </p>
                    <p className="text-lg font-semibold text-sage-700">
                        From £45 per session. Block bookings available.
                    </p>
                </div>
            </div>
        </section>
    );
};
