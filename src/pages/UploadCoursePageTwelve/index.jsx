import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Text, TextArea } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageTwelvePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6"
          src="images/img_upload_white_a700.svg"
          alt="upload"
        />
      ),
      label: "Uploads",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Schedule",
      href: "/schedulepage0whenthereisnothingscheduled",
      active:
        window.location.pathname ===
        "/schedulepage0whenthereisnothingscheduled",
    },
    {
      icon: <Img className="h-7 w-7" src="images/img_user.svg" alt="user" />,
      label: "Profile",
      href: "/profiletwo",
      active: window.location.pathname === "/profiletwo",
    },
    {
      icon: (
        <Img
          className="h-[27px] w-[26px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Settings",
      href: "/settingsexpanded",
      active: window.location.pathname === "/settingsexpanded",
    },
  ];
  const [groupthirtysevenonevalue, setGroupthirtysevenonevalue] =
    React.useState("");

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1042px] md:h-[907px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto p-[41px] md:px-10 sm:px-5 w-[99%]">
            <Text
              className="md:ml-[0] ml-[31px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtCalibriBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                <>Courses &gt; </>
              </span>
              <span className="text-gray-500 font-poppins text-left font-medium">
                <>New Course &gt;</>
              </span>
              <span className="text-gray-500 font-poppins text-left font-normal">
                {" "}
                Cover
              </span>
            </Text>
            <div className="flex flex-col font-poppins items-start justify-start ml-2.5 md:ml-[0] mr-[589px] mt-[27px] w-[58%] md:w-full">
              <div className="bg-gray-700_02 flex flex-col items-center justify-end p-[51px] md:px-10 sm:px-5 rounded-[10px] w-[54%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-[48%] md:w-full">
                  <div className="h-[98px] relative w-[98px]">
                    <div className="absolute border-[7px] border-solid border-white-A700 h-[98px] inset-[0] justify-center m-auto rounded-[50%] w-[98px]"></div>
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[64px] text-white-A700 w-max"
                      size="txtPoppinsMedium64"
                    >
                      +
                    </Text>
                  </div>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    Add Thumbnail
                  </Text>
                </div>
              </div>
              <Input
                name="groupThirtySeven"
                placeholder="Title of the Course"
                className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border border-solid border-white-A700 mt-[61px] w-full"
                shape="round"
                color="black_900_03"
                size="md"
                variant="fill"
              ></Input>
              <TextArea
                className="bg-black-900_03 border border-solid border-white-A700 leading-[normal] mt-[23px] pb-[35px] pt-[15px] sm:px-5 px-[34px] rounded-[10px] text-2xl md:text-[22px] placeholder:text-gray-800 text-gray-800 text-left sm:text-xl w-full"
                name="groupSixtyFive"
                placeholder="Description of the Course"
                name="groupSixtyFive"
                placeholder="Description of the Course"
              ></TextArea>
            </div>
            <Button
              className="cursor-pointer font-poppins font-semibold leading-[normal] mb-[11px] min-w-[163px] md:ml-[0] ml-[1222px] mr-3.5 mt-[46px] rounded-[5px] text-center text-xl"
              color="red_500"
              size="md"
              variant="fill"
            >
              Add Videos
            </Button>
          </div>
          <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[30px] sm:px-5 top-[0] w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursePageTwelvePage;
