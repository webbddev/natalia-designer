"use client";

import Button from "@/components/Button";
import { FC, MouseEvent, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Animation hooks for hamburger menu transformation
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  // Animate navigation menu on state change
  useEffect(() => {
    if (isOpen) {
      // When menu opens:
      // 1. Transform top line to form X (first move down, then rotate)
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);

      // 2. Transform bottom line to form X (first move up, then rotate)
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);

      // 3. Expand navigation menu to full height with slower animation
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        { duration: 0.7 }
      );
    } else {
      // When menu closes:
      // 1. Reset top line rotation first, then position
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      // 2. Reset bottom line rotation first, then position
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      // 3. Collapse navigation menu with faster animation
      navAnimate(
        navScope.current,
        {
          height: 0,
        },
        { duration: 0.3 }
      );
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate,
  ]);

  return (
    <header>
      {/* Full-screen navigation overlay */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col ">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10" />
            </a>
          ))}
        </nav>
      </div>

      {/* Fixed header with logo - uses mix-blend-difference for contrast against any background */}
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div>
              <a href="/">
                <span className="text-xl font-bold uppercase text-white">
                  Alevtina&nbsp; Gordienko
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls container */}
      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20">
            {/* Navigation toggle button */}
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                      // transform: "translateY(4px) rotate(45deg)",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>
              {/* Contact button - visible only on medium screens and larger */}
              <Button variant="primary" className="hidden md:inline-flex">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
