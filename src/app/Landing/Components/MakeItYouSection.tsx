'use client';
import React from 'react';

export default function MakeItYouSection() {
  const phrase = 'Make it you';
  return (
    <section className="wrap" aria-label="Make it you typing section">
      <div className="band band-top" aria-hidden="true" />
      <div className="band band-bottom" aria-hidden="true" />

      <div className="card">
        <h1 className="title">
          <span className="type" aria-label={phrase}>
            <span className="text">{phrase}</span>
            <span className="caret" aria-hidden="true" />
          </span>
        </h1>
      </div>

      <style jsx>{`
        :global(:root) { --card-w: 780px; --band-h: 180px; --chars: 11; }
        .wrap { position: relative; min-height: 72vh; display: grid; place-items: center; padding: 96px 16px; }
        .band { position: absolute; left: 50%; transform: translateX(-50%); width: min(92vw, var(--card-w)); height: var(--band-h); background: url('/Landing/sliderPoster/makeItYou.jpg') center/cover no-repeat; filter: saturate(115%); border-radius: 8px; opacity: 0.95; pointer-events: none; }
        .band-top { top: 120px; } .band-bottom { bottom: 120px; }
        .card { width: min(92vw, var(--card-w)); background: #faf7fb; border: 1px solid #eee; border-radius: 16px; box-shadow: 0 18px 50px rgba(0,0,0,.18); padding: 48px 32px; z-index: 2; text-align: center; }
        .title { margin: 0; font-size: clamp(36px, 6vw, 56px); line-height: 1.15; font-weight: 700; color: #111; letter-spacing: -0.02em; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; }
        .type { position: relative; display: inline-flex; align-items: center; }
        .text { display: inline-block; overflow: hidden; white-space: nowrap; width: 0ch; animation: typingLoop 5s steps(var(--chars)) infinite; }
        .caret { display: inline-block; width: 2px; height: 1em; margin-left: 3px; background: #1a73e8; animation: blink 1s steps(1) infinite; }
        @keyframes typingLoop {
          0% {
            width: 0ch;
          }
          20% {
            width: calc(var(--chars) * 1ch);
          }
          80% {
            width: calc(var(--chars) * 1ch);
          }
          100% {
            width: 0ch;
          }
        }
        @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @media (max-width: 640px) { :global(:root) { --band-h: 140px; } .band-top { top: 96px; } .band-bottom { bottom: 96px; } }
      `}</style>
    </section>
  );
}
