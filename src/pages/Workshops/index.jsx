import React from "react";

import { Button, Img, Input, Text } from "components";

const WorkshopsPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1854px] mb-[41px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[12%] md:w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[11px] mt-[23px] w-full">
            <div className="bg-black-900_06 flex md:flex-1 flex-col items-center justify-start p-[227px] md:px-10 sm:px-5 rounded-[10px] w-[49%] md:w-full">
              <Img
                className="h-[273px]"
                src="images/img_vector_gray_400_01.svg"
                alt="vector"
              />
            </div>
            <div className="md:h-[706px] h-[730px] relative w-[24%] md:w-full">
              <div className="absolute bg-black-900_06 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-end justify-start mb-[47px] mt-2.5 w-full">
                  <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                    <Text
                      className="mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-500"
                      size="txtPoppinsSemiBold26Gray500"
                    >
                      Participants
                    </Text>
                    <Text
                      className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-500 text-right"
                      size="txtPoppinsSemiBold26Gray500"
                    >
                      106
                    </Text>
                  </div>
                  <div className="md:h-[556px] h-[578px] relative w-full">
                    <Input
                      name="nameSix"
                      placeholder="Name 7"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <Input
                      name="nameSix_One"
                      placeholder="Name 6"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute bottom-[15%] inset-x-[0] mx-auto w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <Input
                      name="nameSix_Two"
                      placeholder="Name 5"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute bottom-[29%] inset-x-[0] mx-auto w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <Input
                      name="nameSix_Three"
                      placeholder="Name 4"
                      className="justify-center leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute inset-[0] m-auto w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <Input
                      name="nameSix_Four"
                      placeholder="Name 3"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute inset-x-[0] mx-auto top-[29%] w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <Input
                      name="nameSix_Five"
                      placeholder="Name 2"
                      className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="absolute mt-[84px] mx-auto w-full"
                      type="text"
                      shape="round"
                      color="gray_900_05"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <div className="absolute flex flex-col gap-8 h-max inset-[0] justify-center m-auto w-full">
                      <Input
                        name="nameSix_Six"
                        placeholder="Name 1"
                        className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="flex w-full"
                        type="text"
                        suffix={
                          <div className="h-[30px] mt-[3px] mb-0.5 ml-[35px] pt-3.5 pb-3 w-[30px] border-gray-800 border-[3px] border-solid rounded-[50%] px-2">
                            <Img
                              className="my-auto"
                              src="images/img_vector_175.svg"
                              alt="Vector 175"
                            />
                          </div>
                        }
                        shape="round"
                        color="gray_900_05"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <div className="flex flex-col gap-[54px] items-center justify-start md:ml-[0] ml-[351px] w-[8%] md:w-full">
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group328" />
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group329" />
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group330" />
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group331" />
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group332" />
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_800"
                          size="sm"
                          variant="outline"
                        >
                          <Img src="images/img_vector_175.svg" alt="group333" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[51px] h-[54px] inset-x-[0] mx-auto w-[93%] sm:w-full">
                <div className="absolute bg-gray-900_05 flex flex-col h-max inset-[0] items-end justify-center m-auto rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center mr-[19px] mt-[21px] rounded-[50%] w-[30px]"
                    shape="circle"
                    color="gray_800"
                    size="sm"
                    variant="outline"
                  >
                    <Img src="images/img_vector_175.svg" alt="group334" />
                  </Button>
                </div>
                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[6%]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtPoppinsRegular24Gray800"
                  >
                    Name 8
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_06 flex md:flex-1 flex-col gap-[37px] justify-end p-[15px] rounded-[10px] w-[24%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[114px] items-start justify-start md:ml-[0] ml-[22px] mr-[133px] mt-[11px] w-[62%] md:w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-500"
                  size="txtPoppinsSemiBold26Gray500"
                >
                  Live Chat
                </Text>
                <Img
                  className="h-[423px]"
                  src="images/img_group316.svg"
                  alt="group316"
                />
              </div>
              <div className="bg-gray-900_05 flex flex-col items-center justify-end p-4 rounded-[10px] w-full">
                <div className="flex flex-row items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <Input
                    name="typemessage"
                    placeholder="Type a Message...."
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-gray-800 text-left w-full"
                    wrapClassName="w-[76%]"
                  ></Input>
                  <Img
                    className="h-[21px] ml-3 mt-1 w-[22px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Img
                    className="h-[21px] ml-[25px] mt-1"
                    src="images/img_send.svg"
                    alt="send"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[42px] mt-[65px] w-[96%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsSemiBold32"
            >
              Workshop Name
            </Text>
            <div className="bg-blue_gray-900_01 flex flex-col h-[85px] items-center justify-start md:ml-[0] ml-[951px] p-[21px] sm:px-5 rounded-[42px] shadow-bs w-[85px]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopsPage;
