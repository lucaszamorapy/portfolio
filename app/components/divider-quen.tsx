"use client";
import Image from "next/image";

const DividerQuen = () => {
  return (
    <div className="relative w-screen my-10 flex items-center justify-center">
      <span className="line-quen absolute left-0 h-px w-[calc(50%-40px)] bg-secondary" />

      <Image
        src="/quen-rune.svg"
        alt="Runa Quen"
        width={32}
        height={32}
        className="z-10 animate-quen"
      />

      <span className="line-quen absolute right-0 h-px w-[calc(50%-40px)] bg-secondary" />
    </div>
  );
};

export default DividerQuen;
