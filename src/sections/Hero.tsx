"use client";

import { useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import aboutMeImage from "@/assets/images/nat3.png";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, useScroll, useTransform } from "motion/react";
import { stagger } from "motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      { duration: 0.5, delay: stagger(0.2) }
    );
  }, []);

  return (
    <section id="hero">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        {/* Left Side Content on md: */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container max-w-full 2xl:max-w-[1030px]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 "
              ref={titleScope}
            >
              {t("title")}
            </motion.h1>
            {/* Hero CTA buttons */}
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button
                  variant="secondary"
                  href="#projects"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>{t("viewWorkButton")}</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button
                  variant="primary"
                  href="/Byhalova Natalia - CV.pdf"
                  className="hover:bg-red-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5h3c.83 0 1.5-.67 1.5-1.5V6c0-2.48 1.51-4.5 3.5-4.5s3.5 2.02 3.5 4.5v9c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V6.71c0-2.58 2.17-4.71 4.71-4.71h3c2.58 0 4.71 2.13 4.71 4.71v9c0 .83.67 1.5 1.5 1.5z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5h3c.83 0 1.5-.67 1.5-1.5V6c0-2.48 1.51-4.5 3.5-4.5s3.5 2.02 3.5 4.5v9c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V6.71c0-2.58 2.17-4.71 4.71-4.71h3c2.58 0 4.71 2.13 4.71 4.71v9c0 .83.67 1.5 1.5 1.5z"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>{t("downloadCvButton")}</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <Button variant="text" href="#contact">
                  {t("letsTalkButton")}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Right Side Content on md: */}
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: portraitWidth }}
          >
            <Image
              src={aboutMeImage}
              // src={heroImage}
              // className="size-full object-cover"
              className="h-[550px] md:h-screen md:w-full object-cover"
              alt={t("portraitAlt")}
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
