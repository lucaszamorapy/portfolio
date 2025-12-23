import * as React from "react";
import { cn } from "@/app/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        h-10 w-full min-w-0
        border border-secondary/40
        bg-background-secondary
        px-3 py-2
        text-white placeholder:text-white/40
        shadow-inner
        transition-all duration-300
        outline-none

        focus-visible:border-secondary
        focus-visible:ring-2
        focus-visible:ring-secondary/40
        focus-visible:shadow-[0_0_12px_rgba(212,175,55,0.35)]

        selection:bg-secondary
        selection:text-black

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };
