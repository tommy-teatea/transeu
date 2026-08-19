import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Rocket, Sparkles, Terminal, Activity, Compass } from 'lucide-react';
import { sfx } from '../utils/audio';
import { TEHK_TELEMETRY } from '../data/tehkData';

interface HeroSectionProps {
  lang: 'en' | 'zh';
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenApply }) => {
  // Live Countdown to Cohort 2026/2027 Priority Cutoff
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-white/10"
    >
      {/* Immersive UI Dot Grid & Cosmic Ambient Background */}
      <div className="absolute inset-0 bg-grid-dots opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      
      {/* Background Graphic Rings (SpaceX Orbital Aesthetic) */}
      <div className="absolute -right-32 top-20 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none animate-pulse" />
      <div className="absolute -right-64 -top-20 w-[900px] h-[900px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-blue-950/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Top Telemetry Header Tag */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3 text-xs font-mono-telemetry">
            <span className="px-2 py-0.5 bg-white text-black font-bold uppercase tracking-widest text-[10px]">
              MISSION STATUS
            </span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              COHORT 2026-2027 ENROLLMENT OPEN
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono-telemetry text-zinc-400">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-zinc-500" />
              <span>ORBIT: HONG KONG S88</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span>CALLSIGN: TFHK-011</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 lg:py-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-px w-8 bg-white/40" />
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-400 font-mono-telemetry">
              {lang === 'zh' ? '推動教育公平 // 培育未來領袖' : 'TEACH FOR HONG KONG // EDUCATION REVOLUTION'}
            </p>
          </div>

          {/* Large SpaceX Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 font-space">
            {lang === 'zh' ? (
              <>
                以領袖視野 <br />
                <span className="text-stroke-white text-transparent">重塑香港教育</span>
              </>
            ) : (
              <>
                ACCELERATE <br />
                <span className="text-stroke-white text-transparent">EDUCATION EQUITY</span>
              </>
            )}
          </h1>

          {/* Subtitle / Mission Statement */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed font-light">
            {lang === 'zh'
              ? '良師香港招募各界傑出青年，全職進駐基層學校擔任一年項目老師。以創新教學激發基層學子潛能，培育具有同理心與宏觀視野的跨界未來領袖。'
              : 'Mobilizing exceptional university graduates and young professionals as full-time classroom leaders for 1 year in high-need schools. Driving immediate student breakthroughs and building a lifelong coalition for systemic educational change.'}
          </p>

          {/* Dual Action Buttons + Telemetry Badge */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <button
              id="hero-apply-btn"
              onClick={() => {
                sfx.playLaunch();
                onOpenApply();
              }}
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
            >
              <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>{lang === 'zh' ? '立即申請項目老師' : 'APPLY FOR FELLOWSHIP'}</span>
            </button>

            <a
              id="hero-explore-btn"
              href="#fellowship"
              onClick={() => sfx.playClick()}
              className="border border-white/30 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-white/5 transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>{lang === 'zh' ? '探索任務規格' : 'FLIGHT PROFILE'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Launch Cutoff Countdown Bar */}
          <div className="p-4 border border-white/10 bg-black/60 backdrop-blur-md max-w-xl">
            <div className="flex items-center justify-between text-xs font-mono-telemetry text-zinc-400 mb-2">
              <span className="uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                {lang === 'zh' ? '第十一屆截止倒數' : 'COHORT XI LAUNCH WINDOW CLOSES IN'}
              </span>
              <span className="text-zinc-500">T-MINUS</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center font-mono-telemetry">
              <div className="bg-zinc-950 border border-white/10 py-2">
                <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500">{lang === 'zh' ? '天' : 'DAYS'}</div>
              </div>
              <div className="bg-zinc-950 border border-white/10 py-2">
                <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500">{lang === 'zh' ? '時' : 'HRS'}</div>
              </div>
              <div className="bg-zinc-950 border border-white/10 py-2">
                <div className="text-xl sm:text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500">{lang === 'zh' ? '分' : 'MIN'}</div>
              </div>
              <div className="bg-zinc-950 border border-white/10 py-2">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500">{lang === 'zh' ? '秒' : 'SEC'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Strip (SpaceX Metrics Bar) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono-telemetry mb-1">
              {lang === 'zh' ? '累計受惠學生' : 'STUDENTS IMPACTED'}
            </p>
            <p className="text-2xl sm:text-3xl font-bold uppercase font-space text-white">25,000+</p>
            <p className="text-[11px] text-zinc-400 font-mono-telemetry mt-0.5">Grassroots Classrooms</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono-telemetry mb-1">
              {lang === 'zh' ? '項目老師陣容' : 'FELLOWS DEPLOYED'}
            </p>
            <p className="text-2xl sm:text-3xl font-bold uppercase font-space text-white">140+</p>
            <p className="text-[11px] text-zinc-400 font-mono-telemetry mt-0.5">Cross-Sector Leaders</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono-telemetry mb-1">
              {lang === 'zh' ? '視野擴闊提升率' : 'HORIZON EXPANSION'}
            </p>
            <p className="text-2xl sm:text-3xl font-bold uppercase font-space text-white">83%</p>
            <p className="text-[11px] text-zinc-400 font-mono-telemetry mt-0.5">World Curiosity Index</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono-telemetry mb-1">
              {lang === 'zh' ? '教育公平持續承諾' : 'SYSTEMIC COMMITMENT'}
            </p>
            <p className="text-2xl sm:text-3xl font-bold uppercase font-space text-emerald-400">97%</p>
            <p className="text-[11px] text-zinc-400 font-mono-telemetry mt-0.5">Lifelong Alumni Force</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <a
            href="#mission"
            onClick={() => sfx.playClick()}
            className="text-zinc-500 hover:text-white transition-colors animate-bounce p-1"
            title="Scroll Down"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
