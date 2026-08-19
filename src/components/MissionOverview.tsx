import React, { useState } from 'react';
import { CORE_PILLARS, FELLOWSHIP_STAGES } from '../data/tehkData';
import { sfx } from '../utils/audio';
import { Layers, Compass, CheckCircle2, ChevronRight, BookOpen, Users, Cpu, Award } from 'lucide-react';

interface MissionOverviewProps {
  lang: 'en' | 'zh';
  onOpenApply: () => void;
}

export const MissionOverview: React.FC<MissionOverviewProps> = ({ lang, onOpenApply }) => {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="mission" className="py-24 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-zinc-400 mb-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span>CORE ARCHITECTURE // 01</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '任務藍圖與核心支柱' : 'MISSION PROFILE & PILLARS'}
            </h2>
          </div>
          <p className="text-sm font-mono-telemetry text-zinc-400 max-w-md mt-4 md:mt-0">
            {lang === 'zh'
              ? '良師香港不僅提供全職教學，更是一座全方位淬鍊跨界領袖、打破跨代貧窮的發射台。'
              : 'Engineering educational equity through high-density talent deployment, frontline immersion, and enduring systemic leadership.'}
          </p>
        </div>

        {/* 3 Core Pillars - SpaceX Vehicle Architecture Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              onClick={() => {
                sfx.playClick();
                setSelectedPillar(idx);
              }}
              className={`p-8 border transition-all duration-300 relative group cursor-pointer ${
                selectedPillar === idx
                  ? 'border-white bg-zinc-950/80 shadow-[0_0_30px_rgba(255,255,255,0.08)]'
                  : 'border-white/15 bg-black/40 hover:border-white/40'
              }`}
            >
              {/* Telemetry Tag */}
              <div className="flex items-center justify-between text-xs font-mono-telemetry text-zinc-500 mb-6">
                <span>{pillar.code}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white" />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 text-white group-hover:border-white transition-colors">
                {idx === 0 && <Users className="w-6 h-6" />}
                {idx === 1 && <Cpu className="w-6 h-6" />}
                {idx === 2 && <Award className="w-6 h-6" />}
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight font-space text-white mb-2">
                {lang === 'zh' ? pillar.titleZh : pillar.title}
              </h3>
              <p className="text-xs font-mono-telemetry text-zinc-400 mb-4 tracking-wider uppercase">
                {lang === 'zh' ? pillar.taglineZh : pillar.tagline}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                {lang === 'zh' ? pillar.descriptionZh : pillar.description}
              </p>

              {/* Specs readout */}
              <div className="border-t border-white/10 pt-4 space-y-2.5 font-mono-telemetry text-xs">
                {pillar.specs.map((sp, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px]">
                    <span className="text-zinc-500 uppercase">{sp.key}</span>
                    <span className="text-zinc-200 font-medium text-right">{sp.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 1-Year Fellowship Flight Profile (Stage-by-Stage Timeline) */}
        <div id="fellowship" className="pt-8">
          <div className="border border-white/20 bg-zinc-950 p-6 sm:p-10 relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 mb-8 gap-4">
              <div>
                <span className="text-xs font-mono-telemetry text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                  FLIGHT TRAJECTORY // 4-STAGE ACCELERATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight font-space text-white mt-1">
                  {lang === 'zh' ? '項目老師一年進階發射時程' : 'THE 1-YEAR FELLOWSHIP FLIGHT PROFILE'}
                </h3>
              </div>
              <button
                onClick={() => {
                  sfx.playLaunch();
                  onOpenApply();
                }}
                className="bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest font-mono-telemetry hover:bg-zinc-200"
              >
                {lang === 'zh' ? '申請本屆發射席位' : 'JOIN THE CORPS'}
              </button>
            </div>

            {/* Stage Selector Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {FELLOWSHIP_STAGES.map((stg, i) => (
                <button
                  key={stg.stage}
                  onClick={() => {
                    sfx.playClick();
                    setActiveStage(i);
                  }}
                  className={`p-4 text-left border transition-all font-mono-telemetry ${
                    activeStage === i
                      ? 'border-white bg-white/10 text-white'
                      : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-200'
                  }`}
                >
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{stg.stage}</div>
                  <div className="text-xs font-bold text-white uppercase mt-1">
                    {lang === 'zh' ? stg.nameZh : stg.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{stg.duration}</div>
                </button>
              ))}
            </div>

            {/* Selected Stage Detail Panel */}
            {(() => {
              const cur = FELLOWSHIP_STAGES[activeStage];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 p-6 sm:p-8">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-1 bg-white/10 border border-white/20 text-xs font-mono-telemetry font-bold text-white uppercase">
                        {cur.stage}
                      </span>
                      <span className="text-xs font-mono-telemetry text-zinc-400">
                        {cur.code}
                      </span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-bold uppercase font-space text-white">
                      {lang === 'zh' ? cur.nameZh : cur.name}
                    </h4>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {lang === 'zh' ? cur.descriptionZh : cur.description}
                    </p>

                    {/* Key Activities List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-mono-telemetry uppercase tracking-wider text-zinc-400 mb-2">
                        {lang === 'zh' ? '關鍵執行模組與實踐' : 'CORE FLIGHT OPERATIONS:'}
                      </p>
                      {(lang === 'zh' ? cur.keyActivitiesZh : cur.keyActivities).map((act, i) => (
                        <div key={i} className="flex items-start space-x-3 text-xs text-zinc-300 font-mono-telemetry">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 border border-white/15 bg-zinc-950 p-6 space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[10px] uppercase font-mono-telemetry text-zinc-500">
                        PRIMARY METRIC
                      </span>
                      <div className="text-2xl font-bold font-space text-white mt-1">
                        {cur.metrics.value}
                      </div>
                      <div className="text-xs font-mono-telemetry text-zinc-400">
                        {cur.metrics.label}
                      </div>
                    </div>

                    <div className="space-y-3 text-xs font-mono-telemetry">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-zinc-500">STAGE TIMELINE</span>
                        <span className="text-white">{cur.duration}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-zinc-500">SUPPORT RATIO</span>
                        <span className="text-white">1:1 Dedicated Mentor</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-zinc-500">TARGET CORPS</span>
                        <span className="text-white">Cohort 2026-2027</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        sfx.playLaunch();
                        onOpenApply();
                      }}
                      className="w-full bg-white text-black py-3 text-xs font-bold uppercase tracking-widest font-mono-telemetry hover:bg-zinc-200 transition-colors"
                    >
                      {lang === 'zh' ? '進入申請程序' : 'INITIALIZE APPLICATION'}
                    </button>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

      </div>
    </section>
  );
};
