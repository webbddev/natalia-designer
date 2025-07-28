import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useTranslations } from "next-intl";

type SingleTestimonial_NoImage = {
  quote: string;
  name: string;
  role: string;
  company: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SingleTestimonial_NoImage = (props: SingleTestimonial_NoImage) => {
  const { quote, name, role, company, className, ...rest } = props;
  const t = useTranslations("testimonials");

  // custom animation hook
  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    citeEntranceAnimation,
    safeToRemove,
    quoteExitAnimation,
    citeExitAnimation,
  ]);

  // Format the citation text conditionally
  const formatCitation = () => {
    if (company && company.trim() !== "") {
      return `${name}, ${role} ${t("at")} ${company}`;
    }
    return `${name}, ${role}`;
  };

  return (
    <div
      className={twMerge(
        "flex flex-col max-w-4xl lg:max-w-7xl mx-auto",
        className
      )}
      {...rest}
    >
      <blockquote className="w-full">
        <div
          className="text-3xl md:text-5xl lg:text-6xl leading-tight text-left"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-8 md:mt-12 not-italic block text-lg md:text-xl lg:text-2xl text-stone-600 text-left"
          ref={citeScope}
        >
          {formatCitation()}
        </cite>
      </blockquote>
    </div>
  );
};

export default SingleTestimonial_NoImage;
