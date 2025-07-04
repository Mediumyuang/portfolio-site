import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const steps = [
  { label: "Ваше имя", placeholder: "Введите имя", type: "text", key: "name" },
  { label: "E-mail", placeholder: "Введите e-mail", type: "email", key: "email" },
  { label: "Комментарий", placeholder: "Комментарий (опционально)", type: "textarea", key: "comment" },
  { label: "Оплата", placeholder: "", type: "payment", key: "payment" },
];

type StepKey = "name" | "email" | "comment";

interface FuturisticOrderModalProps {
  open: boolean;
  onClose: () => void;
  selectedPackage: string | null;
}

export default function FuturisticOrderModal({ open, onClose, selectedPackage }: FuturisticOrderModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<{ name: string; email: string; comment: string }>({ name: "", email: "", comment: "" });
  const t = useTranslations();

  // Обёртка для onClose, чтобы сбрасывать форму
  const handleClose = () => {
    setStep(0);
    setForm({ name: "", email: "", comment: "" });
    onClose();
  };

  if (!open) return null;

  // Получаем шаги из переводов
  const stepsT = t.raw('orderModal.steps');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Glitch background layer */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "url('/sci-fi-bg.svg') repeat",
        opacity: 0.18,
        zIndex: 0
      }} />
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-[#16162a] shadow-2xl p-0 overflow-hidden border border-[#23234a]">
        {/* Progress bar */}
        <div className="flex items-center gap-2 px-8 pt-8 pb-4">
          {stepsT.map((s: any, i: number) => (
            <div key={i} className={`flex-1 h-2 rounded-full transition-all duration-300 ${i <= step ? "bg-gradient-to-r from-[#4fc3f7] to-[#a259f7] shadow-[0_0_8px_2px_#4fc3f7]" : "bg-[#23234a]"}`}></div>
          ))}
        </div>
        <div className="px-8 pb-8 pt-2 flex flex-col items-center">
          <button
            className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#23234a] transition-colors group"
            onClick={handleClose}
            aria-label={t('orderModal.close')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#a259f7] transition-colors duration-200">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="text-center text-xl font-bold text-white mb-2 mt-2 tracking-wide">
            {selectedPackage && stepsT[step].type !== 'payment' && (
              <>
                <span className="block text-gradient bg-gradient-to-r from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text mb-2 text-2xl">{selectedPackage}</span>
                <span className="block text-[#4fc3f7] font-semibold mb-1">
                  {selectedPackage === 'Быстрая настройка' && t('orderModal.package.fast.desc')}
                  {selectedPackage === 'Автоматизация + AI' && t('orderModal.package.ai.desc')}
                  {selectedPackage === 'Автоматизация под ключ' && t('orderModal.package.full.desc')}
                  {selectedPackage === 'Fast setup' && t('orderModal.package.fast.desc')}
                  {selectedPackage === 'Automation + AI' && t('orderModal.package.ai.desc')}
                  {selectedPackage === 'Full automation' && t('orderModal.package.full.desc')}
                </span>
                <span className="block text-xs text-gray-400 mb-2">
                  {selectedPackage === 'Быстрая настройка' && t('orderModal.package.fast.note')}
                  {selectedPackage === 'Автоматизация + AI' && t('orderModal.package.ai.note')}
                  {selectedPackage === 'Автоматизация под ключ' && t('orderModal.package.full.note')}
                  {selectedPackage === 'Fast setup' && t('orderModal.package.fast.note')}
                  {selectedPackage === 'Automation + AI' && t('orderModal.package.ai.note')}
                  {selectedPackage === 'Full automation' && t('orderModal.package.full.note')}
                </span>
              </>
            )}
            {stepsT[step].label}
          </div>
          {/* Step content */}
          <form
            className="w-full flex flex-col items-center"
            onSubmit={e => {
              e.preventDefault();
              if (step < stepsT.length - 1) setStep(step + 1);
              else {/* handle payment */}
            }}
          >
            {stepsT[step].type === "text" && (
              <input
                autoFocus
                type="text"
                className="w-full rounded-2xl px-6 py-4 mt-4 mb-6 bg-[#23234a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4fc3f7] text-lg shadow-[0_2px_16px_0_rgba(76,195,247,0.08)] transition-all"
                placeholder={stepsT[step].placeholder}
                value={form[stepsT[step].key as StepKey]}
                onChange={e => setForm(f => ({ ...f, [stepsT[step].key as StepKey]: e.target.value }))}
                required
              />
            )}
            {stepsT[step].type === "email" && (
              <input
                autoFocus
                type="email"
                className="w-full rounded-2xl px-6 py-4 mt-4 mb-6 bg-[#23234a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#a259f7] text-lg shadow-[0_2px_16px_0_rgba(162,89,247,0.08)] transition-all"
                placeholder={stepsT[step].placeholder}
                value={form[stepsT[step].key as StepKey]}
                onChange={e => setForm(f => ({ ...f, [stepsT[step].key as StepKey]: e.target.value }))}
                required
              />
            )}
            {stepsT[step].type === "textarea" && (
              <textarea
                className="w-full rounded-2xl px-6 py-4 mt-4 mb-6 bg-[#23234a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#a259f7] text-lg shadow-[0_2px_16px_0_rgba(162,89,247,0.08)] transition-all resize-none min-h-[80px]"
                placeholder={stepsT[step].placeholder}
                value={form[stepsT[step].key as StepKey]}
                onChange={e => setForm(f => ({ ...f, [stepsT[step].key as StepKey]: e.target.value }))}
              />
            )}
            {stepsT[step].type === "payment" && (
              <div className="w-full flex flex-col items-center gap-4 mt-4 mb-6">
                <div className="text-white text-lg mb-2">Для оплаты свяжитесь:</div>
                <a href="https://t.me/Olegh_0" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl py-4 bg-gradient-to-r from-[#4fc3f7] to-[#a259f7] text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all text-center block">Telegram</a>
                <a href="https://wa.me/385953705606" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all text-center block">WhatsApp</a>
                <a href="mailto:Lazarievsmm@gmail.com" className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all text-center block">Email</a>
                <a href="https://discordapp.com/users/usual.developer" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl py-4 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all text-center block">Discord</a>
              </div>
            )}
            {step < stepsT.length - 1 && (
              <button
                type="submit"
                className="w-full rounded-2xl py-4 bg-[#23234a] text-white font-bold text-lg shadow-lg hover:bg-[#23234a]/80 transition-all border border-[#4fc3f7] mt-2"
              >
                {t('orderModal.next')} <ArrowRight className="inline ml-2" size={20} />
              </button>
            )}
            {step === stepsT.length - 1 && (
              <div className="flex items-center gap-2 text-[#4fc3f7] mt-4">
                <CheckCircle size={24} /> {t('orderModal.thanks')}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 