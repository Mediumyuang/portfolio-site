'use client';
import Link from "next/link";
import { Rocket, Database, BarChart2, MailCheck, Workflow, AlertTriangle, Zap, ArrowDown, FileText, Settings, Video, LifeBuoy, BookOpen, MessageCircle, UserCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useRef } from 'react';
import FuturisticOrderModal from './FuturisticOrderModal';
import React from 'react';
import { useTranslations } from 'next-intl';

const services = [
  {
    icon: <Rocket size={36} className="text-[#a259f7]" />,
    title: "AI-Powered Lead Generation",
    desc: "Автоматизирую генерацию лидов с AI, чтобы вы получали клиентов на автопилоте.",
  },
  {
    icon: <Database size={36} className="text-[#4fc3f7]" />,
    title: "Seamless Data Sync",
    desc: "Интеграция всех ваших приложений в единую систему без ошибок и дублей.",
  },
  {
    icon: <BarChart2 size={36} className="text-[#a259f7]" />,
    title: "Automated Reporting",
    desc: "Автоматические отчёты по вашим KPI без ручной подготовки.",
  },
  {
    icon: <MailCheck size={36} className="text-[#4fc3f7]" />,
    title: "AI Email Triage",
    desc: "AI сортирует и отвечает на e-mail, экономя вам часы работы.",
  },
  {
    icon: <Workflow size={36} className="text-[#a259f7]" />,
    title: "Workflow Orchestration",
    desc: "Полное управление бизнес-процессами через n8n + AI.",
  },
];

const cinematicServices = [
  {
    title: "AI Lead Generation",
    desc: "Автоматизирую генерацию лидов с AI, чтобы вы получали клиентов на автопилоте.",
    icon: <Rocket size={48} className="text-[#a259f7]" />,
    video: "/videos/demo1.mp4",
  },
  {
    title: "Data Sync Automation",
    desc: "Интеграция всех ваших приложений в единую систему без ошибок и дублей.",
    icon: <Database size={48} className="text-[#4fc3f7]" />,
    video: "/videos/demo2.mp4",
  },
  {
    title: "AI Email Triage",
    desc: "AI сортирует и отвечает на e-mail, экономя вам часы работы.",
    icon: <MailCheck size={48} className="text-[#a259f7]" />,
    video: "/videos/demo3.mp4",
  },
];

const aiLabServices = [
  {
    title: "AI Lead Generation",
    desc: "Автоматизирую генерацию лидов с AI, чтобы вы получали клиентов на автопилоте.",
    icon: <Rocket size={28} className="text-[#a259f7]" />,
    youtubeId: "ysz5S6PUM-U",
  },
  {
    title: "Data Sync Automation",
    desc: "Интеграция всех ваших приложений в единую систему без ошибок и дублей.",
    icon: <Database size={28} className="text-[#4fc3f7]" />,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Automated Reporting",
    desc: "Автоматические отчёты по вашим KPI без ручной подготовки.",
    icon: <BarChart2 size={28} className="text-[#a259f7]" />,
    youtubeId: "tgbNymZ7vqY",
  },
  {
    title: "AI Email Triage",
    desc: "AI сортирует и отвечает на e-mail, экономя вам часы работы.",
    icon: <MailCheck size={28} className="text-[#4fc3f7]" />,
    youtubeId: "hY7m5jjJ9mM",
  },
  {
    title: "Workflow Orchestration",
    desc: "Полное управление бизнес-процессами через n8n + AI.",
    icon: <Workflow size={28} className="text-[#a259f7]" />,
    youtubeId: "e-ORhEE9VVg",
  },
];

