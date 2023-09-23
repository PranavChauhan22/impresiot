import React from "react";

const sizeClasses = {
  txtPoppinsRegular24Gray50087: "font-normal font-poppins",
  txtPoppinsRegular24Gray50001: "font-normal font-poppins",
  txtPoppinsBold20Gray50001: "font-bold font-poppins",
  txtPoppinsBlack32Orange600: "font-black font-poppins",
  txtPoppinsBold24Red500: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsBold32Teal900: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsBold24WhiteA700: "font-bold font-poppins",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsBold32Gray50001: "font-bold font-poppins",
  txtPoppinsBold48: "font-bold font-poppins",
  txtPoppinsBold16Gray50001: "font-bold font-poppins",
  txtPoppinsLight24: "font-light font-poppins",
  txtCalibriBold16: "font-bold font-calibri",
  txtPoppinsMedium12RedA100: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsLight20: "font-light font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium24Gray500: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium64: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtPoppinsBold20WhiteA700: "font-bold font-poppins",
  txtPoppinsBold32Gray500: "font-bold font-poppins",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtPoppinsRegular24Gray800: "font-normal font-poppins",
  txtPoppinsRegular20Gray800: "font-normal font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtNunitoSansRegular14: "font-normal font-nunitosans",
  txtPoppinsSemiBold26Gray500: "font-poppins font-semibold",
  txtPoppinsBold96: "font-bold font-poppins",
  txtPoppinsBold24Bluegray40002: "font-bold font-poppins",
  txtPoppinsMedium20Gray50002: "font-medium font-poppins",
  txtCalibriBold48: "font-bold font-calibri",
  txtPoppinsBold12: "font-bold font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsBlack32CyanA700: "font-black font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold8: "font-poppins font-semibold",
  txtPoppinsBold20Gray80002: "font-bold font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsBlack32: "font-black font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsLight48: "font-light font-poppins",
  txtPoppinsBold28: "font-bold font-poppins",
  txtPoppinsBold20Bluegray100: "font-bold font-poppins",
  txtPoppinsBold64: "font-bold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtCalibriBold36: "font-bold font-calibri",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsBold16WhiteA700: "font-bold font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtCalibriBold32: "font-bold font-calibri",
  txtPoppinsBold40WhiteA700: "font-bold font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsRegular24Gray500: "font-normal font-poppins",
  txtPoppinsBold64WhiteA700: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
