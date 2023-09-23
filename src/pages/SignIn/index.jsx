import React from "react";

import { Button, Img, Input, Text } from "components";

const SignInPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins gap-[54px] items-center justify-end mx-auto pt-[55px] w-full">
        <div className="bg-black-900_01 border border-gray-900_06 border-solid flex flex-col items-center justify-end p-7 md:px-5 rounded-[5px] w-[29%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
            <Img
              className="h-[63px] md:h-auto object-cover w-[55%] sm:w-full"
              src="images/img_group141.png"
              alt="group141"
            />
            <a
              href="javascript:"
              className="mt-[45px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            >
              <Text size="txtPoppinsMedium24">Sign In</Text>
            </a>
            <div className="flex flex-col items-center justify-start mt-[29px] w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14"
                >
                  Email
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
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[39px] w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsMedium14"
                >
                  Password
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
              <div className="flex flex-row items-start justify-start mt-[29px] w-full">
                <div className="bg-red-500 flex flex-col h-4 items-center justify-start p-0.5 rounded w-4">
                  <Img
                    className="h-[7px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="ml-2.5 text-white-A700 text-xs"
                  size="txtPoppinsMedium12"
                >
                  Remember Me
                </Text>
                <a
                  href="javascript:"
                  className="ml-[113px] text-white-A700 text-xs"
                >
                  <Text size="txtPoppinsMedium12">Forgot Password</Text>
                </a>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[329px] mt-[47px] text-base text-center"
                shape="round"
                color="red_500"
                size="xl"
                variant="fill"
              >
                Sign In
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center mt-[29px] w-[51%] md:w-full">
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

export default SignInPage;
