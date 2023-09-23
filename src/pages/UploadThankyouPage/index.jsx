import React from "react";

import { Button, Text } from "components";

const UploadThankyouPagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[330px] md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[35px] md:text-5xl text-8xl text-white-A700"
          size="txtPoppinsBold96"
        >
          Thank you
        </Text>
        <Text
          className="mt-7 text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-[67%] sm:w-full"
          size="txtPoppinsRegular36"
        >
          Your course is uploaded and will be published shortly on our platform.
        </Text>
        <Button
          className="cursor-pointer font-bold mt-10 text-center text-xl w-[204px]"
          shape="round"
          color="red_500"
          size="xl"
          variant="fill"
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default UploadThankyouPagePage;
