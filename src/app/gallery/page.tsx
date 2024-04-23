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
      className=" py-[100px] mx-5 md:mx-16"
    >
      <h1 className=" w-full capitalize font-bold text-2xl border-b-2 my-5 md:text-4xl">
        {" "}
        telling our story with pictures
      </h1>
      <div className=" grid place-items-center">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeInMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <h2 className=" w-full text-center font-serif font-bold text-lg md:text-2xl my-2 md:my-5 italic">
              Before remodeling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 ">
              {item.beforeimages.map((p, i) => (
                <div id={item.urlid} key={i}>
                  <div className=" relative h-[220px] w-[300px] md:w-[220px] border-t-[4px] border-orange-500">
                    <div className=" hidden z-10 absolute md:grid place-items-center h-full w-full px-3 text-transparent hover:bg-black/50 hover:text-white">
                      {item.title}
                    </div>

                    <Image src={p} fill alt="" className=" object-cover" />
                  </div>
                </div>
              ))}
            </div>
            <h2 className=" w-full text-center font-serif font-bold text-lg md:text-2xl my-2 md:my-5 italic">
              After remodeling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              {item.afterimages.map((p, i) => (
                <div key={i}>
                  <div className=" relative h-[220px] w-[300px] md:w-[220px] border-t-[4px] border-orange-500">
                    <div className=" hidden z-10 absolute md:grid place-items-center h-full w-full px-3 text-transparent hover:bg-black/50 hover:text-orange-200">
                      {item.title}
                    </div>
                    <Image src={p} fill alt="image" className=" object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default page;

const gallery = [
  {
    id: 1,
    title: "Renovation and Remodeling of 243 Battalion HQ",
    urlid: "HQ",
    beforeimages: [
      "/butacon/3.jpg",
      "/butacon/4.jpg",
      "/butacon/5.jpg",
      "/butacon/11.jpg",
    ],
    afterimages: [
      "/butacon/20.jpg",
      "/butacon/21.jpg",
      "/butacon/22.jpg",
      "/butacon/25.jpg",
    ],
  },
  {
    id: 2,

    title: "Renovation of Awori College Building Complex",
    urlid: "awori",

    beforeimages: [
      "/butacon/35.jpg",
      "/butacon/36.jpg",
      "/butacon/37.jpg",
      "/butacon/31.jpg",
    ],
    afterimages: [
      "/butacon/33.jpg",
      "/butacon/50.jpg",
      "/butacon/34.jpg",
      "/butacon/49.jpg",
    ],
  },
  {
    id: 3,
    title: "Renovation of Classrooms Block of Eleja Primary School",
    urlid: "eleja",

    beforeimages: [
      "/butacon/103.jpg",
      "/butacon/104.jpg",
      "/butacon/106.jpg",
      "/butacon/115.jpg",
    ],
    afterimages: [
      "/butacon/122.jpg",
      "/butacon/126.jpg",
      "/butacon/125.jpg",
      "/butacon/123.jpg",
    ],
  },
];
