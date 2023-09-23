import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageSevenPage = () => {
  const navigate = useNavigate();

  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[31px] sm:pl-5 pl-[31px] w-full">
        <div className="flex flex-col items-start justify-start max-w-[1889px] mb-6 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-start md:mt-0 mt-[35px] w-[16%] md:w-full">
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
            <div className="bg-black-900 flex md:flex-1 flex-col items-end justify-end p-[29px] sm:px-5 w-4/5 md:w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[38px] mt-[21px] w-full" />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[29px] mt-[23px] w-[34%] md:w-full">
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[161px] sm:mt-0 mt-[43px]"
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
            <Text
              className="mb-[25px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Your Courses
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3.5 w-[96%] md:w-full">
            <div className="flex flex-col gap-[42px] justify-start md:mt-0 mt-11 w-[15%] md:w-full">
              <div className="flex flex-col gap-[39px] justify-start w-full">
                <div
                  className="common-pointer flex flex-row gap-[21px] items-start justify-start md:ml-[0] ml-[27px] w-[55%] md:w-full"
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
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtPoppinsBold20"
                  >
                    Analytics
                  </Text>
                </div>
                <Input
                  name="group103"
                  placeholder="Uploads"
                  className="!placeholder:text-white-A700 !text-white-A700 font-bold leading-[normal] p-0 text-left text-xl w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <div className="mb-1.5 mr-[19px] sm:w-full sm:mx-0 w-[11%] bg-white-A700">
                      <Img
                        className="my-auto"
                        src="images/img_upload_white_a700.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="black_900_03"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[25px] w-[68%] md:w-full">
                <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[82%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-[23px] items-start justify-start w-full"
                    onClick={() =>
                      navigate("/schedulepage1whenthereissomethingscheduledtwo")
                    }
                  >
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
                <div className="flex flex-row gap-[22px] items-start justify-start md:ml-[0] ml-[3px] mt-[59px] w-[74%] md:w-full">
                  <Img
                    className="h-[27px] w-[26px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtPoppinsBold20"
                  >
                    Settings
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[181px] mt-[362px] rounded-[5px] text-center text-xl"
                  color="red_500"
                  size="xl"
                  variant="fill"
                >
                  Home
                </Button>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-center justify-start mb-[382px] md:ml-[0] ml-[168px] pb-4 rounded-[10px] w-auto sm:w-full">
              <div className="h-60 relative w-full">
                <Img
                  className="h-60 m-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle5.png"
                  alt="rectangleFive"
                />
                <Button
                  className="absolute cursor-pointer font-medium leading-[normal] min-w-[111px] right-[4%] rounded-[20px] text-base text-center top-[7%]"
                  color="green_A400"
                  size="sm"
                  variant="fill"
                >
                  Published
                </Button>
              </div>
              <div className="flex flex-col gap-3.5 items-center justify-start w-[93%] md:w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtPoppinsBold20WhiteA700"
                >
                  How To Get 10k Followers On Instagram Per Week
                </Text>
                <div className="flex flex-row h-11 md:h-auto items-center justify-between w-[396px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    ₹699
                  </Text>
                  <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                    <Line className="bg-white-A700 h-[18px] w-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-center justify-start mb-[382px] md:ml-[0] ml-[41px] pb-4 rounded-[10px] w-auto sm:w-full">
              <div className="bg-red-500 flex flex-col gap-[9px] justify-start p-4 rounded-[10px] w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[72px] md:ml-[0] ml-[323px] rounded-[20px] text-base text-center"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Draft
                </Button>
                <div className="bg-white-A700 flex flex-col h-[98px] items-center justify-start mb-[61px] md:ml-[0] ml-[138px] mr-[159px] p-8 sm:px-5 rounded-[50%] w-[98px]">
                  <Img
                    className="h-[33px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[42px] items-start justify-start w-[93%] md:w-full">
                <Text
                  className="text-white-A700 text-xl w-[254px]"
                  size="txtPoppinsBold20WhiteA700"
                >
                  How To Grow on Youtube
                </Text>
                <div className="flex flex-row h-11 md:h-auto items-center justify-between w-[396px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsBold24WhiteA700"
                  >
                    ₹₹₹
                  </Text>
                  <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                    <Line className="bg-white-A700 h-[18px] w-1" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer border-2 border-dashed border-gray-500_02 flex flex-col items-center justify-end ml-10 md:ml-[0] p-[47px] md:px-10 sm:px-5 rounded-[10px] w-[24%] md:w-full"
              onClick={() => navigate("/uploadcoursepagenine")}
            >
              <div className="flex flex-col gap-4 items-center justify-start w-[36%] md:w-full">
                <Img
                  className="h-[98px] w-[98px]"
                  src="images/img_plus_gray_500_02.svg"
                  alt="plus"
                />
                <Text
                  className="text-center text-gray-500_02 text-xl"
                  size="txtPoppinsMedium20Gray50002"
                >
                  New Course
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursePageSevenPage;
