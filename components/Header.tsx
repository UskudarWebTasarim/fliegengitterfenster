'use client';

import { useState } from 'react';
import { Language, translations } from '@/lib/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-secondary">Fliegengitter Fenster</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-secondary hover:text-primary transition-colors font-medium">{t.header.home}</a>
            <a href="#products" className="text-secondary hover:text-primary transition-colors font-medium">{t.header.products}</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium">{t.header.about}</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors font-medium">{t.header.contact}</a>
            
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLang('de')}
                className={`px-3 py-1 rounded-lg transition-all ${lang === 'de' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
              >
                🇦🇹 AT
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-lg transition-all ${lang === 'tr' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
              >
                🇹🇷 TR
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLang('de')}
                className={`px-2 py-1 rounded text-sm transition-all ${lang === 'de' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary'}`}
              >
                🇦🇹 AT
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-2 py-1 rounded text-sm transition-all ${lang === 'tr' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary'}`}
              >
                🇹🇷 TR
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#hero" className="text-secondary hover:text-primary transition-colors font-medium py-2">{t.header.home}</a>
              <a href="#products" className="text-secondary hover:text-primary transition-colors font-medium py-2">{t.header.products}</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium py-2">{t.header.about}</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors font-medium py-2">{t.header.contact}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
