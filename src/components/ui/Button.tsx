import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        `px-3 py-4 bg-green-500 text-black rounded 
        font-semibold text-sm w-full transition-colors 
        hover:bg-green-300 focus:ring-2 ring-white`
      )}
    >
      {children}
    </Comp>
  );
}
