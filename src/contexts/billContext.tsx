import { createContext, useEffect, useState } from "react";
import { IBill } from "../models/IBill";
import { billStorage } from "../storages/billStorage";

interface BillProviderProps {
  children: React.ReactNode;
}
export interface BillContextType {
  bills: IBill[];
  saveBill: (bill: IBill) => void;
  togglePayBill: (id: string) => void;
  totalPaid: number;
  totalToPay: number;
}

export const BillContext = createContext<BillContextType>(
  {} as BillContextType
);

const BillProvider = ({ children }: BillProviderProps) => {
  const [bills, setBills] = useState<IBill[]>([]);

  const saveBill = (bill: IBill) => {
    const newBill: IBill = {
      id: Math.random().toString(),
      title: bill.title,
      value: bill.value,
      isPaid: false,
      createdAt: new Date(),
    };
    setBills((prev) => {
      const value = [...prev, newBill];
      billStorage.set(value);
      return value;
    });
  };

  const togglePayBill = (id: string) => {
    const newBills = (prev: IBill[]) => {
      const value = prev.map((bill) => {
        if (bill.id === id) {
          bill.isPaid = !bill.isPaid;
        }
        return bill;
      });
      billStorage.set(value);
      return value;
    };

    setBills(newBills);
  };

  const sumBills = (sum: number, bill: IBill) => sum + bill.value;
  const totalPaid = bills.filter((bill) => bill.isPaid).reduce(sumBills, 0);
  const totalToPay = bills.filter((bill) => !bill.isPaid).reduce(sumBills, 0);

  useEffect(() => {
    const data = billStorage.get();
    data && setBills(data);
  }, []);
  return (
    <BillContext.Provider
      value={{ bills, saveBill, togglePayBill, totalPaid, totalToPay }}
    >
      {children}
    </BillContext.Provider>
  );
};

export default BillProvider;
