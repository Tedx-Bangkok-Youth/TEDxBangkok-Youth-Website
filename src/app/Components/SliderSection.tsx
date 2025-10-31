'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function SliderSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const posters = [
    { src: '/Landing/sliderPoster/Rectangle405.png', alt: 'Poster 1' },
    { src: '/Landing/sliderPoster/Rectangle406.png', alt: 'Poster 2' },
    { src: '/Landing/sliderPoster/Rectangle407.png', alt: 'Poster 3' },
    { src: '/Landing/sliderPoster/Rectangle408.png', alt: 'Poster 4' },
  ];

  const onKeyNav = (dir: 'left' | 'right') => (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNav(dir);
    }
  };

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLDivElement>('[data-card]');
    if (!card) return 0;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || '24', 10) || 24;
    return card.offsetWidth + gap;
  };

  const getIndex = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const step = getStep();
    if (!step) return 0;
    const rawIndex = Math.round(track.scrollLeft / step);
    let index = rawIndex;
    if (index < 0) index = posters.length - 1;
    if (index >= posters.length) index = 0;
    return index;
  };

  const scrollToIndex = (idx: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    if (!step) return;
    track.scrollTo({ left: idx * step, behavior });
    setActive(idx);
  };

  const handleNav = (dir: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    if (!step) return;

    const direction = dir === 'left' ? -1 : 1;
    track.scrollTo({
      left: track.scrollLeft + direction * step,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStep();
    if (!step) return;

    let isThrottled = false;

    const onScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      window.requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft;
        const rawIndex = Math.round(scrollLeft / step);
        let index = rawIndex;
        if (index < 0) index = posters.length - 1;
        if (index >= posters.length) index = 0;
        setActive(index);
        isThrottled = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    el.scrollLeft = 0;

    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ padding: '40px 16px 80px', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#222' }}>
          นี่คือเวทีที่เยาวชนไทยจะได้ปลดปล่อยพลังความคิด
        </h2>
        <p style={{ marginTop: 6, color: '#666' }}>
          สร้างแรงบันดาลใจผ่านเรื่องราวและไอเดียที่ไม่เหมือนใคร
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <button
          aria-label="Previous"
          onClick={() => handleNav('left')}
          onKeyDown={onKeyNav('left')}
          className="navBtn navLeft"
        >
          <Image src="/Landing/sliderPoster/LeftIcon.png" alt="Prev" width={50} height={50} className="icon" />
        </button>

        <div
          style={{
            overflow: 'hidden',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 40px, rgba(0,0,0,1) calc(100% - 40px), rgba(0,0,0,0))',
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 40px, rgba(0,0,0,1) calc(100% - 40px), rgba(0,0,0,0))',
          }}
        >
          <div
            ref={trackRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '8px calc((100% - 280px)/2)',
            }}
          >
            {posters.map((p, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  data-card
                  style={{
                    flex: '0 0 280px',
                    scrollSnapAlign: 'center',
                    transition: 'transform .25s ease, box-shadow .25s ease',
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  }}
               >
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e9e9e9',
                      borderRadius: 16,
                      boxShadow: isActive
                        ? '0 8px 24px rgba(0,0,0,.15)'
                        : '0 2px 8px rgba(0,0,0,.06)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={600}
                      height={900}
                      style={{ display: 'block', width: '100%', height: 'auto' }}
                      priority={i >= 1 && i <= 2}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          aria-label="Next"
          onClick={() => handleNav('right')}
          onKeyDown={onKeyNav('right')}
          className="navBtn navRight"
        >
          <Image src="/Landing/sliderPoster/RightIcon.png" alt="Next" width={50} height={50} className="icon right" />
        </button>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .navBtn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          height: 40px;
          width: 40px;
          border-radius: 999px;
          border: 1px solid #e53935;
          background: #fff;
          color: #e53935;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,.06);
          outline: none;
        }
        .navBtn:focus-visible {
          box-shadow: 0 0 0 3px rgba(229,57,53,.25), 0 2px 8px rgba(0,0,0,.06);
        }
        .navLeft { left: 8px; }
        .navRight { right: 8px; }
        .navBtn:hover { background: #ffecec; transform: translateY(-50%) scale(1.04); box-shadow: 0 6px 18px rgba(229,57,53,.18); }
        .navBtn:active { transform: translateY(-50%) scale(0.98); }
        .icon { transition: transform .2s ease, filter .2s ease; }
        .navBtn:hover .icon { transform: scale(1.06); }
        .navLeft:hover .icon { transform: translateX(-1px) scale(1.06); }
        .navRight .right { transform: rotate(180deg); }
        .navRight:hover .right { transform: rotate(180deg) translateX(1px) scale(1.06); }

        @media (min-width: 768px) {
          .navBtn { height: 44px; width: 44px; }
          .navLeft { left: 12px; }
          .navRight { right: 12px; }
        }
        @media (min-width: 1024px) {
          .navBtn { height: 48px; width: 48px; }
          .navLeft { left: 16px; }
          .navRight { right: 16px; }
        }
      `}</style>
    </section>
  );
}

export default SliderSection;
