import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-line bg-white px-3.5 py-3 text-base text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:border-teal disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
