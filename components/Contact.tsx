import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    preference: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('https://formspree.io/f/xkglnede', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', preference: '', message: '' });
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="free-chat" className="py-16 lg:py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-stone-900 font-serif">
            Not Sure Where to Start? Let's Talk.
          </h2>
          <p className="mt-4 lg:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
            Free 20-minute consultation. No pressure, no sales pitch – just an honest conversation about whether this is right for you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-sage-100 mb-4">
              <svg className="h-6 w-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-lg font-medium text-sage-900">Message received!</h3>
            <p className="mt-2 text-stone-600">I personally read every message.</p>
            <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm font-medium text-sage-600 hover:text-sage-500 underline">Send another message</button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xkglnede"
            method="POST"
            className="space-y-6 bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-stone-100"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            {/* Preference Dropdown */}
            <div>
              <label htmlFor="preference" className="block text-sm font-medium text-stone-700 mb-1">How do you prefer to train?</label>
              <select
                id="preference"
                name="preference"
                className="block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                value={formState.preference}
                onChange={e => setFormState({ ...formState, preference: e.target.value })}
              >
                <option value="">Select an option</option>
                <option value="at-home">At home</option>
                <option value="in-gym">In the gym</option>
                <option value="mix">A mix of both</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">What's on your mind?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-4 py-3 rounded-lg border border-stone-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
                placeholder="For example: I want to feel stronger but I am nervous to start, I have an old injury, I feel stuck at the gym..."
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New consultation request from Enes Holistic Coaching"
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full text-base sm:text-lg font-semibold" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
            </Button>

            {/* Helper Text */}
            <p className="text-xs sm:text-sm text-stone-500 text-center">
              I personally read every message.
            </p>

            {submitError && <p className="text-sm text-red-600 text-center">{submitError}</p>}
          </form>
        )}
      </div>
    </section>
  );
};