const stories = [
  {
    problem: "E-commerce бизнесы тратят кучу времени на обработку заказов и коммуникацию с клиентами. Нет памяти в чатах, заказы фиксируются вручную.",
    solutionVideo: "https://www.youtube.com/embed/B2wIj_Fawwg?autoplay=1&mute=1&controls=0&loop=1&playlist=B2wIj_Fawwg",
    solutionText: `Создал AI e-commerce агента:\n\n✅ Общается с клиентами как ассистент (продукты, наличие, поддержка)\n✅ Помнит всю переписку (memory)\n✅ Принимает заказы прямо в чате\n✅ Автоматически сохраняет заказы и логи в Supabase\n✅ Отправляет уведомления в Telegram в реальном времени\n\n🔧 Стек: n8n + GPT + Supabase + Telegram Bot`,
    result: "Авто-обработка заказов без участия менеджера. Полная история чатов для аналитики и улучшений.",
    resultDesc: "Сокращение времени на заказ с 5 минут до 20 секунд."
  },
  {
    problem: "Риелторы теряют клиентов из-за медленной обработки лидов с сайта. Данные приходят с ошибками, без валидации и без мгновенных уведомлений.",
    solutionVideo: "https://www.youtube.com/embed/yIpIyUOA7IU?autoplay=1&mute=1&controls=0&loop=1&playlist=yIpIyUOA7IU",
    solutionText: `Сделал Real Estate Lead Automation:\n\n✅ Проверка формы (валидация имени, телефона, email)\n✅ Очистка и нормализация данных\n✅ Мгновенная отправка лида в Telegram c кнопкой \"Позвонить\"\n✅ Всё реализовано через n8n workflow + Telegram Bot API`,
    result: "Лиды приходят за 1-2 секунды после отправки формы. Риелторы сразу звонят клиенту без потери времени.",
    resultDesc: "Увеличение конверсии без найма новых менеджеров."
  },
  {
    problem: "Многие бизнесы теряют заявки из-за ручного переноса лидов из форм в CRM. Данные теряются, нет быстрых уведомлений.",
    solutionVideo: "https://www.youtube.com/embed/H8gNPQpl5nU?autoplay=1&mute=1&controls=0&loop=1&playlist=H8gNPQpl5nU",
    solutionText: `Сделал автоматизацию:\n\n✅ Лид из формы захватывается моментально\n✅ AI валидирует и очищает данные\n✅ Автоматически создаётся карточка в Trello CRM с деталями и follow-up задачами\n✅ Уведомление на email отправляется мгновенно\n\n🔧 Стек: n8n workflow + Webhook + Trello API + Email automation`,
    result: "Лиды сразу появляются в Trello с полной информацией. Ноль ручной работы, моментальные уведомления.",
    resultDesc: "Бизнес успевает обработать заявки быстрее конкурентов."
  },
  {
    problem: "Трейдеры и крипто-команды тратят часы на чтение новостей и генерацию сводок для Telegram.",
    solutionVideo: "https://www.youtube.com/embed/mX1zyFAeCOk?autoplay=1&mute=1&controls=0&loop=1&playlist=mX1zyFAeCOk",
    solutionText: "Сделал AI-автоматизацию на базе CryptoPanic News Analyzer: каждый час берёт новости с CryptoPanic, анализирует через GPT (sentiment, прогноз, инсайты), генерит картинку и публикует готовый digest в Telegram через n8n.",
    result: "Полностью автоматический Crypto Digest каждый час. Включает market sentiment, top news, forecast, risk metrics.",
    resultDesc: "Освобождает время команде на реальные сделки, а не копипаст."
  },
];

const testimonials = [
  {
    name: "Андрей, владелец агентства",
    text: "Никита настроил автоматизацию лидов через Telegram и CRM за 2 дня. Сэкономили 15 часов в неделю.",
    avatar: "/Andrew.webp",
    companyLogo: "/Com1 (2).png",
    rating: 5,
  },
  {
    name: "Мария, SaaS проект",
    text: "После AI интеграции с e-mail триажем мы убрали 80% ручной работы.",
    avatar: "/marija.webp",
    companyLogo: "/Com1 (1).png",
    rating: 5,
  },
  {
    name: "Владимир, eCommerce",
    text: "Внедрение AI + n8n позволило нам автоматизировать обработку заказов и увеличить выручку на 20%. Всё быстро и чётко!",
    avatar: "/Vladimir.webp",
    companyLogo: "/Com1 (3).png",
    rating: 5,
  },
];

// Вспомогательная функция для получения превью YouTube
function getYoutubeThumbnail(url: string) {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
}

