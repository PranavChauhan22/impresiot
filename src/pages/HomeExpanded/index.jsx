import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import Header2 from "components/Header2";
import Sidebar3 from "components/Sidebar3";

import { CloseSVG } from "../../assets/images";

const HomeExpandedPage = () => {
  const sideBarMenu = [
    {
      label: (
        <Button className="bg-gray-800 flex h-7 items-center justify-center mb-2.5 p-2 rounded-[50%] w-7">
          <Img className="h-[11px]" src="images/img_offer.svg" alt="offer" />
        </Button>
      ),
    },
    { label: <MenuItem>"Explore"</MenuItem> },
    {
      icon: <Img className="h-[26px]" src="images/img_trash.svg" alt="trash" />,
      label: "Library",
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
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto pb-8 w-full">
        <Sidebar3 className="!sticky !w-[417px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 font-calibri h-[1559px] sm:h-[1731px] md:h-[2889px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[72px] inset-x-[0] justify-start mx-auto p-[34px] sm:px-5 w-[99%]">
            <div className="sm:h-44 md:h-[1836px] h-[189px] ml-1 md:ml-[0] relative w-[86%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[97%]">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[19px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.48px]"
                    size="txtCalibriBold32"
                  >
                    <span className="text-white-A700 font-poppins text-left font-bold">
                      Creators{" "}
                    </span>
                    <span className="text-gray-500 tracking-[-0.64px] font-poppins text-left font-normal">
                      you Follow{" "}
                    </span>
                  </Text>
                  <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between mt-[23px] w-full">
                    <List
                      className="sm:flex-col flex-row gap-[31px] grid grid-cols-2"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col sm:ml-[0] relative w-full">
                        <Img
                          className="h-[78px] mx-auto rounded-[50%] w-[78px]"
                          src="images/img_rectangle.png"
                          alt="rectangle"
                        />
                        <div className="bg-red-500 flex flex-col items-end justify-start mt-[-7px] mx-auto rounded-[1px] shadow-bs w-[35%] z-[1]">
                          <div className="flex flex-row items-start justify-evenly w-3/4 md:w-full">
                            <Text
                              className="text-[8px] text-white-A700"
                              size="txtPoppinsSemiBold8"
                            >
                              Live
                            </Text>
                            <Img
                              className="h-1 w-1"
                              src="images/img_group54.svg"
                              alt="groupFiftyFour"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:ml-[0] relative w-full">
                        <Img
                          className="h-[78px] mx-auto rounded-[50%] w-[78px]"
                          src="images/img_ellipse2.png"
                          alt="ellipseTwo"
                        />
                        <div className="bg-red-500 flex flex-col items-end justify-start mt-[-7px] mx-auto rounded-[1px] shadow-bs w-[35%] z-[1]">
                          <div className="flex flex-row items-start justify-evenly w-3/4 md:w-full">
                            <Text
                              className="text-[8px] text-white-A700"
                              size="txtPoppinsSemiBold8"
                            >
                              Live
                            </Text>
                            <Img
                              className="h-1 w-1"
                              src="images/img_group54.svg"
                              alt="groupFiftyFour"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse5.png"
                      alt="ellipseFive"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse6.png"
                      alt="ellipseSix"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse7.png"
                      alt="ellipseSeven"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse8.png"
                      alt="ellipseEight"
                    />
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse9.png"
                      alt="ellipseNine"
                    />
                    <div className="flex flex-col h-[78px] items-center justify-start w-[78px]">
                      <Img
                        className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                    </div>
                    <div className="bg-gray-300_01 flex flex-col font-calibri h-[78px] items-center justify-start mb-[7px] p-4 rounded-[50%] w-[78px]">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-700_01"
                        size="txtCalibriBold36"
                      >
                        +7
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-calibri md:gap-10 items-start justify-between md:ml-[0] ml-[5px] mt-1.5 w-[98%] md:w-full">
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Jerry Mist
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Luna Gomez
                    </Text>
                    <Text
                      className="md:mt-0 mt-0.5 text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Marie Lynch
                    </Text>
                    <Text
                      className="mb-0.5 text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Alice Walker
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Matt Mane
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Chris Pete
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Jasmine K
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Kate Nedd
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Tushar Verma
                    </Text>
                    <Text
                      className="text-base text-center text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      Abdul Samad
                    </Text>
                    <Text
                      className="text-base text-gray-500_01"
                      size="txtCalibriBold16"
                    >
                      More
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-black-900_11 bottom-[0] h-[140px] inset-x-[0] mx-auto w-full"></div>
            </div>
            <div className="flex flex-col font-poppins mb-4 ml-3 md:ml-[0] mr-[47px] relative w-[96%] md:w-full">
              <div className="md:h-[616px] h-[617px] sm:h-[648px] mx-auto w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtCalibriBold32"
                      >
                        <span className="text-white-A700 font-poppins text-left font-bold">
                          Recommended{" "}
                        </span>
                        <span className="text-gray-500 font-poppins text-left font-normal">
                          Courses for you
                        </span>
                      </Text>
                      <Text
                        className="mb-0.5 sm:mt-0 mt-[7px] text-gray-800 text-xl underline"
                        size="txtPoppinsLight20"
                      >
                        View More...
                      </Text>
                    </div>
                    <Img
                      className="h-[432px] mt-6"
                      src="images/img_group167.svg"
                      alt="group167"
                    />
                    <Text
                      className="mt-[90px] text-gray-800 text-xl underline"
                      size="txtPoppinsLight20"
                    >
                      View More...
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[432px] right-[0] top-[10%]"
                  src="images/img_group168.svg"
                  alt="group168"
                />
                <Img
                  className="absolute h-[432px] left-[0] top-[10%]"
                  src="images/img_group166.svg"
                  alt="group166"
                />
              </div>
              <div className="flex flex-col font-calibri items-center justify-start mt-[-37.4px] mx-auto w-full z-[1]">
                <div className="flex flex-col gap-6 justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtCalibriBold32"
                    >
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        Upcoming{" "}
                      </span>
                      <span className="text-gray-500 font-poppins text-left font-normal">
                        Workshops for you
                      </span>
                    </Text>
                  </div>
                  <div className="gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <Img
                      className="flex-1 h-[432px] w-full"
                      src="images/img_group50.svg"
                      alt="groupFifty"
                    />
                    <Img
                      className="flex-1 h-[432px] w-full"
                      src="images/img_group170.svg"
                      alt="group170"
                    />
                    <Img
                      className="flex-1 h-[432px] w-full"
                      src="images/img_group171.svg"
                      alt="group171"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900 flex flex-col font-poppins inset-x-[0] items-end justify-end mx-auto p-[30px] sm:px-5 top-[0] w-full">
            <Header2 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExpandedPage;
