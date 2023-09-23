import React from "react";

import { Button, Img, Input } from "components";

import { CloseSVG } from "../../assets/images";

const Header2 = (props) => {
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
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[129px] w-[15%] md:w-full">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[185px]"
            leftIcon={
              <Img
                className="h-8 mt-0.5 mb-px mr-5"
                src="images/img_notification_blue_gray_400_01.svg"
                alt="notification"
              />
            }
            shape="round"
            color="black_900_03"
            size="lg"
            variant="fill"
          >
            <div className="!text-blue_gray-400_01 font-poppins leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
              Alerts
            </div>
          </Button>
        </div>
        <Img
          className="h-[50px] md:h-auto mb-[9px] md:ml-[0] ml-[129px] md:mt-0 mt-1.5 object-cover rounded-[10px] w-[50px]"
          src="images/img_rectangle3_1.png"
          alt="rectangleThree"
        />
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
