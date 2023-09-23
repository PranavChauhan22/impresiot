import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UploadCoursePageNinePage = () => {
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
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[181px]"
                onClick={() => navigate("/uploadcoursepageseven")}
                leftIcon={
                  <Img
                    className="h-[33px] mr-3 my-[7px]"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-3xl sm:text-[28px] text-[32px] text-left text-white-A700">
                  Courses
                </div>
              </Button>
              <Text
                className="bg-black-900_03 justify-center mt-16 pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[10px] text-white-A700 text-xl w-[200px]"
                size="txtPoppinsBold20WhiteA700"
              >
                Course Info
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] mt-10 rounded-[5px] text-center text-xl w-[200px]"
                onClick={() => navigate("/uploadcoursepageten")}
                color="black_900"
                size="md"
                variant="fill"
              >
                Curriculum
              </Button>
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
                color="gray_500_02"
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
            <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[150px] w-[86%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Course Info
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-7 items-center justify-start w-[33%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:h-[429px] h-[432px] relative w-full">
                      <div className="absolute bg-black-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-3.5 mt-[257px] w-[98%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl w-[97%] sm:w-full"
                            size="txtPoppinsBold20WhiteA700"
                          >
                            SQL Tutorial - Full Database Course for Beginners
                          </Text>
                          <Text
                            className="mt-0.5 text-gray-500 text-xl"
                            size="txtPoppinsRegular20"
                          >
                            Creator - FreeCodeCamp.org
                          </Text>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-1 w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                              size="txtPoppinsBold24WhiteA700"
                            >
                              ₹999
                            </Text>
                            <div className="bg-gray-900_05 flex flex-col h-11 items-center justify-end p-3 rounded-[50%] w-11">
                              <Line className="bg-white-A700 h-[18px] w-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[239px] inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-full"
                        src="images/img_rectangle5_239x426.png"
                        alt="rectangleFive"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-900_09 border border-dashed border-gray-500_02 flex flex-col items-center justify-start p-[104px] md:px-10 sm:px-5 rounded-[10px] w-full">
                    <Text
                      className="text-center text-gray-500_02 text-xl"
                      size="txtPoppinsMedium20Gray50002"
                    >
                      Add Thumbnail
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[55%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Title
                    </Text>
                    <Input
                      name="group343"
                      placeholder="Title"
                      className="md:text-[22px] p-0 placeholder:text-gray-500_87 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="w-full"
                      shape="round"
                      color="black_900_03"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-3.5 justify-start mt-[21px] w-full">
                    <Text
                      className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Description
                    </Text>
                    <div className="bg-black-900_03 flex flex-col items-start justify-start p-[15px] rounded-[10px] shadow-bs w-full">
                      <Text
                        className="mb-[172px] md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-gray-500_87 sm:text-xl"
                        size="txtPoppinsRegular24Gray50087"
                      >
                        Description
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between mt-[18px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[59%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        Language
                      </Text>
                      <Input
                        name="group343_One"
                        placeholder="Enter language"
                        className="md:text-[22px] p-0 placeholder:text-gray-500_87 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        shape="round"
                        color="black_900_03"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[39%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        Price
                      </Text>
                      <Input
                        name="group343_Two"
                        placeholder="Course price"
                        className="md:text-[22px] p-0 placeholder:text-gray-500_87 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="w-full"
                        shape="round"
                        color="black_900_03"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start mt-[22px] w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Tags
                    </Text>
                    <div className="bg-black-900_03 h-16 rounded-[10px] shadow-bs w-full"></div>
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

export default UploadCoursePageNinePage;
