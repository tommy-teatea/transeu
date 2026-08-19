import React, { useState } from 'react';
import { sfx } from '../utils/audio';
import { Rocket, Gauge, Compass, CheckCircle2, ChevronRight, Sparkles, Terminal, Award } from 'lucide-react';

interface FellowSimulatorProps {
  lang: 'en' | 'zh';
  onOpenApply: () => void;
}

export const FellowSimulator: React.FC<FellowSimulatorProps> = ({ lang, onOpenApply }) => {
  const [academic, setAcademic] = useState('stem');
  const [exp, setExp] = useState('grad');
  const [track, setTrack] = useState('steam');
  const [leadership, setLeadership] = useState('empathy');
  const [analyzed, setAnalyzed] = useState(true);

  // Compute readiness stats
  const getProfileData = () => {
    let score = 94;
    let trackName = 'STEAM & Technological Empowerment';
    let trackNameZh = 'STEAM 科創與未來技能賦能';
    let alumniTrajectory = 'Technology / AI Product / EdTech Venture';
    let alumniTrajectoryZh = '前沿科技 / AI 產品總監 / 教育創投';

    if (academic === 'business') {
      score = 96;
      trackName = 'Financial Literacy & Career Expeditions';
      trackNameZh = '理財思維與跨國企業生涯探索';
      alumniTrajectory = 'Strategy Consulting / ESG / Management';
      alumniTrajectoryZh = '頂尖策略顧問 / 企業ESG / 管理階層';
    } else if (academic === 'humanities') {
      score = 95;
      trackName = 'Language Empowerment & Social Inclusion';
      trackNameZh = '語言賦能與少數族裔跨文化共融';
      alumniTrajectory = 'Education Policy / NGO Leadership / Teaching';
      alumniTrajectoryZh = '教育政策智庫 / 跨國社企總監 / 資深教育家';
    } else if (academic === 'social') {
      score = 93;
      trackName = 'Social-Emotional Learning & Positive Psychology';
      trackNameZh = '正向生命教育與心靈素養工程';
      alumniTrajectory = 'Government Advisory / Social Entrepreneurship';
      alumniTrajectoryZh = '公營機構決策顧問 / 青年社會創業家';
    }

    return { score, trackName, trackNameZh, alumniTrajectory, alumniTrajectoryZh };
  };

  const profile = getProfileData();

  return (
    <section id="simulator" className="py-24 bg-black relative border-b border-white/10 overflow-hidden">
      {/* Dot matrix */}
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-zinc-400 mb-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>CANDIDATE CALIBRATION SIMULATOR // 04</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '項目老師發射適配模擬器' : 'FELLOWSHIP SUITABILITY MATRIX'}
            </h2>
          </div>
          <p className="text-sm font-mono-telemetry text-zinc-400 max-w-md mt-4 md:mt-0">
            {lang === 'zh'
              ? '良師香港歡迎所有學科背景。輸入你的專長與願景，即時校準你的前線教學與長遠影響力軌道。'
              : 'Calibrate your academic background and leadership vectors to simulate your classroom mission profile and alumni trajectory.'}
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Parameter Selectors */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Academic Discipline */}
            <div className="border border-white/20 bg-zinc-950 p-6">
              <span className="text-xs font-mono-telemetry text-zinc-400 uppercase tracking-widest block mb-4">
                01 // {lang === 'zh' ? '學術背景與專業領域' : 'ACADEMIC DISCIPLINE'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'stem', label: 'STEM / Eng', labelZh: '理工科創' },
                  { id: 'business', label: 'Business / Econ', labelZh: '商學經濟' },
                  { id: 'humanities', label: 'Arts & Lang', labelZh: '人文語言' },
                  { id: 'social', label: 'Social Sciences', labelZh: '社會科學' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sfx.playClick();
                      setAcademic(item.id);
                    }}
                    className={`p-3 text-xs font-mono-telemetry border transition-all text-left ${
                      academic === item.id
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/10 bg-black text-zinc-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {lang === 'zh' ? item.labelZh : item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Experience Level */}
            <div className="border border-white/20 bg-zinc-950 p-6">
              <span className="text-xs font-mono-telemetry text-zinc-400 uppercase tracking-widest block mb-4">
                02 // {lang === 'zh' ? '經歷階度與資歷' : 'CAREER VELOCITY'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'grad', label: 'Final Year / Fresh Grad', labelZh: '應屆大學／碩士畢業生' },
                  { id: 'early', label: 'Early Career (1-2 Yrs)', labelZh: '青年職場新人 (1-2年)' },
                  { id: 'pro', label: 'Young Professional (3+ Yrs)', labelZh: '各界專業人士 (3年以上)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sfx.playClick();
                      setExp(item.id);
                    }}
                    className={`p-3 text-xs font-mono-telemetry border transition-all text-left ${
                      exp === item.id
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/10 bg-black text-zinc-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {lang === 'zh' ? item.labelZh : item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Core Leadership Superpower */}
            <div className="border border-white/20 bg-zinc-950 p-6">
              <span className="text-xs font-mono-telemetry text-zinc-400 uppercase tracking-widest block mb-4">
                03 // {lang === 'zh' ? '核心領袖特質' : 'LEADERSHIP SUPERPOWER'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'empathy', label: 'Empathetic Connection', labelZh: '同理心與心靈陪伴' },
                  { id: 'innovation', label: 'Radical Problem Solving', labelZh: '開創性難題解決' },
                  { id: 'coalition', label: 'Cross-Sector Mobilization', labelZh: '跨界資源整合動員' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      sfx.playClick();
                      setLeadership(item.id);
                    }}
                    className={`p-3 text-xs font-mono-telemetry border transition-all text-left ${
                      leadership === item.id
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/10 bg-black text-zinc-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {lang === 'zh' ? item.labelZh : item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Telemetry Output Dashboard Card */}
          <div className="lg:col-span-5 border border-white bg-zinc-950 p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(255,255,255,0.06)] relative">
            
            {/* Header Telemetry Badge */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-xs font-mono-telemetry text-emerald-400 flex items-center gap-1.5 font-bold uppercase">
                <Gauge className="w-4 h-4" />
                CALIBRATION COMPLETE
              </span>
              <span className="text-xs font-mono-telemetry text-zinc-500">TFHK-CALIB-OK</span>
            </div>

            {/* Score & Gauge */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono-telemetry text-zinc-500 tracking-widest">
                  READINESS INDEX
                </span>
                <div className="text-5xl sm:text-6xl font-extrabold font-space text-white mt-1">
                  {profile.score}<span className="text-2xl font-normal text-zinc-400">%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono-telemetry text-zinc-500 tracking-widest">
                  COHORT STATUS
                </span>
                <p className="text-xs font-bold font-mono-telemetry text-emerald-400 uppercase mt-1">
                  HIGH PROFILE MATCH
                </p>
              </div>
            </div>

            {/* Simulated Track Deployment */}
            <div className="bg-black/60 border border-white/15 p-4 space-y-2 font-mono-telemetry">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                OPTIMIZED MISSION TRACK
              </span>
              <p className="text-sm font-bold text-white uppercase font-space">
                {lang === 'zh' ? profile.trackNameZh : profile.trackName}
              </p>
              <p className="text-[11px] text-zinc-400">
                Placement in grassroots school with 1:1 dedicated pedagogical coach.
              </p>
            </div>

            {/* Projected Payload / Impact */}
            <div className="grid grid-cols-2 gap-4 font-mono-telemetry text-xs">
              <div className="border border-white/10 bg-black/40 p-3">
                <span className="text-zinc-500 block text-[10px] uppercase">ESTIMATED PAYLOAD</span>
                <span className="text-lg font-bold text-white font-space mt-1 block">300+ Students</span>
              </div>
              <div className="border border-white/10 bg-black/40 p-3">
                <span className="text-zinc-500 block text-[10px] uppercase">MONTHLY STIPEND</span>
                <span className="text-lg font-bold text-emerald-400 font-space mt-1 block">HK$ 18,000+</span>
              </div>
            </div>

            {/* Simulated Alumni Vector */}
            <div className="border-t border-white/10 pt-4 space-y-1 font-mono-telemetry">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                ALUMNI SYSTEMIC TRAJECTORY
              </span>
              <p className="text-xs font-bold text-zinc-200">
                {lang === 'zh' ? profile.alumniTrajectoryZh : profile.alumniTrajectory}
              </p>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => {
                sfx.playLaunch();
                onOpenApply();
              }}
              className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>{lang === 'zh' ? '將此規格帶入申請表' : 'INITIALIZE APPLICATION WITH PROFILE'}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
