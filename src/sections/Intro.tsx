"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import {  useEffect } from "react";
import { useTranslations } from "next-intl";
import SplitType from "split-type";

const Intro =() => {
  const t = useTranslations("intro");
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: false });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section className="section mt-12 md:pt-16 lg:mt-20" id="intro" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          {t("headline")}
        </h2>
      </div>
    </section>
  );
};

export default Intro;
