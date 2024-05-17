import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className=" w-full bg-gradient-to-b from-orange-500 to-orange-700 text-white">
      <div className=" flex flex-col gap-2 p-10  items-start md:justify-center md:items-center">
        <div className="flex justify-center item-center gap-2 md:gap-3">
          <span>
            <IoLocationOutline className="h-6 w-6" />
          </span>
          <span>
            301 Omotunde Akinsola Street, Omole Phase 1, Agindingbi, Ikeja
            Lagos.
          </span>
        </div>
        <p className="flex justify-center item-center gap-2 md:gap-3">
          <FiPhoneCall className="h-6 w-6" /> 0806 310 0035, 0815 555 3269, 0818
          6100 035
        </p>
        <p className="flex justify-center item-center gap-2 md:gap-3">
          <MdOutlineEmail className="h-6 w-6" /> butatechsolutions@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
