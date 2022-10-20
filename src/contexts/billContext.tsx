import { createContext, useState } from "react";
import { IBill } from "../models/IBill";

interface BillProviderProps {
  children: React.ReactNode;
}
interface BillContextType {
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
  const [bills, setBills] = useState<IBill[]>([
    {
      id: Math.random().toString(),
      title: "Mercado",
      value: 486.99,
      isPaid: false,
      createdAt: new Date(),
    },
    {
      id: Math.random().toString(),
      title: "Internet",
      value: 186.99,
      isPaid: false,
      createdAt: new Date(),
    },
    {
      id: Math.random().toString(),
      title: "Movest",
      value: 316.99,
      isPaid: false,
      createdAt: new Date(),
    },
  ]);

  const saveBill = (bill: IBill) => {
    const newBill: IBill = {
      id: Math.random().toString(),
      title: bill.title,
      value: bill.value,
      isPaid: false,
      createdAt: new Date(),
    };
    setBills([...bills, newBill]);
  };
  const togglePayBill = (id: string) => {
    const newBills = bills.map((bill) => {
      if (bill.id === id) {
        bill.isPaid = !bill.isPaid;
      }
      return bill;
    });

    setBills(newBills);
  };

  const sumBills = (sum: number, bill: IBill) => sum + bill.value;
  const totalPaid = bills.filter((bill) => bill.isPaid).reduce(sumBills, 0);
  const totalToPay = bills.filter((bill) => !bill.isPaid).reduce(sumBills, 0);

  return (
    <BillContext.Provider
      value={{ bills, saveBill, togglePayBill, totalPaid, totalToPay }}
    >
      {children}
    </BillContext.Provider>
  );
};

export default BillProvider;
