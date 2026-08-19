import React, { useState } from 'react';
import { FELLOW_STORIES, FellowStory } from '../data/tehkData';
import { sfx } from '../utils/audio';
import { Play, Pause, Quote, User, ArrowRight, Award, Compass, Volume2 } from 'lucide-react';

interface MissionLogsProps {
  lang: 'en' | 'zh';
}

export const MissionLogs: React.FC<MissionLogsProps> = ({ lang }) => {
  const [selectedStory, setSelectedStory] = useState<FellowStory>(FELLOW_STORIES[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const togglePlayback = () => {
    sfx.playClick();
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section id="logs" className="py-24 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-zinc-400 mb-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>VOICES FROM THE CLASSROOM FRONTLINE // 05</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '項目老師任務日誌' : 'MISSION LOGS & VOICES'}
            </h2>
          </div>
          <p className="text-sm font-mono-telemetry text-zinc-400 max-w-md mt-4 md:mt-0">
            {lang === 'zh'
              ? '深入了解歷屆項目老師在前線課堂的生命轉化與結業後的跨界軌跡。'
              : 'First-hand debriefs from fellows navigating frontline classrooms and catalyzing systemic momentum across sectors.'}
          </p>
        </div>

        {/* Stories Grid / Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Fellow Directory List */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono-telemetry uppercase text-zinc-500 tracking-widest block mb-2">
              CORPS LOG DIRECTORY
            </span>
            {FELLOW_STORIES.map((story) => {
              const isSelected = selectedStory.id === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => {
                    sfx.playClick();
                    setSelectedStory(story);
                    setIsPlayingAudio(false);
                  }}
                  className={`w-full p-4 border transition-all text-left font-mono-telemetry flex items-center space-x-4 ${
                    isSelected
                      ? 'border-white bg-zinc-950 text-white'
                      : 'border-white/10 bg-black text-zinc-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 object-cover border border-white/20 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white uppercase truncate">
                        {lang === 'zh' ? story.nameZh : story.name}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 truncate">{story.cohort}</p>
                    <p className="text-[10px] text-emerald-400 truncate">{story.district}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Story Full-Bleed Log */}
          <div className="lg:col-span-8 border border-white/20 bg-zinc-950 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Telemetry Tag */}
            <div>
              <div className="flex flex-wrap justify-between items-center text-xs font-mono-telemetry border-b border-white/10 pb-4 mb-6 gap-2">
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-0.5 bg-white text-black font-bold uppercase text-[10px]">
                    {selectedStory.cohort}
                  </span>
                  <span className="text-zinc-400">
                    {lang === 'zh' ? selectedStory.subjectZh : selectedStory.subject}
                  </span>
                </div>
                <span className="text-zinc-500 font-mono-telemetry">
                  CALLSIGN: {selectedStory.name.toUpperCase()}
                </span>
              </div>

              {/* Big Quote */}
              <div className="relative mb-8">
                <Quote className="w-8 h-8 text-white/10 absolute -top-3 -left-2 pointer-events-none" />
                <blockquote className="text-xl sm:text-2xl font-light italic leading-relaxed text-zinc-100 font-space pl-6 border-l-2 border-white">
                  "{lang === 'zh' ? selectedStory.quoteZh : selectedStory.quote}"
                </blockquote>
              </div>

              {/* Story Narrative */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-8">
                {lang === 'zh' ? selectedStory.storyZh : selectedStory.story}
              </p>

              {/* Profile Background & Alumni Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-telemetry text-xs bg-black/60 border border-white/10 p-4 mb-6">
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase block">PRE-MISSION BACKGROUND</span>
                  <span className="text-zinc-200 font-medium mt-0.5 block">
                    {lang === 'zh' ? selectedStory.backgroundZh : selectedStory.background}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase block">CURRENT ALUMNI VECTOR</span>
                  <span className="text-emerald-400 font-medium mt-0.5 block">
                    {lang === 'zh' ? selectedStory.alumniRoleZh : selectedStory.alumniRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Debrief Bar */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono-telemetry text-xs">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlayback}
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                  {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <div>
                  <span className="text-zinc-300 block text-[11px]">
                    {isPlayingAudio ? (lang === 'zh' ? '正在播放訪談錄音...' : 'STREAMING MISSION DEBRIEF...') : (lang === 'zh' ? '收聽前線訪談口述' : 'PLAY AUDIO DEBRIEF')}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono-telemetry">{selectedStory.audioTime || '04:15'}</span>
                </div>
              </div>

              <div className="text-right text-[10px] text-zinc-500 uppercase">
                {lang === 'zh' ? '良師香港歷屆領袖檔案' : 'TEHK ALUMNI ARCHIVE'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
