import Reveal from "@/app/components/ui/Reveal";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function ContactPage() {
  const { contactPage, contact, geo, socials, profile, beckkon } = portfolio;

  return (
    <div className="shell py-14 sm:py-20">
      <header className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">{contactPage.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-5 text-[clamp(2.2rem,5.5vw,4rem)] text-ink">
            {contactPage.heading.map((line) => (
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
          <div className="mt-7 space-y-4 text-lg leading-8 text-ink-soft">
            {contactPage.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
        {/* Email */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col bg-paper p-7 sm:p-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-emerald-soft text-emerald">
              <Icon name="Mail" className="h-5 w-5" />
            </span>
            <h2 className="mt-6 text-lg font-semibold tracking-tight text-ink">
              {contactPage.emailTitle}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">
              {contactPage.emailBody}
            </p>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-flex w-fit max-w-full items-center gap-2 break-all rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-emerald-deep"
              >
                {contact.email}
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
            )}
          </div>
        </Reveal>

        {/* Beckkon */}
        <Reveal delay={80} className="h-full">
          <div className="flex h-full flex-col bg-paper p-7 sm:p-10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-emerald-soft text-emerald">
              <Icon name="CircuitBoard" className="h-5 w-5" />
            </span>
            <h2 className="mt-6 text-lg font-semibold tracking-tight text-ink">
              {contactPage.beckkonTitle}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">
              {contactPage.beckkonBody}
            </p>
            <a
              href={beckkon.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {beckkon.linkLabel}
              <Icon name="ArrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {/* Socials */}
        <Reveal className="h-full">
          <div className="h-full bg-paper p-7 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted">
              {contactPage.socialsTitle}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {socials.map((social) => {
                const external = social.href.startsWith("http");
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-2.5 border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-line-strong hover:bg-paper-soft"
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

        {/* Location */}
        <Reveal delay={80} className="h-full">
          <div className="h-full bg-paper p-7 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted">
              {contactPage.locationTitle}
            </p>
            <p className="mt-5 flex items-center gap-2.5 text-base font-medium text-ink">
              <Icon name="MapPin" className="h-5 w-5 text-emerald" />
              {geo.city}, {geo.country}
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              {profile.availability}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
