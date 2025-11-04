import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Create your profile',
    desc: 'Tell us about your app and regions you operate in to tailor requirements.'
  },
  {
    step: '02',
    title: 'Smart checklist',
    desc: 'We generate a dynamic list of documents and forms you actually need.'
  },
  {
    step: '03',
    title: 'Submit & track',
    desc: 'Submit once, track everywhere with real-time status and alerts.'
  },
  {
    step: '04',
    title: 'Get approved',
    desc: 'Export certificates and share audit logs with stakeholders securely.'
  }
];

export default function Steps() {
  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-black to-stone-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A streamlined path from idea to approval.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/60">Step {s.step}</span>
                <ArrowRightCircle className="h-5 w-5 text-orange-300" />
              </div>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
