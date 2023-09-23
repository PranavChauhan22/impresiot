import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    black_900_03: "bg-black-900_03 shadow-bs text-gray-500_87",
    black_900_04: "bg-black-900_04 text-gray-500_87",
    black_900_01: "bg-black-900_01 shadow-bs text-gray-500",
    gray_900_05: "bg-gray-900_05 text-gray-800",
    blue_gray_100_01: "bg-blue_gray-100_01",
    black_900_07: "bg-black-900_07 shadow-bs text-gray-800",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-gray-800",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const sizes = {
  md: "pb-[15px] pt-[17px] px-[15px]",
  sm: "p-3.5",
  lg: "pb-[19px] pt-[18px] px-[18px]",
  xl: "pb-[13px] pt-[21px] px-[13px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900_03",
    "black_900_04",
    "black_900_01",
    "gray_900_05",
    "blue_gray_100_01",
    "black_900_07",
    "white_A700",
  ]),
};

export { Input };
