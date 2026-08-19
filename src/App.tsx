import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionOverview } from './components/MissionOverview';
import { TelemetryStats } from './components/TelemetryStats';
import { DistrictRadar } from './components/DistrictRadar';
import { FellowSimulator } from './components/FellowSimulator';
import { MissionLogs } from './components/MissionLogs';
import { PartnersAndDonors } from './components/PartnersAndDonors';
import { ApplicationModal } from './components/ApplicationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'mission', 'fellowship', 'telemetry', 'radar', 'simulator', 'logs', 'partners'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenApply={() => setIsApplyOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          lang={lang}
          onOpenApply={() => setIsApplyOpen(true)}
        />

        <MissionOverview
          lang={lang}
          onOpenApply={() => setIsApplyOpen(true)}
        />

        <TelemetryStats
          lang={lang}
        />

        <DistrictRadar
          lang={lang}
        />

        <FellowSimulator
          lang={lang}
          onOpenApply={() => setIsApplyOpen(true)}
        />

        <MissionLogs
          lang={lang}
        />

        <PartnersAndDonors
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* Interactive Fellowship Application Modal */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        lang={lang}
      />
    </div>
  );
}

