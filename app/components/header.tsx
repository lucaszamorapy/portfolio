"use client";

import Image from "next/image";
import { navItems } from "@/utils/lists";
import Link from "next/link";
import { Sword } from "lucide-react";
import { useState } from "react";
import DropDownMenu from "./dropdown-menu";

const Header = ({ children }: { children: React.ReactNode }) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
    setOpenDropDown(false);
  };
  return (
    <>
      <section className="bg-background-secondary sticky top-0 z-50 mb-10 border-b border-secondary/40">
        <div className="container w-full">
          <nav className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/logo-wolf-school.png"}
                alt="Logo"
                loading="eager"
                width={100}
                height={100}
              />
            </Link>
            <ul className="lg:flex hidden items-center gap-10">
              {navItems.map((n) => {
                return (
                  <li key={n.name}>
                    <Link
                      className="font-title text-white container-slash"
                      href={n.navigation}
                      onClick={(
                        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                      ) => handleSmoothScroll(e, n.navigation)}
                    >
                      <span className="slash-ghost">{n.name}</span>
                      <span className="link-slash">{n.name}</span>
                      <span className="link-slash">{n.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span
              aria-label="Abrir menu"
              aria-expanded={openDropDown}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer -translate-y-1"
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              <Sword
                className={`
      absolute w-5 h-5 text-white scale-x-150
      transition-all duration-300 ease-in-out
      ${openDropDown ? "rotate-45" : "rotate-[60] -mb-1 -translate-y-2"}
    `}
              />

              <Sword
                className={`
      absolute w-5 h-5 text-white scale-x-150
      transition-all duration-300 ease-in-out
      ${openDropDown ? "opacity-0 scale-0" : "rotate-[60] -mb-1"}
    `}
              />

              <Sword
                className={`
      absolute w-5 h-5 text-white 
      transition-all duration-300 ease-in-out
      ${
        openDropDown
          ? "-rotate-45 -scale-x-150"
          : "rotate-[60] -mb-1 translate-y-2 scale-x-150"
      }
    `}
              />
            </span>
          </nav>
        </div>
        <DropDownMenu open={openDropDown} setOpen={setOpenDropDown} />
      </section>
      {children}
    </>
  );
};

export default Header;
