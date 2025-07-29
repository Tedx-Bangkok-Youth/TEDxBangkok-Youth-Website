"use client";

import Link from "next/link";
import { useState } from "react";

const Hamburger = () => {
  const [isOpen, setisOpen] = useState(false);
  const HamburgerLine = `h-1 w-6 my-[3px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <div
        className="flex flex-col h-10  w-10  rounded justify-center items-center group"
        onClick={() => setisOpen(!isOpen)}
      >
        <div
          className={`${HamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-[10px] opacity-80 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${HamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${HamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-[10px] opacity-80 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </div>
      <div
        className={
          `overflow-hidden bg-opacity-80 top-16 duration-500 ease-out transition-all text-right ${ isOpen
            ? "overflow-x-hidden absolute left-0 translate-x-0  z-10 w-full  "
            : "absolute z-60 w-full translate-x-full "
        }
      `}>
        <Link href="/" className=" items-center block p-4 border-b ">
          HOME
        </Link>
        <Link href="/watch" className="items-center block p-4 border-b">
          WATCH
        </Link>
        <Link href="/event" className="items-center block p-4 border-b">
          EVENT
        </Link>
        <Link href="/join-event" className="items-center block p-4 border-b">
          JOIN EVENT
        </Link>
      </div>
    </>
  );
};

export default Hamburger;
