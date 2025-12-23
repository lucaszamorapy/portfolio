import * as React from "react";

import { cn } from "@/app/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full border border-secondary/40 bg-background-secondary px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-secondary/40 focus-visible:border-secondary aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
