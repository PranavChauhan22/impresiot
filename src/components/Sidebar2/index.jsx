import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar2 = (props) => {
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

  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start ml-8 md:ml-[0] mr-[101px] mt-8 w-[69%]">
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
        <Menu
          menuItemStyles={{
            button: {
              padding: "17px 17px 17px 25px",
              gap: "25px",
              marginTop: "58px",
              color: "#494949",
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "Poppins",
              borderRadius: "10px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                backgroundColor: "#000000ff !important",
                boxShadow: "0px 4px  73px -21px #bfbfbf3f",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-[60px] pl-8 md:pr-10 pr-[115px] sm:px-5 w-[65%]"
        >
          <SubMenu
            icon={
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_home_gray_800.svg"
                alt="home"
              />
            }
            label={<Text>Dashboard</Text>}
          >
            <div className="flex flex-col items-center justify-end mt-6 w-full">
              <MenuItem
                active={
                  window.location.pathname === "/analyticswhennodataavailable"
                }
              >
                <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[50px]">
                  <Text>Analytics</Text>
                </div>
              </MenuItem>
            </div>
          </SubMenu>
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <Button
          className="cursor-pointer font-poppins font-semibold leading-[normal] mb-[55px] min-w-[181px] ml-14 md:ml-[0] mr-[180px] mt-[292px] rounded-[5px] text-center text-xl"
          color="red_500"
          size="xl"
          variant="fill"
        >
          Home
        </Button>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
