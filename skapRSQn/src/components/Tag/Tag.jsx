/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Tag = ({ text = "Tag", state, className }) => {
  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[14px] py-[5px] rounded-[6px] relative ${
        state === "focus" ? "border-2 border-solid" : ""
      } ${state === "focus" ? "border-[#3056d34c]" : ""} ${state === "disable" ? "opacity-40" : ""} ${
        state === "hover" ? "bg-primary-color" : state === "disable" ? "bg-neutral-200" : "bg-[#2f56d314]"
      } ${className}`}
    >
      <div
        className={`font-body-medium-regular w-fit tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${
          ["default", "disable", "hover"].includes(state) ? "mt-[-1.00px]" : ""
        } ${state === "hover" ? "text-whitewhite" : state === "disable" ? "text-neutral-900" : "text-darkdark"}`}
      >
        {text}
      </div>
    </div>
  );
};
