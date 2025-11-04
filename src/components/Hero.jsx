import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient vignettes that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          <span className="text-sm text-white/80">Fast-track your app permit</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Get App Permits Approved
          <br className="hidden sm:block" />
          Faster and With Confidence
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          A modern, fintech-grade workflow for travel and tech teams to submit, track,
          and manage regulatory permits with real-time status and smart validation.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 hover:text-black"
          >
            Start Application
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>

        {/* Boarding pass card */}
        <div className="mt-12 w-full max-w-3xl">
          <BoardingPassCard />
        </div>
      </div>
    </section>
  );
}

function BoardingPassCard() {
  return (
    <div className="relative isolate grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md transition duration-300 hover:bg-white/10 md:grid-cols-3">
      {/* left band */}
      <div className="flex items-center gap-3 border-b border-white/10 p-6 md:border-b-0 md:border-r">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white to-orange-400" />
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Permit</p>
          <p className="text-lg font-semibold">APP-XPR</p>
        </div>
      </div>

      {/* middle */}
      <div className="flex flex-col justify-center p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">From</p>
            <p className="text-2xl font-bold">Idea</p>
          </div>
          <div className="text-white/40">———</div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-white/60">To</p>
            <p className="text-2xl font-bold text-orange-300">Approval</p>
          </div>
        </div>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-orange-400/60" />
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/80 sm:grid-cols-4">
          <div>
            <p className="text-white/50">Applicant</p>
            <p>Acme Team</p>
          </div>
          <div>
            <p className="text-white/50">Ref</p>
            <p>#AX-4821</p>
          </div>
          <div>
            <p className="text-white/50">Priority</p>
            <p>Fast-Track</p>
          </div>
          <div>
            <p className="text-white/50">ETA</p>
            <p>3-5 days</p>
          </div>
        </div>
      </div>

      {/* right tear-off */}
      <div className="relative flex flex-col justify-between border-t border-white/10 p-6 md:border-l md:border-t-0">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Boarding Code</p>
          <p className="mt-1 font-mono text-xl">PERMIT-OK</p>
        </div>
        <button className="mt-6 inline-flex items-center justify-center rounded-md bg-orange-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-300">
          Preview Checklist
        </button>
        {/* perforation dots */}
        <div className="pointer-events-none absolute inset-y-0 left-0 my-6 w-4 -translate-x-2 select-none sm:-translate-x-3">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
