import Link from "next/link";

import Reveal from "@/app/components/ui/Reveal";
import SectionHeader from "@/app/components/ui/SectionHeader";
import ProjectCard from "@/app/components/ui/ProjectCard";
import CapabilityGrid from "@/app/components/sections/CapabilityGrid";
import Timeline from "@/app/components/sections/Timeline";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function HomeSections() {
  const { home, beckkon, projects, capabilities, journey } = portfolio;

  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <div className="shell space-y-20 pb-4 sm:space-y-28">
        {/* About preview */}
        <section aria-labelledby="about-preview" className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              id="about-preview"
              eyebrow={home.aboutKicker}
              heading={[
                { text: "A builder working across" },
                { text: "hardware, software and business.", accent: true },
              ]}
            />
          </Reveal>
          <Reveal delay={120} className="lg:pt-2">
            <div className="max-w-2xl space-y-5 text-base leading-8 text-ink-soft">
              {home.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={home.aboutCta.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald link-underline"
            >
              {home.aboutCta.label}
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </div>

      {/* Beckkon — prominent dark band */}
      <section aria-labelledby="beckkon-heading" className="night mt-20 sm:mt-28">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">{beckkon.kicker}</p>
              <h2
                id="beckkon-heading"
                className="display-xl mt-4 text-[clamp(2.2rem,5vw,3.75rem)] text-[#f4f2ec]"
              >
                {beckkon.name}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#c9c8bd]">
                {beckkon.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/beckkon"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4f2ec] px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
                >
                  Read the case study
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
                <a
                  href={beckkon.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-night-line px-6 py-3 text-sm font-medium text-[#e8e6dc] transition-colors hover:border-[#6f6e63]"
                >
                  {beckkon.linkLabel}
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-2xl text-base leading-8 text-[#c9c8bd]">
                {beckkon.summary}
              </p>
              <ul className="mt-8 grid gap-px overflow-hidden border border-night-line bg-night-line sm:grid-cols-2">
                {beckkon.products.slice(0, 4).map((product) => (
                  <li key={product.title} className="bg-night-base p-5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-[#f4f2ec]">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#4fb894]"
                      />
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#a3a297]">
                      {product.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="shell space-y-20 py-20 sm:space-y-28 sm:py-28">
        {/* Selected work */}
        <section aria-labelledby="work-heading">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeader
                id="work-heading"
                eyebrow={home.workKicker}
                heading={[{ text: "Systems" }, { text: "I'm building.", accent: true }]}
                description={home.workDescription}
                className="max-w-2xl"
              />
            </Reveal>
            <Reveal delay={120}>
              <Link
                href={home.projectsCta.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald link-underline"
              >
                {home.projectsCta.label}
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section aria-labelledby="capabilities-heading">
          <Reveal>
            <SectionHeader
              id="capabilities-heading"
              eyebrow={home.capabilitiesKicker}
              heading={[
                { text: "What I bring" },
                { text: "to a build.", accent: true },
              ]}
              description={home.capabilitiesDescription}
              className="max-w-2xl"
            />
          </Reveal>
          <div className="mt-10">
            <Reveal delay={80}>
              <CapabilityGrid items={capabilities.items} />
            </Reveal>
          </div>
        </section>

        {/* Journey */}
        <section aria-labelledby="journey-heading">
          <Reveal>
            <SectionHeader
              id="journey-heading"
              eyebrow={home.journeyKicker}
              heading={[{ text: "Where I'm" }, { text: "coming from.", accent: true }]}
              description={journey.description}
              className="max-w-2xl"
            />
          </Reveal>
          <div className="mt-10">
            <Reveal delay={80}>
              <Timeline items={journey.items} />
            </Reveal>
          </div>
        </section>
      </div>

      {/* Contact CTA */}
      <section aria-labelledby="cta-heading" className="shell pb-20 sm:pb-28">
        <Reveal>
          <div className="grid gap-8 border border-line bg-emerald-soft p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2
                id="cta-heading"
                className="display-xl text-[clamp(1.9rem,4vw,2.85rem)] text-ink"
              >
                {home.ctaTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-ink-soft">
                {home.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-emerald-deep"
              >
                Get in touch
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
              <a
                href={portfolio.beckkon.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Beckkon.com
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
