import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ThreePillars } from './components/ThreePillars';
import { WhatMakesDifferent } from './components/WhatMakesDifferent';
import { IsThisForMe } from './components/IsThisForMe';
import { HowItWorks } from './components/HowItWorks';
import { WhyDifferent } from './components/WhyDifferent';
import { MeetEnes } from './components/MeetEnes';
import { PlansAndPricing } from './components/PlansAndPricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ClientLoginPage } from './components/ClientLoginPage';
import { getBaseRoot, getLocationWithHash } from './utils/navigation';

function App() {
  const [locationKey, setLocationKey] = useState<string>(getLocationWithHash());
  const baseRoot = useMemo(() => getBaseRoot(), []);
  const clientLoginPath = `${baseRoot}client-login`;
  const homePath = baseRoot;

  useEffect(() => {
    const handlePopState = () => setLocationKey(getLocationWithHash());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path: string) => {
    if (typeof window === 'undefined') return;
    const current = getLocationWithHash();
    if (current !== path) {
      window.history.pushState({}, '', path);
    }
    setLocationKey(path);

    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
      const targetId = path.slice(hashIndex + 1);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    navigateTo(`${homePath}#free-chat`);
  }, [homePath, navigateTo]);

  const isClientDashboard =
    locationKey === clientLoginPath ||
    locationKey.endsWith('/client-login') ||
    locationKey.endsWith('client-login/');

  if (isClientDashboard) {
    return (
      <ClientLoginPage
        onNavigateHome={() => navigateTo(homePath)}
        onNavigateClientLogin={() => navigateTo(clientLoginPath)}
        onNavigateContact={() => navigateTo(`${homePath}#free-chat`)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={scrollToContact}
        clientLoginHref={clientLoginPath}
        onClientLoginNavigate={() => navigateTo(clientLoginPath)}
        onLogoClick={() => navigateTo(homePath)}
      />
      <Hero onContactClick={scrollToContact} />
      <TrustBadges />
      <ThreePillars />
      <WhatMakesDifferent />
      <IsThisForMe />
      <HowItWorks />
      <WhyDifferent />
      <MeetEnes />
      <PlansAndPricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
