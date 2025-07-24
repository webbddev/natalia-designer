"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant: "primary" | "secondary" | "text";
  iconAfter?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    variant,
    iconAfter,
    href,
    target,
    rel,
    download,
    ...rest
  } = props;

  const buttonClasses = twMerge(
    "h-10 md:h-[52px] lg:h-[40px] px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
    variant === "primary" && "bg-red-orange-500 text-white",
    variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
    variant === "text" &&
      "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
    className
  );

  const handleClick = (e: React.MouseEvent) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Call the original onClick if it exists
    if (rest.onClick) {
      rest.onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  // if (href) {
  //   return (
  //     <a href={href} className={buttonClasses} onClick={handleClick}>
  //       <span>{children}</span>
  //       {iconAfter && <span>{iconAfter}</span>}
  //     </a>
  //   );
  // }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={handleClick}
        target={target} 
        rel={rel} 
        download={download} 
      >
        <span>{children}</span>
        {iconAfter && <span>{iconAfter}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...rest}>
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;

// ORIGINAL Button component
// import { ButtonHTMLAttributes, ReactNode } from "react";
// import { twMerge } from "tailwind-merge";

// type ButtonProps = {
//   variant: "primary" | "secondary" | "text";
//   iconAfter?: ReactNode;
// } & ButtonHTMLAttributes<HTMLButtonElement>;

// const Button = (props: ButtonProps) => {
//   const { className, children, variant, iconAfter, ...rest } = props;

//   return (
//     <button
//       className={twMerge(
//         "h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
//         variant === "primary" && "bg-red-orange-500 text-white",
//         variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
//         variant === "text" &&
//           "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
//         className
//       )}
//       {...rest}
//     >
//       <span>{children}</span>
//       {iconAfter && <span>{iconAfter}</span>}
//     </button>
//   );
// };

// export default Button;
