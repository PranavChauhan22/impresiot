import React from "react";

import { Img, Text } from "components";

const DesktopNineToolbarbrowser = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900 flex flex-row items-center justify-start pt-[7px] px-[7px] shadow-bs2 w-full">
          <div className="flex flex-row gap-[7px] items-center justify-start ml-1.5 w-[16%]">
            <Img
              className="h-3"
              src="images/img_browsercontrols.svg"
              alt="browsercontrols"
            />
            <div className="flex flex-col items-center justify-start px-0.5 w-[74%]">
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="flex flex-row items-start justify-start w-auto">
                    <Img
                      className="h-full w-1.5"
                      src="images/img_curvel.svg"
                      alt="curvel"
                    />
                    <div className="bg-blue_gray-900 flex flex-row gap-[9px] items-center justify-start p-2 rounded-tl-lg rounded-tr-lg">
                      <Img
                        className="h-4 md:h-auto object-cover w-4"
                        src="images/img_favicon.png"
                        alt="favicon"
                      />
                      <Text
                        className="text-white-A700 text-xs tracking-[0.20px] w-auto"
                        size="txtRobotoRomanRegular12"
                      >
                        {props?.tabname}
                      </Text>
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <Img
                      className="h-full w-1.5"
                      src="images/img_curver.svg"
                      alt="curver"
                    />
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopNineToolbarbrowser.defaultProps = { tabname: "Impresiot" };

export default DesktopNineToolbarbrowser;
