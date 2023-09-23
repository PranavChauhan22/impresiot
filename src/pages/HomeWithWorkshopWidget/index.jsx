import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HomeWithWorkshopWidgetPage = () => {
  const sideBarMenu = [
   
    {
      icon: <Img className="h-[26px]" src="images/img_trash.svg" alt="trash" />,
      label: "Explore",
    },    {
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
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[417px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start mb-[-105px] ml-8 mr-[101px] mt-8 w-[69%]">
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
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "25px",
                marginTop: "5px",
                paddingTop: "16px",
                paddingBottom: "25px",
                color: "#494949",
                fontWeight: 700,
                fontSize: "20px",
                borderRadius: "10px",
                paddingLeft: "25px",
                paddingRight: "25px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  backgroundColor: "#000000ff !important",
                  boxShadow: "0px 4px  73px -21px #bfbfbf3f",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-[10px] mt-48 pl-8 md:pr-10 pr-[115px] sm:px-5 w-[65%]"
          >
            <SubMenu
              icon={
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_home_white_a700.svg"
                  alt="home"
                />
              }
              label={<Text>Home</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            className="cursor-pointer font-semibold leading-[normal] ] min-w-[181px] ml-14 mr-[180px]  text-center text-xl p-[10px]"
            shape="round"
            color="red_500"
            size="l"
            variant="fill"
          
          >
            Creator Studio
          </Button>
        </Sidebar>
        <div className="flex-1 font-calibri h-[2043px] md:px-5 relative w-full">
          <div className="bg-black-900 flex flex-col font-poppins items-end justify-end mb-[-9px] mx-auto p-[30px] sm:px-5 w-full z-[1]">
            <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full">
              <Input
                name="groupThirtySeven"
                placeholder="Search...."
                value={groupthirtysevenvalue}
                onChange={(e) => setGroupthirtysevenvalue(e)}
                className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="flex md:flex-1 w-[62%] md:w-full"
                suffix={
                  groupthirtysevenvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-1 mb-[3px] cursor-pointer h-7 ml-[35px]"
                      onClick={() => setGroupthirtysevenvalue("")}
                      fillColor="#494949"
                      height={28}
                      width={28}
                      viewBox="0 0 28 28"
                    />
                  ) : (
                    <Img
                      className="mt-1 mb-[3px] cursor-pointer h-7 ml-[35px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                color="black_900_03"
                size="md"
                variant="fill"
              ></Input>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[100px] w-[19%] md:w-full">
                <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    shape="round"
                    color="black_900_03"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                  </Button>
                  <div className="flex flex-col items-center justify-start">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[156px]"
                      rightIcon={
                        <div className="ml-3 bg-gray-800 my-[5px]">
                          <Img
                            src="images/img_videocamera.svg"
                            alt="video_camera"
                          />
                        </div>
                      }
                      shape="round"
                      color="black_900_03"
                      size="xl"
                      variant="fill"
                    >
                      <div className="font-semibold leading-[normal] text-left text-xl">
                        Go Live
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[50px] md:h-auto md:ml-[0] ml-[100px] md:mt-0 my-2 object-cover rounded-[10px] w-[50px]"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
            </header>
          </div>
          <div className="flex flex-col items-start justify-start mt-auto mx-auto sm:pl-5 pl-[34px] py-[34px] w-full">
            <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-4/5 md:w-full">
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
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[23px] w-full">
                  <List
                    className="sm:flex-col flex-row font-poppins gap-[31px] grid grid-cols-2"
                    orientation="horizontal"
                  >
                    {/* <div className="flex flex-col sm:ml-[0] relative w-full">
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
                    </div> */}
                    {/* <div className="flex flex-col sm:ml-[0] relative w-full">
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
                    </div> */}
                  </List>
                  <Img
                        className="h-[78px] md:h-auto rounded-[50%] w-[78px] ml-[-28px] m-[5px]"
                        src="images/img_rectangle.png"
                        alt="rectangle"
                      />
                      <Img
                        className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse3.png"
                    alt="ellipseThree"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                    src="images/img_ellipse4.png"
                    alt="ellipseFour"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse5.png"
                    alt="ellipseFive"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse6.png"
                    alt="ellipseSix"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse7.png"
                    alt="ellipseSeven"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse8.png"
                    alt="ellipseEight"
                  />
                  <Img
                    className="h-[78px] md:h-auto rounded-[50%] w-[78px] m-[5px]"
                    src="images/img_ellipse9.png"
                    alt="ellipseNine"
                  />
                  <div className="flex flex-col h-[78px] items-center justify-start w-[78px] m-[5px]">
                    <Img
                      className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                  </div>
                  <Text
                    className="bg-gray-300_01 h-[78px] justify-center mb-[7px] px-5 py-4 rounded-[50%] text-4xl sm:text-[32px] md:text-[34px] text-gray-700_01 w-[78px] m-[5px]"
                    size="txtCalibriBold36"
                  >
                    +7
                  </Text>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-[65px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtCalibriBold32"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Upcoming{" "}
                </span>
                <span className="text-gray-500 font-poppins text-left font-normal">
                  Events
                </span>
              </Text>
            </div>
            <div className="font-poppins ml-3.5 md:ml-[0] mt-6 overflow-x-auto w-[99%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[107%] md:w-full">
                  <div className="h-[246px] relative w-full">
                    <div className="absolute bg-black-900_01 md:h-[201px] h-[246px] inset-[0] justify-center m-auto p-[19px] rounded-[10px] w-full">
                      <div className="absolute flex flex-col gap-[21px] h-max inset-y-[0] items-start justify-start left-[5%] my-auto w-[41%]">
                        <Text
                          className="text-white-A700 text-l"
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
                            Workshop is
                          </Text>
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-500_01"
                            size="txtPoppinsBold40"
                          >
                            Ongoing
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[13%] flex flex-col items-center justify-start left-[50%] w-[11%]" style={{zIndex:"100"}}>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[99px] text-base text-center"
                          shape="round"
                          color="red_500"
                          size="sm"
                          variant="fill"
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                    <div className="absolute h-[246px] inset-y-[0] my-auto right-[0] w-[51%] sm:w-full">
                      <Img
                        className="h-[246px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle36.png"
                        alt="rectangleThirtySix"
                      />
                      <div className="absolute bg-gradient1  h-[246px] inset-[0] justify-center m-auto rotate-[180deg] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[107%] md:w-full">
                  <div className="h-[246px] relative w-full">
                    <div className="absolute bg-black-900_01 md:h-[201px] h-[246px] inset-[0] justify-center m-auto p-[19px] rounded-[10px] w-full">
                      <div className="absolute flex flex-col gap-[21px] h-max inset-y-[0] items-start justify-start left-[5%] my-auto w-[41%]">
                        <Text
                          className="text-white-A700 text-l"
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
                            Workshop is
                          </Text>
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-500_01"
                            size="txtPoppinsBold40"
                          >
                            Ongoing
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[13%] flex flex-col items-center justify-start left-[50%] w-[11%]" style={{zIndex:"100"}}>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[99px] text-base text-center"
                          shape="round"
                          color="red_500"
                          size="sm"
                          variant="fill"
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                    <div className="absolute h-[246px] inset-y-[0] my-auto right-[0] w-[51%] sm:w-full">
                      <Img
                        className="h-[246px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle36.png"
                        alt="rectangleThirtySix"
                      />
                      <div className="absolute bg-gradient1  h-[246px] inset-[0] justify-center m-auto rotate-[180deg] w-full"></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start ml-3 md:ml-[0] mt-[81px] w-[93%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
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
                    className="mb-0.5 md:mt-0 mt-[7px] text-gray-800 text-xl underline"
                    size="txtPoppinsLight20"
                  >
                    View More...
                  </Text>
                </div>
                <div className="gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="md:h-[431px] h-[332px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[5px] mt-[246px] w-full">
                        <Text
                          className="text-white-A700 text-xl w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          How To Get 10k Followers On Instagram Per Week
                        </Text>
                        <div className="flex flex-row gap-[19px] items-end justify-between w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-4/5">
                            <Text
                              className="text-gray-500 text-xl"
                              size="txtPoppinsRegular20"
                            >
                              Creator - The Futur, Chris Do
                            </Text>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] rounded-[5px] text-base text-center"
                                color="amber_A400"
                                size="xs"
                                variant="fill"
                              >
                                BestSeller
                              </Button>
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
                          <div className="h-[55px] mt-[18px] relative w-[60px]">
                            <Text
                              className="line-through mb-[-0.79px] ml-auto text-base text-gray-600_01 text-right z-[1]"
                              size="txtPoppinsRegular16"
                            >
                              ₹699
                            </Text>
                            <Text
                              className="mt-auto mx-auto text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsRegular24"
                            >
                              ₹389
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive"
                    />
                  </div>
                  <div className="md:h-[431px] h-[332px] sm:h-[492px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[5px] mt-[246px] w-full">
                        <Text
                          className="text-white-A700 text-xl w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          Photoshop for Beginners | FREE COURSE
                        </Text>
                        <div className="flex flex-row gap-[19px] items-end justify-between w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-4/5">
                            <Text
                              className="text-gray-500 text-xl"
                              size="txtPoppinsRegular20"
                            >
                              Creator - The Futur, Chris Do
                            </Text>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] rounded-[5px] text-base text-center"
                                color=""
                                size="xs"
                                variant="fill"
                              >
                              </Button>
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
                          <div className="h-[55px] mt-[18px] relative w-[60px]">
                            <Text
                              className="line-through mb-[-0.79px] ml-auto text-base text-gray-600_01 text-right z-[1]"
                              size="txtPoppinsRegular16"
                            >
                              ₹699
                            </Text>
                            <Text
                              className="mt-auto mx-auto text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsRegular24"
                            >
                              ₹389
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                  </div>
                  <div className="md:h-[431px] h-[332px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start mb-3 mt-[253px] w-[99%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl w-[98%] sm:w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          Free Figma UX Design UI Essentials Course
                        </Text>
                        <Text
                          className="mt-0.5 text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          Bring Your Own Laptop
                        </Text>
                        <div className="flex flex-row gap-[19px] items-end justify-between w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-4/5">
                            <Text
                              className="text-gray-500 text-xl"
                              size="txtPoppinsRegular20"
                            >
                              Creator - The Futur, Chris Do
                            </Text>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[80px] rounded-[5px] text-base text-center"
                                color="amber_A400"
                                size="xs"
                                variant="fill"
                              >
                                Latest
                              </Button>
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[58px] rounded-[5px] text-center text-sm"
                                color=""
                                size="xs"
                                variant="fill"
                              >
                                
                              </Button>
                            </div>
                          </div>
                          <div className="h-[55px] mt-[18px] relative w-[60px]">
                            <Text
                              className="line-through mb-[-0.79px] ml-auto text-base text-gray-600_01 text-right z-[1]"
                              size="txtPoppinsRegular16"
                            >
                              ₹699
                            </Text>
                            <Text
                              className="mt-auto mx-auto text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsRegular24"
                            >
                              ₹389
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start mb-32 ml-3 md:ml-[0] mt-[81px] w-[93%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                  <div className="flex flex-col font-calibri items-center justify-start">
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
                  <Text
                    className="mb-0.5 sm:mt-0 mt-[7px] text-gray-800 text-xl underline"
                    size="txtPoppinsLight20"
                  >
                    View More...
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="md:h-[430px] h-[262px] relative w-full">
                        <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 rounded-[10px] w-full">
                          <div className="flex flex-col items-center justify-start mb-[5px] mt-[246px] w-full">
                            <Text
                              className="text-white-A700 text-xl w-full"
                              size="txtPoppinsBold20WhiteA700"
                            >
                              Learn React JS in This Free 7-Hour Course
                            </Text>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mb-[7px] text-gray-500 text-xl"
                                size="txtPoppinsRegular20"
                              >
                                freeCodeCamp
                              </Text>
                              {/* <Text
                                className="mt-[13px] text-base text-white-A700"
                                size="txtPoppinsRegular16WhiteA700"
                              >
                                4 Days Left
                              </Text> */}
                            </div>
                            <div className="flex flex-row items-start justify-between mt-[5px] w-full mt-[20px]">
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[58px] rounded-[5px] text-center text-sm"
                                color="light_green_A700"
                                size="xs"
                                variant="fill"
                              >
                                Free
                              </Button>
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[109px] rounded-[5px] text-base text-center"
                                color="red_500"
                                size="xs"
                                variant="fill"
                              >
                                Register
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                          src="images/img_rectangle5_240x426.png"
                          alt="rectangleFive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[431px] h-[262px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[5px] mt-[246px] w-full">

                        <Text
                          className="text-white-A700 text-xl w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          Photoshop for Beginners | FREE COURSE
                        </Text>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-gray-500 text-xl"
                            size="txtPoppinsRegular20"
                          >
                            Envato Tuts+
                          </Text>
                          <div className="flex flex-col gap-[5px] items-end justify-start mt-3.5">
                            {/* <Text
                              className="text-base text-right text-white-A700"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              1 Day Left
                            </Text> */}
                            <div style={{marginTop:"20px"}}>

                            <Button
                              className="cursor-pointer leading-[normal] min-w-[109px] rounded-[5px] text-base text-center"
                              color="red_500"
                              size="xs"
                              variant="fill"
                              >
                              Register
                            </Button>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                  </div>
                  <div className="md:h-[431px] h-[262px] relative w-full">
                    <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-3 mt-[253px] w-[99%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl w-[98%] sm:w-full"
                          size="txtPoppinsBold20WhiteA700"
                        >
                          Free Figma UX Design UI Essentials Course
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                          <Text
                            className="text-gray-500 text-xl"
                            size="txtPoppinsRegular20"
                          >
                            Bring Your Own Laptop
                          </Text>
                          <div className="flex flex-col gap-[7px] items-end justify-start mt-2.5">
                            {/* <Text
                              className="text-base text-right text-white-A700"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              7 Hours Left
                            </Text> */}
                                                        <div style={{marginTop:"20px"}}>

                      <Button
                              className="cursor-pointer leading-[normal] min-w-[109px] rounded-[5px] text-base text-center"
                              color="red_500"
                              size="xs"
                              variant="fill"
                            >
                              Register
                            </Button>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
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

export default HomeWithWorkshopWidgetPage;
