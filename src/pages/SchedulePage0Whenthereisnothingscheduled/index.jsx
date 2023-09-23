import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const SchedulePage0WhenthereisnothingscheduledPage = () => {
  const sideBarMenu = [
    {
      icon: <Img className="h-6" src="images/img_upload.svg" alt="upload" />,
      label: "Uploads",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px]"
          src="images/img_calendar_white_a700.svg"
          alt="calendar"
        />
      ),
      label: "Schedule",
      href: "/schedulepage0whenthereisnothingscheduled",
      active:
        window.location.pathname ===
        "/schedulepage0whenthereisnothingscheduled",
    },
    {
      icon: <Img className="h-7 w-7" src="images/img_user.svg" alt="user" />,
      label: "Profile",
      href: "/profiletwo",
      active: window.location.pathname === "/profiletwo",
    },
    {
      icon: (
        <Img
          className="h-[27px] w-[26px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Settings",
      href: "/settingsexpanded",
      active: window.location.pathname === "/settingsexpanded",
    },
  ];
  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[417px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-end justify-end p-[30px] sm:px-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[37px] mt-[19px] w-full" />
            </div>
            <div className="flex flex-col items-center justify-start p-[37px] sm:px-5 w-[99%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Schedule
              </Text>
              <Img
                className="h-[314px] md:h-auto mt-[140px] object-cover w-[18%] sm:w-full"
                src="images/img_untitled51.png"
                alt="untitledFiftyOne"
              />
              <Text
                className="mt-[15px] text-center text-white-A700 text-xl"
                size="txtPoppinsMedium20WhiteA700"
              >
                Looks like you haven’t scheduled anything yet!
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[65px] items-center justify-start mb-[189px] mt-[57px] w-[22%] md:w-full"
                style={{ backgroundImage: "url('images/img_group92.svg')" }}
              >
                <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 w-[85%] md:w-full">
                  <div className="h-[60px] relative w-[26%]">
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                      size="txtPoppinsRegular40"
                    >
                      +
                    </Text>
                    <div className="absolute border border-solid border-white-A700 h-[39px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                  </div>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Schedule Workshop
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePage0WhenthereisnothingscheduledPage;
