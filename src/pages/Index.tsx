import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const slides = [
  {
    id: 1,
    layout: 'title',
    title: 'GCS Website Redesign Brief',
    subtitle: 'Global Connect Solutions | Marketing Team',
    bgColor: 'bg-gradient-to-br from-[#00C4CC] to-[#FFD700]'
  },
  {
    id: 2,
    layout: 'content',
    title: 'Client & Context',
    content: 'Global Connect Solutions (GCS) is a Colombia-based BPO that builds dedicated, bilingual remote teams as seamless extensions of clients\' in-house staff.',
    bgColor: 'bg-white'
  },
  {
    id: 3,
    layout: 'split',
    title: 'Business Type & Overview',
    sections: [
      {
        heading: 'Business Type',
        content: 'Business Process Outsourcing (BPO)'
      },
      {
        heading: 'Overview',
        content: 'GCS specializes in sourcing, vetting, and managing remote professionals who act as true extensions of internal teams—ensuring seamless collaboration, brand alignment, and proactive support.'
      }
    ],
    bgColor: 'bg-[#F8F8F8]'
  },
  {
    id: 4,
    layout: 'bullets',
    title: 'What We Do',
    bullets: [
      {
        title: 'Executive Assistance',
        description: 'Recruit, vet, and integrate remote assistants for calendar scheduling, travel planning, and project coordination.'
      },
      {
        title: 'Customer Support',
        description: 'Deploy bilingual specialists delivering empathetic, multichannel assistance (chat, email & phone) with SLA-backed reliability.'
      },
      {
        title: 'Marketing & Design',
        description: 'Provide marketing pros crafting on-brand content—social media assets, email campaigns, slide decks, and more.'
      }
    ],
    bgColor: 'bg-white'
  },
  {
    id: 5,
    layout: 'objectives',
    title: 'Objectives',
    primary: {
      title: 'Primary Objective',
      content: 'Drive a consistent pipeline of qualified leads by streamlining navigation, clarifying value propositions, and featuring a clear "Schedule a Call" CTA.'
    },
    secondary: {
      title: 'Secondary Objectives',
      items: [
        'Thought Leadership: Insights Hub (blogs, whitepapers, case studies)',
        'Talent Attraction: Showcase culture, values & perks',
        'Self-Service: Fast, searchable FAQ hub',
        'Credibility: Client-logo carousel, animated metrics & video testimonials'
      ]
    },
    bgColor: 'bg-[#F8F8F8]'
  },
  {
    id: 6,
    layout: 'features',
    title: 'Essential Features',
    features: [
      'Insights Hub: Articles & gated whitepapers',
      'FAQ Center: Search + filter by topic',
      'Social Proof: Logo carousel & animated counters',
      'Video Testimonials: Lightbox or gallery',
      'Lead Capture & Scheduling: Zoho forms + Zoho Calendar integration',
      'Download Center: PDF brochures & case studies',
      'Persistent CTA: Sticky header button',
      'Responsive, mobile-first design'
    ],
    bgColor: 'bg-white'
  },
  {
    id: 7,
    layout: 'brand-enhanced',
    title: 'Tone & Visual Style',
    tone: {
      title: 'Tone & Voice',
      content: 'Warmly Professional – authoritative yet approachable.'
    },
    typography: {
      title: 'Typography',
      items: [
        { name: 'Headlines', font: 'Bebas Neue', example: 'GLOBAL CONNECT SOLUTIONS' },
        { name: 'Body Text', font: 'Noto Sans', example: 'Professional remote teams that extend your capabilities' }
      ]
    },
    colors: {
      title: 'Brand Colors',
      palette: [
        { name: 'Turquoise', color: '#00C4CC', usage: 'Primary CTAs & Headers' },
        { name: 'Vibrant Yellow', color: '#FFD700', usage: 'Accents & Highlights' },
        { name: 'Charcoal Gray', color: '#333333', usage: 'Body Text & Icons' },
        { name: 'Off-White', color: '#F8F8F8', usage: 'Backgrounds & Cards' }
      ]
    },
    bgColor: 'bg-white'
  },
  {
    id: 8,
    layout: 'inspiration',
    title: 'Design & UX Inspirations',
    subtitle: 'Inspired by Route (https://route.com/) & Salesape (https://www.salesape.ai/):',
    features: [
      'Sectional layouts & generous whitespace',
      'Bold accent colors for CTAs & highlights',
      'Modular cards & numbered steps',
      'Clean hero with sticky CTA header',
      'Early social proof (logo carousel, counters)',
      'Device mockups for service previews',
      'Subtle on-scroll animations',
      'Minimalist sans-serif typography'
    ],
    bgColor: 'bg-white'
  },
  {
    id: 9,
    layout: 'sitemap-combined',
    title: 'High-Level Sitemap',
    leftColumn: [
      {
        title: 'Home',
        items: [
          'Hero section + primary CTA',
          'Service highlights (three blocks)',
          '4-step process overview',
          'Core values visualization',
          'Testimonials & client logos'
        ]
      },
      {
        title: 'Services',
        items: [
          'Executive Assistance: features, benefits, FAQ, CTA',
          'Customer Support: multichannel, metrics, FAQ, CTA',
          'Marketing & Design: assets, consistency, FAQ, CTA'
        ]
      }
    ],
    rightColumn: [
      {
        title: 'Process',
        items: ['Recruit → Match → Onboard → Follow-up']
      },
      {
        title: 'About Us',
        items: ['History timeline, Mission, Vision & Values']
      },
      {
        title: 'Careers',
        items: ['Open roles + application form, Culture & perks']
      },
      {
        title: 'Resources',
        items: ['Blog, gated whitepapers & case studies']
      },
      {
        title: 'Contact',
        items: ['Zoho form + calendar scheduling, Direct email & phone']
      }
    ],
    bgColor: 'bg-[#F8F8F8]'
  },
  {
    id: 10,
    layout: 'final',
    title: 'Integrations & Gating Strategy',
    sections: [
      {
        title: 'Integrations',
        items: ['Zoho forms & calendar scheduling']
      },
      {
        title: 'Gating Strategy',
        items: [
          'Gate whitepapers & case studies behind form',
          'Keep brochures & one-pagers freely downloadable'
        ]
      }
    ],
    bgColor: 'bg-[#F8F8F8]'
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const slide = slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.layout) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-white px-8">
            <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <p className={`text-2xl md:text-3xl opacity-90 transition-all duration-700 delay-300 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-90' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Noto Sans", sans-serif' }}>
              {slide.subtitle}
            </p>
          </div>
        );

      case 'content':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-12 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <p className={`text-2xl md:text-3xl leading-relaxed text-[#333333] transition-all duration-700 delay-200 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ fontFamily: '"Noto Sans", sans-serif' }}>
              {slide.content}
            </p>
          </div>
        );

      case 'split':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="grid md:grid-cols-2 gap-12">
              {slide.sections.map((section, idx) => (
                <div key={idx} className={`space-y-6 transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: `${300 + idx * 200}ms` }}>
                  <h2 className="text-3xl font-bold text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {section.heading}
                  </h2>
                  <p className="text-xl leading-relaxed text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bullets':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="space-y-12">
              {slide.bullets.map((bullet, idx) => (
                <div key={idx} className={`border-l-4 border-[#FFD700] pl-8 transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${300 + idx * 200}ms` }}>
                  <h3 className="text-2xl font-bold mb-4 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {bullet.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                    {bullet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'objectives':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="space-y-12">
              <div className={`bg-[#00C4CC] p-8 rounded-lg text-white transition-all duration-700 ${!isTransitioning ? 'animate-fade-in scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {slide.primary.title}
                </h2>
                <p className="text-xl leading-relaxed" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                  {slide.primary.content}
                </p>
              </div>
              <div className={`transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                <h2 className="text-3xl font-bold mb-6 text-[#333333]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {slide.secondary.title}
                </h2>
                <ul className="space-y-4">
                  {slide.secondary.items.map((item, idx) => (
                    <li key={idx} className={`flex items-start transition-all duration-500 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${700 + idx * 100}ms` }}>
                      <span className="text-[#FFD700] text-2xl mr-4">•</span>
                      <span className="text-xl text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {slide.features.map((feature, idx) => (
                <div key={idx} className={`flex items-center space-x-4 p-4 bg-[#F8F8F8] rounded-lg transition-all duration-500 hover:scale-105 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${300 + idx * 100}ms` }}>
                  <div className="w-8 h-8 bg-[#00C4CC] rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:bg-[#FFD700] hover:text-[#333333]">
                    {idx + 1}
                  </div>
                  <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'brand-enhanced':
        return (
          <div className="flex flex-col justify-center h-full px-8 md:px-16">
            <h1 className={`text-5xl md:text-7xl font-bold mb-12 text-[#333333] text-center transition-all duration-700 ${!isTransitioning ? 'animate-fade-in scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            
            <div className="space-y-16">
              {/* Color Palette Section */}
              <div className={`text-center transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                <h2 className="text-3xl font-bold mb-8 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  {slide.colors.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {slide.colors.palette.map((color, idx) => (
                    <div key={idx} className={`flex flex-col items-center space-y-4 transition-all duration-500 hover:scale-110 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${500 + idx * 150}ms` }}>
                      <div 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg border-4 border-white transition-transform duration-300 hover:rotate-6"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-[#333333] mb-1" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                          {color.name}
                        </h3>
                        <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-[#333333]">
                          {color.color}
                        </p>
                        <p className="text-xs text-gray-600 mt-2" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                          {color.usage}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Section */}
              <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Typography
                  </h2>
                  <div className="space-y-8">
                    {slide.typography.items.map((item, idx) => (
                      <div key={idx} className={`bg-[#F8F8F8] p-6 rounded-lg transition-all duration-500 hover:shadow-lg ${!isTransitioning ? 'animate-fade-in scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: `${1000 + idx * 200}ms` }}>
                        <h3 className="text-lg font-bold text-[#333333] mb-3" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                          {item.name}: {item.font}
                        </h3>
                        <div 
                          className="text-2xl md:text-3xl text-[#333333]"
                          style={{ fontFamily: item.font === 'Bebas Neue' ? '"Bebas Neue", sans-serif' : '"Noto Sans", sans-serif' }}
                        >
                          {item.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {slide.tone.title}
                  </h2>
                  <div className={`bg-gradient-to-br from-[#00C4CC] to-[#FFD700] p-8 rounded-lg text-white transition-all duration-700 hover:scale-105 ${!isTransitioning ? 'animate-fade-in scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                    <p className="text-xl md:text-2xl leading-relaxed" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                      {slide.tone.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'inspiration':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <p className={`text-xl mb-12 text-[#00C4CC] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Noto Sans", sans-serif', transitionDelay: '200ms' }}>
              {slide.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {slide.features.map((feature, idx) => (
                <div key={idx} className={`flex items-center space-x-4 p-3 transition-all duration-500 hover:bg-[#F8F8F8] rounded-lg ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${400 + idx * 100}ms` }}>
                  <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125">
                    <span className="text-[#333333] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'sitemap-combined':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="grid md:grid-cols-2 gap-16">
              <div className={`space-y-12 transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                {slide.leftColumn.map((section, idx) => (
                  <div key={idx} className={`transition-all duration-500 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${500 + idx * 200}ms` }}>
                    <h2 className="text-3xl font-bold mb-6 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {section.title}
                    </h2>
                    <ul className="space-y-3 ml-8">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className={`flex items-start transition-all duration-300 hover:translate-x-2 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${700 + idx * 200 + itemIdx * 100}ms` }}>
                          <span className="text-[#FFD700] text-xl mr-4">•</span>
                          <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className={`space-y-12 transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                {slide.rightColumn.map((section, idx) => (
                  <div key={idx} className={`transition-all duration-500 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${600 + idx * 200}ms` }}>
                    <h2 className="text-3xl font-bold mb-6 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {section.title}
                    </h2>
                    <ul className="space-y-3 ml-8">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className={`flex items-start transition-all duration-300 hover:translate-x-2 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${800 + idx * 200 + itemIdx * 100}ms` }}>
                          <span className="text-[#FFD700] text-xl mr-4">•</span>
                          <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'sitemap':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-[#333333]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="space-y-12">
              {slide.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-bold mb-6 text-[#00C4CC]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {section.title}
                  </h2>
                  <ul className="space-y-3 ml-8">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-[#FFD700] text-xl mr-4">•</span>
                        <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'final':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-24">
            <h1 className={`text-5xl md:text-7xl font-bold mb-16 text-[#333333] transition-all duration-700 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {slide.title}
            </h1>
            <div className="grid md:grid-cols-2 gap-16">
              {slide.sections.map((section, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#00C4CC] transition-all duration-700 hover:shadow-xl hover:scale-105 ${!isTransitioning ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: `${300 + idx * 300}ms` }}>
                  <h2 className="text-3xl font-bold mb-6 text-[#333333]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={`flex items-start transition-all duration-400 ${!isTransitioning ? 'animate-fade-in translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`} style={{ transitionDelay: `${600 + idx * 300 + itemIdx * 150}ms` }}>
                        <span className="text-[#FFD700] text-xl mr-4">•</span>
                        <span className="text-lg text-[#333333]" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Slide Container */}
      <div className={`h-screen transition-all duration-500 ease-in-out ${slide.bgColor} ${isTransitioning ? 'opacity-90 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {renderSlideContent()}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 hover:bg-black/90">
        <button
          onClick={prevSlide}
          className="p-2 text-white hover:text-[#00C4CC] transition-all duration-300 hover:scale-110"
          disabled={currentSlide === 0 || isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={togglePlay}
          className="p-2 text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <span className="text-white font-medium px-4" style={{ fontFamily: '"Noto Sans", sans-serif' }}>
          {currentSlide + 1} / {slides.length}
        </span>

        <button
          onClick={nextSlide}
          className="p-2 text-white hover:text-[#00C4CC] transition-all duration-300 hover:scale-110"
          disabled={currentSlide === slides.length - 1 || isTransitioning}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              idx === currentSlide ? 'bg-[#00C4CC] scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-[#00C4CC] to-[#FFD700] transition-all duration-700 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Presentation;
