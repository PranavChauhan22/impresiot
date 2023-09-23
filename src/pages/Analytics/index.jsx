import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const viewsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const thisMonthOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const thisMonthOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AnalyticsPage = () => {
  const tableData = React.useRef([
    {
      name: "Complete Beginners Guide to Blender 2.8",
      category: "Course",
      viewcount: "2,392",
      revenue: "7,17,600",
    },
    {
      name: "Learn Ball Dance Basics 7-Day Webinar",
      category: "Workshop",
      viewcount: "1,933",
      revenue: "1,93,300",
    },
    {
      name: "How To Get 10k Followers On Instagram Per Week",
      category: "Workshop",
      viewcount: "1,123",
      revenue: "1,12,300",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="sm:pl-5 pl-[35px] pt-[35px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtPoppinsLight24"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[788px] sm:px-5 px-[35px] text-center text-white-A700 text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("category", {
        cell: (info) => (
          <Text
            className="pb-[3px] pl-[17px] pt-[33px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtPoppinsLight24"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[215px] pl-3 pt-[3px] text-center text-white-A700 text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            Category
          </Text>
        ),
      }),
      tableColumnHelper.accessor("viewcount", {
        cell: (info) => (
          <Text
            className="pb-0.5 sm:pl-5 pl-[26px] pt-[35px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtPoppinsLight24"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[211px] pb-[3px] text-center text-white-A700 text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            View Count
          </Text>
        ),
      }),
      tableColumnHelper.accessor("revenue", {
        cell: (info) => (
          <Text
            className="pb-0.5 pl-[19px] pt-[35px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtPoppinsLight24"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[165px] py-0.5 text-center text-white-A700 text-xl"
            size="txtPoppinsRegular20WhiteA700"
          >
            Revenue (₹)
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_home_gray_800.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/dashboard0whennodataavailable",
      active: window.location.pathname === "/dashboard0whennodataavailable",
    },
    {
      icon: (
        <Img
          className="h-[11px] w-[11px]"
          src="images/img_volume.svg"
          alt="volume"
        />
      ),
      label: "Analytics",
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
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto pb-[18px] w-full">
        <Sidebar11 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 sm:h-[1300px] h-[1439px] md:h-[1893px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[25px] sm:px-5 w-[99%]">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-1 w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[56%] md:w-full">
                  <div className="md:h-[247px] h-[249px] sm:h-[657px] relative w-[94%] md:w-full">
                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[3%] w-[22%] sm:w-full">
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
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[84%]">
                      <div className="flex flex-col gap-6 justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[19px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32"
                        >
                          Personal Milestones
                        </Text>
                        <List
                          className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-3 justify-center w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-black-900_04 flex flex-1 flex-col items-center justify-start p-4 rounded-[5px] w-full">
                            <div className="flex flex-col gap-4 items-center justify-start mb-[3px] w-[96%] md:w-full">
                              <Text
                                className="text-base text-center text-white-A700"
                                size="txtPoppinsRegular16WhiteA700"
                              >
                                Courses Released
                              </Text>
                              <div className="h-[100px] relative w-[100px]">
                                <div className="!w-[100px] border-solid h-[100px] m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[100px] border-solid h-[100px] m-auto overflow-visible"
                                    value={74}
                                    strokeWidth={2}
                                    styles={{
                                      trail: { strokeWidth: 2, stroke: "" },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(0deg)",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                </div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-light_green-A700_01 w-max"
                                  size="txtPoppinsBlack32"
                                >
                                  8
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900_04 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[5px] w-full">
                            <div className="flex flex-col gap-[18px] items-center justify-start mb-2.5 mt-[7px] w-[99%] md:w-full">
                              <Text
                                className="text-center text-sm text-white-A700"
                                size="txtPoppinsRegular14"
                              >
                                Workshops Completed
                              </Text>
                              <div className="h-[100px] relative w-[100px]">
                                <div className="!w-[100px] border-solid h-[100px] m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[100px] border-solid h-[100px] m-auto overflow-visible"
                                    value={74}
                                    strokeWidth={2}
                                    styles={{
                                      trail: { strokeWidth: 2, stroke: "" },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(0deg)",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                </div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-orange-600 w-max"
                                  size="txtPoppinsBlack32Orange600"
                                >
                                  3
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900_04 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[5px] w-full">
                            <div className="flex flex-col gap-[17px] items-center justify-start mb-1 w-[89%] md:w-full">
                              <Text
                                className="text-base text-center text-white-A700"
                                size="txtPoppinsRegular16WhiteA700"
                              >
                                Hours Dedicated
                              </Text>
                              <div className="h-[100px] relative w-[100px]">
                                <div className="!w-[100px] border-solid h-[100px] m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[100px] border-solid h-[100px] m-auto overflow-visible"
                                    value={74}
                                    strokeWidth={2}
                                    styles={{
                                      trail: { strokeWidth: 2, stroke: "" },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(0deg)",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                </div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-A700 w-max"
                                  size="txtPoppinsBlack32CyanA700"
                                >
                                  125
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[372px] h-[505px] sm:h-[881px] relative w-full">
                    <Text
                      className="absolute left-[5%] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0]"
                      size="txtPoppinsBold32"
                    >
                      Monthly Stats
                    </Text>
                    <div className="absolute flex flex-col gap-[29px] h-max inset-[0] justify-center m-auto w-full">
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[627px] w-[16%] md:w-full">
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
                          options={viewsOptionsList}
                          isSearchable={false}
                          placeholder="Views"
                          shape="round"
                          color="gray_900_02"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                      <div className="bg-black-900_04 font-inter md:h-[308px] h-[438px] sm:h-[817px] p-8 sm:px-5 relative rounded-[5px] w-full">
                        <div className="absolute bottom-[7%] flex flex-col right-[5%] w-4/5 md:w-full">
                          <Line className="bg-gray-500_01 h-px mx-auto w-full" />
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-auto mt-[-1px] mx-auto w-[99%] z-[1]">
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                0
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[1%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] md:ml-[0] ml-[3px] w-1/5"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                1
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                2
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                3
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                4
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                5
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                6
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] w-[15%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                7
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                8
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[2%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                9
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[23%] sm:w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <div className="flex flex-col items-end justify-start w-[24%]">
                                  <div className="flex flex-row gap-5 items-center justify-between w-[69%] md:w-full">
                                    <div className="bg-gray-500_01 h-[11px] w-[5%]"></div>
                                    <div className="bg-gray-500_01 h-[11px] w-[5%]"></div>
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                                    <Text
                                      className="text-center text-white-A700 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      10
                                    </Text>
                                    <Text
                                      className="text-center text-white-A700 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      11
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[10%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[8%]"></div>
                                  <Text
                                    className="text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    12
                                  </Text>
                                </div>
                                <div className="h-[26px] relative w-[41%]">
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[62%]">
                                    <div className="flex flex-col justify-start w-full">
                                      <div className="bg-gray-500_01 h-[11px] md:ml-[0] ml-[7px] mr-[26px] w-[3%]"></div>
                                      <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                                        <Text
                                          className="text-center text-white-A700 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          13
                                        </Text>
                                        <Text
                                          className="text-center text-white-A700 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          14
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[51%]">
                                    <div className="flex flex-col justify-start w-full">
                                      <div className="flex flex-row gap-5 items-center justify-start mr-1.5 w-[79%] md:w-full">
                                        <div className="bg-gray-500_01 h-[11px] w-[5%]"></div>
                                        <div className="bg-gray-500_01 h-[11px] w-[5%]"></div>
                                      </div>
                                      <Text
                                        className="ml-3.5 md:ml-[0] text-center text-white-A700 text-xs"
                                        size="txtInterRegular12"
                                      >
                                        15
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[11%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[8%]"></div>
                                  <Text
                                    className="text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    16
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-2/5 sm:w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <div className="flex flex-col items-center justify-start w-[14%]">
                                  <div className="flex flex-row gap-[17px] items-center justify-between w-3/5 md:w-full">
                                    <div className="bg-gray-500_01 h-[11px] w-[6%]"></div>
                                    <div className="bg-gray-500_01 h-[11px] w-[6%]"></div>
                                  </div>
                                  <div className="flex flex-row gap-[5px] items-center justify-between w-full">
                                    <Text
                                      className="text-center text-white-A700 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      17
                                    </Text>
                                    <Text
                                      className="text-center text-white-A700 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      18
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[6%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[8%]"></div>
                                  <Text
                                    className="text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    19
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    20
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[6%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[9%]"></div>
                                  <Text
                                    className="text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    21
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    22
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    23
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    24
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    25
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    26
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    27
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[7%]">
                                  <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                                  <Text
                                    className="h-[15px] text-center text-white-A700 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    28
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[3%] sm:w-full">
                              <div className="bg-gray-500_01 h-[11px] w-[7%]"></div>
                              <Text
                                className="h-[15px] text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                29
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row h-max inset-y-[0] items-end justify-center left-[10%] my-auto w-[6%]">
                          <div className="flex flex-col gap-[50px] items-end justify-start w-full">
                            <div className="flex flex-row gap-[5px] items-end justify-between w-full">
                              <Text
                                className="text-right text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                1000
                              </Text>
                              <div className="bg-gray-500_01 h-px mt-3.5 w-[16%]"></div>
                            </div>
                            <div className="flex flex-col gap-[51px] items-start justify-start w-[85%] md:w-full">
                              <div className="flex flex-col gap-1.5 justify-start w-full">
                                <Text
                                  className="mr-[11px] text-right text-white-A700 text-xs"
                                  size="txtInterRegular12"
                                >
                                  750
                                </Text>
                                <div className="bg-gray-500_01 h-px md:ml-[0] ml-[26px] w-[19%]"></div>
                              </div>
                              <div className="flex flex-col gap-1.5 justify-start w-full">
                                <Text
                                  className="mr-[11px] text-right text-white-A700 text-xs"
                                  size="txtInterRegular12"
                                >
                                  500
                                </Text>
                                <div className="bg-gray-500_01 h-px md:ml-[0] ml-[27px] w-[19%]"></div>
                              </div>
                              <div className="flex flex-col gap-1.5 justify-start w-full">
                                <Text
                                  className="mr-[11px] text-right text-white-A700 text-xs"
                                  size="txtInterRegular12"
                                >
                                  250
                                </Text>
                                <div className="bg-gray-500_01 h-px md:ml-[0] ml-[27px] w-[19%]"></div>
                              </div>
                              <div className="flex flex-col gap-1.5 justify-start md:ml-[0] ml-[13px] w-[58%] md:w-full">
                                <Text
                                  className="mr-[11px] text-right text-white-A700 text-xs"
                                  size="txtInterRegular12"
                                >
                                  0
                                </Text>
                                <div className="bg-gray-500_01 h-px md:ml-[0] ml-[13px] w-[32%]"></div>
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gray-500_01 h-[293px] mt-3.5 w-px" />
                        </div>
                        <Img
                          className="absolute bottom-[13%] h-[235px] right-[6%]"
                          src="images/img_group.svg"
                          alt="group"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[39%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32"
                        >
                          Total Earnings
                        </Text>
                        <div className="flex flex-col items-center justify-start sm:w-full">
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
                            name="group233_Two"
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
                      <div className="bg-black-900_04 md:h-[116px] sm:h-[137px] h-[177px] mt-5 p-5 relative rounded-[5px] w-full">
                        <Text
                          className="absolute left-[5%] md:text-5xl text-[64px] text-white-A700 top-[11%]"
                          size="txtPoppinsBold64WhiteA700"
                        >
                          ₹ 1,89,224
                        </Text>
                        <div className="absolute bottom-[15%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto w-[87%]">
                          <Img
                            className="h-[23px] sm:mt-0 mt-0.5 w-[23px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="sm:ml-[0] ml-[13px] text-2xl md:text-[22px] text-red-500 sm:text-xl"
                            size="txtPoppinsBold24Red500"
                          >
                            4,427.84 2.34%
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[41px] sm:mt-0 mt-[11px] text-white-A700 text-xs"
                            size="txtPoppinsBold12"
                          >
                            Less than Previous Month
                          </Text>
                        </div>
                        <Img
                          className="absolute h-[60px] right-[7%] top-[19%] w-[60px]"
                          src="images/img_trash_white_a700.svg"
                          alt="trash"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[55px] w-[97%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32"
                        >
                          Content Reach
                        </Text>
                        <div className="flex flex-col items-center justify-start sm:w-full">
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
                            name="group233_Three"
                            options={thisMonthOptionsList2}
                            isSearchable={false}
                            placeholder="This Month"
                            shape="round"
                            color="gray_900_02"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black-900_04 flex flex-col items-start justify-end p-[47px] md:px-10 sm:px-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[23px] w-[63%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-[30px] items-start justify-start w-[51%] md:w-full">
                            <Img
                              className="h-[30px] md:h-auto mt-1 object-cover rounded-md w-[33%]"
                              src="images/img_image1.png"
                              alt="imageOne"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              India
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] items-start justify-start mt-[43px] w-[82%] md:w-full">
                            <Img
                              className="h-[30px] md:h-auto object-cover rounded-md w-[21%]"
                              src="images/img_image1_30x45.png"
                              alt="imageOne_One"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              Bangladesh
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] items-start justify-start mt-9 w-[72%] md:w-full">
                            <Img
                              className="h-[30px] md:h-auto mt-1 object-cover rounded-md w-[23%]"
                              src="images/img_image1_1.png"
                              alt="imageOne_Two"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              Suriname
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] items-center justify-start mt-[41px] w-[46%] md:w-full">
                            <Img
                              className="h-[30px] md:h-auto object-cover rounded-md w-[36%]"
                              src="images/img_image1_2.png"
                              alt="imageOne_Three"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              USA
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] items-start justify-start mt-[42px] w-full">
                            <Img
                              className="h-[30px] md:h-auto object-cover rounded-md w-[17%]"
                              src="images/img_image1_3.png"
                              alt="imageOne_Four"
                            />
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              United Kingdom
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[22px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[31px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Top Content
                  </Text>
                  <div className="bg-black-900_04 flex flex-col items-center justify-end p-[9px] rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mb-0.5 mt-[15px] w-full">
                      <div className="h-[267px] relative w-full">
                        <div className="overflow-auto absolute inset-[0] justify-center m-auto w-full">
                          <ReactTable
                            columns={tableColumns}
                            data={tableData.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                      </div>
                    </div>
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

export default AnalyticsPage;
