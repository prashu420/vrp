import { site, services } from "@/lib/site";
import { Phone, Mail, Pin } from "./Icons";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-sm font-semibold text-cream">
                VRP
              </span>
              <span className="font-display text-xl font-semibold text-cream">
                VRP Interiors
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.tagline}. Luxury interiors, architecture, Vastu and turnkey
              construction in Jaipur.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-gold-soft"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold-soft"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-gold-soft"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    site.mapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-gold-soft"
                >
                  <Pin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  {site.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designing Spaces, Building Dreams — in Jaipur, Rajasthan.</p>
        </div>
      </div>
    </footer>
  );
}
