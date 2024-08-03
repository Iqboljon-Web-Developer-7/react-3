import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const nav1Links = [
    "Shop",
    "AI",
    "Mobile",
    "TV&Audio",
    "Appliances",
    "Computing",
    "Displays",
    "Accessories",
    "SmartThings",
  ];
  const nav2Links = ["Explore", "Support", "For Business"];
  const links = [<IoSearchOutline />, <BsCart2 />, <FaRegUser />];
  return (
    <header className="wrapper header flex items-center justify-between py-4 px-2">
      <h2 className="header__heading text-xl tracking-wide font-bold">
        <a href="#">SAMSUNG</a>
      </h2>
      <div className="header__nav-left font-bold hidden xl:flex gap-[.24vw]">
        {nav1Links?.map((item, idx) => {
          return (
            <a
              key={idx}
              href="#"
              className="btn bg-transparent border-none shadow-none hover:text-white hover:btn-active text-[.78rem] h-auto min-h-[unset] rounded-full p-2"
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="header__nav-right flex justify-center items-center gap-[2vw]">
        <div className="links gap-[.24vw] hidden xl:flex">
          {nav2Links?.map((item, idx) => {
            return (
              <a
                key={idx}
                href="#"
                className="btn bg-transparent border-none shadow-none hover:text-white hover:btn-active text-[.78rem] h-auto min-h-[unset] rounded-full p-2"
              >
                {item}
              </a>
            );
          })}
        </div>
        <div className="social-media flex justify-center items-center gap-[.8vw] text-2xl">
          {links?.map((item, idx) => {
            return <i key={idx}>{item}</i>;
          })}
          <AiOutlineMenu className="block xl:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
