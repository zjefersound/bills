import { IBill } from "../models/IBill";

const BILL_STORAGE_KEY = "BILL_STORAGE";

export const billStorage = {
  set: (bills: IBill[]) => {
    return localStorage.setItem(BILL_STORAGE_KEY, JSON.stringify(bills));
  },
  get: () => {
    const bills = localStorage.getItem(BILL_STORAGE_KEY);
    return bills ? JSON.parse(bills) as IBill[] : null;
  },
};
