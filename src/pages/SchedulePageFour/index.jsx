import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const SchedulePageFourPage = () => {
  const navigate = useNavigate();

  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-8 sm:pl-5 pl-8 w-full">
        <div className="flex flex-col gap-[18px] justify-start max-w-[1888px] mb-[27px] mx-auto md:px-5 w-full">
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
            <div className="bg-black-900 flex md:flex-1 flex-col items-end justify-end p-[30px] sm:px-5 w-4/5 md:w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full" />
            </div>
          </div>
          <div className="flex flex-col justify-start ml-10 md:ml-[0] w-[64%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[63%] md:w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[9px] min-w-[198px]"
                onClick={() =>
                  navigate("/schedulepage1whenthereissomethingscheduledtwo")
                }
                leftIcon={
                  <Img
                    className="h-[33px] mt-2 mb-1.5 mr-3"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-3xl sm:text-[28px] text-[32px] text-left text-white-A700">
                  Schedule
                </div>
              </Button>
              <Text
                className="sm:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Schedule Workshop
              </Text>
            </div>
            <div className="bg-gray-700_02 flex flex-col items-center justify-start md:ml-[0] ml-[397px] mr-[373px] mt-[22px] p-12 md:px-10 sm:px-5 rounded-[10px] w-[36%] md:w-full">
              <div className="flex flex-col gap-2 items-center justify-start mb-[5px] w-[47%] md:w-full">
                <div className="h-[98px] relative w-[98px]">
                  <div className="absolute border-[7px] border-solid border-white-A700 h-[98px] inset-[0] justify-center m-auto rounded-[50%] w-[98px]"></div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[64px] text-white-A700 w-max"
                    size="txtPoppinsMedium64"
                  >
                    +
                  </Text>
                </div>
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Add Thumbnail
                </Text>
              </div>
            </div>
            <Input
              name="title"
              placeholder="Title of the Workshop"
              className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
              wrapClassName="border border-solid border-white-A700 md:ml-[0] ml-[397px] mt-[58px] w-[67%]"
              shape="round"
              color="black_900_03"
              size="sm"
              variant="fill"
            ></Input>
            <div className="bg-black-900_03 border border-solid border-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[397px] mt-[23px] p-[15px] rounded-[10px]">
              <Text
                className="mb-[193px] md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsRegular24Gray800"
              >
                Description of the Workshop
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] w-full">
              <Button
                className="cursor-pointer font-bold md:mt-0 mt-[45px] text-center text-xl w-[204px]"
                shape="round"
                color="red_500"
                size="xl"
                variant="fill"
              >
                Schedule
              </Button>
              <Input
                name="date"
                placeholder="DD-MM-YYYY"
                className="font-light leading-[normal] p-0 placeholder:text-gray-800 text-base text-left w-full"
                wrapClassName="flex md:flex-1 ml-48 md:ml-[0] w-[33%] md:w-full"
                suffix={
                  <Img
                    className="mt-0.5 mb-px h-5 ml-[35px]"
                    src="images/img_calendar_gray_800.svg"
                    alt="calendar"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="outline"
              ></Input>
              <Input
                name="time"
                placeholder="HH-MM"
                className="font-light leading-[normal] p-0 placeholder:text-gray-800 text-base text-left w-full"
                wrapClassName="flex md:flex-1 ml-6 md:ml-[0] w-[33%] md:w-full"
                suffix={
                  <div className="h-5 mt-px mb-0.5 ml-[35px] pt-[5px] pb-[9px] pl-[9px] pr-[5px] w-5 bg-gray-800 rounded-[50%]">
                    <Img
                      className="h-1.5 my-auto"
                      src="images/img_folder.svg"
                      alt="folder"
                    />
                  </div>
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="outline"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePageFourPage;
