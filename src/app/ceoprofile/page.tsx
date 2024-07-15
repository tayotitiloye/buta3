import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="p-[100px]">
      <h1 className=" text-center text-2xl my-3 md:my-5 md:text-4xl">
        CEO&apos;S PROFILE
      </h1>
      <div>
        <div className="flex flex-col-reverse md:flex-row box-border">
          <div className="flex-1 flex justify-center items-center md:px-5">
            <div className=" flex flex-col gap-2 md:gap-3">
              <h2 className=" font-bold text-orange-500 py-2 md:py-0 md:text-3xl italic font-serif">
                ORIOLA BOLADALE{" "}
              </h2>
              <h3 className="font-bold">
                Seasoned Business Leader & Entrepreneur
              </h3>
              <div>
                Oriola Boladale is a highly accomplished business professional
                with over 12 years of expertise in the oil and petrochemical
                industry. He possesses in-depth knowledge of the petrochemical
                supply and value chain, including bitumen, diesel, and other
                petroleum by-products.
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/butasup/18.jpg"
              width={450}
              height={450}
              className=" object-contain rounded-md  md:rounded-lg"
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 md:my-5 ">
          <div className="flex-1 p-1 md:p-5 ">
            <h2 className=" font-bold">EDUCATION & CERTIFICATIONS</h2>
            <ul>
              <li>- Bachelor&apos;s Degree, Olabisi Onabanjo University</li>
              <li>
                - Master&apos;s Degree in Geographic Information Systems (MGIS),
                University of Lagos
              </li>
              <li>
                - Professional Certification in Construction Project Management
              </li>
              <li>- Fellow, Chartered Institute of Supply Management</li>
            </ul>
            <h2 className="pt-3 md:pt-5 font-bold">PROFESSIONAL BACKGROUND</h2>
            <ul>
              <li>
                - Operations Manager, Pacesetters Global Technology Ltd, Abuja
                (2010-2012)
              </li>
              <li>
                - Managing Director/Chief Executive Officer, Butatech Solutions
                (Current)
              </li>
            </ul>{" "}
          </div>
          <div className="flex-1 p-1 md:p-5 flex flex-col gap-3 md:gap-5 ">
            <div className="">
              Boladale is a visionary leader and has successfully led Butatech
              Solutions to become a notable industry player, built a strong
              client base, including government agencies and prominent companies
              and demonstrated expertise in driving business growth and
              expansion.
            </div>
            <div>
              Under Boladale&apos;s watch, Butatech solution has emerged as a
              prominent player in Nigeria&apos;s bitumen industry. The company
              provides consulting services, sales, and supplies of civil
              construction materials and other petroleum by-products to
              government agencies, corporate organizations, and individuals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
