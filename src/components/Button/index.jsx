import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    amber_A400: "bg-amber-A400 text-black-900_03",
    blue_gray_400_01: "bg-blue_gray-400_01 text-black-900_03",
    green_A400: "bg-green-A400 text-gray-900_09",
    black_900: "bg-black-900 text-gray-800_02",
    gray_500_02: "bg-gray-500_02 text-white-A700",
    black_900_01: "bg-black-900_01 shadow-bs text-white-A700",
    teal_A400: "bg-teal-A400 text-black-900_03",
    gray_900_03: "bg-gray-900_03",
    green_900: "bg-green-900 text-white-A700",
    gray_900_05: "bg-gray-900_05 text-white-A700",
    gray_900_07: "bg-gray-900_07 shadow-bs1 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900_09",
    gray_800: "bg-gray-800",
    light_green_A700: "bg-light_green-A700 text-black-900_03",
    red_500: "bg-red-500 shadow-bs text-white-A700",
    black_900_03: "bg-black-900_03 shadow-bs text-gray-800",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
    gray_800: "border-[3px] border-gray-800 border-solid",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "px-2.5 py-[11px]",
  lg: "p-[13px]",
  xl: "p-[17px]",
  "2xl": "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "amber_A400",
    "blue_gray_400_01",
    "green_A400",
    "black_900",
    "gray_500_02",
    "black_900_01",
    "teal_A400",
    "gray_900_03",
    "green_900",
    "gray_900_05",
    "gray_900_07",
    "white_A700",
    "gray_800",
    "light_green_A700",
    "red_500",
    "black_900_03",
  ]),
};

export { Button };
