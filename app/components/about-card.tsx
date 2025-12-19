import Image from "next/image";

const AboutCard = () => {
  return (
    <article
      className="
    group relative
    w-full
    h-130
    overflow-hidden
    border border-secondary/40
    bg-background-secondary backdrop-blur
    flex flex-col justify-between
    transition-all duration-500
    hover:border-amber-400/60
  "
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/lucas_terno.png"
          alt="Foto Perfil"
          fill
          className="
        object-cover
        grayscale-20
        transition duration-700
        group-hover:scale-105 group-hover:grayscale-0
      "
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
    </article>
  );
};

export default AboutCard;
