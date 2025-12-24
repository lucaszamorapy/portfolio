import { FooterItem, footerItems } from "@/utils/lists";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-background-secondary p-4 sticky top-0 z-50 mt-10 border-t border-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center gap-5 lg:justify-between lg:flex-row lg:gap-0">
          <span className="flex items-center gap-10">
            {footerItems.map((f: FooterItem, i) => {
              const Icon = f.icon;
              return (
                <Link key={i} href={f.link} target="_blank">
                  <Icon size={20} className="text-secondary" />
                </Link>
              );
            })}
          </span>
          <span className="font-title text-sm text-white">
            © 2024 Lucas Zamora. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
