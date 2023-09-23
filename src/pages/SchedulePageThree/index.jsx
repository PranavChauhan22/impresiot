import React from "react";

import { Button, Img, Text } from "components";

const SchedulePageThreePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-start justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[84px] justify-start mb-[132px] md:ml-[0] ml-[37px] md:px-5 w-[87%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[14%] md:w-full">
            <div className="flex flex-row items-center justify-evenly w-full">
              <Img
                className="h-[85px] md:h-auto object-cover w-[85px]"
                src="images/img_impresiotlogo1.png"
                alt="impresiotlogoOne"
              />
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                size="txtPoppinsSemiBold26"
              >
                Impresiot
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between ml-2.5 md:ml-[0] w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[729px] items-center justify-end p-[42px] md:px-10 sm:px-5 w-[74%] md:w-full"
              style={{ backgroundImage: "url('images/img_group179.svg')" }}
            >
              <div className="flex flex-row gap-[30px] items-center justify-center mt-[560px] w-[19%] md:w-full">
                <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-center justify-start p-[21px] sm:px-5 rounded-[42px] shadow-bs w-[85px]">
                  <Img
                    className="h-[42px]"
                    src="images/img_microphone.svg"
                    alt="microphone"
                  />
                </div>
                <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-center justify-start p-5 rounded-[42px] shadow-bs w-[85px]">
                  <Img
                    className="h-[27px] my-[9px]"
                    src="images/img_videocamera_white_a700.svg"
                    alt="videocamera"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[267px] w-[26%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtPoppinsRegular32"
                >
                  Your workshop for
                </Text>
                <Text
                  className="mt-[26px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtPoppinsBold48"
                >
                  Workshop name
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start mt-[17px] w-[69%] md:w-full">
                  <Text
                    className="mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsRegular32"
                  >
                    will begin in
                  </Text>
                  <Text
                    className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsBold32"
                  >
                    5:09
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold mt-[52px] text-center text-xl w-[204px]"
                  shape="round"
                  color="red_500"
                  size="xl"
                  variant="fill"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePageThreePage;
