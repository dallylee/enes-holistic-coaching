import React, { useState } from 'react';
import { getPersonalizedTip } from '../services/geminiService';
import { Button } from './Button';

export const AIWellnessCheck: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [lifestyle, setLifestyle] = useState('Sedentary');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetTip = async () => {
    if (!goal) return;
    setLoading(true);
    const tip = await getPersonalizedTip(goal, lifestyle);
    setResponse(tip);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-700">
          <div className="md:flex md:gap-12 items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block bg-terracotta-500 text-white text-xs font-bold px-2 py-1 rounded mb-4">AI POWERED</div>
              <h2 className="text-3xl font-serif font-bold mb-4">Not sure where to start?</h2>
              <p className="text-stone-300 mb-6">
                Tell me a little about what you want to achieve, and I'll give you a free, instant tip to get you moving in the right direction right now.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-1">Your Main Goal</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Sleep better, lose 5kg, run a 5k"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border-stone-600 text-white placeholder-stone-500 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-1">Current Activity Level</label>
                  <select 
                    value={lifestyle}
                    onChange={(e) => setLifestyle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-stone-700 border-stone-600 text-white focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  >
                    <option value="Very Busy / No Time">Very Busy / No Time</option>
                    <option value="Sedentary Office Job">Sedentary Office Job</option>
                    <option value="Active but Stuck">Active but Stuck</option>
                    <option value="Recovering from Injury">Recovering from Injury</option>
                  </select>
                </div>
                <Button 
                  onClick={handleGetTip} 
                  disabled={loading || !goal}
                  className="w-full bg-sage-600 hover:bg-sage-500 text-white mt-4"
                >
                  {loading ? 'Thinking...' : 'Get My Personal Tip'}
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center h-full min-h-[300px]">
              {response ? (
                <div className="bg-stone-700/50 p-6 rounded-xl border border-sage-500/30 animate-fade-in">
                  <svg className="w-8 h-8 text-sage-400 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19921C6.09464 16 5.19921 16.8954 5.19921 18V21H14.017ZM21 8C21 11.866 17.866 15 14 15H10C6.13401 15 3 11.866 3 8C3 4.13401 6.13401 1 10 1H14C17.866 1 21 4.13401 21 8ZM8 21V18C8 17.4477 8.44772 17 9 17C9.55228 17 10 17.4477 10 18V21H8Z" /></svg>
                  <p className="text-lg italic text-stone-100 leading-relaxed font-serif">
                    "{response}"
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full opacity-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-stone-400">Your personalized advice will appear here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};