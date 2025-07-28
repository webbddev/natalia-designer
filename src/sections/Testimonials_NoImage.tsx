"use client";

import { FC, useRef, useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import SingleTestimonial_NoImage from "../components/SingleTestimonial_NoImage";

// Testimonials section with no images
const Testimonials_NoImage = () => {
  const t = useTranslations("testimonials");
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Get testimonials from translations
  const testimonials = [
    {
      name: t("testimonial1.name"),
      company: t("testimonial1.company"),
      role: t("testimonial1.role"),
      quote: t("testimonial1.quote"),
    },
    {
      name: t("testimonial2.name"),
      company: t("testimonial2.company"),
      role: t("testimonial2.role"),
      quote: t("testimonial2.quote"),
    },
    {
      name: t("testimonial3.name"),
      company: t("testimonial3.company"),
      role: t("testimonial3.role"),
      quote: t("testimonial3.quote"),
    },
  ];

  const handleClickPrev = () => {
    setTestimonialIndex((curr) =>
      curr === 0 ? testimonials.length - 1 : curr - 1
    );
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) =>
      curr === testimonials.length - 1 ? 0 : curr + 1
    );
  };

  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{ x: transformBottom }}
        >
          {t("heading")}
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{ x: transformTop }}
        >
          {t("heading")}
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote }, index) =>
                index === testimonialIndex && (
                  <SingleTestimonial_NoImage
                    key={name}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        {/* Left and right buttons */}
        <div className="flex gap-4 mt-6 lg:mt-10 justify-center">
          <button
            className="border-2 border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickPrev}
            aria-label={t("prevButton")}
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border-2 border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickNext}
            aria-label={t("nextButton")}
          >
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials_NoImage;
