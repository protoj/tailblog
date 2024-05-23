/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CheckmarkCircle5 } from "../../icons/CheckmarkCircle5";
import { Eye9 } from "../../icons/Eye9";
import { InfoCircle2 } from "../../icons/InfoCircle2";

export const Input = ({
  leftIcon = false,
  placeholder = "Placeholder",
  typeHelperText = "Helper Text",
  typeLabelText = "Label",
  state,
  status,
  rightIcon,
  helperText,
  label,
  className,
  placeholderClassName,
  frameClassName,
  divClassName,
}) => {
  return (
    <div
      className={`flex-col items-start gap-[5px] relative ${
        (helperText === "off" && label === "off" && rightIcon === "off" && state === "hover" && status === "success") ||
        (helperText === "off" && label === "off" && state === "hover" && status === "default") ||
        (helperText === "on" && label === "off")
          ? "w-[250px]"
          : ""
      } ${
        (helperText === "off" && label === "off" && rightIcon === "off" && state === "hover" && status === "success") ||
        (helperText === "off" && label === "off" && state === "hover" && status === "default") ||
        (helperText === "on" && label === "off")
          ? "flex"
          : "inline-flex"
      } ${
        helperText === "on" && label === "on"
          ? "h-[107px]"
          : label === "off" && helperText === "on"
          ? "h-[75px]"
          : helperText === "off" && label === "on"
          ? "h-[80px]"
          : rightIcon === "off" && label === "off" && helperText === "off" && state === "hover" && status === "success"
          ? "h-[49px]"
          : "h-[48px]"
      } ${className}`}
    >
      <div className="w-full flex self-stretch flex-col items-start grow gap-[10px] flex-1 relative">
        {label === "on" && (
          <>
            <div className="w-[250px] flex items-start gap-[10px] flex-[0_0_auto] relative">
              <div
                className={`font-body-medium-medium w-fit mt-[-1.00px] tracking-[var(--body-medium-medium-letter-spacing)] text-[length:var(--body-medium-medium-font-size)] [font-style:var(--body-medium-medium-font-style)] font-[number:var(--body-medium-medium-font-weight)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap relative ${
                  state === "disabled" ? "text-darkdark-5" : "text-darkdark"
                }`}
              >
                {typeLabelText}
              </div>
            </div>
            <div
              className={`flex items-center flex-1 pl-[20px] pr-[16px] py-[12px] relative w-full grow rounded-[6px] gap-[10px] self-stretch ${
                state === "default" && status === "default"
                  ? "border-stroke"
                  : state === "disabled"
                  ? "border-graygray-2"
                  : status === "default" && state === "focused"
                  ? "border-blueblue-light-3"
                  : status === "default" && state === "hover"
                  ? "border-primary-color"
                  : status === "success" && ["default", "hover"].includes(state)
                  ? "border-greengreen"
                  : status === "error" && state === "focused"
                  ? "border-redred-light-3"
                  : status === "success" && state === "focused"
                  ? "border-greengreen-light-3"
                  : "border-redred"
              } ${state === "focused" ? "mr-[-3.00px]" : ""} ${state === "focused" ? "ml-[-3.00px]" : ""} ${
                state === "disabled" ? "bg-graygray-2" : "bg-whitewhite"
              } ${state === "focused" ? "mb-[-3.00px]" : ""} ${
                state === "focused"
                  ? "border-[3px] border-solid"
                  : status === "default" && helperText === "off" && state === "hover" && rightIcon === "off"
                  ? "border-2 border-solid"
                  : "border border-solid"
              }`}
            >
              <div
                className={`mt-[-1.00px] items-center relative ${
                  state === "disabled" && helperText === "off" && status === "success" && rightIcon === "off"
                    ? "inline-flex"
                    : "flex"
                } ${
                  (helperText === "off" && rightIcon === "off" && state === "disabled" && status === "error") ||
                  (helperText === "off" && rightIcon === "off" && state === "focused" && status === "error") ||
                  (helperText === "off" && rightIcon === "on" && state === "default" && status === "default") ||
                  (helperText === "off" && rightIcon === "on" && state === "hover" && status === "default") ||
                  (helperText === "off" && state === "disabled" && status === "default") ||
                  (helperText === "off" && state === "focused" && status === "default") ||
                  (helperText === "off" && state === "focused" && status === "success") ||
                  (helperText === "on" && rightIcon === "off" && state === "disabled") ||
                  (helperText === "on" && rightIcon === "off" && state === "focused") ||
                  (helperText === "on" && rightIcon === "on" && state === "focused" && status === "success") ||
                  (helperText === "on" && rightIcon === "on" && status === "default") ||
                  (rightIcon === "off" && state === "default") ||
                  (rightIcon === "off" && state === "hover") ||
                  (rightIcon === "on" && state === "default" && status === "success") ||
                  (rightIcon === "on" && state === "disabled" && status === "success") ||
                  (rightIcon === "on" && state === "hover" && status === "success") ||
                  (rightIcon === "on" && status === "error")
                    ? "grow"
                    : ""
                } ${
                  state === "disabled" && helperText === "off" && status === "success" && rightIcon === "off"
                    ? "flex-[0_0_auto]"
                    : "flex-1"
                } ${rightIcon === "off" ? "gap-[116px]" : ""} ${rightIcon === "on" ? "justify-between" : ""} ${
                  ["default", "disabled", "hover"].includes(state) ? "mb-[-1.00px]" : ""
                }`}
              >
                <div className="font-body-medium-regular w-fit mt-[-1.00px] tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 relative font-[number:var(--body-medium-regular-font-weight)] whitespace-nowrap leading-[var(--body-medium-regular-line-height)]">
                  {placeholder}
                </div>
                {status === "default" && rightIcon === "on" && <Eye9 className="!relative !w-[16px] !h-[16px]" />}

                {rightIcon === "on" && status === "error" && (
                  <InfoCircle2
                    className="!relative !w-[16px] !h-[16px]"
                    color={state === "disabled" ? "#6B7280" : "#F23030"}
                  />
                )}

                {rightIcon === "on" && status === "success" && (
                  <CheckmarkCircle5
                    className="!relative !w-[16px] !h-[16px]"
                    color={state === "disabled" ? "#6B7280" : "#22AD5C"}
                  />
                )}
              </div>
            </div>
          </>
        )}

        {label === "off" && (
          <div
            className={`flex items-center flex-1 pl-[20px] pr-[16px] py-[12px] relative w-full grow rounded-[6px] gap-[10px] self-stretch ${
              state === "default" && status === "default"
                ? "border-stroke"
                : state === "disabled"
                ? "border-graygray-2"
                : status === "default" && state === "focused"
                ? "border-blueblue-light-3"
                : status === "default" && state === "hover"
                ? "border-primary-color"
                : status === "success" && ["default", "hover"].includes(state)
                ? "border-greengreen"
                : status === "error" && state === "focused"
                ? "border-redred-light-3"
                : status === "success" && state === "focused"
                ? "border-greengreen-light-3"
                : "border-redred"
            } ${state === "focused" ? "mt-[-3.00px]" : ""} ${state === "focused" ? "mr-[-3.00px]" : ""} ${
              state === "focused" ? "ml-[-3.00px]" : ""
            } ${state === "disabled" ? "bg-graygray-2" : "bg-whitewhite"} ${
              state === "focused" ? "mb-[-3.00px]" : ""
            } ${state === "focused" ? "border-[3px] border-solid" : "border border-solid"} ${
              helperText === "off" ? placeholderClassName : undefined
            }`}
          >
            <div
              className={`flex items-center grow flex-1 relative ${rightIcon === "off" ? "gap-[116px]" : ""} ${
                rightIcon === "on" ? "justify-between" : ""
              } ${helperText === "off" ? frameClassName : undefined}`}
            >
              {rightIcon === "on" && (
                <div className="font-body-medium-regular w-fit mt-[-1.00px] tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative">
                  {placeholder}
                </div>
              )}

              {status === "default" && rightIcon === "on" && <Eye9 className="!relative !w-[16px] !h-[16px]" />}

              {rightIcon === "off" && (
                <div
                  className={`font-body-medium-regular w-fit mt-[-1.00px] tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${
                    helperText === "off" ? divClassName : undefined
                  }`}
                >
                  {placeholder}
                </div>
              )}

              {rightIcon === "on" && status === "error" && (
                <InfoCircle2
                  className="!relative !w-[16px] !h-[16px]"
                  color={state === "disabled" ? "#6B7280" : "#F23030"}
                />
              )}

              {rightIcon === "on" && status === "success" && (
                <CheckmarkCircle5
                  className="!relative !w-[16px] !h-[16px]"
                  color={state === "disabled" ? "#6B7280" : "#22AD5C"}
                />
              )}
            </div>
          </div>
        )}
      </div>
      {helperText === "on" && (
        <div className="w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] relative">
          <div
            className={`font-body-small-regular w-fit mt-[-1.00px] tracking-[var(--body-small-regular-letter-spacing)] text-[length:var(--body-small-regular-font-size)] [font-style:var(--body-small-regular-font-style)] font-[number:var(--body-small-regular-font-weight)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap relative ${
              state === "disabled"
                ? "text-darkdark-5"
                : status === "error" && ["default", "focused", "hover"].includes(state)
                ? "text-redred"
                : status === "success" && ["default", "focused", "hover"].includes(state)
                ? "text-greengreen"
                : "text-darkdark-4"
            }`}
          >
            {typeHelperText}
          </div>
        </div>
      )}
    </div>
  );
};
