"use client";
import { scrollToSection } from "@/utils/global";
import { navItems } from "@/utils/lists";

interface DropDownMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu = ({ open, setOpen }: DropDownMenuProps) => {
  const linkToPage = (navigation: string) => {
    scrollToSection(navigation);
    setOpen(false);
  };
  return (
    <section
      data-open={open}
      className="bg-background-secondary mobile-menu fixed left-0 right-0 bottom-0 top-25 z-40"
    >
      <nav className="mt-10">
        <ul className="items-center flex flex-col justify-between h-full gap-10">
          {navItems.map((n) => {
            return (
              <li key={n.name}>
                <span
                  className="font-title text-white container-slash"
                  onClick={() => linkToPage(n.navigation)}
                >
                  <span className="slash-ghost">{n.name}</span>
                  <span className="link-slash">{n.name}</span>
                  <span className="link-slash">{n.name}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default DropDownMenu;
