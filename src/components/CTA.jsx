import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-orange-400/20 p-10 text-center backdrop-blur">
          <h3 className="bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Ready to fast-track your app permit?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Start your application in minutes and get guidance tailored to your product and market.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 hover:text-black"
            >
              Create free account
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore features
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
}
