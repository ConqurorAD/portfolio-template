import Link from "next/link";

import Reveal from "@/app/components/ui/Reveal";
import Timeline from "@/app/components/sections/Timeline";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function AboutPage() {
  const { aboutPage, profile, geo, socials, journey } = portfolio;
  const { beckkon } = portfolio;

  return (
    <div className="shell py-14 sm:py-20">
      <header className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">{aboutPage.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-5 text-[clamp(2.2rem,5.5vw,4rem)] text-ink">
            {aboutPage.heading.map((line) => (
              <span
                key={line.text}
                className={line.accent ? "block text-emerald" : "block"}
              >
                {line.text}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 text-lg leading-8 text-ink-soft">
            {aboutPage.intro}
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="space-y-16">
          <section aria-labelledby="interests-heading">
            <Reveal>
              <h2
                id="interests-heading"
                className="font-display text-2xl font-medium tracking-tight text-ink"
              >
                {aboutPage.interestsTitle}
              </h2>
            </Reveal>
            <ul className="mt-8 border-t border-line">
              {aboutPage.interests.map((interest, index) => (
                <Reveal key={interest} delay={index * 60}>
                  <li className="flex items-baseline gap-5 border-b border-line py-4">
                    <span className="font-display text-sm text-emerald">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-7 text-ink-soft">
                      {interest}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          <section aria-labelledby="focus-heading">
            <Reveal>
              <h2
                id="focus-heading"
                className="font-display text-2xl font-medium tracking-tight text-ink"
              >
                {aboutPage.focusTitle}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft">
                {aboutPage.focusBody}
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="journey-heading">
            <Reveal>
              <h2
                id="journey-heading"
                className="font-display text-2xl font-medium tracking-tight text-ink"
              >
                Journey
              </h2>
            </Reveal>
            <div className="mt-8">
              <Timeline items={journey.items} />
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal delay={120}>
            <div className="border border-line bg-paper-soft/50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-medium text-paper">
                AV
              </div>
              <p className="mt-6 text-lg font-semibold tracking-tight text-ink">
                {profile.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">
                {profile.role}
                <br />
                {profile.organisation}
              </p>

              <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex items-center gap-2.5 text-ink-soft">
                  <Icon name="MapPin" className="h-4 w-4 text-emerald" />
                  {geo.city}, {geo.country}
                </div>
                <div className="flex items-center gap-2.5 text-ink-soft">
                  <Icon name="GraduationCap" className="h-4 w-4 text-emerald" />
                  IIT (BHU), Varanasi
                </div>
              </dl>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-emerald-deep"
              >
                Get in touch
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-4 border border-line p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {socials.map((social) => {
                  const external = social.href.startsWith("http");
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-ink"
                      >
                        <Icon name={social.icon} className="h-4 w-4 text-emerald" />
                        {social.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-4 border border-line bg-emerald-soft p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-emerald-deep">
                Currently building
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-ink">
                {beckkon.name} — {beckkon.tagline}
              </p>
              <Link
                href="/beckkon"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-deep link-underline"
              >
                Read the case study
                <Icon name="ArrowRight" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
