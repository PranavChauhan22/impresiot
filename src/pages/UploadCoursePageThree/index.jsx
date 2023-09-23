import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageThreePage = () => {
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
  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-end justify-end p-[30px] sm:px-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full" />
            </div>
            <div className="flex flex-col items-center justify-start p-[30px] sm:px-5 w-[99%] md:w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start mb-[600px] w-[96%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    <span className="text-white-A700 font-poppins text-left font-bold">
                      Your{" "}
                    </span>
                    <span className="text-gray-500_01 font-poppins text-left font-light">
                      Courses
                    </span>
                  </Text>
                  <div className="bg-black-900_03 flex flex-col items-center justify-start rounded-[10px] shadow-bs">
                    <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 w-4/5 md:w-full">
                      <div className="h-[60px] relative w-[24%]">
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                          size="txtPoppinsRegular40"
                        >
                          +
                        </Text>
                        <div className="absolute border border-solid border-white-A700 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                      </div>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        New Course
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[431px] h-[432px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mb-[15px] mt-[258px] w-[98%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl w-[97%] sm:w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          How To Get 10k Followers On Instagram Per Week
                        </Text>
                        <Text
                          className="text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          Creator - The Futur, Chris Do
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtPoppinsBold24WhiteA700"
                          >
                            ₹699
                          </Text>
                          <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                            <Line className="bg-white-A700 h-[18px] w-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-60 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="md:h-[429px] h-[432px] relative w-full">
                      <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-3.5 mt-[257px] w-[97%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl w-[97%] sm:w-full"
                            size="txtPoppinsBold20WhiteA700"
                          >
                            SQL Tutorial - Full Database Course for Beginners
                          </Text>
                          <Text
                            className="mt-0.5 text-gray-500 text-xl"
                            size="txtPoppinsRegular20"
                          >
                            Creator - FreeCodeCamp.org
                          </Text>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-1 w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              ₹999
                            </Text>
                            <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                              <Line className="bg-white-A700 h-[18px] w-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-60 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                        src="images/img_rectangle5_239x426.png"
                        alt="rectangleFive"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="md:h-[431px] h-[432px] relative w-full">
                      <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-[15px] mt-[258px] w-[98%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl w-[97%] sm:w-full"
                            size="txtPoppinsBold20WhiteA700"
                          >
                            Microsoft Azure Fundamentals Certification Course
                            (AZ-900)
                          </Text>
                          <Text
                            className="mt-0.5 text-gray-500 text-xl"
                            size="txtPoppinsRegular20"
                          >
                            Creator - FreeCodeCamp.org
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-1 w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              ₹449
                            </Text>
                            <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                              <Line className="bg-white-A700 h-[18px] w-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-60 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                        src="images/img_rectangle5_1.png"
                        alt="rectangleFive"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursePageThreePage;
