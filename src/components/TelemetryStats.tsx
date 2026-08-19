import React, { useState } from 'react';
import { TEHK_TELEMETRY, MetricTelemetry } from '../data/tehkData';
import { sfx } from '../utils/audio';
import { Activity, BarChart3, TrendingUp, ShieldCheck, Database, Zap } from 'lucide-react';

interface TelemetryStatsProps {
  lang: 'en' | 'zh';
}

export const TelemetryStats: React.FC<TelemetryStatsProps> = ({ lang }) => {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  return (
    <section id="telemetry" className="py-24 bg-black relative border-b border-white/10 overflow-hidden">
      {/* Dense Grid Background */}
      <div className="absolute inset-0 bg-grid-dense opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-emerald-400 mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>LIVE TELEMETRY & SYSTEM PERFORMANCE // 02</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '任務實時成效儀表' : 'IMPACT TELEMETRY'}
            </h2>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono-telemetry text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              INDEPENDENTLY EVALUATED
            </span>
            <span className="border-l border-white/20 pl-4">10 YEARS ORBITAL DATA</span>
          </div>
        </div>

        {/* Telemetry Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TEHK_TELEMETRY.map((item) => {
            const isSelected = selectedMetric === item.id;
            return (
              <div
                key={item.id}
                onClick={() => {
                  sfx.playClick();
                  setSelectedMetric(isSelected ? null : item.id);
                }}
                className={`p-6 border transition-all duration-300 relative cursor-pointer group ${
                  isSelected
                    ? 'border-white bg-zinc-950 shadow-[0_0_25px_rgba(255,255,255,0.1)]'
                    : 'border-white/15 bg-black/70 hover:border-white/40'
                }`}
              >
                {/* Header Tag */}
                <div className="flex justify-between items-center text-xs font-mono-telemetry mb-6">
                  <span className="text-zinc-500 tracking-widest">{item.telemetryCode}</span>
                  <span className="text-[10px] px-2 py-0.5 border border-white/20 text-zinc-300 group-hover:border-white">
                    {item.trend}
                  </span>
                </div>

                {/* Big Stat Display */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl sm:text-6xl font-extrabold uppercase font-space text-white tracking-tight">
                      {item.value.toLocaleString()}
                    </span>
                    <span className="text-3xl sm:text-4xl font-light text-zinc-400 font-mono-telemetry">
                      {item.suffix}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase font-space text-zinc-200 mt-2">
                    {lang === 'zh' ? item.labelZh : item.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-mono-telemetry leading-relaxed border-t border-white/10 pt-4">
                  {lang === 'zh' ? item.descriptionZh : item.description}
                </p>

                {/* Corner beacon */}
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Systemic Multiplier Deep-Dive Banner */}
        <div className="border border-white/20 bg-zinc-950 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <span className="text-xs font-mono-telemetry text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                LONG-TERM SYSTEMIC MULTIPLIER
              </span>
              <h4 className="text-2xl font-bold font-space uppercase text-white">
                {lang === 'zh' ? '從課堂前線到跨界體制' : 'FROM CLASSROOM TO SYSTEMIC REFORM'}
              </h4>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-telemetry text-xs">
              <div className="border-l border-white/20 pl-4 space-y-1">
                <span className="text-zinc-500 uppercase">35% ALUMNI VECTOR</span>
                <p className="text-white font-bold">Business, Tech & Strategy</p>
                <p className="text-zinc-400 text-[11px]">Goldman Sachs, Bain, Google, Startups</p>
              </div>
              <div className="border-l border-white/20 pl-4 space-y-1">
                <span className="text-zinc-500 uppercase">30% ALUMNI VECTOR</span>
                <p className="text-white font-bold">Education & School Leadership</p>
                <p className="text-zinc-400 text-[11px]">Principals, Lead Teachers, EdTech</p>
              </div>
              <div className="border-l border-white/20 pl-4 space-y-1">
                <span className="text-zinc-500 uppercase">35% ALUMNI VECTOR</span>
                <p className="text-white font-bold">Policy, Think Tanks & NGOs</p>
                <p className="text-zinc-400 text-[11px]">Social Innovation, Gov Advisory</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
