import { FC } from "react";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Testimonials" },
  { href: "#", label: "Faqs" },
  { href: "#", label: "Contact" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container">
        <div className="section">
          <div>One spot available for next month</div>
          <h2>Enough talk. Let&apos;s make something great together.</h2>
          <button>alevtina.gordienko@gmail.com</button>
          <nav>
            {navItems.map(({ href, label }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="py-16">Copyright &copy; Alevtina Gordienko &bull; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
