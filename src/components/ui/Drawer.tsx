import clsx from "clsx";
import { X, List } from "phosphor-react";
import { ReactNode } from "react";
import { Heading } from "./Heading";

interface DrawerRootProps {
  children: ReactNode;
  open: boolean;
}

function DrawerRoot({ children, open }: DrawerRootProps) {
  return (
    <div
      className={clsx(
        "fixed h-full w-full bg-gray-800 top-0 left-0 transition-all z-50",
        {
          "translate-x-full": !open,
        }
      )}
    >
      {children}
    </div>
  );
}

interface DrawerHeaderProps {
  setOpen: (open: boolean) => void;
}

function DrawerHeader({ setOpen }: DrawerHeaderProps) {
  return (
    <div className="px-5 py-4 flex items-center border-b-2 border-gray-700 z-10">
      <Heading size="sm">Menu</Heading>
      <button className="ml-auto" onClick={() => setOpen(false)}>
        <X className="h-8 w-8 text-green-500" />
      </button>
    </div>
  );
}

interface DrawerHamburgerProps {
  setOpen: (open: boolean) => void;
}

function DrawerHamburger({ setOpen }: DrawerHamburgerProps) {
  return (
    <div className="ml-auto">
      <button onClick={() => setOpen(true)}>
        <List className="h-8 w-8 text-green-500" />
      </button>
    </div>
  );
}

export const Drawer = {
  Root: DrawerRoot,
  Header: DrawerHeader,
  Hamburger: DrawerHamburger,
};
