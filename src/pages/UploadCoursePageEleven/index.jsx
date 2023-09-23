import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, Text, TextArea } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageElevenPage = () => {
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
            <div className="flex flex-col items-center justify-start p-[35px] sm:px-5 w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[17px] w-[99%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtPoppinsLight48"
                >
                  Complete Beginners Guide to Blender 2.8
                </Text>
                <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between mt-[18px] w-full">
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4"
                    orientation="horizontal"
                  >
                    <div className="bg-deep_orange-100_01 border-[5px] border-solid border-white-A700 flex flex-col items-center justify-end sm:ml-[0] p-[53px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-16"
                        src="images/img_minimize_red_a700.svg"
                        alt="minimize"
                      />
                    </div>
                    <div className="bg-green-A100_01 flex flex-col items-center justify-end sm:ml-[0] p-[53px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-16"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                    </div>
                    <div className="bg-purple-100 flex flex-col items-center justify-end sm:ml-[0] p-[53px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-16"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    </div>
                    <div className="bg-deep_orange-100_01 flex flex-col items-center justify-end sm:ml-[0] p-[53px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-16"
                        src="images/img_minimize_red_a700.svg"
                        alt="minimize"
                      />
                    </div>
                  </List>
                  <Button
                    className="flex h-10 items-center justify-center mb-[62px] md:mt-0 mt-[70px] rounded-[50%] w-10"
                    shape="circle"
                    color="gray_900_03"
                    size="lg"
                    variant="fill"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start mt-8">
                  <Text
                    className="text-center text-white-A700 text-xl underline"
                    size="txtPoppinsSemiBold20"
                  >
                    Arrange Videos
                  </Text>
                </div>
                <Input
                  name="groupThirtySeven_One"
                  placeholder="Title of the Lecture"
                  className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-solid border-white-A700 mt-[95px] rounded-[5px] w-[58%]"
                  color="black_900_03"
                  size="md"
                  variant="fill"
                ></Input>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[23px] w-[99%] md:w-full">
                  <TextArea
                    className="bg-black-900_03 border border-solid border-white-A700 leading-[normal] mb-[53px] pb-[35px] pt-[15px] sm:px-5 px-[34px] rounded-[5px] text-2xl md:text-[22px] placeholder:text-gray-800 text-gray-800 text-left sm:text-xl w-[59%] sm:w-full"
                    name="groupSixtyFive"
                    placeholder="Description of the Lecture"
                    name="groupSixtyFive"
                    placeholder="Description of the Lecture"
                  ></TextArea>
                  <div className="bg-gray-800_02 flex flex-col h-[26px] items-center justify-start mb-3 md:ml-[0] ml-[217px] md:mt-0 mt-[276px] rounded-[50%] w-[26px]">
                    <Text
                      className="text-base text-center text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      ?
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[30px] items-center justify-between ml-3.5 md:ml-[0] md:mt-0 mt-[261px] w-[24%] md:w-full">
                    <div className="h-[53px] relative w-[46%]">
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
                      className="cursor-pointer font-semibold leading-[normal] min-w-[144px] rounded-[5px] text-center text-xl"
                      color="red_500"
                      size="md"
                      variant="fill"
                    >
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursePageElevenPage;
