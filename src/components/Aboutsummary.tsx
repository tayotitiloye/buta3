"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInMotion2 } from "@/motion";
import Link from "next/link";

function Aboutsummary() {
  return (
    <motion.div initial="hidden" whileInView="visible">
      <motion.div
        variants={fadeInMotion2}
        className="  mx-2 md:mx-10 h-[50vh] p-3 md:p-5 my-5 md:my-10"
      >
        <h1 className=" uppercase">who we are</h1>
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className=" font-bold text-xl md:text-3xl">
            Integrity, Quality and Speed
          </h2>
          Butatech is onestop shop for all thing construction. The flexibility
          to mobilize the right people to deliver unique construction solutions;
          an unwavering focus on delivering value to your business bottom line;
          and the capability to leverage innovation to meet emerging challenges
          and keep you at the fore. This is Butatech.
          <div className=" my-2 md:my-3">
            <Link href={"/about"}>
              <button className=" uppercase text-sm text-orange-500 border-2 border-orange-500 rounded-md hover:text-white transition duration-300 hover:bg-orange-500 md:text-lg p-1 md:p-2">
                read more
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Aboutsummary;
