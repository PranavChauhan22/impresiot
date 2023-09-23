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

const DashboardOnePage = () => {
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
        <div className="flex-1 sm:h-[1098px] h-[1236px] md:h-[2073px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[29px] sm:px-5 w-[99%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[13px] w-[99%] md:w-full">
              <div className="flex flex-col gap-[59px] items-center justify-start w-[56%] md:w-full">
                <div className="md:h-[377px] h-[382px] sm:h-[632px] relative w-full">
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
                        <div className="flex flex-row gap-[27px] items-start justify-start mt-1 w-[24%] md:w-full">
                          <Img
                            className="h-[39px] mt-[23px] w-[39px]"
                            src="images/img_polygon1.svg"
                            alt="polygonOne"
                          />
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                            size="txtPoppinsBold48"
                          >
                            244
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-between mt-[33px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            Course Purchases
                          </Text>
                          <Line className="bg-gray-800_01 h-px sm:mt-0 my-[17px] w-[52%]" />
                          <Text
                            className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            223
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[21px] w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            Workshop Registration
                          </Text>
                          <Line className="bg-gray-800_01 h-px sm:mt-0 my-[18px] w-[44%]" />
                          <Text
                            className="mb-0.5 text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtPoppinsMedium24"
                          >
                            189
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
                    <div className="bg-black-900_01 flex h-[188px] md:h-[343px] justify-end md:pl-10 pl-11 sm:pl-5 relative rounded-[10px] w-full">
                      <Img
                        className="h-[18px] mb-[50px] ml-[93px] mt-auto"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[95%]">
                        <div className="flex flex-col gap-[25px] items-start justify-start">
                          <div className="md:h-[42px] h-[65px] relative w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 top-[0] w-max"
                              size="txtPoppinsBold28"
                            >
                              Katthak Workshop
                            </Text>
                            <Text
                              className="absolute bottom-[0] left-[0] text-gray-500_01 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              Pali Chandra
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-start justify-start w-[44%] md:w-full">
                            <div className="flex flex-col gap-1.5 items-center justify-start w-[26%]">
                              <Img
                                className="h-[18px]"
                                src="images/img_user_white_a700.svg"
                                alt="user_One"
                              />
                              <Text
                                className="text-base text-gray-500_01"
                                size="txtPoppinsBold16Gray50001"
                              >
                                2.1k
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[7px] justify-start mt-0.5 w-[62%]">
                              <Img
                                className="h-[15px] ml-1.5 md:ml-[0]"
                                src="images/img_download.svg"
                                alt="download"
                              />
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Text
                                  className="text-base text-center text-gray-500_01"
                                  size="txtPoppinsBold16Gray50001"
                                >
                                  1.1K
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500_01"
                                  size="txtPoppinsBold16Gray50001"
                                >
                                  1.1K
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[188px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle10.png"
                          alt="rectangleTen"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[35px] mt-[58px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtPoppinsBold32"
                      >
                        Top Selling Course
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex h-[188px] md:h-[215px] sm:h-[371px] justify-end mt-[27px] md:pl-10 pl-11 sm:pl-5 relative rounded-[10px] w-full">
                      <Img
                        className="h-[18px] mb-[50px] ml-[93px] mt-auto"
                        src="images/img_reply.svg"
                        alt="reply_One"
                      />
                      <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[95%]">
                        <div className="flex flex-col gap-[26px] items-start justify-start">
                          <div className="md:h-[42px] h-[68px] relative w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 top-[0] w-max"
                              size="txtPoppinsBold28"
                            >
                              Katthak Course
                            </Text>
                            <Text
                              className="absolute bottom-[0] left-[0] text-gray-500_01 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              Pali Chandra
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-start justify-start w-[53%] md:w-full">
                            <div className="flex flex-col gap-1.5 items-center justify-start w-[26%]">
                              <Img
                                className="h-[18px]"
                                src="images/img_user_white_a700.svg"
                                alt="user_Two"
                              />
                              <Text
                                className="text-base text-gray-500_01"
                                size="txtPoppinsBold16Gray50001"
                              >
                                2.1k
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[7px] justify-start mt-0.5 w-[62%]">
                              <Img
                                className="h-[15px] ml-1.5 md:ml-[0]"
                                src="images/img_download.svg"
                                alt="download_One"
                              />
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Text
                                  className="text-base text-center text-gray-500_01"
                                  size="txtPoppinsBold16Gray50001"
                                >
                                  1.1K
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-500_01"
                                  size="txtPoppinsBold16Gray50001"
                                >
                                  1.1K
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[188px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle10.png"
                          alt="rectangleTen_One"
                        />
                      </div>
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
                    <div className="bg-black-900_04 md:h-24 sm:h-[117px] h-[177px] p-5 relative rounded-[5px] w-full">
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
                    <div className="bg-gray-900_03 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[5px] w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-start w-[71%] md:w-full">
                        <Img
                          className="h-[135px] md:h-auto object-cover rounded-[5px] w-[39%]"
                          src="images/img_rectangle77.png"
                          alt="rectangleSeventySeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtPoppinsBold40WhiteA700"
                          >
                            1st
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-500 sm:text-xl"
                            size="txtPoppinsMedium24Gray500"
                          >
                            Melissa Brown
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="gap-2 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[5px] w-full">
                      <div className="bg-gray-900_03 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[5px] w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <Img
                            className="h-[77px] md:h-auto object-cover rounded-[5px] w-[43%]"
                            src="images/img_rectangle78.png"
                            alt="rectangleSeventyEight"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsBold32"
                            >
                              2nd
                            </Text>
                            <Text
                              className="mt-[3px] text-base text-gray-500"
                              size="txtPoppinsMedium16"
                            >
                              Anne Long
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_03 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[5px] w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-start ml-0.5 md:ml-[0] w-[68%] md:w-full">
                          <Img
                            className="h-[77px] md:h-auto object-cover rounded-[5px] w-[47%]"
                            src="images/img_rectangle79.png"
                            alt="rectangleSeventyNine"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsBold32"
                            >
                              3rd
                            </Text>
                            <Text
                              className="text-base text-gray-500"
                              size="txtPoppinsMedium16"
                            >
                              Chris Do
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_03 flex flex-1 flex-col items-start justify-start p-2 rounded-[5px] w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-start mb-0.5 ml-1 md:ml-[0] w-[33%] md:w-full">
                          <Img
                            className="h-[77px] md:h-auto mt-0.5 object-cover rounded-[5px] w-[46%]"
                            src="images/img_rectangle80.png"
                            alt="rectangleEighty"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsBold32"
                            >
                              4th
                            </Text>
                            <Text
                              className="text-base text-gray-500"
                              size="txtPoppinsMedium16"
                            >
                              Cris Josh
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_03 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[5px] w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start ml-0.5 md:ml-[0] w-[44%] md:w-full">
                          <Img
                            className="h-[77px] md:h-auto object-cover rounded-[5px] w-[35%]"
                            src="images/img_rectangle82.png"
                            alt="rectangleEightyTwo"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsBold32"
                            >
                              5th
                            </Text>
                            <Text
                              className="mt-0.5 text-base text-gray-500"
                              size="txtPoppinsMedium16"
                            >
                              Stacey Williams
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_02 flex flex-col items-start justify-start mt-[5px] p-2.5 rounded-[5px] w-full">
                      <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                          <Img
                            className="h-[77px] md:h-auto object-cover rounded-[5px]"
                            src="images/img_rectangle3_77x75.png"
                            alt="rectangleThree"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsBold32"
                            >
                              103rd
                            </Text>
                            <Text
                              className="text-base text-gray-500"
                              size="txtPoppinsMedium16"
                            >
                              Nevill Puth
                            </Text>
                          </div>
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

export default DashboardOnePage;
