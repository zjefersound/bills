import { ChartBar, House } from "phosphor-react";

const defaultMenus = [
  {
    path: "/",
    Icon: House,
    label: "Home",
  },
  {
    path: "/statistics",
    Icon: ChartBar,
    label: "Statistics",
  },
];

export const menuTemplates = {
  default: defaultMenus,
};
