import Link from "next/link";

import Reveal from "@/app/components/ui/Reveal";
import SystemFlow from "@/app/components/sections/SystemFlow";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function BeckkonPage() {
  const { beckkon, profile } = portfolio;

  return (
    <div>
      {/* Case study header — dark band */}
      <section className="night">
        <div className="shell py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">{beckkon.kicker}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5rem)] text-[#f4f2ec]">
              {beckkon.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#c9c8bd]">
              {beckkon.tagline}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={beckkon.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4f2ec] px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
              >
                {beckkon.linkLabel}
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-night-line px-6 py-3 text-sm font-medium text-[#e8e6dc] transition-colors hover:border-[#6f6e63]"
              >
                Related work
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20">
        {/* Overview */}
        <section aria-labelledby="overview-heading" className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <h2
              id="overview-heading"
              className="font-display text-2xl font-medium tracking-tight text-ink"
            >
              Overview
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-ink-soft">
              {beckkon.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="border-t border-line">
              <div className="grid gap-1 border-b border-line py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Company
                </dt>
                <dd className="text-sm font-medium text-ink">
                  Beckkon Systems Pvt. Ltd.
                </dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Backing
                </dt>
                <dd className="text-sm font-medium text-ink">
                  Incubated at IIT (BHU), Varanasi
                </dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Focus
                </dt>
                <dd className="text-sm font-medium text-ink">
                  School safety & student tracking
                </dd>
              </div>
              <div className="grid gap-1 border-b border-line py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  My role
                </dt>
                <dd className="text-sm font-medium text-ink">
                  {profile.role}
                </dd>
              </div>
            </dl>
          </Reveal>
        </section>

        {/* System architecture */}
        <section aria-labelledby="system-heading">
          <Reveal>
            <h2
              id="system-heading"
              className="font-display text-2xl font-medium tracking-tight text-ink"
            >
              {beckkon.stagesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft">
              {beckkon.stagesDescription}
            </p>
          </Reveal>
          <div className="mt-9">
            <Reveal delay={80}>
              <SystemFlow stages={beckkon.stages} />
            </Reveal>
          </div>
        </section>

        {/* Role */}
        <section aria-labelledby="role-heading" className="grid gap-10 border-y border-line py-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h2
              id="role-heading"
              className="font-display text-2xl font-medium tracking-tight text-ink"
            >
              {beckkon.roleTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-8 text-ink-soft">
              {beckkon.roleBody}
            </p>
          </Reveal>
        </section>

        {/* Capabilities */}
        <section aria-labelledby="capabilities-heading">
          <Reveal>
            <h2
              id="capabilities-heading"
              className="font-display text-2xl font-medium tracking-tight text-ink"
            >
              {beckkon.capabilitiesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft">
              {beckkon.capabilitiesDescription}
            </p>
          </Reveal>
          <div className="mt-9 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {beckkon.products.map((product) => (
              <Reveal key={product.title} className="h-full">
                <div className="h-full bg-paper p-6">
                  <h3 className="flex items-start gap-2 text-sm font-semibold text-ink">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                    />
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {product.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <p className="mt-8 max-w-2xl border-l-2 border-emerald pl-5 text-sm leading-7 text-muted">
              {beckkon.note}
            </p>
          </Reveal>
        </section>

        {/* Closing CTA */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border border-line bg-emerald-soft p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="display-xl text-[clamp(1.6rem,3.5vw,2.4rem)] text-ink">
                See Beckkon for yourself.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-ink-soft">
                The company website has the latest on what we&apos;re building.
              </p>
            </div>
            <a
              href={beckkon.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-emerald-deep"
            >
              {beckkon.linkLabel}
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
