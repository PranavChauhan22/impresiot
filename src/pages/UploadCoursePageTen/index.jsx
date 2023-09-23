import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageTenPage = () => {
  const navigate = useNavigate();

  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[371px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto md:px-5 top-[0]">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start ml-8 md:ml-[0] mr-[55px] mt-8 w-[77%]">
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
            <div className="flex flex-col items-start justify-start mb-[111px] md:ml-[0] ml-[72px] mr-[94px] mt-[31px] w-[56%]">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Img
                  className="h-[33px] w-[33px]"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtPoppinsBold32"
                >
                  Courses
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-16 pl-4 md:pr-10 pr-14 sm:pr-5 py-3 w-[200px]"
                onClick={() => navigate("/uploadcoursepagenine")}
              >
                <Text
                  className="text-gray-800_02 text-xl w-auto"
                  size="txtPoppinsBold20Gray80002"
                >
                  Course Info
                </Text>
              </div>
              <Text
                className="bg-black-900_03 justify-center mt-10 pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[10px] text-blue_gray-100 text-xl w-[200px]"
                size="txtPoppinsBold20Bluegray100"
              >
                Curriculum
              </Text>
              <Button
                className="cursor-pointer font-bold mt-[390px] text-center text-xl w-[204px]"
                shape="round"
                color="white_A700"
                size="xl"
                variant="outline"
              >
                Save
              </Button>
              <Button
                className="cursor-pointer font-bold mt-6 text-center text-xl w-[204px]"
                shape="round"
                color="red_500"
                size="xl"
                variant="fill"
              >
                Publish
              </Button>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[22px] justify-start md:px-5 w-full">
            <div className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-end p-10 sm:px-5 w-full">
              <Input
                name="groupThirtySeven"
                placeholder="Search...."
                value={groupthirtysevenvalue}
                onChange={(e) => setGroupthirtysevenvalue(e)}
                className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="flex md:flex-1 w-[55%] md:w-full"
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
              <Button
                className="flex h-[65px] items-center justify-center md:ml-[0] ml-[100px] w-[65px]"
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
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[22px] w-[11%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[156px]"
                  leftIcon={
                    <div className="mr-[13px] bg-gray-800 my-[5px]">
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
              <Img
                className="h-[65px] md:h-auto md:ml-[0] ml-[78px] mr-[34px] object-cover rounded-[10px] w-[65px]"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[148px] w-[86%] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Curriculum
              </Text>
              <div className="border-2 border-gray-800_02 border-solid flex flex-col items-center justify-start mt-[25px] p-[21px] sm:px-5 rounded-[10px] w-full">
                <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start mb-[27px] mt-[19px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start md:mt-0 mt-[150px] w-[3%] md:w-full">
                    <div className="bg-blue_gray-100 h-1 w-full"></div>
                    <div className="bg-blue_gray-100 h-1 w-full"></div>
                    <div className="bg-blue_gray-100 h-1 w-full"></div>
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start w-[97%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[59%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        Section:
                      </Text>
                      <Input
                        name="groupFifteen"
                        placeholder="Title"
                        className="md:text-[22px] p-0 placeholder:text-gray-500_87 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-[83%] md:w-full"
                        shape="round"
                        color="black_900_04"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="border-2 border-gray-800_02 border-solid flex md:flex-col flex-row md:gap-10 gap-[150px] items-start justify-start sm:px-5 px-9 py-8 rounded-[10px] w-auto md:w-full">
                          <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between w-[69%] md:w-full">
                            <Text
                              className="md:mt-0 mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPoppinsSemiBold24"
                            >
                              Lecture:
                            </Text>
                            <div className="flex flex-col gap-5 items-start justify-start max-w-[638px] w-full">
                              <Input
                                name="group349"
                                placeholder="Title"
                                className="md:text-[22px] p-0 placeholder:text-gray-500_87 sm:text-xl text-2xl text-left w-full"
                                wrapClassName="w-[91%]"
                                shape="round"
                                color="black_900_04"
                                size="md"
                                variant="fill"
                              ></Input>
                              <div className="bg-black-900_04 flex flex-col items-start justify-start p-1.5 rounded-[10px] shadow-bs">
                                <Text
                                  className="mb-[81px] md:ml-[0] ml-[22px] text-2xl md:text-[22px] text-gray-500_87 sm:text-xl"
                                  size="txtPoppinsRegular24Gray50087"
                                >
                                  Description
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold text-center text-xl w-[204px]"
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          >
                            Upload
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold text-center text-xl w-[204px]"
                      shape="round"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      New Lecture
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold mt-10 text-center text-xl w-[204px]"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                New Section
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursePageTenPage;
