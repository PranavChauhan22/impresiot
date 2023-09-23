import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const SchedulePage1WhenthereissomethingscheduledTwoPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-start justify-between mx-auto pb-[9px] pl-[9px] w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[284px] flex h-screen md:hidden justify-start md:ml-[0] ml-[23px] overflow-auto md:px-5 top-[0]"
        >
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Img
              className="h-[100px] md:h-auto object-cover w-[100px]"
              src="images/img_impresiotlogo1.png"
              alt="impresiotlogoOne"
            />
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtPoppinsSemiBold36"
            >
              Impresiot
            </Text>
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[161px] ml-7 md:ml-[0] mr-[94px] mt-[77px]"
            onClick={() => navigate("/dashboard")}
            leftIcon={
              <div className="h-[22px] mt-1 mb-[3px] mr-6 w-[22px] outline-gray-800 outline-[0.5px] outline">
                <Img
                  className="h-[22px]"
                  src="images/img_home_gray_800.svg"
                  alt="home"
                />
              </div>
            }
          >
            <div className="font-bold leading-[normal] text-gray-800 text-left text-xl">
              Dashboard
            </div>
          </Button>
          <div
            className="common-pointer flex flex-row gap-[21px] items-start justify-center md:ml-[0] ml-[26px] mr-[110px] mt-[58px] w-[52%]"
            onClick={() => navigate("/analyticsone")}
          >
            <Button
              className="flex h-7 items-center justify-center mb-0.5 w-7"
              shape="circle"
              color="gray_800"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[11px]"
                src="images/img_offer.svg"
                alt="offer"
              />
            </Button>
            <Text className="text-gray-800 text-xl" size="txtPoppinsBold20">
              Analytics
            </Text>
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[134px] md:ml-[0] ml-[26px] mr-[123px] mt-[59px]"
            onClick={() => navigate("/uploadcoursepageseven")}
            leftIcon={
              <div className="mb-1.5 mr-[19px] bg-gray-800">
                <Img src="images/img_upload.svg" alt="upload" />
              </div>
            }
          >
            <div className="font-bold leading-[normal] text-gray-800 text-left text-xl">
              Uploads
            </div>
          </Button>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "23px",
                marginTop: "26px",
                paddingBottom: "33px",
                paddingLeft: "58px",
                paddingRight: "33px",
                fontWeight: 700,
                fontSize: "20px",
              },
            }}
            className="flex flex-col items-center justify-start mt-[54px] md:pr-10 sm:pr-5 pr-[46px] w-[95%]"
          >
            <MenuItem
              icon={
                <Img
                  className="h-[30px]"
                  src="images/img_calendar_white_a700.svg"
                  alt="calendar"
                />
              }
              active={
                window.location.pathname ===
                "/schedulepage0whenthereisnothingscheduled"
              }
              href="/schedulepage0whenthereisnothingscheduled"
            >
              <Text className="text-white-A700">Schedule</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-[27px] w-[26px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              }
              active={window.location.pathname === "/settingsexpanded"}
              href="/settingsexpanded"
            >
              <Text className="text-gray-800">Settings</Text>
            </MenuItem>
          </Menu>
          {!collapsed && (
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[181px] ml-6 md:ml-[0] mr-[79px] mt-[361px] rounded-[5px] text-center text-xl"
              color="red_500"
              size="xl"
              variant="fill"
            >
              Home
            </Button>
          )}
        </Sidebar>
        <div className="flex-1 h-[1071px] md:h-[1271px] sm:h-[982px] md:px-5 relative w-full">
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
                    <div
                      className="common-pointer bg-black-900_03 flex flex-col items-center justify-start p-[7px] rounded-[10px] shadow-bs w-full"
                      onClick={() => navigate("/schedulepagefour")}
                    >
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
                <div className="h-[246px] relative w-full">
                  <div className="absolute bg-black-900_01 flex inset-[0] justify-center m-auto p-[23px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start ml-6 w-[41%]">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsBold20WhiteA700"
                      >
                        <span className="text-white-A700 font-poppins text-left font-bold">
                          <>
                            How To Get 10k Followers On Instagram Per Week
                            <br />
                          </>
                        </span>
                        <span className="text-gray-500_01 font-poppins text-left font-light">
                          Creator - The Futur, Chris Do
                        </span>
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
                    <div className="flex flex-col items-center justify-start mb-3.5 ml-[-39px] mt-auto w-[9%] z-[1]">
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
                  <div className="absolute h-[246px] inset-y-[0] my-auto right-[0] w-[51%] sm:w-full">
                    <Img
                      className="h-[246px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] w-full">
                      <div className="bg-gray-900_05 flex flex-col h-[39px] items-center justify-start mb-[30px] mt-[163px] p-2.5 rounded-[10px] w-[39px]">
                        <Line className="bg-white-A700 h-[18px] w-1" />
                      </div>
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

export default SchedulePage1WhenthereissomethingscheduledTwoPage;
