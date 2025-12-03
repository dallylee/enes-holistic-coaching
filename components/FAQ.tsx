import React, { useState } from 'react';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Do I need equipment?",
            answer: "Not for home workouts. I design plans using bodyweight or minimal equipment. For gym plans, I adapt to whatever equipment you have access to."
        },
        {
            question: "What if I have injuries or health conditions?",
            answer: "That is exactly what I specialise in. Every plan includes specific modifications and safety guidance for your body."
        },
        {
            question: "How much time do I need each week?",
            answer: "Plans are flexible, anywhere from 2–5 sessions per week, 20–60 minutes each, depending on your goals and schedule."
        },
        {
            question: "Is this for weight loss?",
            answer: "Weight loss can be one of your goals, but my focus is building sustainable strength, mobility and healthy habits. Results that last, not quick fixes."
        },
        {
            question: "What if I miss workouts or fall off track?",
            answer: "Life happens. No guilt and no \"starting over\". We adjust and keep going. This is about progress, not perfection."
        },
        {
            question: "Do you offer refunds?",
            answer: "The £149 set-up fee is non-refundable once I begin building your plan. Monthly memberships can be cancelled at any time with 30 days' notice."
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif text-center mb-12">
                    Common Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors"
                            >
                                <span className="font-semibold text-stone-900">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-stone-600 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-stone-50 border-t border-stone-200">
                                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
