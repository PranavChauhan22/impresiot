import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const SchedulePage1WhenthereissomethingscheduledPage = () => {
  const sideBarMenu = [
    {
      icon: <Img className="h-6" src="images/img_upload.svg" alt="upload" />,
      label: "Uploads",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px]"
          src="images/img_calendar_white_a700.svg"
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
  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1071px] sm:h-[1075px] md:h-[1271px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[30px] sm:px-5 w-[99%]">
            <div className="flex flex-col gap-[37px] items-start justify-start mb-[237px] w-[95%] md:w-full">
              <div className="flex flex-col gap-11 justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[23px] w-[99%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Schedule
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="bg-black-900_03 flex flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start mb-0.5 w-[93%] md:w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-[16%]">
                            <div className="h-12 relative w-full">
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-max"
                                size="txtPoppinsRegular32"
                              >
                                +
                              </Text>
                              <div className="absolute border border-solid border-white-A700 h-8 inset-[0] justify-center m-auto rounded-[10px] w-8"></div>
                            </div>
                          </div>
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                          >
                            Schedule Workshop
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[246px] md:h-[582px] relative w-[72%] md:w-full">
                  <div className="absolute bg-black-900_01 h-[246px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                      <div className="flex flex-col items-start justify-start mb-[38px] md:mt-0 mt-7">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtPoppinsBold28"
                        >
                          Scheduled Workshop
                        </Text>
                        <Text
                          className="mt-[58px] text-white-A700 text-xl"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          Starts in
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
                          size="txtPoppinsBold32Gray50001"
                        >
                          1m
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start mb-[42px] ml-14 md:ml-[0] md:mt-0 mt-[165px] w-[9%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[79px] text-base text-center"
                          shape="round"
                          color="green_900"
                          size="sm"
                          variant="fill"
                        >
                          Start
                        </Button>
                      </div>
                      <div className="md:h-[245px] h-[246px] md:ml-[0] ml-[3px] relative w-[53%] md:w-full">
                        <div className="absolute bg-red-500 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-20 md:px-10 sm:px-5 right-[0] rounded-[10px] shadow-bs w-[85%]">
                          <div className="flex flex-col items-center justify-start mt-3">
                            <Text
                              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                              size="txtPoppinsSemiBold48"
                            >
                              Workshop
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] w-full">
                          <div className="bg-gray-900_05 flex flex-col h-[39px] items-center justify-start mb-[35px] mt-[158px] p-2.5 rounded-[10px] w-[39px]">
                            <Line className="bg-white-A700 h-[18px] w-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
                <div className="h-[246px] sm:h-[339px] relative w-full">
                  <div className="h-[246px] sm:h-[339px] m-auto w-full">
                    <div className="absolute bg-black-900_01 flex sm:flex-col flex-row gap-[47px] h-full inset-[0] items-end justify-center m-auto p-[26px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex sm:flex-1 flex-col md:gap-10 gap-[68px] items-start justify-start mb-[7px] ml-5 sm:ml-[0] w-[34%] sm:w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtPoppinsBold28"
                        >
                          Scheduled Workshop
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtPoppinsBold20WhiteA700"
                          >
                            Workshop starts in
                          </Text>
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
                            size="txtPoppinsBold32Gray50001"
                          >
                            2 D : 12H : 12M
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start mb-2.5 sm:mt-0 mt-[143px] w-[9%] sm:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[79px] text-base text-center"
                          shape="round"
                          color="gray_900_05"
                          size="sm"
                          variant="fill"
                        >
                          Start
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bg-purple-A700 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[75px] md:px-10 sm:px-5 right-[0] rounded-[10px]">
                      <Text
                        className="mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtPoppinsSemiBold48"
                      >
                        Workshop
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-[7px] right-[0] w-[51%]">
                    <div className="bg-gray-900_05 flex flex-col h-[39px] items-center justify-start mb-[30px] mt-[163px] p-2.5 rounded-[10px] w-[39px]">
                      <Line className="bg-white-A700 h-[18px] w-1" />
                    </div>
                  </div>
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

export default SchedulePage1WhenthereissomethingscheduledPage;
