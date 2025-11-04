import React from 'react';
import { Shield, Clock, Globe, FileCheck2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Compliance-first',
    desc: 'Built-in checks ensure every submission meets the latest standards.'
  },
  {
    icon: Clock,
    title: 'Fast-track',
    desc: 'Smart routing and validation cut approval times dramatically.'
  },
  {
    icon: Globe,
    title: 'Cross-border',
    desc: 'Handle multi-region permits with localized requirements out of the box.'
  },
  {
    icon: FileCheck2,
    title: 'Audit-ready',
    desc: 'Automatic logs and exports keep stakeholders in sync and secure.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Everything you need to get approved
          </h2>
          <p className="mt-3 text-white/70">
            Powerful tools designed for fintech, travel, and modern product teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-orange-400/30">
                <Icon className="h-6 w-6 text-orange-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
