"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import NavMobile from "./NavMobile";

function Nvabar() {
  const pathname = usePathname();
  return (
    <div className=" flex justify-around py-4 bg-white/80 border-[3px] border-t-orange-500 bord border-b-2 text-orange-500 font-mono z-50 h-[70px] w-full font-bold fixed">
      <Link href={"/"} className="relative flex items-center cursor-pointer">
        {/* company's logo */}
        <Image src={"/butasup/2.png"} width={50} height={50} alt="logo" />
      </Link>
      <div className=" hidden md:flex gap-4">
        {links.map((link) => (
          <Link
            className="capitalize cursor-pointer hover:border-orange-500 hover:border-b-2  hover:scale-110 transition-all duration-300"
            href={link.url}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className=" block md:hidden">
        <NavMobile />
      </div>
    </div>
  );
}

export default Nvabar;

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "about",
    url: "/about",
  },
  {
    id: 3,
    title: "services",
    url: "/service",
  },

  {
    id: 4,
    title: "Our Work",
    url: "/projects",
  },
  {
    id: 5,
    title: "gallery",
    url: "/gallery",
  },
  {
    id: 6,
    title: "ceo's profile",
    url: "/ceoprofile",
  },
];
