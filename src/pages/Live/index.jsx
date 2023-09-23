import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";

const LivePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[41px] mx-auto md:px-5 w-full">
          <div className="flex flex-col justify-start w-full">
            <Sidebar className="!sticky !w-[217px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
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
            </Sidebar>
            <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between md:ml-[0] ml-[11px] mt-[23px] w-full">
              <div className="bg-black-900_06 flex md:flex-1 flex-col items-center justify-start p-[227px] md:px-10 sm:px-5 rounded-[10px] w-[71%] md:w-full">
                <Img
                  className="h-[273px]"
                  src="images/img_vector_gray_400_01.svg"
                  alt="vector"
                />
              </div>
              <div className="bg-black-900_06 flex md:flex-1 flex-col gap-[19px] justify-end p-[15px] rounded-[10px] w-[29%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] mr-[118px] mt-[11px] w-[72%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-gray-500"
                    size="txtPoppinsSemiBold26Gray500"
                  >
                    Live Chat
                  </Text>
                  <Img
                    className="h-[17px] mt-[114px]"
                    src="images/img_vector19.svg"
                    alt="vectorNineteen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector18.svg"
                    alt="vectorEighteen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector18.svg"
                    alt="vectorSeventeen"
                  />
                  <Img
                    className="h-[17px] mt-[43px]"
                    src="images/img_vector16.svg"
                    alt="vectorSixteen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector15.svg"
                    alt="vectorFifteen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector15.svg"
                    alt="vectorFourteen"
                  />
                  <Img
                    className="h-[17px] mt-[43px]"
                    src="images/img_vector13.svg"
                    alt="vectorThirteen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector12.svg"
                    alt="vectorTwelve"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector12.svg"
                    alt="vectorEleven"
                  />
                  <Img
                    className="h-[17px] mt-[43px]"
                    src="images/img_vector10.svg"
                    alt="vectorTen"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector9.svg"
                    alt="vectorNine"
                  />
                  <Img
                    className="h-[17px] mt-[13px]"
                    src="images/img_vector9.svg"
                    alt="vectorEight"
                  />
                </div>
                <div className="bg-gray-900_05 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-4 rounded-[10px] w-full">
                  <Input
                    name="group212"
                    placeholder="Type a Message...."
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-gray-800 text-left w-full"
                    wrapClassName="sm:flex-1 sm:ml-[0] ml-[11px] sm:mt-0 mt-[5px] w-[77%] sm:w-full"
                  ></Input>
                  <Img
                    className="h-[21px] ml-3 sm:ml-[0] w-[22px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Img
                    className="h-[21px] sm:ml-[0] ml-[25px]"
                    src="images/img_send.svg"
                    alt="send"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[653px] mt-[67px] w-[64%] md:w-full">
              <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-center justify-start p-[21px] sm:px-5 rounded-[42px] shadow-bs w-[85px]">
                <Img
                  className="h-[42px]"
                  src="images/img_microphone.svg"
                  alt="microphone"
                />
              </div>
              <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-center justify-start md:ml-[0] ml-[30px] p-5 rounded-[42px] shadow-bs w-[85px]">
                <Img
                  className="h-[27px] my-[9px]"
                  src="images/img_videocamera_white_a700.svg"
                  alt="videocamera"
                />
              </div>
              <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-end justify-start md:ml-[0] ml-[30px] p-[18px] rounded-[42px] shadow-bs w-[85px]">
                <Img
                  className="h-[38px] my-[5px]"
                  src="images/img_settings_white_a700.svg"
                  alt="settings"
                />
              </div>
              <div className="bg-red-500 flex flex-col h-[85px] items-center justify-start md:ml-[0] ml-[30px] p-5 rounded-[42px] shadow-bs w-[85px]">
                <Img
                  className="h-[21px] my-[11px]"
                  src="images/img_reply_white_a700.svg"
                  alt="reply"
                />
              </div>
              <div className="bg-gray-900_06 flex flex-col h-[85px] items-center justify-start md:ml-[0] ml-[30px] p-[22px] sm:px-5 rounded-[42px] shadow-bs w-[85px]">
                <Img
                  className="h-10"
                  src="images/img_overflowmenu_white_a700.svg"
                  alt="overflowmenu"
                />
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[133px] md:ml-[0] ml-[481px] md:mt-0 my-[13px]"
                rightIcon={
                  <Img
                    className="h-5 mt-[9px] mb-1.5 ml-3"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                }
                shape="round"
                color="red_500"
                size="md"
                variant="fill"
              >
                <div className="font-semibold leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                  Live
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivePage;
