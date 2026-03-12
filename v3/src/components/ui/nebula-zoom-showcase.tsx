'use client';

import React from 'react';
import Lenis from '@studio-freight/lenis';
import { cn } from '@/lib/utils';
import LivingNebulaShader from '@/components/ui/living-nebula';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { ArrowDown, Sparkles } from 'lucide-react';

type ImageItem = { src: string; alt?: string };

export function NebulaZoomShowcase({ images }: { images: ImageItem[] }) {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-900">
      <LivingNebulaShader />

      {/* cinematic overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(56,189,248,0.20),transparent_55%),radial-gradient(60%_50%_at_15%_40%,rgba(217,70,239,0.18),transparent_60%),radial-gradient(70%_60%_at_85%_45%,rgba(99,102,241,0.16),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black"
      />

      <div className="relative mx-auto flex min-h-[95vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            3D shader + scroll choreography
          </div>
          <h1 className="mt-6 font-heading text-5xl font-black tracking-tight text-white md:text-7xl">
            Living Nebula
            <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Portfolio Masterpiece
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Scroll to collapse reality into a zooming mosaic. The background is a live WebGL shader—subtle, reactive,
            and always moving.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3 text-zinc-300">
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-4 py-2 text-xs backdrop-blur',
              'shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_-40px_rgba(34,211,238,0.35)]',
            )}
          >
            <ArrowDown className="h-4 w-4 text-cyan-300" />
            Scroll to initiate the zoom field
          </div>
          <div className="hidden text-xs text-zinc-500 md:block">Tip: move your mouse—nebula warps around it.</div>
        </div>
      </div>

      <ZoomParallax images={images} />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur md:grid-cols-3">
          <div>
            <div className="text-xs font-mono text-cyan-300">01</div>
            <div className="mt-2 text-sm font-semibold text-white">Cinematic motion</div>
            <div className="mt-1 text-sm text-zinc-400">
              Scroll-tied scaling stacks depth without heavy layout thrash.
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-fuchsia-300">02</div>
            <div className="mt-2 text-sm font-semibold text-white">Live shader</div>
            <div className="mt-1 text-sm text-zinc-400">
              A full-screen fragment shader paints the atmosphere behind everything.
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-indigo-300">03</div>
            <div className="mt-2 text-sm font-semibold text-white">Clean composition</div>
            <div className="mt-1 text-sm text-zinc-400">
              Self-contained section so the rest of your page can stay server-rendered.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

