import Image from "next/image";
import Link from "next/link";
import React from "react";

function Safety() {
  return (
    <div className=" flex flex-col md:flex-row gap-3 my-10 ">
      <div className=" relative flex-[1] md:pl-5 ">
        <Image
          src={"/safetybuta/safety4.jfif"}
          alt="image"
          width={400}
          height={400}
          className=""
        />
      </div>
      <div className=" flex flex-col gap-3 flex-[1] md:justify-center md:items-start p-5">
        <h2 className=" font-bold text-3xl tracking-widest">
          Safety: A way of Life
        </h2>
        <div>
          Our culture of safety is one that extends beyond the job site to
          ensure everyone returns home safely every day.
        </div>
        <Link href={"/safety"}>
          <button className=" uppercase text-orange-500 border-2 border-orange-500 rounded-md hover:text-white transition duration-300 hover:bg-orange-500 md:text-lg p-1 md:p-2">
            learn more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Safety;
