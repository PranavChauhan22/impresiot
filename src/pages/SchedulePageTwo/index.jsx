import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const SchedulePageTwoPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6"
          src="images/img_upload_gray_800.svg"
          alt="upload"
        />
      ),
      label: "Uploads",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px]"
          src="images/img_calendar_white_a700_30x28.svg"
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
        <div className="flex-1 h-[1025px] md:h-[1217px] sm:h-[888px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[5px] w-[99%]">
            <div className="flex flex-col gap-[22px] justify-start mt-9 w-[94%] md:w-full">
              <Text
                className="md:ml-[0] ml-[21px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Schedule Workshop
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-gray-700_02 flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 rounded-[10px] w-[32%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-[47%] md:w-full">
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
                  placeholder="Title of the Workshop"
                  className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-solid border-white-A700 mt-[58px] w-[59%]"
                  shape="round"
                  color="black_900_03"
                  size="sm"
                  variant="fill"
                ></Input>
                <div className="bg-black-900_03 border border-solid border-white-A700 flex flex-col items-start justify-start mt-[23px] p-[15px] rounded-[10px]">
                  <Text
                    className="mb-[193px] md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtPoppinsRegular24Gray800"
                  >
                    Description of the Workshop
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] w-full">
                  <Input
                    name="groupFortySix"
                    placeholder="DD-MM-YYYY"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-800 text-base text-left w-full"
                    wrapClassName="flex md:flex-1 mb-[52px] w-[29%] md:w-full"
                    suffix={
                      <Img
                        className="mt-0.5 mb-px h-5 ml-[35px]"
                        src="images/img_calendar_gray_800.svg"
                        alt="calendar"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="groupFortyFive"
                    placeholder="HH-MM"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-800 text-base text-left w-full"
                    wrapClassName="flex md:flex-1 mb-[53px] ml-6 md:ml-[0] w-[29%] md:w-full"
                    suffix={
                      <div className="h-5 mt-px mb-0.5 ml-[35px] pt-[5px] pb-[9px] pl-[9px] pr-[5px] w-5 bg-gray-800 rounded-[50%]">
                        <Img
                          className="h-1.5 my-auto"
                          src="images/img_folder.svg"
                          alt="folder"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <div className="bg-gray-800_02 flex flex-col h-[26px] items-center justify-start mb-3 md:ml-[0] ml-[116px] md:mt-0 mt-[70px] rounded-[50%] w-[26px]">
                    <Text
                      className="text-base text-center text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      ?
                    </Text>
                  </div>
                  <div className="h-[53px] ml-3.5 md:ml-[0] md:mt-0 mt-[55px] relative w-[11%] md:w-full">
                    <Text
                      className="absolute h-max inset-y-[0] my-auto right-[18%] text-center text-white-A700 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      0.00
                    </Text>
                    <div className="bg-red-500 h-[53px] my-auto rounded-bl-[5px] rounded-tl-[5px] shadow-bs w-[33%]"></div>
                    <Text
                      className="absolute border border-solid border-white-A700 h-full inset-[0] justify-center m-auto pl-[15px] sm:pr-5 pr-[35px] py-2 rounded-[5px] text-2xl md:text-[22px] text-center text-shadow-ts text-white-A700 sm:text-xl w-max"
                      size="txtPoppinsRegular24"
                    >
                      ₹
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[223px] md:ml-[0] ml-[49px] md:mt-0 mt-[55px] rounded-[5px] text-center text-xl"
                    color="red_500"
                    size="md"
                    variant="fill"
                  >
                    Schedule Workshop
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[30px] sm:px-5 top-[0] w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePageTwoPage;
