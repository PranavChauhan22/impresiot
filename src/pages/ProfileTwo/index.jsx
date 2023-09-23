import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const ProfileTwoPage = () => {
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
      icon: (
        <Img
          className="h-7 w-7"
          src="images/img_user_white_a700_28x28.svg"
          alt="user"
        />
      ),
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
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[42px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-end justify-end p-[29px] sm:px-5 w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[38px] mt-[21px] w-full" />
            </div>
            <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-[91%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-start justify-start w-[89%] md:w-full">
                <Img
                  className="h-[349px] sm:h-auto object-cover rounded-[25px] w-[24%] md:w-full"
                  src="images/img_rectangle_349x285.png"
                  alt="rectangle"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start md:mt-0 mt-[7px] w-[72%] md:w-full">
                  <div className="md:h-[59px] h-[93px] relative w-[59%] sm:w-full">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsRegular24"
                      >
                        Dancer
                      </Text>
                    </div>
                    <div className="flex flex-col h-full items-center justify-start ml-[350px] mr-[70px] mt-1.5 w-[31%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[151px] text-center text-xl"
                            shape="round"
                            color="gray_900_07"
                            size="sm"
                            variant="fill"
                          >
                            Edit Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row font-calibri inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                        size="txtCalibriBold48"
                      >
                        Jerry Mist
                      </Text>
                      <Button
                        className="flex h-[45px] items-center justify-center my-1.5 w-[45px] mr-[-200px]"
                        shape="round"
                        color="gray_900_07"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_group195.svg" alt="group195" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-500_01 sm:text-xl w-full"
                      size="txtPoppinsRegular24Gray50001"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi in in augue pulvinar nulla mauris ut a ut. Id varius
                      amet ac mauris tellus justo, faucibus elit. Adipiscing in
                      elementum magna non blandit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                <div className="flex flex-col gap-[30px] justify-start w-full">
                  <Text
                    className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Links
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Input
                      name="group102"
                      placeholder="Instagram"
                      className="leading-[normal] md:text-[22px] p-1 placeholder:text-gray-500 sm:text-xl text-xl text-left w-full"
                      wrapClassName="flex md:flex-1 md:w-full"
                      prefix={
                        <div className="h-[0px] mb-px mr-[25px] w-[38px] bg-white-A700">
                          <Img
                            className="h-[38px] my-auto"
                            src="images/img_camera.svg"
                            alt="camera"
                          />
                        </div>
                      }
                      shape="round"
                      color="black_900_01"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Input
                      name="group103"
                      placeholder="Facebook"
                      className="leading-[normal] md:text-[22px] p-1 placeholder:text-gray-500 sm:text-xl text-xl text-left w-full"
                      wrapClassName="flex md:flex-1 md:w-full"
                      prefix={
                        <Img
                          className="h-[38px] mr-[25px] my-auto"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                      }
                      shape="round"
                      color="black_900_01"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Input
                      name="group104"
                      placeholder="Twitter"
                      className="leading-[normal] md:text-[22px] p-1 placeholder:text-gray-500 sm:text-xl text-xl text-left w-full"
                      wrapClassName="flex md:flex-1 md:w-full"
                      prefix={
                        <div className="mt-2 mb-px mr-[25px] bg-blue-A400 h-[0px]">
                          <Img
                            className="my-auto"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </div>
                      }
                      shape="round"
                      color="black_900_01"
                      size="md"
                      variant="fill"
                    ></Input>
                    <div className="bg-black-900_01 flex flex-col items-center justify-start p-3.5 rounded-[10px] shadow-bs">
                      <div className="flex flex-row gap-[25px] items-center justify-start w-[91%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[25px] items-end justify-end pl-[15px] pb-[5px] w-[24%]"
                          style={{
                            backgroundImage: "url('images/img_group99.svg')",
                          }}
                        >
                          <Img
                            className="h-3.5 mr-1.5"
                            src="images/img_vector_gray_50.svg"
                            alt="vector"
                          />
                        </div>
                        <Text
                          className="text-l md:text-[22px] text-gray-500 sm:text-xl"
                          size="txtPoppinsRegular24Gray500"
                        >
                          Youtube
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer h-[65px] leading-[normal] md:text-3xl sm:text-[28px] text-[32px] text-center w-[65px]"
                      shape="round"
                      color="black_900_01"
                      size="sm"
                      variant="fill"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[11px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtPoppinsBold32"
                >
                  Schedule
                </Text>
                <div className="md:h-[1177px] sm:h-[558px] h-[559px] relative w-full">
                  <Text
                    className="ml-[11px] mt-[241px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Courses
                  </Text>
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[25px] items-end justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                            <div className="md:h-[187px] h-[188px] relative w-[49%] md:w-full">
                              <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[23px] sm:px-5 rounded-[10px] w-full">
                                <Text
                                  className="ml-3.5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                  size="txtPoppinsBold28"
                                >
                                  Scheduled Live
                                </Text>
                                <Text
                                  className="ml-3.5 md:ml-[0] mt-[27px] text-base text-white-A700"
                                  size="txtPoppinsBold16WhiteA700"
                                >
                                  Starts in
                                </Text>
                                <Text
                                  className="mb-[5px] ml-3.5 md:ml-[0] mt-2.5 text-gray-500_01 text-xl"
                                  size="txtPoppinsBold20Gray50001"
                                >
                                  2 D : 12H : 12M : 16Sec
                                </Text>
                              </div>
                              <div className="absolute bg-red-500 flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[13px] right-[0] rounded-[10px] shadow-bs w-[40%]">
                                <div className="flex flex-col gap-[9px] justify-start mb-[52px] mr-6 w-[58%] md:w-full">
                                  <Img
                                    className="h-10 md:ml-[0] ml-[66px] w-10"
                                    src="images/img_eye.svg"
                                    alt="eye"
                                  />
                                  <Text
                                    className="mr-[87px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                                    size="txtPoppinsSemiBold40"
                                  >
                                    Live
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-black-900_01 flex md:flex-1 flex-col items-end justify-start sm:pl-5 pl-[38px] rounded-[10px] w-[49%] md:w-full">
                              <div className="flex md:flex-col flex-row gap-[59px] items-center justify-end w-full">
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                    size="txtPoppinsBold28"
                                  >
                                    Katthak Workshop
                                  </Text>
                                  <Text
                                    className="mt-[25px] text-base text-white-A700"
                                    size="txtPoppinsBold16WhiteA700"
                                  >
                                    Workshop Starts in
                                  </Text>
                                  <Text
                                    className="mt-2 text-gray-500_01 text-xl"
                                    size="txtPoppinsBold20Gray50001"
                                  >
                                    18 D : 16H : 32M : 16Sec
                                  </Text>
                                </div>
                                <Img
                                  className="md:flex-1 h-[188px] sm:h-auto object-cover rounded-[10px] w-[48%] md:w-full"
                                  src="images/img_rectangle10.png"
                                  alt="rectangleTen"
                                />
                              </div>
                            </div>
                          </div>
                          <Text
                            className="text-gray-800 text-xl underline"
                            size="txtPoppinsRegular20Gray800"
                          >
                            See All....
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[26px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[70px] w-full"
                        orientation="horizontal"
                      >
                        <div className="h-[188px] relative w-full">
                          <div className="h-[188px] m-auto w-full">
                            <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[10px] w-full">
                              <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] mt-[55px] w-[22%] md:w-full">
                                <Text
                                  className="text-base text-gray-500"
                                  size="txtPoppinsRegular16Gray500"
                                >
                                  freeCodeCamp
                                </Text>
                                <Text
                                  className="line-through mt-4 text-base text-gray-600_01 text-right"
                                  size="txtPoppinsRegular16"
                                >
                                  ₹699
                                </Text>
                                <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                                    size="txtPoppinsRegular24"
                                  >
                                    ₹389
                                  </Text>
                                  <div className="flex flex-col items-center justify-start">
                                    <Button
                                      className="cursor-pointer leading-[normal] min-w-[58px] rounded-[5px] text-center text-sm"
                                      color="light_green_A700"
                                      size="xs"
                                      variant="fill"
                                    >
                                      -44%
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[188px] inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-[40%]"
                              src="images/img_rectangle5_240x426.png"
                              alt="rectangleFive"
                            />
                          </div>
                          <Text
                            className="absolute left-[4%] text-base text-white-A700 top-[12%]"
                            size="txtPoppinsBold16WhiteA700"
                          >
                            <>
                              Learn React JS in This 7-Hour <br />
                              Course
                            </>
                          </Text>
                        </div>
                        <div className="h-[188px] relative w-full">
                          <div className="h-[188px] m-auto w-full">
                            <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[10px] w-full">
                              <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] mt-[55px] w-[22%] md:w-full">
                                <Text
                                  className="text-base text-gray-500"
                                  size="txtPoppinsRegular16Gray500"
                                >
                                  freeCodeCamp
                                </Text>
                                <Text
                                  className="line-through mt-4 text-base text-gray-600_01 text-right"
                                  size="txtPoppinsRegular16"
                                >
                                  ₹699
                                </Text>
                                <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                                    size="txtPoppinsRegular24"
                                  >
                                    ₹389
                                  </Text>
                                  <div className="flex flex-col items-center justify-start">
                                    <Button
                                      className="cursor-pointer leading-[normal] min-w-[58px] rounded-[5px] text-center text-sm"
                                      color="light_green_A700"
                                      size="xs"
                                      variant="fill"
                                    >
                                      -44%
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[188px] inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-[40%]"
                              src="images/img_rectangle5_240x426.png"
                              alt="rectangleFive"
                            />
                          </div>
                          <Text
                            className="absolute left-[4%] text-base text-white-A700 top-[12%]"
                            size="txtPoppinsBold16WhiteA700"
                          >
                            <>
                              Learn React JS in This 7-Hour <br />
                              Course
                            </>
                          </Text>
                        </div>
                      </List>
                      <Text
                            className="text-gray-800 text-xl underline"
                            size="txtPoppinsRegular20Gray800"
                          >
                            See All....
                          </Text>
                    </div>
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

export default ProfileTwoPage;
