"use client";
import { reviewsT } from "@/app/page";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { MdOutlineStar } from "react-icons/md";

interface Props {
  data: reviewsT[];
}

const Slider = ({ data }: Props) => {
  const [slide, setSlide] = useState(0);
  const { comment, customer, coy } = data[slide];

  useEffect(() => {
    const slider = setInterval(() => {
      setSlide((p) => (p === data.length - 1 ? 0 : p + 1));
    }, 4000);

    return () => {
      clearInterval(slider);
    };
  });

  return (
    <div className="">
      <div className=" relative h-[80vh] w-screen ">
        <Image
          src={"/partnership.jpg"}
          fill
          alt="image"
          className=" object-cover"
        />

        <div className=" top-[100px] left-[20px]  w-[80vw]  md:left-[70px] absolute z-10 bg-black/60 md:h-[250px] text-white p-5 rounded-lg">
          <ImQuotesLeft className="text-orange-500 text-center text-xl md:text-2xl" />
          <div className=" text-3xl italic md:h-[100px]">{comment}</div>
          <div>{customer}</div>
          <div>{coy}</div>
          <div className=" flex">
            <MdOutlineStar className=" text-yellow-400" />
            <MdOutlineStar className=" text-yellow-400" />
            <MdOutlineStar className=" text-yellow-400" />
            <MdOutlineStar className=" text-yellow-400" />
            <MdOutlineStar className=" text-yellow-400" />
          </div>
          <div className=" flex gap-2 my-2">
            {data.map((p) => (
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
      </div>
    </div>
  );
};

export default Slider;
