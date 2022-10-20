import { useContext } from "react";
import { BillContext } from "../contexts/billContext";

export const useBill = () => {
  return useContext(BillContext);
};
