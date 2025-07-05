'use client';
import "@fontsource/inter";
import "./globals.css";
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../messages/en.json';
import ruMessages from '../messages/ru.json';

const SUPPORTED_LANGS = ['en', 'ru'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Проверяем cookie
    let cookieLang = null;
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
      cookieLang = match ? decodeURIComponent(match[1]) : null;
    }
    if (cookieLang && SUPPORTED_LANGS.includes(cookieLang)) {
      setLang(cookieLang);
    } else {
      // Определяем язык браузера
      const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
      const shortLang = browserLang.split('-')[0];
      const detectedLang = SUPPORTED_LANGS.includes(shortLang) ? shortLang : 'en';
      setLang(detectedLang);
      // Сохраняем в cookie
      document.cookie = `lang=${detectedLang}; path=/; max-age=31536000`;
    }
  }, []);

  const messages = lang === 'en' ? enMessages : ruMessages;
  return (
    <html lang={lang}>
      <body className="antialiased font-sans bg-[#0e0e1c] text-[#ededed]">
        <NextIntlClientProvider locale={lang} messages={messages} timeZone="UTC">
          <div className="fixed top-6 right-6 z-50">
            <button
              className="p-2 rounded-full bg-[#181830] hover:bg-[#23234a] shadow-lg border border-[#23234a] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Открыть меню"
            >
              <Menu size={28} className="text-[#a259f7]" />
            </button>
          </div>
          {menuOpen && (
            <div className="fixed inset-0 z-40 bg-black/60 flex">
              <div className="w-64 bg-[#15152a] h-full shadow-2xl p-8 flex flex-col gap-6 animate-fade-in-right">
                <button
                  className="self-end mb-4 text-gray-400 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Закрыть меню"
                >✕</button>
                <a href="#cases" className="text-lg font-bold text-white hover:text-[#a259f7] transition-colors" onClick={e => {e.preventDefault(); setMenuOpen(false); document.getElementById('cases')?.scrollIntoView({behavior:'smooth'});}}>Cases</a>
                <a href="#order" className="text-lg font-bold text-white hover:text-[#a259f7] transition-colors" onClick={e => {e.preventDefault(); setMenuOpen(false); document.getElementById('order')?.scrollIntoView({behavior:'smooth'});}}>Packages</a>
                <a href="#testimonials" className="text-lg font-bold text-white hover:text-[#a259f7] transition-colors" onClick={e => {e.preventDefault(); setMenuOpen(false); document.getElementById('testimonials')?.scrollIntoView({behavior:'smooth'});}}>Testimonials</a>
                <a href="#bonus" className="text-lg font-bold text-white hover:text-[#a259f7] transition-colors" onClick={e => {e.preventDefault(); setMenuOpen(false); document.getElementById('bonus')?.scrollIntoView({behavior:'smooth'});}}>Bonus</a>
                <a href="#contacts" className="text-lg font-bold text-white hover:text-[#a259f7] transition-colors" onClick={e => {e.preventDefault(); setMenuOpen(false); document.getElementById('contacts')?.scrollIntoView({behavior:'smooth'});}}>Contacts</a>
              </div>
              <div className="flex-1" onClick={() => setMenuOpen(false)} />
            </div>
          )}
          <div className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none">
            {[...Array(32)].map((_, i) => {
              const shapes = [
                <circle cx="12" cy="12" r="10" stroke="#a259f7" strokeWidth="2" />, // круг
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="#4fc3f7" strokeWidth="2" />, // квадрат
                <polygon points="12,2 22,22 2,22" stroke="#fff" strokeWidth="2" /> // треугольник
              ];
              const shape = shapes[i % 3];
              const size = 18 + Math.floor(Math.random() * 38); // 18-56px
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const opacity = 0.04 + Math.random() * 0.10;
              const blur = 2 + Math.random() * 4;
              return (
                <svg key={i} className="absolute" style={{left: `${left}%`, top: `${top}%`, opacity, filter: `blur(${blur}px)`}} width={size} height={size} viewBox="0 0 24 24" fill="none">{shape}</svg>
              );
            })}
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
