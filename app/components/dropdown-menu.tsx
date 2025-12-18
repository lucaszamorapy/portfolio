import { navItems } from "@/utils/lists";
import Link from "next/link";

const DropDownMenu = ({ open }: { open: boolean }) => {
  return (
    <section
      data-open={open}
      className="bg-background mobile-menu  fixed left-0 right-0 bottom-0 top-25.75 z-40"
    >
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
