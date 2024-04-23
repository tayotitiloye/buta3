import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" py-[68px] mx-5 md:mx-16 overflow-hidden">
      <div className=" flex flex-col justify-center items-center gap-2">
        <h1 className="capitalize text-xl md:text-5xl pt-[50px] border-b-2">
          featured projects
        </h1>
        <p className=" italic px-3 md:px-0 md:text-lg">
          No screw up here! We will nail your project on time and on budget!
        </p>
      </div>
      {projects.map((p) => (
        <div
          key={p.id}
          className=" flex flex-col md:flex-row gap-3 pt-[30px] md:pt-[50px] relative"
        >
          <div className=" relative w-[300px] h-[300px] flex-[1] pl-5 md:pl-0 md:flex md:justify-end ">
            <Image
              src={p.image}
              alt="image"
              width={300}
              height={300}
              className=" object-cover rounded-lg"
            />
          </div>
          <div className=" flex flex-col gap-3 flex-[1] md:justify-center md:items-start p-5">
            <div className=" md:text-xl ">{p.title}</div>
            <h2 className=" uppercase">{p.location}</h2>
            <Link href={p.url}>
              <button className=" uppercase text-sm text-orange-500 border-2 border-orange-500 rounded-md hover:text-white transition duration-300 hover:bg-orange-500 md:text-lg p-1 md:p-2">
                show more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;

const projects = [
  {
    id: 1,
    image: "/butacon/20.jpg",
    title: "Renovation and Remodeling of 243 Battalion HQ",
    location: "Ibereko, Badagry, Lagos.",
    url: "/gallery",
  },
  {
    id: 2,
    image: "/butacon/50.jpg",
    title: "Renovation of Awori College Building Complex",
    location: "Old Alaba Rd., Ojo, Lagos",
    url: "/gallery/#awori",
  },
  {
    id: 3,
    image: "/butacon/123.jpg",
    title: "Renovation of Classrooms Block of Eleja Primary School",
    location: "Eleja Pry Sch., Mushin Lagos",
    url: "/gallery/#eleja",
  },
];
