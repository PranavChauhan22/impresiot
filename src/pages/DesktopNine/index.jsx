import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DesktopNineColumnarrowleft from "components/DesktopNineColumnarrowleft";
import DesktopNineToolbarbrowser from "components/DesktopNineToolbarbrowser";

const DesktopNinePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[830px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
            <header className="flex flex-col items-center justify-center md:px-5 w-full">
              <DesktopNineToolbarbrowser className="flex flex-1 flex-col items-center justify-start w-full" />
              <DesktopNineColumnarrowleft className="flex flex-1 flex-col items-center justify-start w-full" />
            </header>
            <div className="bg-black-900 flex flex-col font-poppins gap-[40px] items-center justify-start w-full">
              <div className="md:h-24 h-40 md:px-5 relative w-3/5 md:w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-orange-50 sm:text-xl w-full"
                    size="txtPoppinsBold24"
                  >
                    <>One stop-solution to regulate the Creator&#39;s Economy</>
                  </Text>
                </div>
                <Text
                  className="absolute bg-clip-text bg-gradient flow-container  inset-x-[0] mx-auto md:text-5xl text-[64px] text-transparent top-[0] w-max"
                  size="txtPoppinsBold64" 
                >
                  Create Without any Limits
                </Text>
              </div>
              <div className="h-[461px] md:h-[488px] mb-[29px] md:px-5 relative w-[58%] md:w-full">
                <div className="absolute bg-black-900_33 h-[74px] right-[11%] top-[21%] w-[69%]"></div>
                <div className="bg-black-900_33 h-[41px] ml-auto mr-9 mt-[19px] w-[6%]"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[25px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group1.svg')" }}
                >
                  <div className="bg-black-900_05 h-7 mb-[381px] w-[27px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-nunitosans inset-x-[0] items-center justify-start mx-auto pb-[13px] top-[9%] w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start sm:px-5 px-8 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <Img
                    className="h-[51px] md:h-auto object-cover w-36 sm:w-full"
                    src="images/img_group141.png"
                    alt="group141"
                  />
                </div>
                <div className="flex sm:flex-1 flex-row items-center justify-between w-[19%] sm:w-full">
                  <Text
                    className="text-center text-gray-500 text-sm"
                    size="txtNunitoSansRegular14"
                  >
                    Contact
                  </Text>
                  <a className="text-center text-gray-500 text-sm">
                    <Text
                      className="common-pointer"
                      size="txtNunitoSansRegular14"
                      onClick={() => navigate("/signin")}
                    >
                      Sign in
                    </Text>
                  </a>
                  <div className="flex flex-col items-center justify-start">
                    <Button
                      className="common-pointer cursor-pointer leading-[normal] min-w-[76px] rounded-[5px] text-center text-sm"
                      onClick={() => navigate("/createaccount")}
                      size="xs"
                    >
                      Sign up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end max-w-[868px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start shadow-bs2 w-full">
            <div className="h-[486px] relative w-full">
              {/* <Img
                className="h-[666px] m-auto object-cover w-full"
                src="images/img_studiodisplay.png"
                alt="studiodisplay"
              /> */}
              <Img
                className="absolute h-[468px] inset-x-[0] mx-auto object-cover top-[3%] w-[96%]"
                src="images/img_mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
