"use client";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { IoBarChartOutline, IoLocationOutline } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import { motion } from "framer-motion";
import { slideInFromBottom2 } from "@/motion";

function Statistics() {
  return (
    <div className=" my-[30px] bg-gradient-to-b from-orange-500 to-orange-700 h-[80vh] w-screen text-2xl capitalize md:text-3xl text-white">
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={slideInFromBottom2}
      >
        <div className=" flex flex-col h-[70vh] w-full justify-around md:px-10">
          <div className=" flex justify-around items-center">
            <div>
              <h2>turnover</h2>
              <IoBarChartOutline />
              <p>+ 1 billion</p>
            </div>
            <div>
              <h2>Staff</h2>
              <BsPeopleFill />
              <p>+ 20</p>
            </div>
          </div>
          <div className=" flex justify-around items-center">
            <div>
              <h2>project</h2>
              <MdConstruction />
              <p>+ 30</p>
            </div>
            <div>
              <h2>location</h2>
              <IoLocationOutline />
              <p>+ 10</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Statistics;
