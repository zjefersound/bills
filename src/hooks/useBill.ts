import { useContext } from "react";
import { BillContext, BillContextType } from "../contexts/billContext";

export const useBill = () => {
  return useContext(BillContext) as BillContextType;
};
