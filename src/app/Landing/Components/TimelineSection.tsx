'use client';

import React, { useRef, useState, useEffect } from 'react';

type Step = { title: string; body: string };

const steps: Step[] = [
  { title: '1.', body: 'Select a team of annotators with the skill sets that best suit your use case' },
  { title: '2.', body: 'Define guidelines, requirements, deadlines & deliverables' },
  { title: '3.', body: 'Setup Sigma’s platform and AI-assisted tools to your own needs' },
  { title: '4.', body: 'Annotators collect data to test the tools & procedures, and share a report' },
  { title: '5.', body: 'Client feedback & improvements (if needed)' },
  { title: '6.', body: 'Annotators label data at scale and prepare it for quality assessment' },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-[22px] md:text-[26px] font-semibold leading-snug text-neutral-900">
          Get high quality, accurate data by working with a team
          <br className="hidden sm:block" />
          specifically assembled for your project:
        </h2>
      </div>

      {/* Timeline line + dots */}
      <div className="relative max-w-5xl mx-auto mt-8 mb-12 px-6">
        <div className="line-container absolute left-6 right-6 top-1/2 -translate-y-1/2">
          <div className={`line ${isVisible ? 'visible' : ''} h-[2px] bg-[#f38b2f]/90 origin-left`} />
        </div>
        
        <div className="grid grid-cols-6">
          {steps.map((_, i) => (
            <div key={i} className="relative flex justify-center">
              <span
                className={`dot ${isVisible ? 'visible' : ''} z-10 inline-block h-3 w-3 rounded-full bg-[#f38b2f]`}
                style={{ animationDelay: `${500 + i * 200}ms` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`fade-up ${isVisible ? 'visible' : ''} text-neutral-800 leading-6`}
              style={{ animationDelay: `${800 + i * 200}ms` }}
            >
              <div className="font-semibold text-[15px] mb-1">{s.title}</div>
              <p className="text-[14px] text-neutral-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line { }
        .line.visible { animation: draw 1600ms ease-out both; }

        .dot { transform: scale(0.4); }
        .dot.visible { animation: pop 900ms cubic-bezier(.2,.8,.2,1) both; }

        .fade-up { opacity: 0; transform: translateY(8px); }
        .fade-up.visible { animation: fadeUp 1200ms ease-out both; }

        @keyframes draw {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes pop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .line, .dot, .fade-up { animation: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}