import React from "react";

import { Button, Img, Input, Text } from "components";

const CreateAccountPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[62px] items-center justify-end mx-auto pt-[55px] w-full">
        <div className="bg-black-900_01 border border-gray-900_06 border-solid flex flex-col items-center justify-start p-7 md:px-5 rounded-[5px] w-[33%] md:w-full">
          <div className="flex flex-col gap-8 items-center justify-start mb-[5px] w-[93%] md:w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[63px] md:h-auto object-cover w-[95%] sm:w-full"
                src="images/img_group141.png"
                alt="group141"
              />
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtPoppinsMedium24">Create Account</Text>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14"
                >
                  Full Name
                </Text>
                <Input
                  name="rectangleTwentyFour"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex h-[34px] w-full"
                  shape="square"
                  color="blue_gray_100_01"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Contact
                  </Text>
                  <Input
                    name="rectangleTwentyFive"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Email
                  </Text>
                  <Input
                    name="rectangleTwentyFive_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Password
                  </Text>
                  <Input
                    name="rectangleTwentyFive_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Confirm Password
                  </Text>
                  <Input
                    name="rectangleTwentyFive_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-between mt-[29px] w-full">
                <div className="flex flex-col items-start justify-start w-[46%]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    Country
                  </Text>
                  <Input
                    name="rectangleTwentyFive_Four"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] mt-1 w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[47%]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPoppinsMedium14"
                  >
                    State
                  </Text>
                  <Input
                    name="rectangleTwentySix"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="blue_gray_100_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start mt-[38px] w-[58%] md:w-full">
                <div className="bg-red-500 flex flex-col h-4 items-center justify-start mb-0.5 p-0.5 rounded w-4">
                  <Img
                    className="h-[7px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-white-A700 text-xs"
                  size="txtPoppinsMedium12"
                >
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    I Agree to{" "}
                  </span>
                  <span className="text-red-A100 font-poppins text-left font-medium">
                    Terms and Conditions
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[329px] ml-7 md:ml-[0] mt-[23px] text-base text-center"
                shape="round"
                color="red_500"
                size="xl"
                variant="fill"
              >
                Sign In
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[110px] mt-[29px] w-[44%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xs"
                  size="txtPoppinsMedium12"
                >
                  New User?{" "}
                </Text>
                <a href="javascript:" className="text-red-A100 text-xs">
                  <Text size="txtPoppinsMedium12RedA100">Create Account</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black-900 flex items-center justify-center md:px-5 w-full">
          <Text
            className="mb-[30px] mt-[27px] mx-auto text-center text-white-A700 text-xs"
            size="txtPoppinsMedium12"
          >
            © Impresiot, Inc. 2022
          </Text>
        </footer>
      </div>
    </>
  );
};

export default CreateAccountPage;
