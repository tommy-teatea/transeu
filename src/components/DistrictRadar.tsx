import React, { useState } from 'react';
import { PARTNER_SCHOOLS_RADAR, PartnerSchool } from '../data/tehkData';
import { sfx } from '../utils/audio';
import { Radio, MapPin, Search, Target, Users, BookOpen, Sparkles, Filter } from 'lucide-react';

interface DistrictRadarProps {
  lang: 'en' | 'zh';
}

export const DistrictRadar: React.FC<DistrictRadarProps> = ({ lang }) => {
  const [selectedSchool, setSelectedSchool] = useState<PartnerSchool>(PARTNER_SCHOOLS_RADAR[0]);
  const [filterType, setFilterType] = useState<'All' | 'Primary' | 'Secondary'>('All');

  const filteredSchools = PARTNER_SCHOOLS_RADAR.filter(
    (s) => filterType === 'All' || s.type === filterType
  );

  return (
    <section id="radar" className="py-24 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-zinc-400 mb-2">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>TERRESTRIAL DEPLOYMENT GRID // 03</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '全港學界前線雷達' : 'HONG KONG DEPLOYMENT RADAR'}
            </h2>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            {(['All', 'Primary', 'Secondary'] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  sfx.playClick();
                  setFilterType(type);
                }}
                className={`px-3 py-1.5 text-xs font-mono-telemetry uppercase tracking-wider border transition-all ${
                  filterType === type
                    ? 'border-white bg-white text-black font-bold'
                    : 'border-white/20 text-zinc-400 hover:border-white/50 hover:text-white'
                }`}
              >
                {type === 'All' ? (lang === 'zh' ? '全數學校' : 'ALL SECTORS') : type}
              </button>
            ))}
          </div>
        </div>

        {/* Radar & School Profile Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Radar Scope Container */}
          <div className="lg:col-span-7 border border-white/20 bg-zinc-950 p-6 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Top Scope Telemetry */}
            <div className="flex justify-between items-center text-xs font-mono-telemetry border-b border-white/10 pb-3 mb-4">
              <span className="text-zinc-500 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                HK REGIONAL FREQUENCY: 142.85 MHZ
              </span>
              <span className="text-zinc-400">ACTIVE NODES: {filteredSchools.length}</span>
            </div>

            {/* Radar Circular Stage */}
            <div className="relative w-full aspect-square max-h-[380px] mx-auto border border-white/20 rounded-full flex items-center justify-center my-4">
              {/* Concentric Rings */}
              <div className="absolute inset-[15%] border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute inset-[35%] border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute inset-[55%] border border-white/15 rounded-full pointer-events-none" />
              <div className="absolute inset-[75%] border border-white/10 rounded-full pointer-events-none" />

              {/* Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/15 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/15 pointer-events-none" />

              {/* Animated Radar Sweep */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none animate-radar"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(255, 255, 255, 0.15) 0deg, transparent 60deg, transparent 360deg)'
                }}
              />

              {/* Center Beacon */}
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#ffffff] z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
              </div>

              {/* School Node Beacons */}
              {filteredSchools.map((school) => {
                const isSelected = selectedSchool.id === school.id;
                return (
                  <button
                    key={school.id}
                    onClick={() => {
                      sfx.playPing();
                      setSelectedSchool(school);
                    }}
                    style={{ left: `${school.coords.x}%`, top: `${school.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                    title={school.name}
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.9)]'
                            : 'bg-zinc-800 border border-white/50 group-hover:border-white group-hover:scale-110'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-emerald-400'}`} />
                      </div>
                      {/* Node Label Tooltip */}
                      <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono-telemetry bg-black/90 border border-white/20 px-2 py-0.5 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {lang === 'zh' ? school.districtZh : school.district}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Scope Bar */}
            <div className="flex justify-between items-center text-[10px] font-mono-telemetry text-zinc-500 border-t border-white/10 pt-3">
              <span>CRITERIA: &gt;50% SFA/CSSA OR &gt;25% NCS</span>
              <span>GRID: HK_TERRESTRIAL_SECTOR_18</span>
            </div>
          </div>

          {/* School Telemetry Info Card */}
          <div className="lg:col-span-5 border border-white/20 bg-zinc-950 p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-zinc-500">
                  SELECTED ORBITAL HUB
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase font-space text-white mt-1">
                  {lang === 'zh' ? selectedSchool.nameZh : selectedSchool.name}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs font-mono-telemetry text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'zh' ? selectedSchool.districtZh : selectedSchool.district}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="px-2 py-0.5 bg-white/10 text-white text-[10px] uppercase">
                    {selectedSchool.type}
                  </span>
                </div>
              </div>
            </div>

            {/* School Metrics */}
            <div className="grid grid-cols-2 gap-4 font-mono-telemetry">
              <div className="bg-black/60 border border-white/10 p-4">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">FELLOW CORPS</span>
                <p className="text-2xl font-bold text-white font-space mt-1">
                  {selectedSchool.fellowsCount} <span className="text-xs font-normal text-zinc-400">FELLOWS</span>
                </p>
              </div>

              <div className="bg-black/60 border border-white/10 p-4">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">STUDENTS IMPACTED</span>
                <p className="text-2xl font-bold text-white font-space mt-1">
                  {selectedSchool.studentsReached} <span className="text-xs font-normal text-zinc-400">YOUTH</span>
                </p>
              </div>
            </div>

            {/* Socioeconomic Qualifier */}
            <div className="border-l-2 border-emerald-400 bg-emerald-950/20 p-3 text-xs font-mono-telemetry">
              <span className="text-emerald-400 font-bold uppercase">EQUITY THRESHOLD: </span>
              <span className="text-zinc-300">{selectedSchool.grassrootsRate}</span>
            </div>

            {/* Featured Initiative */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <span className="text-xs font-mono-telemetry uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {lang === 'zh' ? '重點共創專案' : 'FEATURED CO-INNOVATION SPRINT:'}
              </span>
              <p className="text-sm text-zinc-200 leading-relaxed font-mono-telemetry bg-black/40 border border-white/10 p-3">
                {lang === 'zh' ? selectedSchool.featuredProjectZh : selectedSchool.featuredProject}
              </p>
            </div>

            {/* List of quick picker */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <span className="text-[10px] font-mono-telemetry uppercase text-zinc-500 tracking-widest">
                QUICK SELECTION MATRIX
              </span>
              <div className="flex flex-wrap gap-2">
                {filteredSchools.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      sfx.playClick();
                      setSelectedSchool(s);
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono-telemetry border transition-all ${
                      selectedSchool.id === s.id
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/10 bg-black text-zinc-400 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {lang === 'zh' ? s.districtZh : s.district}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
