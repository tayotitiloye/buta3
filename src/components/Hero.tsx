"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromBottom2,
  slideInFromLeft,
} from "@/motion";

function Hero() {
  const [slide, setSlide] = useState(0);

  const { title, image, details } = hero[slide];

  useEffect(() => {
    const slider = setInterval(() => {
      setSlide((p) => (p === hero.length - 1 ? 0 : p + 1));
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  });

  return (
    <section className=" overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="w-screen h-[85vh] relative"
      >
        <div className=" bg-black/40 w-full h-full">
          <div className=" flex justify-start items-center   text-white h-full w-full">
            <div className=" flex flex-col flex-[2] mx-5 md:mx-10 md:px-6 gap-3 md:gap-5">
              <div className=" flex">
                <motion.h1 variants={slideInFromBottom} className=" uppercase">
                  {title}{" "}
                </motion.h1>
                <motion.div
                  variants={slideInFromLeft(0.5)}
                  className=" border-2 border-orange-500 mt-2 ml-3 md:ml-[20px] w-[100px] md:w-[260px] h-[2px]"
                ></motion.div>
              </div>
              <motion.div
                // variants={slideInFromLeft(0.05)}
                variants={slideInFromBottom2}
                className=" text-2xl md:text-5xl md:tracking-wider font-bold w-[200px]  md:w-[550px] md:leading-[60px]"
              >
                {details}
              </motion.div>
              <div className=" flex gap-5">
                <motion.div variants={slideInFromBottom2}>
                  <h2 className=" capitalize">construction</h2>
                </motion.div>
                |
                <motion.div variants={slideInFromBottom2}>
                  <h2>Supplies</h2>
                </motion.div>{" "}
                |
                <motion.div variants={slideInFromBottom2}>
                  <h2>Consultation</h2>
                </motion.div>{" "}
              </div>
              <div className=" flex gap-2 my-2">
                {hero.map((p) => (
                  <div
                    key={p.id}
                    className="bg-orange-500 w-3 h-3 md:w-4 md:h-4 text-transparent border cursor-pointer"
                    style={{
                      backgroundColor: slide === p.id - 1 ? "white" : "",
                    }}
                    onClick={() => setSlide(p.id - 1)}
                  >
                    {p.id}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[1]"></div>
          </div>
        </div>
        {image && <Image src={image} fill className="-z-10 " alt="image" />}
        {/* {video && (
          <div className=" w-full -z-10 top-0 left-0 absolute h-[85vh]">
            <video
              className="w-full h-auto hidden md:block opacity-[90%]"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src={video}
            />
          </div>
        )} */}
      </motion.div>
    </section>
  );
}

export default Hero;

const hero = [
  {
    id: 1,
    title: "Construction",
    details: "We Conceptualize, design,evaluate and construct.",
    service: "supplies",
    // video: "/video1.webm",
    image: "/butacon/50.jpg",
  },
  {
    id: 2,
    title: "Remodeling",
    details: "Giving our clients structures a facelift",
    service: "construction",
    image: "/butacon/53.jpg",
  },
  {
    id: 3,
    title: "procurement",
    details: "We supply quality construction materials",
    service: "supplies",
    // video: "/video2.webm",
    image: "/butacon/54.jpg",
  },
  {
    id: 4,
    title: "Advisory Services",
    details: "We Consult on construction,energy and telecommunication",
    service: "consultation",
    image: "/consult.jfif",
  },
];
