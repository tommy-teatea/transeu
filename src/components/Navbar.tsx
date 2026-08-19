import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Shield, ArrowUpRight, Radio } from 'lucide-react';
import { sfx } from '../utils/audio';

interface NavbarProps {
  lang: 'en' | 'zh';
  setLang: (l: 'en' | 'zh') => void;
  onOpenApply: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenApply,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(sfx.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const newState = sfx.toggleSound();
    setSoundOn(newState);
  };

  const navLinks = [
    { id: 'mission', label: 'Mission', labelZh: '願景使命', href: '#mission' },
    { id: 'fellowship', label: 'Fellowship', labelZh: '領袖項目', href: '#fellowship' },
    { id: 'telemetry', label: 'Telemetry', labelZh: '數據儀表', href: '#telemetry' },
    { id: 'radar', label: 'HK Radar', labelZh: '學界雷達', href: '#radar' },
    { id: 'simulator', label: 'Suitability', labelZh: '適配測評', href: '#simulator' },
    { id: 'logs', label: 'Mission Logs', labelZh: '歷屆故事', href: '#logs' },
    { id: 'partners', label: 'Partners', labelZh: '夥伴資助', href: '#partners' }
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo-btn"
            href="#hero"
            onClick={() => sfx.playClick()}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center border border-white/40 group-hover:border-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M50 10L85 85H15L50 10Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="miter" />
                <path d="M50 35V85" stroke="currentColor" strokeWidth="6" />
                <path d="M30 65H70" stroke="currentColor" strokeWidth="4" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.25em] uppercase font-space text-white">
                TEACH FOR HONG KONG
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-mono-telemetry flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                良師香港 // S88 CHARITY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold tracking-widest uppercase font-mono-telemetry">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={() => sfx.playClick()}
                  className={`transition-colors relative py-1 hover:text-white ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {lang === 'zh' ? link.labelZh : link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Bar */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Audio Toggle */}
            <button
              id="audio-toggle-btn"
              onClick={toggleAudio}
              title={soundOn ? 'Mute Telemetry Audio' : 'Enable Telemetry Audio'}
              className="p-2 border border-white/20 hover:border-white/60 text-zinc-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden xl:inline text-[10px] uppercase font-mono-telemetry">
                {soundOn ? 'SFX ON' : 'SFX'}
              </span>
            </button>

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => {
                sfx.playClick();
                setLang(lang === 'en' ? 'zh' : 'en');
              }}
              className="px-2.5 py-1.5 border border-white/20 hover:border-white/60 text-[11px] font-mono-telemetry tracking-wider transition-all text-zinc-300 hover:text-white"
            >
              {lang === 'en' ? '繁中' : 'ENG'}
            </button>

            {/* Apply Button */}
            <button
              id="header-apply-btn"
              onClick={() => {
                sfx.playLaunch();
                onOpenApply();
              }}
              className="relative group bg-white text-black hover:bg-zinc-200 px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-widest font-mono-telemetry transition-all duration-200 flex items-center space-x-1.5 overflow-hidden"
            >
              <span className="relative z-10">{lang === 'zh' ? '申請項目' : 'APPLY NOW'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => {
                sfx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 border border-white/20 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (SpaceX Fullscreen Style) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-12 px-8 lg:hidden animate-fadeIn"
        >
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <span className="text-xs uppercase font-mono-telemetry tracking-[0.3em] text-zinc-500">
                MISSION DIRECTORY
              </span>
              <div className="flex items-center gap-2 text-xs font-mono-telemetry text-emerald-400">
                <Radio className="w-3 h-3 animate-pulse" />
                ORBITAL STATUS: ACTIVE
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    sfx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl font-bold uppercase tracking-wider font-space text-zinc-200 hover:text-white transition-colors"
                >
                  {lang === 'zh' ? link.labelZh : link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs font-mono-telemetry text-center hover:bg-zinc-200"
            >
              {lang === 'zh' ? '立即申請第十一屆項目老師' : 'APPLY FOR COHORT 2026-2027'}
            </button>
            <div className="flex justify-between items-center text-xs font-mono-telemetry text-zinc-500">
              <span>良師香港 TEACH FOR HONG KONG</span>
              <span>S88 CHARITY NO. 91/14187</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
