import { House } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuTemplates } from "../../constants/menuTemplates";
import { Drawer } from "./Drawer";
import { Text } from "./Text";

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer.Hamburger setOpen={setOpen} />
      <Drawer.Root open={open}>
        <Drawer.Header setOpen={setOpen} />
        <div className="py-2">
          {menuTemplates.default.map((menu) => (
            <Link
              to={menu.path}
              className="flex items-center space-x-2 px-5 py-2 transition-all active:bg-gray-700"
            >
              <menu.Icon className="h-5 w-5 text-green-500" /> <Text>{menu.label}</Text>
            </Link>
          ))}
        </div>
      </Drawer.Root>
    </>
  );
}
