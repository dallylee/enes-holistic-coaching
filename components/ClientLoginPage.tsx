import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ClientLoginPageProps {
  onNavigateHome?: () => void;
  onNavigateClientLogin?: () => void;
}

const sections = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'workout-programme', label: 'Workout Programme' },
  { id: 'nutrition-plan', label: 'Nutrition & Supplements' },
  { id: 'mindfulness-programme', label: 'Mindfulness Programme' },
  { id: 'useful-resources', label: 'Useful Resources' },
  { id: 'progress-tracking', label: 'Progress Tracking' }
];

export const ClientLoginPage: React.FC<ClientLoginPageProps> = ({ onNavigateHome, onNavigateClientLogin }) => {
  const handleContactClick = () => {
    window.location.href = '/#free-chat';
  };

  const today = 'Tuesday 12 March, 2024';

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={handleContactClick}
        onClientLoginNavigate={onNavigateClientLogin}
        onLogoClick={onNavigateHome}
      />

      <main className="pt-28 pb-16 bg-white">
        {/* Client overview hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="dashboard">
          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
              <div className="flex-1 space-y-4">
                <span className="text-sm font-semibold text-sage-700 uppercase tracking-wide">Client Dashboard</span>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-sage-900">Welcome back, Anna</h1>
                  <p className="mt-3 text-lg text-stone-700 max-w-3xl">
                    This is your personal space for workouts, food ideas, mindfulness and progress – all tailored around your real life.
                  </p>
                </div>
                <p className="text-stone-600">45, mum of three, lives near Alexandra Park (North London)</p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  {[
                    'Current phase: Week 4 of 12',
                    'Focus this week: Building confidence in the gym and protecting your knees',
                    'Next check-in with Enes: Tuesday 7:30 pm (online call)'
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 bg-white border border-sage-100 rounded-xl p-5 shadow-sm space-y-4">
                <h3 className="text-lg font-semibold text-sage-900">Your journey so far: 30%</h3>
                <div className="h-3 w-full bg-sage-100 rounded-full overflow-hidden">
                  <div className="h-full bg-sage-500 w-[30%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-stone-700">
                  <div>
                    <p className="text-stone-500">Completed</p>
                    <p className="font-semibold text-sage-900">4 of 12 weeks</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Next focus</p>
                    <p className="font-semibold text-sage-900">Confidence + knees</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Check-ins</p>
                    <p className="font-semibold text-sage-900">Weekly, Tue 7:30pm</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Support</p>
                    <p className="font-semibold text-sage-900">Messenger + video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary navigation */}
        <section className="sticky top-20 z-30 bg-white/90 backdrop-blur border-t border-b border-sage-100 mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-x-auto py-3 text-sm sm:text-base">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) => handleAnchorClick(event, section.id)}
                  className="whitespace-nowrap px-4 py-2 rounded-full border border-sage-100 text-sage-800 bg-sage-50 hover:bg-sage-100 transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Today's Plan */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sage-900">Today’s Plan</h2>
              <p className="text-stone-700 mt-2 max-w-3xl">
                Your plan for today is divided into three parts: movement, food and mind. Start where you feel most ready.
              </p>
            </div>
            <div className="text-sm text-stone-600">{today}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Workout card */}
            <div className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Workout</h3>
                <p className="text-stone-700">Lower body strength – knee-friendly version</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-stone-700">
                <p><span className="font-semibold">Location:</span> Local gym or home with dumbbells</p>
                <p><span className="font-semibold">Estimated time:</span> 35–40 minutes</p>
              </div>
              <ul className="mt-4 space-y-2 text-stone-700 text-sm list-disc list-inside">
                <li>5–7 minute warm-up: gentle treadmill walk or slow step-ups</li>
                <li>Supported goblet squats – 3 x 10 reps (hold onto rail if needed)</li>
                <li>Glute bridges – 3 x 12 reps</li>
                <li>Seated leg press – 3 x 10 reps (light to moderate weight)</li>
                <li>Core: dead bug – 3 x 8 reps each side</li>
              </ul>
              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-amber-800">Knee and confidence notes</h4>
                <p className="text-sm text-amber-900 mt-1">
                  Keep your range of motion comfortable, do not force depth in squats, and stop if you feel sharp pain. Focus on slow, controlled movement – this is about building trust in your body, not chasing numbers.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('workout-programme')}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 rounded-lg transition-colors"
              >
                View full workout programme
              </button>
            </div>

            {/* Menu card */}
            <div className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Menu</h3>
                <p className="text-stone-700">Balanced meals you can share with the family</p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-stone-700">
                <div>
                  <p className="font-semibold text-sage-900">Breakfast</p>
                  <p>Greek yoghurt with berries, a spoon of honey and a sprinkle of oats</p>
                </div>
                <div>
                  <p className="font-semibold text-sage-900">Lunch</p>
                  <p>Family pasta bake with extra vegetables – your portion is slightly smaller with a side salad</p>
                </div>
                <div>
                  <p className="font-semibold text-sage-900">Snack</p>
                  <p>Apple slices with a small handful of nuts</p>
                </div>
                <div>
                  <p className="font-semibold text-sage-900">Dinner</p>
                  <p>Oven-baked chicken thighs, mixed vegetables and boiled potatoes</p>
                </div>
              </div>
              <div className="mt-4 bg-sage-50 border border-sage-100 rounded-lg p-4 text-sm text-stone-700">
                If you are craving something sweet today, you have one mindful treat planned: a small chocolate bar or slice of cake. Have it earlier in the day or before your workout, enjoy it slowly and without guilt, then move on with your plan.
              </div>
              <button
                onClick={() => scrollToSection('nutrition-plan')}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 rounded-lg transition-colors"
              >
                View full nutrition and supplements plan
              </button>
            </div>

            {/* Mindfulness card */}
            <div className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Mindfulness</h3>
                <p className="text-stone-700">5 minutes to reset your mind</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-stone-700">
                <p className="font-semibold text-sage-900">Today’s practice: 4–4–6 breathing</p>
                <p>Inhale through your nose for 4 seconds, hold for 4 seconds, exhale slowly through your mouth for 6 seconds. Repeat for 6–8 rounds.</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-sage-900">When to use this</p>
                <ul className="mt-2 space-y-2 text-sm text-stone-700 list-disc list-inside">
                  <li>Before walking into the gym</li>
                  <li>After a stressful moment with the kids</li>
                  <li>Any time you notice guilt or negative self-talk</li>
                </ul>
              </div>
              <p className="mt-4 italic text-sage-800">“Small consistent steps change more than one big push.”</p>
              <button
                onClick={() => scrollToSection('mindfulness-programme')}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 rounded-lg transition-colors"
              >
                View full mindfulness programme
              </button>
            </div>
          </div>
        </section>

        {/* Workout Programme */}
        <section id="workout-programme" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Workout Programme</h2>
            <p className="text-stone-700 max-w-4xl">
              This is your full 8–12 week training map. It is built to protect your knees, rebuild confidence in the gym and fit around a busy family schedule.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-semibold text-sage-900">Before you start</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-2">
              <li>Mild knee pain on stairs and when squatting – avoid deep, fast or bouncing squats.</li>
              <li>Focus on slow, controlled movements and stable knee alignment.</li>
              <li>If pain is sharp or worsens, stop the exercise and switch to a low-impact alternative.</li>
              <li>Always warm up for at least 5 minutes before lower body sessions.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-sage-900">Weekly structure</h3>
            <p className="text-stone-700 max-w-3xl">
              You are aiming for 3 workouts per week. If life gets busy, do 2 and let that be enough – no punishment, no “starting over”.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{
                title: 'Day 1 – Lower body strength (knee-friendly)',
                exercises: [
                  'Supported goblet squats or box squats – 3 x 10',
                  'Seated leg press – 3 x 10 moderate weight',
                  'Glute bridges – 3 x 12',
                  'Step-ups to low box – 3 x 8 each leg'
                ]
              }, {
                title: 'Day 2 – Upper body and core',
                exercises: [
                  'Incline dumbbell press – 3 x 10',
                  'Single-arm dumbbell row – 3 x 10 each',
                  'Half-kneeling shoulder press – 3 x 8 each',
                  'Core: dead bug – 3 x 8 each side'
                ]
              }, {
                title: 'Day 3 – Full-body circuit (optional home session)',
                exercises: [
                  'Bodyweight squats to chair – 3 x 12',
                  'Elevated push-ups – 3 x 8-10',
                  'Hip hinge with backpack – 3 x 12',
                  'Marching glute bridges – 3 x 10 each'
                ]
              }].map((day) => (
                <div key={day.title} className="bg-white border border-sage-100 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-sage-900">{day.title}</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-stone-700 space-y-1">
                    {day.exercises.map((exercise) => (
                      <li key={exercise}>{exercise}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-sage-900">Alternative exercises</h3>
            <div className="bg-white border border-sage-100 rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-sage-100">
                {[{
                  insteadOf: 'standard lunges',
                  do: 'supported reverse lunges, holding onto a rail'
                }, {
                  insteadOf: 'jump squats',
                  do: 'slow bodyweight squats to a chair'
                }, {
                  insteadOf: 'running',
                  do: 'brisk walking or incline treadmill'
                }].map((option) => (
                  <div key={option.insteadOf} className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 text-sm text-stone-700">
                    <p className="font-semibold text-sage-900">Instead of: {option.insteadOf}</p>
                    <p className="text-stone-700">Do: {option.do}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Plan */}
        <section id="nutrition-plan" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Nutrition & Supplements Plan</h2>
            <p className="text-stone-700 max-w-4xl">
              This plan is designed for a busy mum cooking for a family, with a sweet tooth and limited time. It focuses on simpler changes you can keep, not strict rules you will break.
            </p>
          </div>

          <div className="bg-white border border-sage-100 rounded-lg shadow-sm p-5 space-y-4">
            <h3 className="text-xl font-semibold text-sage-900">Your preferences and boundaries</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-2">
              <li>You enjoy chocolate and cake – these are allowed in mindful portions.</li>
              <li>Family-friendly meals are a must – no separate diet meals for you alone.</li>
              <li>You prefer warm, savoury dinners and dislike heavy late-night eating.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sage-50 border border-sage-100 rounded-lg p-5 space-y-3">
              <h3 className="text-lg font-semibold text-sage-900">Daily structure</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>Breakfast: protein + fruit</li>
                <li>Lunch: family meal with plate and portion adjustments</li>
                <li>Afternoon: planned snack</li>
                <li>Dinner: balanced plate with vegetables, protein and smart carbs</li>
              </ul>
            </div>
            <div className="bg-white border border-sage-100 rounded-lg p-5 space-y-3 shadow-sm">
              <h3 className="text-lg font-semibold text-sage-900">Sweet treats – your rules</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>One planned treat per day if you genuinely want it.</li>
                <li>Preferably earlier in the day or before activity.</li>
                <li>Eat slowly, with attention, without guilt.</li>
                <li>If you have more than planned, note it and move on – no punishment.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-sage-100 rounded-lg p-5 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-sage-900">Supplements</h3>
            <p className="text-stone-700">
              Options like vitamin D, omega 3 or a basic multivitamin can be discussed with your GP. No supplements are required for this plan to work; they are optional extras.
            </p>
          </div>
        </section>

        {/* Mindfulness Programme */}
        <section id="mindfulness-programme" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Mindfulness Programme</h2>
            <p className="text-stone-700 max-w-4xl">
              This part of your plan helps you manage stress, guilt and negative self-talk so you can actually stick with your workouts and nutrition changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sage-50 border border-sage-100 rounded-lg p-5 space-y-3">
              <h3 className="text-lg font-semibold text-sage-900">Daily practices</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>4–4–6 breathing (5 minutes)</li>
                <li>1-minute check-in: “What do I need right now?”</li>
                <li>Gratitude note: write down one thing your body did for you today.</li>
              </ul>
            </div>
            <div className="bg-white border border-sage-100 rounded-lg p-5 shadow-sm space-y-3">
              <h3 className="text-lg font-semibold text-sage-900">Weekly reflections</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>What worked well this week, even if the week felt messy?</li>
                <li>Where did “all or nothing” thinking show up, and how could you respond differently next time?</li>
              </ul>
              <p className="text-stone-700">
                When things go off-plan: setbacks are normal. There is no punishment or restarting the whole programme – just the next best step.
              </p>
            </div>
          </div>
        </section>

        {/* Useful Resources */}
        <section id="useful-resources" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Useful Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-sage-100 rounded-lg p-5 shadow-sm space-y-3">
              <h3 className="text-lg font-semibold text-sage-900">Local movement spots</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>Walking routes in and around Alexandra Park</li>
                <li>Outdoor gym stations in the park</li>
                <li>Example nearby budget-friendly gym</li>
              </ul>
            </div>
            <div className="bg-sage-50 border border-sage-100 rounded-lg p-5 space-y-3">
              <h3 className="text-lg font-semibold text-sage-900">Apps and tools</h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2">
                <li>Habit tracker for ticking off workouts</li>
                <li>Timer app for intervals and breathing exercises</li>
                <li>Notes app for reflections and wins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Progress Tracking */}
        <section id="progress-tracking" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Progress Tracking</h2>
            <p className="text-stone-700 max-w-4xl">
              Here is where you will log your progress and see your journey over time. On this sample page, the data is pre-filled to show how it will look.
            </p>
          </div>

          <div className="overflow-hidden bg-white border border-sage-100 rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-sage-100 text-sm">
                <thead className="bg-sage-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sage-900 font-semibold">Week</th>
                    <th className="px-4 py-3 text-left text-sage-900 font-semibold">Workouts completed</th>
                    <th className="px-4 py-3 text-left text-sage-900 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-50">
                  {[
                    { week: 'Week 1', workouts: '2 / 3', notes: 'Started slow, knees felt okay with support.' },
                    { week: 'Week 2', workouts: '3 / 3', notes: 'Confidence growing, added light leg press.' },
                    { week: 'Week 3', workouts: '2 / 3', notes: 'Busy with family, focused on home circuit.' },
                    { week: 'Week 4', workouts: '3 / 3', notes: 'Energy better, breathing practice helped with nerves.' }
                  ].map((row) => (
                    <tr key={row.week} className="hover:bg-sage-50/50">
                      <td className="px-4 py-3 font-semibold text-sage-900">{row.week}</td>
                      <td className="px-4 py-3 text-stone-700">{row.workouts}</td>
                      <td className="px-4 py-3 text-stone-700">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-sage-800 font-semibold">Consistency score (last 4 weeks)</p>
              <p className="text-3xl font-serif font-bold text-sage-900">72%</p>
            </div>
            <div className="flex-1">
              <div className="h-3 w-full bg-white border border-sage-100 rounded-full overflow-hidden">
                <div className="h-full bg-sage-500" style={{ width: '72%' }}></div>
              </div>
              <p className="text-xs text-stone-600 mt-2">Aiming for 70–80% consistency – you are on track.</p>
            </div>
          </div>

          <p className="text-stone-700 max-w-4xl">
            Enes will review this with you during your check-ins and adjust your plan when needed.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};
