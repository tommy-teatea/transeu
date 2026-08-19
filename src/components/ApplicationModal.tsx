import React, { useState } from 'react';
import { X, Rocket, CheckCircle2, ChevronRight, ChevronLeft, Upload, Sparkles, Terminal } from 'lucide-react';
import { sfx } from '../utils/audio';
import confetti from 'canvas-confetti';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, lang }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    gradYear: '2026',
    teachingTrack: 'STEAM & Technological Innovation',
    schoolLevel: 'Secondary',
    preferredDistricts: 'Sham Shui Po, Kwun Tong',
    motivation: '',
    cvFileName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [candidateId, setCandidateId] = useState('');

  if (!isOpen) return null;

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.playClick();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      setIsSubmitting(true);
      sfx.playLaunch();
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        const refId = `TFHK-2026-${Math.floor(100000 + Math.random() * 900000)}`;
        setCandidateId(refId);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      }, 1200);
    }
  };

  const handleBack = () => {
    sfx.playClick();
    if (step > 1) setStep(step - 1);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      id="application-modal-overlay"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-[0_0_80px_rgba(255,255,255,0.08)] my-8">
        
        {/* Close Button */}
        <button
          id="close-apply-modal-btn"
          onClick={() => {
            sfx.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 border border-white/10 hover:border-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header Telemetry */}
            <div className="border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center space-x-3 text-xs font-mono-telemetry text-zinc-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>COHORT 2026-2027 // FELLOWSHIP CANDIDATE PORTAL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-space text-white">
                {lang === 'zh' ? '第十一屆項目老師申請表' : 'INITIALIZE FELLOWSHIP CANDIDACY'}
              </h3>
              <p className="text-xs font-mono-telemetry text-zinc-400 mt-1">
                {lang === 'zh'
                  ? '加入良師香港，全職進駐基層學校，以一年領袖實戰改變孩子的一生。'
                  : 'Join Teach For Hong Kong to serve frontline classrooms and unlock lasting systemic leadership.'}
              </p>
            </div>

            {/* Step Indicator */}
            <div className="grid grid-cols-3 gap-2 mb-8 font-mono-telemetry text-xs">
              {[
                { n: 1, title: lang === 'zh' ? '基本資料' : '1. IDENTITY' },
                { n: 2, title: lang === 'zh' ? '前線專向' : '2. VECTOR' },
                { n: 3, title: lang === 'zh' ? '使命自述' : '3. VISION' }
              ].map((s) => (
                <div
                  key={s.n}
                  className={`p-2.5 border text-center transition-all ${
                    step === s.n
                      ? 'border-white bg-white text-black font-bold'
                      : step > s.n
                      ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400'
                      : 'border-white/10 text-zinc-600'
                  }`}
                >
                  {s.title}
                </div>
              ))}
            </div>

            {/* Step Form */}
            <form onSubmit={handleNext} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 font-mono-telemetry text-xs animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '全名 (英文及中文)' : 'FULL NAME (EN / ZH)'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rachel Wong 黃芷晴"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '電郵地址' : 'EMAIL ADDRESS'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="candidate@university.edu"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '聯絡電話 / WHATSAPP' : 'PHONE / WHATSAPP'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+852 9123 4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '畢業年份' : 'GRADUATION YEAR'}
                      </label>
                      <select
                        value={formData.gradYear}
                        onChange={(e) => handleChange('gradYear', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      >
                        <option value="2026">2026 (Final Year Grad)</option>
                        <option value="2025">2025 (1 Year Post-Grad)</option>
                        <option value="2024">2024 (2 Years Post-Grad)</option>
                        <option value="Pre-2024">Pre-2024 (Young Professional)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '大學 / 院校' : 'UNIVERSITY / INSTITUTION'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. HKU / CUHK / UST / PolyU / CityU / Overseas"
                        value={formData.university}
                        onChange={(e) => handleChange('university', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '主修學科' : 'ACADEMIC MAJOR / DISCIPLINE'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Computer Science / Global Business / English / Psychology"
                        value={formData.major}
                        onChange={(e) => handleChange('major', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 font-mono-telemetry text-xs animate-fadeIn">
                  <div>
                    <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                      {lang === 'zh' ? '前線專項教學領域' : 'SPECIALIZED TEACHING / INNOVATION VECTOR'}
                    </label>
                    <select
                      value={formData.teachingTrack}
                      onChange={(e) => handleChange('teachingTrack', e.target.value)}
                      className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                    >
                      <option value="STEAM & Technological Innovation">STEAM, AI Literacy & Robotics</option>
                      <option value="English & Global Exploration">English Communication & Boardroom Pitching</option>
                      <option value="Business & Financial Literacy">Financial Literacy & Career Expeditions</option>
                      <option value="Multicultural Inclusion">Non-Chinese Speaking (NCS) & Inclusion</option>
                      <option value="Social Emotional Learning">Social-Emotional & Positive Youth Development</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '學校層級偏好' : 'SCHOOL PLACEMENT TARGET'}
                      </label>
                      <select
                        value={formData.schoolLevel}
                        onChange={(e) => handleChange('schoolLevel', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      >
                        <option value="Secondary">Secondary School (中學部)</option>
                        <option value="Primary">Primary School (小學部)</option>
                        <option value="Open">Open to Both (彈性配對)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                        {lang === 'zh' ? '地區意向' : 'PREFERRED DISTRICTS'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sham Shui Po, Kwun Tong, Tuen Mun, Yuen Long"
                        value={formData.preferredDistricts}
                        onChange={(e) => handleChange('preferredDistricts', e.target.value)}
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="border border-white/10 bg-black/60 p-4">
                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">STIPEND CONFIRMATION</span>
                    <p className="text-zinc-300 text-xs">
                      Fellows receive a monthly living stipend of <strong className="text-emerald-400">HK$18,000–$20,000</strong> plus comprehensive medical coverage, coaching, and training.
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 font-mono-telemetry text-xs animate-fadeIn">
                  <div>
                    <label className="text-zinc-400 uppercase text-[10px] block mb-1.5">
                      {lang === 'zh' ? '個人願景與使命陳述 (100–300字)' : 'MISSION STATEMENT & MOTIVATION (100–300 WORDS)'} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        lang === 'zh'
                          ? '請簡述你渴望加入良師香港的原因，以及你希望如何利用一年的課堂實戰推動教育公平...'
                          : 'Describe why you wish to join Teach For Hong Kong and how you envision making a tangible difference in grassroots classrooms...'
                      }
                      value={formData.motivation}
                      onChange={(e) => handleChange('motivation', e.target.value)}
                      className="w-full bg-black border border-white/20 p-3 text-white focus:border-white focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="border border-dashed border-white/30 p-6 text-center bg-black/40 hover:border-white transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                    <span className="text-xs font-bold text-white block">
                      {formData.cvFileName || (lang === 'zh' ? '上傳個人履歷 (CV / Resume PDF)' : 'UPLOAD RESUME / CV (PDF)')}
                    </span>
                    <span className="text-[10px] text-zinc-500 block mt-1">
                      Max file size: 10MB • Standard formatting
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleChange('cvFileName', e.target.files[0].name);
                        }
                      }}
                      className="hidden"
                      id="cv-upload-input"
                    />
                    <label
                      htmlFor="cv-upload-input"
                      className="inline-block mt-3 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[11px] uppercase cursor-pointer"
                    >
                      {lang === 'zh' ? '選擇檔案' : 'BROWSE FILES'}
                    </label>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 border border-white/20 text-zinc-300 hover:text-white font-mono-telemetry text-xs uppercase flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {lang === 'zh' ? '上一步' : 'PREVIOUS'}
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black px-8 py-3.5 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-zinc-200 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING TELEMETRY...</span>
                  ) : step === 3 ? (
                    <>
                      <Rocket className="w-4 h-4" />
                      <span>{lang === 'zh' ? '確認發射申請' : 'LAUNCH APPLICATION'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'zh' ? '下一步' : 'NEXT STAGE'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8 space-y-6 font-mono-telemetry animate-fadeIn">
            <div className="w-16 h-16 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 block mb-2">
                MISSION CANDIDACY CONFIRMED
              </span>
              <h3 className="text-3xl font-black uppercase font-space text-white">
                {lang === 'zh' ? '申請已成功接收' : 'APPLICATION LAUNCHED'}
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto mt-2">
                {lang === 'zh'
                  ? `多謝 ${formData.fullName}！良師香港招募委員會將於兩週內透過電郵發出第一輪評估邀請。`
                  : `Thank you, ${formData.fullName}. Your fellowship candidacy has entered our selection pipeline. You will receive an assessment briefing via email shortly.`}
              </p>
            </div>

            {/* Candidate Telemetry Reference */}
            <div className="border border-white/20 bg-black p-6 max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">CANDIDATE ID:</span>
                <span className="text-white font-bold">{candidateId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">COHORT:</span>
                <span className="text-white">2026-2027 (Cohort XI)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">SELECTED VECTOR:</span>
                <span className="text-emerald-400">{formData.teachingTrack}</span>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="bg-white text-black px-8 py-3.5 font-bold uppercase tracking-widest text-xs font-mono-telemetry hover:bg-zinc-200"
            >
              {lang === 'zh' ? '返回任務首頁' : 'RETURN TO MISSION HOME'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
