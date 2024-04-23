import Image from "next/image";
import Link from "next/link";
import React from "react";

function Safety() {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-5 pt-[150px] pb-5 md:pb-10 gap-2 bg-gray-100">
        <h1 className="  w-full flex-[1] md:px-10 text-left font-semibold font-[Liberation-Mono] text-2xl md:text-4xl">
          <span>Creating a safe, dynamic culture</span>
        </h1>
        <p className=" md:px-10 flex-[1]">
          Safety is at the core of everything we do and is one of our central
          guiding principles. We promote and foster a culture where people truly
          care about one another and where everyone shares in our goal of zero
          incidents.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 pt-[30px] md:pt-[50px] ">
        <div className=" relative flex-[1] pl-5 md:pl-0 md:flex md:justify-end ">
          <Image
            src={"/safetybuta/safety1.png"}
            alt="image"
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className=" flex flex-col gap-3 flex-[1] md:justify-center md:items-start p-5">
          <h2 className=" font-bold text-xl md:text-2xl tracking-widest">
            HSE Policy
          </h2>
          <div className=" md:pr-10">
            At Butatech Solutions, we recognize that employees&apos; safety is
            the safety of the Company. So, the provision of safe working
            environment is a primary responsibility of the Company, and the need
            for its enforcement is the responsibility of the Company.
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 flex flex-col md:flex-row-reverse gap-3 py-[50px] md:py-[80px] md:mt-[25px] ">
        <div className=" relative flex-[1] pl-5 md:pl-0 md:flex md:justify-center ">
          <Image
            src={"/safetybuta/safety2.jfif"}
            alt="image"
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className=" flex flex-col gap-3 flex-[1] md:justify-center md:items-start p-5">
          <h2 className=" font-bold md:pl-10 text-xl md:text-2xl tracking-widest capitalize">
            Safety is paramount to us
          </h2>
          <div className=" md:pl-10">
            <p>
              {" "}
              To this end all efforts and productive actions will be made to
              enhance the healthy working environment and safety of all the
              personnel on company sites and offices. To place the Health and
              Safety of employees and public ahead of the Company&apos;s
              commercial interest while protecting the Environment .{" "}
            </p>
            <p>
              To provide and maintain safe systems of works to minimize risk to
              health, safety and environment. To provide adequate and proper
              facilities, equipments, safety apparel and ensure they are used
              correctly.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 pt-[25px] md:pt-[50px] pb-[50px] md:pb-[100px] ">
        <div className=" relative flex-[1] pl-5 md:pl-0 md:flex md:justify-end ">
          <Image
            src={"/safetybuta/safety3.jfif"}
            alt="image"
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className=" flex flex-col gap-3 flex-[1] md:justify-center md:items-start p-5">
          <h2 className=" font-bold text-xl md:text-2xl tracking-widest">
            Quality Policy
          </h2>
          <div className=" md:pr-10">
            Our Services are fashioned to comply with the codes and
            specifications of all national and international inspection and
            classification authorities for specific projects and this assures
            quality, in and reliability. We guarantee our services and products
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
