import Link from "next/link";

import Reveal from "@/app/components/ui/Reveal";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function Hero() {
  const { hero, profile } = portfolio;

  return (
    <section className="relative overflow-hidden">
      <div className="shell pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">{hero.kicker}</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display-xl mt-6 text-[clamp(2.6rem,7vw,5.25rem)] text-ink">
                {hero.heading.map((line) => (
                  <span
                    key={line.text}
                    className={line.accent ? "block text-emerald" : "block"}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-soft">
                {hero.intro}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-emerald-deep"
                >
                  {hero.primaryCta.label}
                  <Icon name={hero.primaryCta.icon} className="h-4 w-4" />
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper-soft"
                >
                  {hero.secondaryCta.label}
                  <Icon name={hero.secondaryCta.icon} className="h-4 w-4 text-emerald" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pt-3">
            <dl className="border-t border-line">
              {hero.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-5"
                >
                  <dt className="pt-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {profile.availability && (
          <Reveal delay={320}>
            <div className="mt-14 flex items-center gap-3 border-t border-line pt-6">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <p className="text-sm text-muted">{profile.availability}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
