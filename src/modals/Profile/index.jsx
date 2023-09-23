import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input } from "components";

const ProfileModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_07 flex flex-col gap-6 items-start justify-start mt-[88px] p-16 md:px-5 rounded-[12px] w-auto md:w-full">
          <Input
            name="group336"
            placeholder="Name"
            className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
            wrapClassName="w-full"
            type="text"
            shape="round"
            color="black_900_07"
            size="sm"
            variant="fill"
          ></Input>
          <Input
            name="group337"
            placeholder="Link"
            className="leading-[normal] md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
            wrapClassName="w-full"
            shape="round"
            color="black_900_07"
            size="sm"
            variant="fill"
          ></Input>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[562px] sm:min-w-full text-2xl md:text-[22px] text-center sm:text-xl"
            shape="round"
            color="red_500"
            size="lg"
            variant="fill"
          >
            Save
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ProfileModal;
