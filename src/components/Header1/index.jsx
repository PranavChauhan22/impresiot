import React from "react";

import { Button, Img, Input } from "components";

import { CloseSVG } from "../../assets/images";

const Header1 = (props) => {
  const [groupthirtysevenvalue, setGroupthirtysevenvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Input
          name="groupThirtySeven"
          placeholder="Search...."
          value={groupthirtysevenvalue}
          onChange={(e) => setGroupthirtysevenvalue(e)}
          className="!placeholder:text-gray-800 !text-gray-800 font-poppins leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
          wrapClassName="flex w-[62%] md:w-full"
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
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[22px] w-[13%] md:w-full">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[156px]"
            leftIcon={
              <div className="mr-3 bg-gray-800 my-[5px]">
                <Img src="images/img_videocamera.svg" alt="video_camera" />
              </div>
            }
            shape="round"
            color="black_900_03"
            size="xl"
            variant="fill"
          >
            <div className="font-poppins font-semibold leading-[normal] text-left text-xl">
              Go Live
            </div>
          </Button>
        </div>
        <Img
          className="h-[50px] md:h-auto md:ml-[0] ml-[100px] md:mt-0 my-2 object-cover rounded-[10px] w-[50px]"
          src="images/img_rectangle3.png"
          alt="rectangleThree"
        />
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
