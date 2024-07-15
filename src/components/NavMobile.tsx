"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
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

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* SHORTCUT */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt="image"
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-orange-500"
      />
      {open && (
        <div className="bg-orange-500 text-white absolute left-0 top-16 w-full h-[calc(100vh-3rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {data.map((item) => (
            <Link
              className="  w-full px-5"
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
