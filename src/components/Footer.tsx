import React, { useState } from 'react';
import { sfx } from '../utils/audio';
import { ArrowUpRight, Mail, Shield, Check, Globe } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'zh';
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenApply }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sfx.playClick();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-black text-white border-t border-white/10 font-mono-telemetry text-xs relative">
      {/* Top Newsletter & Dispatch Strip */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] block mb-1">
              MISSION INTELLIGENCE DISPATCH
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-space uppercase text-white">
              {lang === 'zh' ? '訂閱良師香港教育革新簡訊' : 'SUBSCRIBE TO MISSION UPDATES'}
            </h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-md">
              {lang === 'zh'
                ? '定期接收前線課堂創新報告、學界數據洞察及招募最新通知。'
                : 'Quarterly reports on frontline educational breakthroughs, cohort telemetry, and recruitment briefs.'}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:max-w-md">
            <input
              type="email"
              required
              placeholder="cadet@domain.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-950 border border-white/20 px-4 py-3 text-white text-xs focus:border-white focus:outline-none flex-1 font-mono-telemetry"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap"
            >
              {subscribed ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> SUBSCRIBED
                </span>
              ) : (
                lang === 'zh' ? '確認訂閱' : 'SUBSCRIBE'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Organization Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white" />
              </div>
              <span className="text-sm font-bold tracking-[0.25em] font-space text-white uppercase">
                TEACH FOR HONG KONG
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              {lang === 'zh'
                ? '良師香港為獲香港稅務局根據《稅務條例》第88條獲豁免繳稅的慈善機構。致力推動教育公平，培育各界青年領袖解決跨代貧窮問題。'
                : 'Teach For Hong Kong is a registered tax-exempt charity under Section 88 of the Inland Revenue Ordinance (No. 91/14187). Envisioning a future where all children in Hong Kong realize their full potential.'}
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <div>IR FILE NO: <span className="text-zinc-300">91/14187</span></div>
              <div>GLOBAL ALLIANCE: <span className="text-zinc-300">Teach For All (60+ Nations)</span></div>
              <div>LOCATION: <span className="text-zinc-300">Hong Kong SAR</span></div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">PROGRAMS</span>
            <ul className="space-y-2 text-zinc-400 text-xs">
              <li>
                <a href="#fellowship" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '一年全職領袖項目' : '1-Year Fellowship'}
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '暑期領袖精進培訓' : 'Summer Flight Institute'}
                </a>
              </li>
              <li>
                <a href="#radar" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '基層學校夥伴網絡' : 'Partner School Network'}
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '校友跨界影響力' : 'Alumni Systemic Vector'}
                </a>
              </li>
            </ul>
          </div>

          {/* Candidacy */}
          <div className="space-y-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">FELLOW CORPS</span>
            <ul className="space-y-2 text-zinc-400 text-xs">
              <li>
                <button onClick={onOpenApply} className="hover:text-white transition-colors text-left">
                  {lang === 'zh' ? '申請第十一屆席位' : 'Apply for Cohort XI'}
                </button>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '領袖適配模擬器' : 'Suitability Matrix'}
                </a>
              </li>
              <li>
                <a href="#logs" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '項目老師故事日誌' : 'Fellow Mission Logs'}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '常見問題與指南' : 'Directives & FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">DISPATCH // CONTACT</span>
            <ul className="space-y-2 text-zinc-400 text-xs">
              <li>
                <a href="mailto:apply@te.org.hk" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  apply@te.org.hk
                </a>
              </li>
              <li>
                <a href="https://te.org.hk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>te.org.hk</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram // @teachforhongkong
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn // Teach For Hong Kong
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / SpaceX Minimal Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-500 gap-4">
          <div>
            © 2026 TEACH FOR HONG KONG LIMITED (良師香港). ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="#hero" className="hover:text-zinc-300 transition-colors">PRIVACY DIRECTIVE</a>
            <a href="#hero" className="hover:text-zinc-300 transition-colors">ANNUAL IMPACT AUDIT</a>
            <a href="#hero" className="hover:text-zinc-300 transition-colors">TERMS OF MISSION</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
