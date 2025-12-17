import { navItems } from "@/utils/lists";
import Link from "next/link";
import React from "react";

const DropDownMenu = () => {
  return (
    <section className="glass h-screen flex flex-col items-center">
      <nav className="mt-10">
        <ul className="items-center flex flex-col justify-between h-full gap-10">
          {navItems.map((n) => {
            return (
              <li key={n.name}>
                <Link
                  className="font-title text-witcher-text container-slash"
                  href={n.navigation}
                >
                  <span className="slash-ghost">{n.name}</span>
                  <span className="link-slash">{n.name}</span>
                  <span className="link-slash">{n.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default DropDownMenu;
