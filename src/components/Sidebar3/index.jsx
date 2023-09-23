import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar3 = (props) => {
  const sideBarMenu = [
    {
      label: (
        <Button
          className="flex h-7 items-center justify-center mb-2.5 w-7"
          shape="circle"
          color="gray_800"
          size="sm"
          variant="fill"
        >
          <Img className="h-[11px]" src="images/img_offer.svg" alt="offer" />
        </Button>
      ),
    },
    { label: <MenuItem>"Explore"</MenuItem> },
    {
      icon: <Img className="h-[26px]" src="images/img_trash.svg" alt="trash" />,
      label: "Library",
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
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start mb-[951px] ml-8 mr-[101px] mt-8 w-[69%]">
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
              padding: 0,
              gap: "25px",
              marginTop: "75px",
              paddingTop: "16px",
              paddingBottom: "25px",
              color: "#494949",
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "Poppins",
              borderRadius: "10px",
              paddingLeft: "25px",
              paddingRight: "25px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                backgroundColor: "#000000ff !important",
                boxShadow: "0px 4px  73px -21px #bfbfbf3f",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[594px] mt-48 pl-8 md:pr-10 pr-[115px] sm:px-5 w-[65%]"
        >
          <SubMenu
            icon={
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_home_white_a700.svg"
                alt="home"
              />
            }
            label={<Text>Home</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <Text
          className="mb-[78px] ml-[83px] mr-[194px] mt-[974px] text-center text-white-A700 text-xl"
          size="txtPoppinsSemiBold20"
        >
          Join Creator+
        </Text>
      </Sidebar>
    </>
  );
};

Sidebar3.defaultProps = {};

export default Sidebar3;
