import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar11 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_home_gray_800.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/dashboard0whennodataavailable",
      active: window.location.pathname === "/dashboard0whennodataavailable",
    },
    {
      icon: (
        <Img
          className="h-[11px] w-[11px]"
          src="images/img_volume.svg"
          alt="volume"
        />
      ),
      label: "Analytics",
      href: "/analyticswhennodataavailable",
      active: window.location.pathname === "/analyticswhennodataavailable",
    },
    {
      icon: <Img className="h-6" src="images/img_upload.svg" alt="upload" />,
      label: "Uploads",
    },
    {
      icon: (
        <Img
          className="h-[30px] mb-[3px]"
          src="images/img_calendar.svg"
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start mb-[945px] ml-8 mr-[101px] mt-8 w-[69%]">
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
              padding: "17px 17px 17px 33px",
              gap: "25px",
              marginTop: "24px",
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
          className="flex flex-col items-center justify-start mb-[412px] mt-48 pl-8 md:pr-10 pr-[115px] sm:px-5 w-[65%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <Button
            className="cursor-pointer font-poppins font-semibold leading-[normal] mb-[55px] min-w-[181px] ml-14 mr-[180px] mt-[957px] rounded-[5px] text-center text-xl"
            color="red_500"
            size="xl"
            variant="fill"
          >
            Home
          </Button>
        )}
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
