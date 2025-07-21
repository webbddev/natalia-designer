'use client';

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { FC, useEffect } from "react";
import { useInView } from "motion/react";
import { useTranslations } from "next-intl";

const Footer: FC = () => {
  const t = useTranslations("footer");
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  // Create navItems using translations
  const navItems = [
    { href: "#hero", label: t("nav.home") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#faqs", label: t("nav.faqs") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <footer className="bg-stone-900 text-white py-16" id="contact">
      <div className="container">
        <div className="section">
          {/* Availability / green dot indicator */}
          <div className="flex items-center gap-3">
            <div className="size-4 rounded-full bg-green-400 animate-pulse" />
            <span className="uppercase">{t("availability")}</span>
          </div>

          {/* Main footer content in a responsive grid layout */}
          <div className="grid md:grid-cols-3 md:items-center">
            {/* Left/center section (spans 2 columns on medium screens) */}
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
                ref={scope}
              >
                {t("heading")}
              </h2>

              {/* Email contact button with arrow icon */}
              <Button
                variant="secondary"
                className="mt-8 px-3"
                href={`mailto:${t("email")}`}
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                {t("email")}
              </Button>
            </div>

            {/* Right section - Navigation menu */}
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Button
                    key={label}
                    href={href}
                    variant="text"
                    className="text-lg"
                  >
                    {label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
