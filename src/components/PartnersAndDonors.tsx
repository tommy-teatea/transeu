import React, { useState } from 'react';
import { STRATEGIC_PARTNERS, FAQS } from '../data/tehkData';
import { sfx } from '../utils/audio';
import { ShieldCheck, Heart, ArrowRight, ChevronDown, ChevronUp, DollarSign, Building, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PartnersAndDonorsProps {
  lang: 'en' | 'zh';
}

export const PartnersAndDonors: React.FC<PartnersAndDonorsProps> = ({ lang }) => {
  const [donationTier, setDonationTier] = useState<number>(800);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState<boolean>(true);
  const [donated, setDonated] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const amount = customAmount ? parseFloat(customAmount) || 0 : donationTier;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.playLaunch();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setDonated(true);
    setTimeout(() => setDonated(false), 6000);
  };

  return (
    <section id="partners" className="py-24 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-telemetry text-zinc-400 mb-2">
              <Building className="w-4 h-4 text-emerald-400" />
              <span>COALITION & STRATEGIC ALLIANCE // 06</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-space text-white">
              {lang === 'zh' ? '戰略夥伴與使命資助' : 'STRATEGIC ALLIANCE & SUPPORT'}
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono-telemetry text-zinc-400 mt-4 md:mt-0">
            <span className="text-emerald-400 font-bold">S88 CHARITY #91/14187</span>
            <span>100% TAX-DEDUCTIBLE</span>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <span className="text-xs font-mono-telemetry uppercase text-zinc-500 tracking-widest block mb-6">
            ANCHOR FUNDERS & NETWORK PARTNERS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STRATEGIC_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 border border-white/15 bg-zinc-950/70 flex flex-col justify-between hover:border-white/40 transition-colors font-mono-telemetry"
              >
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase">{partner.type}</span>
                  <h4 className="text-sm font-bold text-white uppercase font-space">{partner.name}</h4>
                </div>
                <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-white/10">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* S88 Tax-Deductible Donation Flight Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Donation Form */}
          <div className="lg:col-span-7 border border-white/20 bg-zinc-950 p-6 sm:p-10 space-y-8">
            <div>
              <span className="text-xs font-mono-telemetry text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400" />
                {lang === 'zh' ? '推動教育平權' : 'DIRECT EDUCATIONAL EQUITY SPONSORSHIP'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase font-space text-white mt-1">
                {lang === 'zh' ? '資助基層孩子改變命運的軌跡' : 'SPONSOR THE FLIGHT FOR EQUITY'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-mono-telemetry">
                {lang === 'zh'
                  ? '良師香港為香港註冊第88條稅務豁免慈善機構。所有港幣$100或以上之捐款均可全數獲香港稅務扣除。'
                  : 'Every dollar empowers a passionate Fellow in frontline classrooms, delivering transformative STEM, life guidance, and academic acceleration.'}
              </p>
            </div>

            {/* Monthly vs One-time Toggle */}
            <div className="flex border border-white/20 font-mono-telemetry text-xs">
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setIsRecurring(true);
                }}
                className={`flex-1 py-3 text-center uppercase tracking-wider font-bold transition-all ${
                  isRecurring ? 'bg-white text-black' : 'bg-black text-zinc-400 hover:text-white'
                }`}
              >
                {lang === 'zh' ? '每月定期資助 (推薦)' : 'MONTHLY RECURRING'}
              </button>
              <button
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setIsRecurring(false);
                }}
                className={`flex-1 py-3 text-center uppercase tracking-wider font-bold transition-all ${
                  !isRecurring ? 'bg-white text-black' : 'bg-black text-zinc-400 hover:text-white'
                }`}
              >
                {lang === 'zh' ? '單次資助' : 'ONE-TIME CONTRIBUTION'}
              </button>
            </div>

            {/* Donation Tiers */}
            <div className="grid grid-cols-3 gap-3 font-mono-telemetry">
              {[300, 800, 2500].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => {
                    sfx.playClick();
                    setDonationTier(tier);
                    setCustomAmount('');
                  }}
                  className={`p-4 border text-left transition-all ${
                    donationTier === tier && !customAmount
                      ? 'border-white bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'border-white/10 bg-black text-zinc-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 uppercase block">
                    {tier === 300 ? '1 Student' : tier === 800 ? '1 Class Unit' : 'Cohort Leader'}
                  </span>
                  <span className="text-xl font-bold font-space text-white mt-1 block">
                    HK${tier}
                  </span>
                  <span className="text-[9px] text-zinc-400 block">{isRecurring ? '/ month' : ' once'}</span>
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="font-mono-telemetry">
              <label className="text-[10px] uppercase text-zinc-500 tracking-widest block mb-2">
                {lang === 'zh' ? '自訂資助金額 (HKD)' : 'CUSTOM CONTRIBUTION (HKD)'}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">HK$</span>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full bg-black border border-white/20 pl-14 pr-4 py-3 text-white text-sm focus:border-white focus:outline-none font-mono-telemetry"
                />
              </div>
            </div>

            {/* Submission CTA */}
            <form onSubmit={handleDonate}>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>
                  {lang === 'zh'
                    ? `立即以 HK$${amount} ${isRecurring ? '每月資助' : '單次資助'}`
                    : `SUPPORT WITH HK$${amount} ${isRecurring ? '/ MONTH' : ''}`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {donated && (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500 text-emerald-400 text-xs font-mono-telemetry text-center animate-fadeIn">
                ✓ {lang === 'zh' ? '感謝您的支持！電子收據及使命進度更新將發送至您的電郵。' : 'MISSION CONTRIBUTION RECORDED. THANK YOU FOR EMPOWERING HONG KONG STUDENTS.'}
              </div>
            )}
          </div>

          {/* Tax-Deductible Receipt & Impact Readout */}
          <div className="lg:col-span-5 border border-white/20 bg-zinc-950 p-6 sm:p-8 space-y-6 font-mono-telemetry text-xs">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase text-zinc-500 tracking-widest block">
                IMPACT SIMULATION
              </span>
              <div className="text-xl font-bold font-space text-white mt-1">
                {amount >= 2500
                  ? (lang === 'zh' ? '全額資助一名項目老師前線津貼' : 'Full Fellow In-School Grant Subsidized')
                  : amount >= 800
                  ? (lang === 'zh' ? '支持整班基層學生全年 STEAM 及生涯探索' : 'Sponsoring 1 Classroom STEAM & Career Expeditions')
                  : (lang === 'zh' ? '為基層學童提供全年一對一課後啟導' : 'Personalized 1-on-1 Student Mentorship for 1 Year')}
              </div>
            </div>

            {/* S88 Receipt Simulation Box */}
            <div className="border border-white/15 bg-black p-4 space-y-2 text-[11px]">
              <div className="text-zinc-500 uppercase tracking-widest text-[9px] border-b border-white/10 pb-1">
                OFFICIAL S88 RECEIPT PREVIEW
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">ORGANIZATION:</span>
                <span className="text-white">TEACH FOR HONG KONG LTD.</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">IR FILE NUMBER:</span>
                <span className="text-emerald-400">91/14187</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">TAX DEDUCTION:</span>
                <span className="text-white font-bold">100% Tax Deductible (HKD)</span>
              </div>
            </div>

            <div className="text-zinc-400 text-[11px] leading-relaxed">
              {lang === 'zh'
                ? '所有捐款將直接用於項目老師的前線培訓、基層學校創新教學活動以及跨界領袖網絡建設。'
                : '100% of contributions directly power Fellow recruitment, summer flight institute, and innovative classroom curriculum.'}
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold uppercase font-space text-white text-center mb-8">
              {lang === 'zh' ? '常見問題與任務指南' : 'MISSION DIRECTIVES & FREQUENTLY ASKED QUESTIONS'}
            </h3>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-white/15 bg-zinc-950/60 overflow-hidden">
                  <button
                    onClick={() => {
                      sfx.playClick();
                      setOpenFaq(isOpen ? null : index);
                    }}
                    className="w-full p-5 text-left font-space text-sm sm:text-base font-bold text-white flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span>{lang === 'zh' ? faq.qZh : faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed border-t border-white/5 mt-2">
                      {lang === 'zh' ? faq.aZh : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
