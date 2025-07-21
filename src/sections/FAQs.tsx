"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const t = useTranslations("faqs");

  const faqs = [
    {
      question: t("questions.0.question"),
      answer: t("questions.0.answer"),
    },
    {
      question: t("questions.1.question"),
      answer: t("questions.1.answer"),
    },
    {
      question: t("questions.2.question"),
      answer: t("questions.2.answer"),
    },
    {
      question: t("questions.3.question"),
      answer: t("questions.3.answer"),
    },
  ];

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">{t("heading")}</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={faqIndex}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === faqIndex ? null : faqIndex
                )
              }
            >
              {/* Overlay */}
              {/* <div
                className={twMerge(
                  "absolute bottom-0 left-0 w-full h-0   -z-10 group-hover/faq:h-full transition-all duration-500 bg-stone-300",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div> */}
              <div className="absolute rounded-md bottom-0 left-0 w-full h-0 group-hover/faq:h-full transition-all duration-500 bg-stone-300 -z-10" />
              <div className="flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8">
                {/* <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              > */}
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div className="inline-flex items-center justify-center size-11 border border-x-stone-400 rounded-full shrink-0 bg-stone-200">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                    animate={{ rotate: selectedIndex === faqIndex ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </motion.svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
