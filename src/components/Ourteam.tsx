"use client";
import { ourTeam } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/motion";

function Ourteam() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(true);
  const { name, title, image, details } = ourTeam[value];

  function inc() {
    setValue((p) => (p + 1 > ourTeam.length - 1 ? 0 : p + 1));
  }
  function dec() {
    setValue((p) => (p - 1 < 0 ? ourTeam.length - 1 : p - 1));
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideInFromRight(0.5)}
      className=" relative rounded-lg bg-gray-100 flex justify-center items-center border-2 md:h-[85vh] h-full md:pb-0  my-5"
    >
      <div className="hidden md:block absolute h-[350px] w-[320px] right-16 bg-gradient-to-b from-orange-400 to-orange-600 "></div>

      <div className=" flex gap-4 justify-center items-center absolute left-[120px] md:left-12 bottom-3 md:bottom-5">
        <button
          onClick={dec}
          className=" text-xl md:text-3xl border-2 rounded-full border-orange-300 p-1"
        >
          <AiOutlineArrowLeft />
        </button>
        <div className=" flex gap-1">
          {ourTeam.map((p) => (
            <div
              key={p.id}
              className=" w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 border-orange-500 border-2 cursor-pointer"
              onClick={() => setValue(p.id - 1)}
              style={{
                backgroundColor: value == p.id - 1 ? "white" : "",
              }}
            ></div>
          ))}
        </div>
        <button
          onClick={inc}
          className=" text-xl md:text-3xl border-2 rounded-full border-orange-300 p-1"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="  flex gap-6 md:gap-0 flex-col md:flex-row-reverse">
        <div className=" relative flex-[1] ">
          {image && (
            <Image
              // src={"/butasup/18.jpg"}
              src={image}
              width={500}
              height={500}
              className=" object-contain"
              alt="Image"
            />
          )}
        </div>
        <div className=" md:px-12 flex-[2] flex flex-col p-6 md:p-0 gap-4 ">
          <div>
            <h2 className=" font-bold font-[Georgia] text-2xl">
              {" "}
              {/* Boladale Oriola */}
              {name}
            </h2>
            <h3 className=" text-lg">{title}</h3>
          </div>
          <p
            className={`pb-10 ${
              open ? "line-clamp-1" : ""
            }  md:line-clamp-none`}
          >
            {details}
          </p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className=" uppercase bg-orange-500 text-white p-1 mb-14 md:mb-0 block md:hidden"
        >
          {" "}
          {open ? "show more" : "show less"}
        </button>
      </div>
    </motion.div>
  );
}

export default Ourteam;
