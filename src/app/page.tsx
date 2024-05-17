import Aboutsummary from "@/components/Aboutsummary";
import Hero from "@/components/Hero";
import Ourteam from "@/components/Ourteam";
import Safety from "@/components/Safety";
import Slider from "@/components/Slider";
import Statistics from "@/components/Statistics";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

function page() {
  return (
    <div className=" pt-[70px]  overflow-hidden">
      <Hero />
      <Aboutsummary />
      <div className="px-5 md:px-10">
        <h1 className=" md:pl-6 capitalize my-2 text-2xl font-bold md:text-4xl">
          our team
        </h1>
        <div className="  md:pl-[120px]">
          <ImQuotesLeft className="text-orange-500  text-xl md:text-2xl" />
        </div>
        <p className=" italic md:text-center">
          Great things in business are never done by one person, they are done
          by a team of people - <span className=" not-italic">Steve Jobs</span>{" "}
        </p>

        <Ourteam />
      </div>
      <div className=" px-5 md:px-10 my-[70px] md:my-[100px]">
        <Safety />
      </div>
      <div>
        <h1 className=" px-5 md:px-12 my-2 text-2xl font-bold md:text-4xl">
          What the numbers are saying
        </h1>
        <Statistics />
      </div>
      <div className=" text-center my-14 md:my-18">
        <h1 className=" font-bold md:text-3xl text-xl">
          Trusted by Top Brands
        </h1>

        <p className="px-5">
          Our customers are our greatest asset. We always go above and beyond to
          exceed their expectations
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 my-10 md:my-14 px-6 md:px-10 rounded-lg">
          {customers.map((item) => (
            <div
              className="border border-orange-500 p-4 md:p-8 font-semibold"
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className=" mb-6 md:mb-10">
        <Slider data={reviews} />
      </div>
    </div>
  );
}

export default page;

const customers = [
  {
    id: 1,
    name: "Laralek Ultimate Company",
  },
  {
    id: 2,
    name: "Espro Asphalt Production Company Ltd.",
  },
  {
    id: 3,
    name: "Nahman Construction Company Ltd.",
  },
  {
    id: 4,
    name: "Lagos State Public Works Corporation (LSPW)",
  },

  {
    id: 5,
    name: "Takol Nig Ltd.",
  },
  {
    id: 6,
    name: "Jadfem Nigeria Ltd",
  },
];

export type reviewsT = {
  id: number;
  comment: string;
  customer: string;
  coy: string;
};

const reviews = [
  {
    id: 1,
    comment:
      "Our experience with Butatech solution has been absolutely fantastic",
    customer: "Adamu Emeka",
    coy: "CEO XYZ Ltd",
  },
  {
    id: 2,
    comment:
      "Butatech solution has proven time and again to be professional, reliable, and dependable",
    customer: "Shaolin Master",
    coy: "CEO Temple Incorporation",
  },
  {
    id: 3,
    comment:
      "Firstbuta has consistently upheld its values of integrity, quality and speed",
    customer: "Tayo Titiloye",
    coy: "CEO Eripela Integrated Concepts Ltd",
  },
];
