"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInMotion } from "@/motion";

function page() {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      className=" py-[70px] overflow-hidden"
    >
      <div>
        <div className=" flex flex-col gap-2 md:gap-0 px-4 md:flex-row items-center justify-center w-full h-[300px] md:px-10 bg-gray-200 my-3 md:my-5">
          <h1 className=" text-3xl font-serif md:flex-[1]">
            You dream it, we can{" "}
            {/* <span className=" font-semibold italic text-4xl bg-gradient-to-b from-orange-300 to-orange-500 text-transparent bg-clip-text"> */}
            <span className=" font-semibold italic text-2xl md:text-4xl px-1">
              build
            </span>{" "}
            it
          </h1>
          <div className=" md:flex-[2] md:px-10">
            We are a consortium of engineers with interests in civil, structural
            and building engineering. We conceptualize projects, design, manage,
            evaluate and construct.
            <p>Construction is more than our business. It&apos;s who we are.</p>
          </div>
        </div>
      </div>
      <div className=" mb-5 md:mb-10">
        <div className=" relative w-screen h-[400px]">
          <Image
            src={"/butacon/0.jpg"}
            fill
            alt="image"
            className=" object-fill"
          />
          <div className=" flex md:hover:text-orange-500 justify-center items-center  absolute bottom-5 left-5 bg-black/60 text-white rounded-lg p-1 md:p-0 w-[300px] md:w-[650px] md:h-[150px] z-10">
            <div>
              <h1 className=" font-semibold text-xl md:text-3xl tracking-widest">
                Construction | Facility Management
              </h1>

              <div className=" text-lg md:text-xl tracking-widest">
                Integrity, Quality and Speed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex flex-col gap-2 md:gap-0 px-4 md:flex-row items-center justify-center w-full h-[300px] md:px-10 bg-gray-200 my-3 md:my-5">
          <h1 className=" text-3xl font-serif md:flex-[1]">
            Procurement that goes the{" "}
            {/* <span className=" font-semibold italic text-4xl bg-gradient-to-b from-orange-300 to-orange-500 text-transparent bg-clip-text"> */}
            <span className=" font-semibold italic text-2xl md:text-4xl px-1">
              extra
            </span>{" "}
            mile
          </h1>
          <p className=" md:flex-[2] md:px-10">
            Supplying quality civil construction materials and products is our
            area of core competence. Let us take procurement burden off you.
          </p>
        </div>
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 md:gap-0 place-items-center md:mx-5 px-5">
            {projects.map((prj, index) => (
              <motion.div
                key={prj.id}
                variants={fadeInMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className=" border-2  flex flex-col  w-[320px] h-[320px] md:my-2 shadow-md md:hover:shadow-xl transition duration-300"
              >
                <div className=" relative w-full h-full ">
                  <Image
                    src={prj.image}
                    fill
                    className="object-cover"
                    alt="image"
                  />
                </div>
                <div className=" relative md:hover:bg-orange-500 md:cursor-pointer md:transition-all p-4">
                  <div className=" text-3xl text-white absolute right-3 top-6">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <div className=" md:hover:translate-x-[20px] md:hover:scale-110 md:transition-all md:duration-300 md:hover:text-white">
                    <h2 className=" font-bold">{prj.title}</h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;

const projects = [
  {
    id: 1,
    image: "/butasup/26.jpg",
    title: "Bitumen",
  },
  {
    id: 2,
    image: "/butasup/44.jpg",
    title: "Granite Dust",
  },
  {
    id: 3,
    image: "/butasup/46.jpg",
    title: "Crush Stone",
  },
  {
    id: 4,
    image: "/butasup/48.png",
    title: "Hardcore",
  },

  {
    id: 5,
    image: "/butasup/50.png",
    title: "Boulders",
  },
  {
    id: 6,
    image: "/butasup/51.jpg",
    title: "Sharp Sand",
  },
  {
    id: 7,
    image: "/butasup/31.png",
    title: "Iron Rods",
  },
  {
    id: 8,
    image: "/butasup/29.jpg",
    title: "Diesel",
  },
  {
    id: 9,
    image: "/butasup/39.jpg",
    title: "3/4 Granite",
  },
];
