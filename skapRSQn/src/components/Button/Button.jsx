/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Button = ({ buttonText = "Button", kind, color, state, round, className }) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-[10px] px-[28px] py-[13px] justify-center relative ${
        (color === "secondary" && kind === "primary" && state === "default") ||
        (color === "secondary" && kind === "primary" && state === "hover") ||
        (color === "secondary" && kind === "tertiary" && state === "hover") ||
        (color === "tertiary" && kind === "primary" && state === "default") ||
        (color === "tertiary" && kind === "primary" && state === "hover") ||
        (color === "tertiary" && kind === "tertiary" && state === "hover") ||
        (kind === "secondary" && state === "active") ||
        (kind === "secondary" && state === "default") ||
        (kind === "secondary" && state === "hover")
          ? "border border-solid"
          : ""
      } ${
        (color === "secondary" && kind === "primary" && state === "default") ||
        (color === "secondary" && kind === "secondary" && state === "default") ||
        (color === "secondary" && kind === "secondary" && state === "hover") ||
        (color === "secondary" && kind === "tertiary" && state === "hover")
          ? "border-secondary-color"
          : (color === "tertiary" && kind === "primary" && state === "default") ||
            (color === "tertiary" && kind === "secondary" && state === "default") ||
            (color === "tertiary" && kind === "secondary" && state === "hover") ||
            (color === "tertiary" && kind === "tertiary" && state === "hover")
          ? "border-darkdark"
          : (color === "primary" && kind === "secondary" && state === "default") ||
            (color === "primary" && kind === "secondary" && state === "hover") ||
            (kind === "secondary" && state === "active")
          ? "border-primary-color"
          : color === "secondary" && state === "hover" && kind === "primary"
          ? "border-[#0bb489]"
          : color === "tertiary" && state === "hover" && kind === "primary"
          ? "border-primary-text-color"
          : ""
      } ${state === "default" && kind === "tertiary" ? "shadow-shadow-1" : ""} ${
        round === "semi-round" ? "rounded-[6px]" : round === "full-rounded" ? "rounded-[50px]" : ""
      } ${
        state === "default" && color === "primary" && kind === "primary"
          ? "bg-primary-color"
          : state === "default" && color === "secondary" && kind === "primary"
          ? "bg-secondary-color"
          : state === "default" && color === "tertiary" && kind === "primary"
          ? "bg-darkdark"
          : state === "default" &&
            (color === "primary" || kind === "tertiary") &&
            ["secondary", "tertiary"].includes(kind)
          ? "bg-whitewhite"
          : kind === "primary" && (color === "primary" || state === "active") && ["hover", "active"].includes(state)
          ? "bg-[#1b43c7]"
          : state === "active" && kind === "secondary"
          ? "bg-blueblue-light-3"
          : (color === "primary" || kind === "tertiary") &&
            (color === "primary" || state === "active") &&
            ["secondary", "tertiary"].includes(kind) &&
            (kind === "secondary" || state === "active") &&
            (kind === "tertiary" || state === "hover") &&
            ["hover", "active"].includes(state)
          ? "bg-blueblue-light-5"
          : state === "disable"
          ? "bg-graygray-3"
          : color === "secondary" && state === "hover" && kind === "primary"
          ? "bg-[#0bb389]"
          : color === "tertiary" && state === "hover" && kind === "primary"
          ? "bg-primary-text-color"
          : color === "secondary" && state === "hover" && ["secondary", "tertiary"].includes(kind)
          ? "bg-[#e7faf6]"
          : color === "tertiary" && state === "hover" && ["tertiary", "secondary"].includes(kind)
          ? "bg-graygray-4"
          : color === "primary" && kind === "tertiary" && state === "hover"
          ? "bg-graygray-2"
          : ""
      } ${className}`}
    >
      <button
        className={`all-[unset] box-border font-body-medium-medium w-fit mt-[-1.00px] tracking-[var(--body-medium-medium-letter-spacing)] text-[length:var(--body-medium-medium-font-size)] [font-style:var(--body-medium-medium-font-style)] font-[number:var(--body-medium-medium-font-weight)] text-center whitespace-nowrap leading-[var(--body-medium-medium-line-height)] relative ${
          kind === "primary" && ["active", "default", "hover"].includes(state)
            ? "text-whitewhite"
            : (color === "primary" && kind === "secondary" && state === "default") ||
              (color === "primary" && kind === "tertiary" && state === "default") ||
              (kind === "secondary" && state === "active") ||
              (kind === "tertiary" && state === "active")
            ? "text-primary-color"
            : (color === "tertiary" && kind === "secondary" && state === "default") ||
              (color === "tertiary" && kind === "secondary" && state === "hover") ||
              (color === "tertiary" && kind === "tertiary" && state === "default") ||
              (color === "tertiary" && kind === "tertiary" && state === "hover")
            ? "text-darkdark"
            : state === "disable"
            ? "text-darkdark-5"
            : color === "primary" && state === "hover" && ["secondary", "tertiary"].includes(kind)
            ? "text-primary-text-color"
            : "text-secondary-color"
        }`}
      >
        {buttonText}
      </button>
    </button>
  );
};
