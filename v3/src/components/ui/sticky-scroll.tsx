// src/components/ui/sticky-scroll.tsx
'use client';
/* eslint-disable @next/next/no-img-element */
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

export interface StickyScrollProps {
  leftImages: string[];
  centerImages: string[];
  rightImages: string[];
}

export const StickyScrollComponent = forwardRef<HTMLElement, StickyScrollProps>(({ leftImages, centerImages, rightImages }, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-slate-950' ref={ref}>
        <div className='wrapper relative z-10'>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl md:text-6xl px-8 font-semibold text-center tracking-tight leading-[120%] z-10 font-heading'>
              Memoirs <span className="text-indigo-400">&</span> Milestones <br />
              <span className="text-zinc-400 text-3xl md:text-4xl">A visual log of building in public.</span> <br />
              👇
            </h1>
          </section>
        </div>

        <section className='text-white w-full bg-slate-950 relative z-20'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-2 p-2'>

            {/* Left Column (Scrolling) */}
            <div className='hidden md:grid gap-2 col-span-4'>
              {leftImages.map((src, idx) => (
                <figure key={`left-${idx}`} className='w-full'>
                  <img
                    src={src}
                    alt=''
                    className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-xl border border-white/10 hover:scale-[1.02] hover:border-cyan-400/50'
                  />
                </figure>
              ))}
            </div>

            {/* Center Column (Sticky) */}
            <div className='sticky top-0 h-screen w-full col-span-1 md:col-span-4 gap-2 grid grid-rows-3 py-2'>
              {centerImages.map((src, idx) => (
                <figure key={`center-${idx}`} className='w-full h-full relative overflow-hidden rounded-xl border border-white/10'>
                  <img
                    src={src}
                    alt=''
                    className='transition-all duration-300 h-full w-full align-bottom object-cover object-top hover:scale-[1.05]'
                  />
                </figure>
              ))}
            </div>

            {/* Right Column (Scrolling) */}
            <div className='hidden md:grid gap-2 col-span-4'>
              {rightImages.map((src, idx) => (
                <figure key={`right-${idx}`} className='w-full'>
                  <img
                    src={src}
                    alt=''
                    className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-xl border border-white/10 hover:scale-[1.02] hover:border-indigo-400/50'
                  />
                </figure>
              ))}
            </div>

          </div>
        </section>

        <footer className='group bg-slate-950 relative z-20 overflow-hidden'>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full border-t border-white/10'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

StickyScrollComponent.displayName = 'StickyScrollComponent';

export default StickyScrollComponent;
