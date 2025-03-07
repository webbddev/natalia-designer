import Button from "@/components/Button";
import { FC } from "react";

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
  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase">
                Alevtina&nbsp; Gordienko
              </span>
            </a>
          </div>
          {/* Dropdown Menu and CTA button */}
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-800 rounded-full inline-flex items-center justify-center ">
              <div className="text-stone-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    height="1"
                    fill="currentColor"
                  />
                  <rect x="3" y="7" width="18" height="1" fill="currentColor" />
                </svg>
              </div>
            </div>
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
