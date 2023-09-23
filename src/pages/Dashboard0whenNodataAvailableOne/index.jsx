import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const thisMonthOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Dashboard0whenNodataAvailableOnePage = () => {
  const sideBarMenu = [
    {
      label: (
        <Button className="bg-gray-800 flex h-7 items-center justify-center mb-2.5 p-2 rounded-[50%] w-7">
          <Img className="h-[11px]" src="images/img_offer.svg" alt="offer" />
        </Button>
      ),
    },
    {
      label: (
        <MenuItem
          active={window.location.pathname === "/analyticswhennodataavailable"}
          href="/analyticswhennodataavailable"
        >
          "Analytics"
        </MenuItem>
      ),
      href: "/analyticswhennodataavailable",
      active: window.location.pathname === "/analyticswhennodataavailable",
    },
    {
      icon: <Img className="h-6" src="images/img_upload.svg" alt="upload" />,
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
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 sm:h-[1098px] h-[1236px] md:h-[2103px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[29px] sm:px-5 w-[99%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[13px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[59px] items-center justify-start w-[56%] md:w-full">
                <div className="md:h-[376px] h-[382px] sm:h-[565px] relative w-full">
                  <Text
                    className="absolute left-[5%] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0]"
                    size="txtPoppinsBold32"
                  >
                    Summary
                  </Text>
                  <div className="absolute flex flex-col gap-[30px] h-max inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[585px] w-[21%] md:w-full">
                      <SelectBox
                        className="leading-[normal] text-base text-center w-full"
                        placeholderClassName="text-white-A700"
                        indicator={
                          <Img
                            className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-2.5"
                            src="images/img_arrowdown_white_a700.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group233"
                        options={thisMonthOptionsList}
                        isSearchable={false}
                        placeholder="This Month"
                        shape="round"
                        color="gray_900_02"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                    <div className="bg-black-900_04 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[5px] w-full">
                      <div className="flex flex-col items-start justify-start mb-3 w-[95%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtPoppinsMedium24"
                        >
                          New Followers
                        </Text>
                        <div className="flex flex-row gap-[21px] items-start justify-start ml-1.5 md:ml-[0] mt-1 w-[14%] md:w-full">
                          <div className="bg-blue_gray-400_02 h-3 mb-[23px] mt-9 w-[43%]"></div>
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                            size="txtPoppinsBold48"
                          >
                            0
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[33px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            Course Purchases
                          </Text>
                          <Line className="bg-gray-800_01 h-px sm:ml-[0] ml-[33px] sm:mt-0 my-[17px] w-[52%]" />
                          <Text
                            className="sm:ml-[0] ml-[58px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            0
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            Workshop Registration
                          </Text>
                          <Line className="bg-gray-800_01 h-px sm:ml-[0] ml-[33px] sm:mt-0 my-[18px] w-[44%]" />
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[59px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[35px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Most Attended Workshop
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="bg-black-900_01 flex flex-col items-center justify-start p-[68px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Text
                        className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                        size="txtPoppinsBold32"
                      >
                        No data Available
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[35px] mt-[58px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtPoppinsBold32"
                      >
                        Top Selling Course
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-col items-center justify-start mt-[27px] p-[68px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Text
                        className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                        size="txtPoppinsBold32"
                      >
                        No data Available
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[55px] items-center justify-start w-[39%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtPoppinsBold32"
                      >
                        Total Earnings
                      </Text>
                      <div className="flex flex-col items-center justify-start sm:mt-0 mt-[3px] sm:w-full">
                        <SelectBox
                          className="leading-[normal] text-base text-center w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-2.5"
                              src="images/img_arrowdown_white_a700.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group233_One"
                          options={thisMonthOptionsList1}
                          isSearchable={false}
                          placeholder="This Month"
                          shape="round"
                          color="gray_900_02"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                    <div className="bg-black-900_04 flex flex-col items-center justify-start p-4 rounded-[5px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[11px] w-[93%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="md:text-5xl text-[64px] text-white-A700"
                            size="txtPoppinsBold64WhiteA700"
                          >
                            ₹ 0
                          </Text>
                          <Img
                            className="h-[60px] w-[60px]"
                            src="images/img_trash_white_a700.svg"
                            alt="trash"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[99%] md:w-full">
                          <div className="bg-blue_gray-400_02 h-2 mb-[9px] sm:mt-0 mt-[18px] w-[5%]"></div>
                          <Text
                            className="sm:ml-[0] ml-[13px] text-2xl md:text-[22px] text-blue_gray-400_02 sm:text-xl"
                            size="txtPoppinsBold24Bluegray40002"
                          >
                            0
                          </Text>
                          <Text
                            className="mb-1 sm:ml-[0] ml-[300px] sm:mt-0 mt-[13px] text-right text-white-A700 text-xs"
                            size="txtPoppinsBold12"
                          >
                            No data Available
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Creator Leaderboard
                  </Text>
                  <div className="bg-black-900_04 flex flex-col items-center justify-center p-[13px] rounded-[5px] w-full">
                    <Img
                      className="h-[180px]"
                      src="images/img_group281.svg"
                      alt="group281"
                    />
                    <Img
                      className="h-[99px] mt-[5px]"
                      src="images/img_group284.svg"
                      alt="group284"
                    />
                    <Img
                      className="h-[99px] mt-[5px]"
                      src="images/img_group281.svg"
                      alt="group283"
                    />
                    <Img
                      className="h-[99px] mt-[5px]"
                      src="images/img_group282.svg"
                      alt="group282"
                    />
                    <Img
                      className="h-[99px] mt-[5px]"
                      src="images/img_group286.svg"
                      alt="group286"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[29px] sm:px-5 top-[0] w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[38px] mt-[21px] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard0whenNodataAvailableOnePage;
