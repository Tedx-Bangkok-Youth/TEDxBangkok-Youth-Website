import Image from "next/image";
import Logo from "@components/logo/logo-black.png";
import Link from "next/link";
import Hamburger from "@components/header/Hamburger";
import EventDropdown from "./Event";

const Navbar = () => {
  return (
    <>
      <nav className="h-16 items-center justify-between px-4 py-5 text-black bg-white drop-shadow-md hidden md:flex absolute w-full top-0 z-50">
        <Link href="/" className="flex items-center">
          <div className="">
            <Image src={Logo} alt="Logo" height={40} />
          </div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="flex items-center">
            HOME
          </Link>
          <Link href="/watch" className="flex items-center">
            WATCH
          </Link>
           <Link href="/read" className="flex items-center">
            READ
          </Link>
          <EventDropdown />
          <Link href="/about" className="flex items-center">
            ABOUT US
          </Link>
          <Link href="/join-event" className="flex items-center bg-[#D91E18] text-white px-4 py-2 rounded">
            JOIN EVENT
          </Link>
        </div>
      </nav>
      <nav className="md:hidden h-16 items-center justify-between px-4 py-5 text-black bg-white drop-shadow-md flex top-0 z-50 absolute w-full">
        <Link href="/" className="flex items-center">
          <div className="">
            <Image src={Logo} alt="Logo" height={40} />
          </div>
        </Link>
        <Hamburger/>
      </nav>
    </>
  );
};

export default Navbar;
