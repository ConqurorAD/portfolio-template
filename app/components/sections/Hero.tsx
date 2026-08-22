"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import OptimizedImage from "@/app/components/ui/OptimizedImage";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function Hero() {
  const { hero, heroStats, profile, sections, images } = portfolio;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-10 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center lg:gap-14">
        <div className="order-2 space-y-8 sm:order-none lg:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker w-fit"
          >
            <span className="whitespace-nowrap">{hero.kicker}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden max-w-3xl text-[clamp(2rem,5.25vw,5.25rem)] font-semibold leading-[1.03] tracking-tight text-white sm:block"
          >
            {hero.heading.map((line) => (
              <span
                key={line.text}
                className={`block ${line.gradient ? "text-gradient" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </motion.h1>

          {sections.showHeroStats && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="contents">
                  {index > 0 && (
                    <div className="hidden h-9 w-px bg-white/10 sm:block" />
                  )}
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <Icon name={hero.primaryCta.icon} className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:border-white/20 hover:bg-white/6"
            >
              {hero.secondaryCta.label}
              <Icon name={hero.secondaryCta.icon} className="h-4 w-4 text-brand-primary" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="order-1 overflow-hidden rounded-4xl border border-white/10 bg-black/20 sm:order-none"
        >
          <div className="relative min-h-112 sm:min-h-128">
            <OptimizedImage
              src={images.hero}
              alt={`${profile.name} portrait`}
              fill
              priority
              className="absolute inset-0 z-0 object-cover object-[50%_18%] "
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.12)_0%,rgba(5,5,5,0.24)_34%,rgba(5,5,5,0.72)_100%)]"
            />
          </div>

          {sections.showAvailability && (
            <div className="surface m-4 rounded-2xl p-2 sm:m-3 sm:p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Availability
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                {profile.availability}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
