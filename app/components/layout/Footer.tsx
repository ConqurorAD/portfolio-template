import Link from "next/link";

import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function Footer() {
  const { profile, navigation, socials, footer, beckkon } = portfolio;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="night mt-auto">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[0.6rem] bg-paper font-display text-[0.95rem] font-medium text-ink">
                AV
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-sm leading-7 text-[#a7a69b]">
              {footer.description}
            </p>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#8f8e83]">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#cfcec4] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#8f8e83]">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {socials.map((social) => {
                const external = social.href.startsWith("http");
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-2 text-[#cfcec4] transition-colors hover:text-white"
                    >
                      <Icon name={social.icon} className="h-4 w-4" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-night-line pt-6 text-sm text-[#8f8e83] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {footer.copyright}. All rights reserved.
          </p>
          <a
            href={beckkon.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#cfcec4] transition-colors hover:text-white"
          >
            {beckkon.name}
            <Icon name="ArrowUpRight" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
