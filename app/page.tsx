'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import MobileFixedButtons from '@/components/MobileFixedButtons';
import DesktopFloatingWhatsApp from '@/components/DesktopFloatingWhatsApp';
import { Language, translations } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('de');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = translations[lang];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <Header lang={lang} setLang={setLang} />
      <Popup lang={lang} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #83bd81 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, #404e5e 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">✨ Österreichs Premium Insektenschutz</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight">
                {t.hero.title.split('-').map((part, i) => (
                  <span key={i} className={i === 0 ? 'block' : 'block text-primary'}>{part}{i === 0 ? '-' : ''}</span>
                ))}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-primary text-white font-bold py-5 px-10 rounded-2xl transition-all hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <a
                  href="#products"
                  className="group relative overflow-hidden bg-secondary text-white font-bold py-5 px-10 rounded-2xl transition-all hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10">Mehr erfahren</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
              <div className="pt-8 flex flex-wrap gap-3">
                <a href="/" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-secondary text-sm font-medium border border-gray-200">Fliegengitter Fenster</a>
                <a href="#products" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-secondary text-sm font-medium border border-gray-200">Plissee</a>
                <a href="#about" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-secondary text-sm font-medium border border-gray-200">Insektenschutz</a>
                <a href="#quality" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-secondary text-sm font-medium border border-gray-200">Jalousien</a>
                <a href="#process" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-secondary text-sm font-medium border border-gray-200">Zip Rollos</a>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="font-bold text-secondary">Fliegengitter</div>
                    <div className="text-xs text-gray-500 mt-1">Spannrahmen</div>
                  </div>
                  <div className="group bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div className="font-bold text-secondary">Fenster</div>
                    <div className="text-xs text-gray-500 mt-1">Alle Größen</div>
                  </div>
                  <div className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="font-bold text-secondary">Türen</div>
                    <div className="text-xs text-gray-500 mt-1">Schiebetüren</div>
                  </div>
                  <div className="group bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="font-bold text-secondary">Schutz</div>
                    <div className="text-xs text-gray-500 mt-1">100% Sicher</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, #83bd81 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">Unsere Produkte</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.products.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t.products.flyscreen, icon: '🪟', desc: 'Spannrahmen für Fenster', color: 'from-primary/20 to-primary/5' },
              { name: t.products.plissee, icon: '🎯', desc: 'Plissee Insektenschutz', color: 'from-secondary/20 to-secondary/5' },
              { name: t.products.plisseeCurtain, icon: '📱', desc: 'Plissee Vorhänge', color: 'from-primary/20 to-primary/5' },
              { name: t.products.blinds, icon: '🏠', desc: 'Jalousien', color: 'from-secondary/20 to-secondary/5' },
              { name: t.products.honeycomb, icon: '🔲', desc: 'Honeycomb Vorhänge', color: 'from-primary/20 to-primary/5' },
              { name: t.products.duette, icon: '📐', desc: 'Düette Vorhänge', color: 'from-secondary/20 to-secondary/5' },
              { name: t.products.zip, icon: '⚡', desc: 'Zip Rollos', color: 'from-primary/20 to-primary/5' },
              { name: 'Schiebetüren', icon: '🚪', desc: 'Schiebetür Insektenschutz', color: 'from-secondary/20 to-secondary/5' },
            ].map((product, index) => (
              <a
                key={index}
                href="#"
                className={`group relative bg-gradient-to-br ${product.color} rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-primary`}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{product.icon}</div>
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-secondary to-secondary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #83bd81 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm">Warum Wir?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.about.title}</h2>
              <p className="text-xl text-gray-200 leading-relaxed">{t.about.description}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-primary mb-2">{t.about.experience}</div>
                  <div className="text-gray-300 text-sm">Erfahrung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-primary mb-2">{t.about.countries}</div>
                  <div className="text-gray-300 text-sm">Länder</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-primary mb-2">{t.about.quality}</div>
                  <div className="text-gray-300 text-sm">Qualität</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-primary mb-2">{t.about.support}</div>
                  <div className="text-gray-300 text-sm">Service</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-6 text-secondary">{t.about.advantagesTitle}</h3>
              <ul className="space-y-4">
                {t.about.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, #404e5e 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">So Geht Es</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.process.steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.title}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white via-secondary/5 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">Eigenschaften</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.features.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-24 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #404e5e 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary rounded-full text-white font-semibold text-sm mb-4">Materialien</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.quality.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.quality.description}</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/20">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <tr>
                  {t.quality.table.headers.map((header, index) => (
                    <th key={index} className="px-8 py-5 text-left font-bold text-lg">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.quality.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-100 hover:bg-primary/5 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-8 py-5 text-gray-700 font-medium">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-24 bg-gradient-to-b from-white via-secondary/5 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">Anwendungen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.examples.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.examples.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.examples.items.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-primary/5 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">Kundenstimmen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.city}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-24 bg-gradient-to-br from-secondary to-secondary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #83bd81 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white font-semibold text-sm mb-4">Vertrauen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.trust.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.trust.items.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section id="targetMarket" className="py-24 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">Zielmärkte</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.targetMarket.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.targetMarket.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.targetMarket.markets.map((market, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{market.country}</div>
                <h3 className="font-bold text-2xl text-secondary mb-3">{market.country.split(' ')[1]}</h3>
                <p className="text-gray-600">{market.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-24 bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">Montage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.installation.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.installation.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.installation.items.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-secondary mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">Lieferung</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.serviceAreas.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.serviceAreas.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              '🇦🇹 Österreich',
              '🇩🇪 Deutschland',
              '🇳🇱 Niederlande',
              '🇧🇪 Belgien',
              '🇫🇷 Frankreich',
              '🇨🇭 Schweiz',
            ].map((country, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{country.split(' ')[0]}</div>
                <div className="font-bold text-secondary">{country.split(' ')[1]}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 font-medium bg-white inline-block px-6 py-3 rounded-full shadow-md">{t.serviceAreas.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-24 bg-gradient-to-br from-primary/10 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary rounded-full text-white font-semibold text-sm mb-4">Garantie</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.warranty.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.warranty.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.warranty.items.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-secondary mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </div>
          
          <div className="space-y-6">
                {t.faq.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-primary overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3 className="font-bold text-lg text-secondary">{faq.q}</h3>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <svg className="w-6 h-6 text-primary group-hover:text-white transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-gray-700 text-lg">{faq.a}</p>
                      </div>
                    </details>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #404e5e 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white text-primary font-bold py-6 px-12 rounded-2xl transition-all hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-lg">{t.cta.whatsapp}</span>
              </span>
            </a>
            <a
              href="tel:+905403363873"
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white font-bold py-6 px-12 rounded-2xl transition-all hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">{t.cta.call}</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <MobileFixedButtons />
      <DesktopFloatingWhatsApp />
    </div>
  );
}
