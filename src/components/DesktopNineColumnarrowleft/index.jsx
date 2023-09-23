import React from "react";

import { Img, Text } from "components";

const DesktopNineColumnarrowleft = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-900 flex flex-row items-center justify-start p-[5px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[7px] w-[99%]">
            <div className="flex flex-row gap-[15px] items-center justify-between w-[8%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_arrowleft_white_a700_16x16.svg"
                alt="arrowleft"
              />
              <Img
                className="h-4 w-4"
                src="images/img_arrowright_blue_gray_400.svg"
                alt="arrowright"
              />
              <Img
                className="h-4 w-4"
                src="images/img_refresh.svg"
                alt="refresh"
              />
              <Img className="h-4 w-4" src="images/img_home.svg" alt="home" />
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[5px] rounded-[14px] w-[87%] md:w-full">
              <Img className="h-3 w-3" src="images/img_lock.svg" alt="lock" />
              <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[14%] md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.25px] w-auto"
                    size="txtRobotoRomanRegular14"
                  >
                    {props?.url}
                  </Text>
                </div>
              </div>
              <Img
                className="h-4 md:ml-[0] ml-[1001px] mr-[5px] w-4"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex flex-row gap-[13px] items-center justify-between w-[4%] md:w-full">
              <Img
                className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                src="images/img_imageuserprofile.png"
                alt="imageuserprofil"
              />
              <Img
                className="h-4 w-4"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopNineColumnarrowleft.defaultProps = { url: "www.impresiot.com" };

export default DesktopNineColumnarrowleft;
