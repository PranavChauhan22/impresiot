import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const SettingsExpandedOnePage = () => {
  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-24 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[3px] p-8 md:px-5 w-[22%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-[23px] w-[81%] md:w-full">
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
              <div className="flex flex-col gap-[42px] justify-start mt-[77px] w-[95%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[25px] w-[61%] md:w-full">
                  <div className="flex flex-row gap-[25px] items-center justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_home_gray_800.svg"
                      alt="home"
                    />
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[21px] items-start justify-start mt-[58px] w-[90%] md:w-full">
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
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[19px] items-start justify-start mt-[58px] w-[82%] md:w-full">
                    <Img
                      className="h-6"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Uploads
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-14 w-[91%] md:w-full">
                    <div className="flex flex-row gap-[23px] items-start justify-start w-full">
                      <Img
                        className="h-[30px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-gray-800 text-xl"
                        size="txtPoppinsBold20"
                      >
                        Schedule
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[3px] mt-[54px] w-[70%] md:w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtPoppinsBold20"
                    >
                      Profile
                    </Text>
                  </div>
                </div>
                <Input
                  name="group138"
                  placeholder="Settings"
                  className="!placeholder:text-white-A700 !text-white-A700 font-bold leading-[normal] p-0 text-left text-xl w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <div className="mb-0.5 mr-[21px] w-[26px] bg-white-A700">
                      <Img
                        className="my-auto"
                        src="images/img_settings_white_a700_27x26.svg"
                        alt="settings"
                      />
                    </div>
                  }
                  shape="round"
                  color="black_900_03"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[181px] ml-6 md:ml-[0] mt-[259px] rounded-[5px] text-center text-xl"
                color="red_500"
                size="xl"
                variant="fill"
              >
                Home
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] justify-start md:px-5 w-[79%] md:w-full">
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
              <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start ml-11 md:ml-[0] mt-[31px] w-[88%] md:w-full">
                <div className="bg-black-900_01 flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                    <div className="flex flex-col gap-[35px] items-center justify-start w-[21%] md:w-full">
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
                    <div className="flex flex-col gap-6 items-center justify-start md:mt-0 mt-[37px] w-[73%] md:w-full">
                      <Input
                        name="group131"
                        placeholder="Full Name"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        type="text"
                        shape="round"
                        color="black_900_07"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Input
                        name="group130"
                        placeholder="Username"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        type="text"
                        shape="round"
                        color="black_900_07"
                        size="md"
                        variant="fill"
                      ></Input>
                      <TextArea
                        className="bg-black-900_07 border-0 leading-[normal] pb-[35px] pt-[11px] sm:px-5 px-[34px] rounded-[10px] shadow-bs text-2xl md:text-[22px] placeholder:text-gray-800 text-gray-800 text-left sm:text-xl w-full"
                        name="group126"
                        placeholder="Bio"
                        name="group126"
                        placeholder="Bio"
                      ></TextArea>
                      <Input
                        name="group129"
                        placeholder="Phone Number"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        type="number"
                        shape="round"
                        color="black_900_07"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Input
                        name="group128"
                        placeholder="Email ID"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        type="email"
                        shape="round"
                        color="black_900_07"
                        size="md"
                        variant="fill"
                      ></Input>
                      <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                        <Input
                          name="group127"
                          placeholder="Password"
                          className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                          wrapClassName="sm:flex-1 sm:w-full"
                          type="password"
                          shape="round"
                          color="black_900_07"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[111px] rounded-[5px] text-base text-center"
                          color="teal_A400"
                          size="2xl"
                          variant="fill"
                        >
                          Verify
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] justify-start w-full">
                  <Text
                    className="ml-10 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    Payments
                  </Text>
                  <div className="bg-black-900_01 flex flex-col items-center justify-end p-[45px] md:px-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                      <div className="bg-black-900_07 flex flex-col items-start justify-start p-[35px] sm:px-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start md:ml-[0] ml-[21px] w-[53%] md:w-full">
                          <div className="h-[72px] relative w-[12%] md:w-full">
                            <div className="absolute bg-gray-900_08 border-[5px] border-dashed border-gray-500_03 h-[70px] inset-[0] justify-center m-auto rounded-[50%] w-[70px]"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-max"
                              size="txtPoppinsLight48"
                            >
                              +
                            </Text>
                          </div>
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800"
                            size="txtPoppinsMedium32"
                          >
                            Add Another Payment Method
                          </Text>
                        </div>
                      </div>
                      <div className="bg-black-900_07 flex flex-col items-start justify-start rounded-[10px] shadow-bs w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-start justify-start w-[93%] md:w-full">
                          <div className="h-[328px] relative w-[48%] md:w-full">
                            <div className="bg-blue-500 flex flex-col h-full items-end justify-end m-auto p-8 sm:px-5 rounded-[10px] w-full">
                              <Img
                                className="h-[31px] mr-2.5 mt-[233px]"
                                src="images/img_vector.svg"
                                alt="vector"
                              />
                            </div>
                            <div className="absolute flex flex-col md:gap-10 gap-[87px] h-max inset-[0] justify-center m-auto w-[85%]">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-[73px]"
                                  src="images/img_vector_blue_100.svg"
                                  alt="vector_One"
                                />
                                <Line className="bg-blue-900 h-2.5 mb-3.5 mt-[49px] w-[33%]" />
                              </div>
                              <div className="flex flex-col gap-[42px] items-start justify-start md:ml-[0] ml-[17px] w-[88%] md:w-full">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 tracking-[2.88px]"
                                  size="txtPoppinsBold32Teal900"
                                >
                                  1234 XXXX XXXX 3133
                                </Text>
                                <Line className="bg-blue-900 h-2.5 w-[38%]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start md:mt-0 mt-[35px] w-[47%] md:w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[2.88px]"
                              size="txtPoppinsBold32Gray500"
                            >
                              TEJAS MAHESHWARI
                            </Text>
                            <Text
                              className="mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[2.88px]"
                              size="txtPoppinsBold32Gray500"
                            >
                              1234 XXXX XXXX 3133
                            </Text>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[65px] w-full">
                              <div className="flex sm:flex-1 flex-row items-center justify-between w-[68%] sm:w-full">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[2.88px]"
                                  size="txtPoppinsBold32Gray500"
                                >
                                  XX/XX
                                </Text>
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[2.88px]"
                                  size="txtPoppinsBold32Gray500"
                                >
                                  XXX
                                </Text>
                              </div>
                              <Img
                                className="h-[37px] mb-1 sm:mt-0 mt-[7px]"
                                src="images/img_car.svg"
                                alt="car"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[31px] justify-start ml-11 md:ml-[0] w-[88%] md:w-full">
              <Text
                className="md:ml-[0] ml-[26px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Social{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Links
                </span>
              </Text>
              <div className="bg-black-900_01 flex flex-col items-center justify-start p-[65px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-[76%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between w-full">
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                    <Input
                      name="group135"
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
                      name="group137"
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
                      name="group136"
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
                          alt="vector_Two"
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
      </div>
    </>
  );
};

export default SettingsExpandedOnePage;
