import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Text, TextArea } from "components";
import Header from "components/Header";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const SettingsExpandedPage = () => {
  const sideBarMenu = [
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
          src="images/img_settings_white_a700_27x26.svg"
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
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[129px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-8 justify-start md:px-5 w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="bg-black-900 flex flex-col items-end justify-end p-[29px] sm:px-5 w-full">
                <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[38px] mt-[21px] w-full" />
              </div>
              <Text
                className="md:ml-[0] ml-[70px] mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Edit{" "}
                </span>
                <span className="text-gray-500 font-poppins text-left font-normal">
                  Profile
                </span>
              </Text>
              <div className="bg-black-900_01 flex flex-col items-center justify-start ml-11 md:ml-[0] mr-[146px] mt-[31px] p-12 md:px-10 sm:px-5 rounded-[10px] w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start w-[22%] md:w-full">
                    <div className="bg-gray-900_08 h-[234px] rounded-[50%] w-[234px]"></div>
                    <div className="flex flex-col gap-[23px] items-center justify-start w-[88%] md:w-full">
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[204px] rounded-[5px] text-base text-center"
                        color="white_A700"
                        size="md"
                        variant="outline"
                      >
                        Delete Profile Image
                      </Button>
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[203px] rounded-[5px] text-base text-center"
                        color="red_500"
                        size="md"
                        variant="fill"
                      >
                        Change Profile Photo
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start md:mt-0 mt-[37px] w-[72%] md:w-full">
                    <Input
                      name="groupTwentyFour"
                      placeholder="Full Name"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                      type="text"
                      shape="round"
                      color="black_900_07"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Input
                      name="groupTwentyThree"
                      placeholder="Username"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                      type="text"
                      shape="round"
                      color="black_900_07"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <TextArea
                      className="bg-black-900_07 border-0 leading-[normal] pb-[35px] pt-[11px] sm:px-5 px-[34px] rounded-[10px] shadow-bs text-2xl md:text-[22px] placeholder:text-gray-800 text-gray-800 text-left sm:text-xl w-full"
                      name="groupTwenty"
                      placeholder="Bio"
                      name="groupTwenty"
                      placeholder="Bio"
                    ></TextArea>
                    <Input
                      name="groupTwentyTwo"
                      placeholder="Phone Number"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                      type="number"
                      shape="round"
                      color="black_900_07"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between w-full">
                      <Input
                        name="groupTwentyOne"
                        placeholder="Email ID"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="email"
                        shape="round"
                        color="black_900_07"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[78px] sm:mt-0 my-2.5 rounded-[5px] text-base text-center"
                        color="teal_A400"
                        size="md"
                        variant="fill"
                      >
                        Verify
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[70px] mt-[76px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Social{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Links
                </span>
              </Text>
            </div>
            <div className="bg-black-900_01 flex flex-col items-center justify-start ml-11 md:ml-[0] mr-[146px] p-[65px] md:px-10 sm:px-5 rounded-[10px] w-[88%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[76%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between w-full">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                  <Input
                    name="groupTwentySeven"
                    placeholder="Instagram.com/"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                    wrapClassName="md:flex-1 md:w-full"
                    shape="round"
                    color="black_900_07"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[57px] items-center justify-between w-full">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Input
                    name="groupTwentyNine"
                    placeholder="Facebook.com/"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                    wrapClassName="md:flex-1 md:w-full"
                    shape="round"
                    color="black_900_07"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between w-full">
                  <Img
                    className="h-[30px]"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Input
                    name="groupTwentyEight"
                    placeholder="Twitter.com/"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="black_900_07"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="h-[65px] relative w-full">
                  <Img
                    className="absolute h-[65px] inset-y-[0] my-auto right-[0]"
                    src="images/img_group105.svg"
                    alt="group105"
                  />
                  <div className="absolute flex flex-row gap-[90px] h-max inset-y-[0] items-end justify-start left-[0] my-auto w-[34%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[26px] items-end justify-end mb-[3px] mt-1.5 p-[5px] w-[13%]"
                      style={{
                        backgroundImage: "url('images/img_group99.svg')",
                      }}
                    >
                      <Img
                        className="h-3.5 mr-[5px]"
                        src="images/img_vector_gray_50.svg"
                        alt="vector"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtPoppinsRegular24Gray800"
                    >
                      Youtube.com/
                    </Text>
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

export default SettingsExpandedPage;