// Модальное окно для видео
function VideoModal({ open, onClose, videoUrl }: { open: any, onClose: any, videoUrl: any }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-3xl aspect-video flex items-center justify-center">
        <button onClick={onClose} className="absolute top-2 right-2 z-10 bg-black/60 rounded-full p-2 text-white hover:bg-black/80 transition-all">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <iframe
          src={videoUrl.replace('autoplay=1', 'autoplay=0').replace('mute=1', 'mute=0').replace('controls=0', 'controls=1')}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-xl bg-black"
          title="Case Video"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const swiperRef = useRef<any>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Smooth scroll к кейсам
  const scrollToCases = () => {
    const el = document.getElementById("cases");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO BLOCK */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#0e0e1c] min-h-[60vh] flex flex-col justify-center items-center py-16 sm:py-10 px-2 sm:px-1"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_8px_rgba(162,89,247,0.25)]" style={{ fontFamily: 'Inter, Poppins, Arial, sans-serif' }}>
            {t('hero.title')}
            <div className="mt-[-10px]">
              <span className="text-base sm:text-lg text-[#a259f7] font-semibold drop-shadow-[0_0_4px_rgba(162,89,247,0.18)]">{t('hero.subtitle')}</span>
            </div>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-xs mx-auto">
            <a
              href="#order"
              className="button-gradient button-gradient-pulse rounded-full px-4 py-2 sm:px-6 sm:py-3 font-bold text-white text-base shadow focus:outline-none drop-shadow-[0_0_6px_rgba(162,89,247,0.18)] w-full"
              onClick={e => {e.preventDefault(); document.getElementById('order')?.scrollIntoView({behavior:'smooth'});}}
            >
              {t('hero.button.get')}
            </a>
            <button
              className="button-secondary rounded-full px-4 py-2 sm:px-6 sm:py-3 font-bold text-white text-base focus:outline-none w-full"
              onClick={scrollToCases}
            >
              {t('hero.button.examples')}
            </button>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mt-3">
            {t('hero.stats')}
          </div>
        </div>
      </motion.section>

      {/* How I Work Section */}
      <section className="w-full max-w-xl mx-auto py-10 sm:py-6 px-2 sm:px-1 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ai-glow"
        >
          {t('how.title')}
        </motion.h2>
        <div className="flex flex-col items-center w-full gap-0 relative">
          {/* Шаг 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0 }}
            className="flex flex-row gap-3 sm:gap-6 items-start w-full mb-2 relative group cursor-pointer transition-colors"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text min-w-[28px] sm:min-w-[36px] text-center">1</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                <span className="inline-block align-middle text-[15px] sm:text-[16px] drop-shadow-[0_0_3px_#a259f7] transition-transform group-hover:scale-110">🔍</span>
                {t('how.step1.title')}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">{t('how.step1.desc')}</div>
            </div>
          </motion.div>
          {/* Вертикальная линия между шагами */}
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#a259f7] to-[#4fc3f7] opacity-20 mx-auto" />
          {/* Шаг 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-row gap-3 sm:gap-6 items-start w-full mb-2 relative group cursor-pointer transition-colors"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text min-w-[28px] sm:min-w-[36px] text-center">2</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                <span className="inline-block align-middle text-[15px] sm:text-[16px] drop-shadow-[0_0_3px_#4fc3f7] transition-transform group-hover:scale-110">⚙️</span>
                {t('how.step2.title')}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">{t('how.step2.desc')}</div>
            </div>
          </motion.div>
          {/* Вертикальная линия между шагами */}
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#a259f7] to-[#4fc3f7] opacity-20 mx-auto" />
          {/* Шаг 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-row gap-3 sm:gap-6 items-start w-full relative group cursor-pointer transition-colors"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text min-w-[28px] sm:min-w-[36px] text-center">3</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                <span className="inline-block align-middle text-[15px] sm:text-[16px] drop-shadow-[0_0_3px_#a259f7] transition-transform group-hover:scale-110">🚀</span>
                {t('how.step3.title')}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">{t('how.step3.desc')}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order" className="w-full max-w-6xl mx-auto py-12 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{t('pricing.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Быстрая настройка / Fast setup */}
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0 }}
            className="bg-[#15152a] rounded-xl min-h-[700px] flex flex-col justify-between py-8 px-8 shadow-lg border border-[#4fc3f7] text-left gap-4"
            style={{boxShadow:'0 0 0 2px #4fc3f7, 0 8px 32px 0 #000a'}}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-2xl font-bold flex flex-col items-start text-white">
                  <span>🎯 {t('pricing.fast.name')}</span>
                  <span className="block text-base font-normal text-gray-400 mt-1">({t('pricing.fast.desc')})</span>
                </div>
                <div className="text-3xl font-bold text-white mt-4">{t('pricing.fast.price')}</div>
              </div>
              <ul className="text-sm space-y-2 text-left flex flex-col items-start">
                {t.raw('pricing.fast.features').map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FileText size={18} className="text-[#a259f7]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex items-center gap-2 px-2 py-2 rounded-lg bg-gradient-to-r from-[#a259f7]/20 to-[#4fc3f7]/10 border border-[#a259f7]/30">
                <FileText size={20} className="text-gradient bg-gradient-to-r from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text font-bold" />
                <span className="text-sm font-semibold text-white">{t('pricing.fast.bonus')}</span>
              </div>
            </div>
            <div className="mt-auto w-full flex flex-col gap-2">
              <button
                className="w-full button-gradient rounded-lg px-6 py-3 font-bold text-base text-white shadow-lg focus:outline-none transition-all hover:scale-105 text-center"
                style={{background:'linear-gradient(90deg,#a259f7,#4fc3f7)',filter:'brightness(1.1)'}}
                onClick={() => { setSelectedPackage(t('pricing.fast.name')); setModalOpen(true); }}
              >
                {t('pricing.fast.button')}
              </button>
              <div className="text-xs text-center text-gray-400">🚀 {t('pricing.fast.note')}</div>
            </div>
          </motion.div>
          {/* Автоматизация + AI / Automation + AI */}
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#15152a] rounded-xl min-h-[700px] flex flex-col justify-between py-8 px-8 shadow-lg border border-[#4fc3f7] text-left gap-4"
            style={{boxShadow:'0 0 0 2px #4fc3f7, 0 8px 32px 0 #000a'}}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-2xl font-bold flex flex-col items-start text-white">
                  <span>🚀 {t('pricing.ai.name')}</span>
                  <span className="block text-base font-normal text-gray-400 mt-1">({t('pricing.ai.desc')})</span>
                </div>
                <div className="text-3xl font-bold text-white mt-4">{t('pricing.ai.price')}</div>
              </div>
              <ul className="text-sm space-y-2 text-left flex flex-col items-start">
                {t.raw('pricing.ai.features').map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Zap size={18} className="text-[#a259f7]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex items-center gap-2 px-2 py-2 rounded-lg bg-gradient-to-r from-[#a259f7]/20 to-[#4fc3f7]/10 border border-[#a259f7]/30">
                <FileText size={20} className="text-gradient bg-gradient-to-r from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text font-bold" />
                <span className="text-sm font-semibold text-white">{t('pricing.ai.bonus')}</span>
              </div>
            </div>
            <div className="mt-auto w-full flex flex-col gap-2">
              <button
                className="w-full button-gradient rounded-lg px-6 py-3 font-bold text-base text-white shadow-lg focus:outline-none transition-all hover:scale-105 text-center"
                style={{background:'linear-gradient(90deg,#a259f7,#4fc3f7)',filter:'brightness(1.1)'}}
                onClick={() => { setSelectedPackage(t('pricing.ai.name')); setModalOpen(true); }}
              >
                {t('pricing.ai.button')}
              </button>
              <div className="text-xs text-center text-gray-400">🚀 {t('pricing.ai.note')}</div>
            </div>
          </motion.div>
          {/* Автоматизация под ключ / Full automation */}
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#15152a] rounded-xl min-h-[700px] flex flex-col justify-between py-8 px-8 shadow-lg border border-[#4fc3f7] text-left gap-4"
            style={{boxShadow:'0 0 0 2px #4fc3f7, 0 8px 32px 0 #000a'}}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-2xl font-bold flex flex-col items-start text-white">
                  <span>👑 {t('pricing.full.name')}</span>
                  <span className="block text-base font-normal text-gray-400 mt-1">({t('pricing.full.desc')})</span>
                </div>
                <div className="text-3xl font-bold text-white mt-4">{t('pricing.full.price')}</div>
              </div>
              <ul className="text-sm space-y-2 text-left flex flex-col items-start">
                {t.raw('pricing.full.features').map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Settings size={18} className="text-[#a259f7]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex items-center gap-2 px-2 py-2 rounded-lg bg-gradient-to-r from-[#a259f7]/20 to-[#4fc3f7]/10 border border-[#a259f7]/30">
                <FileText size={20} className="text-gradient bg-gradient-to-r from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text font-bold" />
                <span className="text-sm font-semibold text-white">{t('pricing.full.bonus')}</span>
              </div>
            </div>
            <div className="mt-auto w-full flex flex-col gap-2">
              <button
                className="w-full button-gradient rounded-lg px-6 py-3 font-bold text-base text-white shadow-lg focus:outline-none transition-all hover:scale-105 text-center"
                style={{background:'linear-gradient(90deg,#a259f7,#4fc3f7)',filter:'brightness(1.1)'}}
                onClick={() => { setSelectedPackage(t('pricing.full.name')); setModalOpen(true); }}
              >
                {t('pricing.full.button')}
              </button>
              <div className="text-xs text-center text-gray-400">🚀 {t('pricing.full.note')}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto py-12 px-2 flex flex-col items-center gap-6"
      >
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] flex items-center justify-center shadow-lg">
          <img
            src="https://api.dicebear.com/7.x/identicon/svg?seed=nikita"
            alt="Никита — AI инженер"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#0e0e1c]"
          />
        </div>
        <div className="text-2xl font-bold text-white text-center">
          {t('about.main')}
        </div>
        <div className="text-md text-gray-300 text-center font-medium max-w-xl">
          <span className="font-bold bg-gradient-to-r from-[#a259f7] to-[#4fc3f7] text-transparent bg-clip-text">{t('about.highlight')}</span> {t('about.highlightText')}<br/>
          {t('about.desc')}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section id="testimonials"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-white">{t('testimonials.title')}</h2>
        <div className="text-gray-400 text-center mb-4">{t('testimonials.subtitle')}</div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {t.raw('testimonials.list').map((testi: any, i: number) => (
            <SwiperSlide key={i} className="h-auto flex items-stretch">
              <div className={`rounded-xl testimonial-gradient testimonial-card p-6 flex flex-col items-center shadow-lg testimonial-glow transition-all h-full min-h-[420px]${i === 0 || i === 2 ? ' !min-h-[480px] !py-10' : ''}`}>
                <div className="flex items-center justify-center mb-3">
                  <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
                </div>
                <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center">
                  {i % 2 === 0 ? (
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="36" fill="#a259f7" stroke="#4fc3f7" strokeWidth="4" />
                      <circle cx="40" cy="40" r="16" fill="#fff" opacity="0.18" />
                    </svg>
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <rect x="8" y="8" width="64" height="64" rx="16" fill="#4fc3f7" stroke="#a259f7" strokeWidth="4" />
                      <rect x="28" y="28" width="24" height="24" rx="6" fill="#fff" opacity="0.18" />
                    </svg>
                  )}
                </div>
                <div className="quote-mark mb-2">"</div>
                <div className={`text-center text-gray-200 text-md mb-2${i === 2 ? ' mt-4' : ''}`}>{testi.text}</div>
                <div className="text-center text-xl font-bold text-white mt-2">{testi.name}</div>
                {testi.company && (
                  <div className="flex justify-center mt-3">
                    <div className="bg-white/10 rounded-xl p-2 shadow-md flex items-center justify-center w-9 h-9">
                      <img src={`/${testi.company}`} alt="Company Logo" className="w-7 h-7 object-contain" />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <a href="#order" className="button-gradient button-gradient-pulse rounded-full px-10 py-5 font-bold text-2xl text-white shadow-xl focus:outline-none transition-all hover:scale-105" onClick={e => {e.preventDefault(); document.getElementById('order')?.scrollIntoView({behavior:'smooth'});}}>{t('testimonials.button')}</a>
        </div>
      </motion.section>

      {/* Bonus Section */}
      <section id="bonus" className="w-full max-w-2xl mx-auto py-12 px-2 flex flex-col items-center gap-4">
        <div className="text-2xl font-bold text-center mb-2">{t('bonus.title')}</div>
        <div className="text-lg text-center font-semibold mb-2 bg-gradient-to-r from-[#a259f7] via-[#4fc3f7] to-[#a259f7] text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(162,89,247,0.3)]">
          {t('bonus.desc')}
        </div>
        <div className="text-sm text-center text-gray-400">
          {t('bonus.support')} <br />
          <span className="text-xs text-gray-500">{t('bonus.support_note')}</span>
        </div>
      </section>

      {/* Storytelling Scroll Journey */}
      <section id="cases" className="w-full bg-[#0e0e1c] py-24 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-white ai-glow">{t('projects.title')}</h2>
        {t.raw('projects.list').map((story: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', stiffness: 60, damping: 18 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 relative rounded-3xl overflow-hidden shadow-2xl mb-16 group"
          >
            {/* Проблема */}
            <div className="relative bg-[#181830] p-8 flex flex-col items-start min-h-[340px] border-r-0 md:border-r border-[#4fc3f7]/30 group hover:shadow-[0_0_32px_4px_rgba(162,89,247,0.15)] transition-all overflow-hidden">
              {/* Много мелких декоративных значков хаотично */}
              {[...Array(14)].map((_, i) => {
                const shapes = [
                  <circle cx="12" cy="12" r="10" stroke="#a259f7" strokeWidth="2" />, // круг
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="#4fc3f7" strokeWidth="2" />, // квадрат
                  <polygon points="12,2 22,22 2,22" stroke="#fff" strokeWidth="2" /> // треугольник
                ];
                const shape = shapes[i % 3];
                const size = 12 + Math.floor(Math.random() * 16); // 12-28px
                const left = Math.random() * 90;
                const top = Math.random() * 90;
                const opacity = 0.08 + Math.random() * 0.18;
                const blur = 1 + Math.random() * 2.5;
                return (
                  <svg key={i} className="absolute" style={{left: `${left}%`, top: `${top}%`, opacity, filter: `blur(${blur}px)`}} width={size} height={size} viewBox="0 0 24 24" fill="none">{shape}</svg>
                );
              })}
              <div className="flex items-center gap-2 mb-2 text-[#fbbf24] text-xs font-semibold">
                <AlertTriangle size={20} className="text-[#fbbf24]" /> <span>Step 1: Problem</span>
              </div>
              <div className="font-bold text-2xl text-white mb-4">
                <span className="ai-glow">{t('projects.problemLabel')}</span> {story.problem}
              </div>
            </div>
            {/* Вертикальная glowing линия */}
            <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#a259f7] via-[#4fc3f7] to-transparent blur-[2px] opacity-80 z-10" />
            {/* Решение */}
            <div className="relative bg-[#15152a] p-8 flex flex-col items-center min-h-[340px] border-x-0 md:border-x border-[#a259f7]/30 group hover:shadow-[0_0_32px_4px_rgba(76,195,247,0.15)] transition-all overflow-hidden">
              {/* Много мелких декоративных значков хаотично */}
              {[...Array(16)].map((_, i) => {
                const shapes = [
                  <circle cx="12" cy="12" r="10" stroke="#a259f7" strokeWidth="2" />, // круг
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="#4fc3f7" strokeWidth="2" />, // квадрат
                  <polygon points="12,2 22,22 2,22" stroke="#fff" strokeWidth="2" /> // треугольник
                ];
                const shape = shapes[i % 3];
                const size = 12 + Math.floor(Math.random() * 16); // 12-28px
                const left = Math.random() * 90;
                const top = Math.random() * 90;
                const opacity = 0.08 + Math.random() * 0.18;
                const blur = 1 + Math.random() * 2.5;
                return (
                  <svg key={i} className="absolute" style={{left: `${left}%`, top: `${top}%`, opacity, filter: `blur(${blur}px)`}} width={size} height={size} viewBox="0 0 24 24" fill="none">{shape}</svg>
                );
              })}
              <div className="flex items-center gap-2 mb-2 text-[#4fc3f7] text-xs font-semibold">
                <Zap size={18} /> <span>Step 2: Solution</span>
              </div>
              <div className="w-full rounded-xl border-2 border-gradient shadow-lg overflow-hidden mb-4 transition-all group-hover:shadow-[0_0_32px_8px_rgba(76,195,247,0.25)] cursor-pointer relative" onClick={() => { if(story.solutionVideo){ setVideoUrl(story.solutionVideo.replace('autoplay=1', 'autoplay=0').replace('mute=1', 'mute=0').replace('controls=0', 'controls=1')); setVideoModalOpen(true); } }} title="Смотреть видео в большом окне">
                <img src={getYoutubeThumbnail(story.solutionVideo)} alt="YouTube preview" className="w-full aspect-video object-cover rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="white" className="drop-shadow-lg"><polygon points="5,3 19,12 5,21"/></svg>
                </div>
              </div>
              <div className="w-full flex justify-center mb-2">
                <span className="ai-glow text-lg font-bold text-[#4fc3f7] text-center">{t('projects.solutionLabel')}</span>
              </div>
              <div className="text-md text-gray-300 w-full text-left">
                {story.solutionText.includes('✅') ? (
                  <ul className="space-y-0.5">
                    {story.solutionText.split(/\s*✅/).filter(Boolean).map((line: string, i: number) => (
                      <li key={i} className="flex items-start gap-1 text-[15px] leading-tight">
                        <span className="text-green-400 text-base mt-0.5">✅</span>
                        <span>{line.trim()}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>{story.solutionText}</span>
                )}
              </div>
            </div>
            {/* Вертикальная glowing линия */}
            <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#4fc3f7] via-[#a259f7] to-transparent blur-[2px] opacity-80 z-10" />
            {/* Результат */}
            <div className="relative bg-[#181830] p-8 flex flex-col items-start min-h-[340px] border-l-0 md:border-l border-[#a259f7]/30 group hover:shadow-[0_0_32px_4px_rgba(162,89,247,0.15)] transition-all overflow-hidden">
              {/* Много мелких декоративных значков хаотично */}
              {[...Array(12)].map((_, i) => {
                const shapes = [
                  <circle cx="12" cy="12" r="10" stroke="#4fc3f7" strokeWidth="2" />, // круг
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="#a259f7" strokeWidth="2" />, // квадрат
                  <polygon points="12,2 22,22 2,22" stroke="#fff" strokeWidth="2" /> // треугольник
                ];
                const shape = shapes[i % 3];
                const size = 12 + Math.floor(Math.random() * 16); // 12-28px
                const left = Math.random() * 90;
                const top = Math.random() * 90;
                const opacity = 0.08 + Math.random() * 0.18;
                const blur = 1 + Math.random() * 2.5;
                return (
                  <svg key={i} className="absolute" style={{left: `${left}%`, top: `${top}%`, opacity, filter: `blur(${blur}px)`}} width={size} height={size} viewBox="0 0 24 24" fill="none">{shape}</svg>
                );
              })}
              <div className="flex items-center gap-2 mb-2 text-[#4ade80] text-xs font-semibold">
                <Check size={20} className="text-[#4ade80]" /> <span>Step 3: Result</span>
              </div>
              <div className="font-bold text-xl text-white mb-2">
                <span className="ai-glow">{t('projects.resultLabel')}</span> {story.result}
              </div>
              <div className="text-sm text-gray-400">{story.resultDesc}</div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 ai-glow">{t('faq.title')}</h2>
        <div className="flex flex-col gap-8 w-full">
          {t.raw('faq.list').map((item: any, idx: number) => (
            <div key={idx}>
              <div className="text-lg font-bold text-white mb-2">{item.q}</div>
              <div className="text-base text-gray-300 flex items-start"><span className="mr-2">💬</span>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="w-full bg-[#15152a] py-16 px-4 flex flex-col items-center mt-12 rounded-3xl shadow-2xl border border-[#23234a]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 ai-glow" style={{textShadow:'0 0 12px #a259f7, 0 0 32px #4fc3f7'}}>{t('contacts.title')}</h2>
        <div className="text-lg text-gray-300 text-center mb-8" style={{textShadow:'0 0 6px #23234a'}}>{t('contacts.desc')}</div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center items-center">
          {/* Discord */}
          <a href="https://discord.com/users/your_discord_id" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-36 group">
            <span className="flex items-center justify-center rounded-full w-24 h-24 bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] shadow-lg transition-all group-hover:shadow-[0_0_24px_8px_rgba(162,89,247,0.5)]">
              <img src="/Discord-logo-01.png" alt="Discord" width="48" height="48" className="drop-shadow-[0_0_8px_#a259f7]" />
            </span>
            <span className="mt-3 text-white font-semibold text-base text-center drop-shadow-[0_0_6px_#a259f7]">{t('contacts.discord')}<br/><span className="text-xs text-gray-400 font-normal">{t('contacts.discord_user')}</span></span>
          </a>
          {/* Telegram */}
          <a href="https://t.me/Olegh_0" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-36 group">
            <span className="flex items-center justify-center rounded-full w-24 h-24 bg-gradient-to-br from-[#4fc3f7] to-[#a259f7] shadow-lg transition-all group-hover:shadow-[0_0_24px_8px_rgba(79,195,247,0.5)]">
              <img src="/Telegram_logo.svg.webp" alt="Telegram" width="48" height="48" className="drop-shadow-[0_0_8px_#4fc3f7]" />
            </span>
            <span className="mt-3 text-white font-semibold text-base text-center drop-shadow-[0_0_6px_#4fc3f7]">{t('contacts.telegram')}<br/><span className="text-xs text-gray-400 font-normal">{t('contacts.telegram_user')}</span></span>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/385953705606" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-36 group">
            <span className="flex items-center justify-center rounded-full w-24 h-24 bg-gradient-to-br from-[#25d366] to-[#4fc3f7] shadow-lg transition-all group-hover:shadow-[0_0_24px_8px_rgba(37,211,102,0.5)]">
              <img src="/whatsapp-icon.svg" alt="WhatsApp" width="48" height="48" className="drop-shadow-[0_0_8px_#25d366]" />
            </span>
            <span className="mt-3 text-white font-semibold text-base text-center drop-shadow-[0_0_6px_#25d366]">{t('contacts.whatsapp')}<br/><span className="text-xs text-gray-400 font-normal">{t('contacts.whatsapp_user')}</span></span>
          </a>
          {/* Email */}
          <a href="mailto:Lazarievsmm@gmail.com" className="flex flex-col items-center w-36 group">
            <span className="flex items-center justify-center rounded-full w-24 h-24 bg-gradient-to-br from-[#a259f7] to-[#4fc3f7] shadow-lg transition-all group-hover:shadow-[0_0_24px_8px_rgba(162,89,247,0.5)]">
              <img src="/Gmail_icon.png" alt="Email" width="48" height="48" className="drop-shadow-[0_0_8px_#a259f7]" />
            </span>
            <span className="mt-3 text-white font-semibold text-base text-center drop-shadow-[0_0_6px_#a259f7]">{t('contacts.email')}<br/><span className="text-xs text-gray-400 font-normal">{t('contacts.email_user')}</span></span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center gap-4 text-gray-500">
        <div className="text-sm">Copyright © Nikita 2025</div>
        <div className="flex gap-6">
          <a href="https://t.me/Olegh_0" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 3L2 12l5.5 2 2 5.5L22 3z"/><path d="M22 3L8.5 14.5"/></svg>
          </a>
          <a href="mailto:Lazarievsmm@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M16 8a4 4 0 0 1 4 4v5m-8-5v5m-4-5v5m-2-8h.01"/></svg>
          </a>
        </div>
      </footer>

      {/* Modal Order Form */}
      <FuturisticOrderModal open={modalOpen} onClose={() => setModalOpen(false)} selectedPackage={selectedPackage} />

      {/* Модальное окно для видео */}
      <VideoModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} videoUrl={videoUrl} />
    </>
  );
}
