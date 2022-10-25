import { createContext, useEffect, useState } from "react";
import { IBill } from "../models/IBill";
import { billStorage } from "../storages/billStorage";

interface BillProviderProps {
  children: React.ReactNode;
}
export interface BillContextType {
  bills: IBill[];
  getBillById: (id: string) => IBill | null;
  createBill: (bill: IBill) => void;
  updateBill: (bill: IBill) => void;
  togglePayBill: (id: string) => void;
  deleteBill: (id: string) => void;
  totalPaid: number;
  totalToPay: number;
}

export const BillContext = createContext<BillContextType>(
  {} as BillContextType
);

const BillProvider = ({ children }: BillProviderProps) => {
  const [bills, setBills] = useState<IBill[]>([]);

  const getBillById = (id: string) => {
    const allBills = billStorage.get() || [];
    return allBills.find((bill) => bill.id === id) || null;
  };

  const createBill = (bill: IBill) => {
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

  const updateBill = (billToUpdate: IBill) => {
    setBills((prev) => {
      const value = prev.map((bill) => {
        if (bill.id === billToUpdate.id) {
          return billToUpdate;
        }
        return bill;
      });
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

  const deleteBill = (id: string) => {
    const newBills = (prev: IBill[]) => {
      const value = prev.filter((bill) => {
        return bill.id !== id;
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
      value={{
        bills,
        getBillById,
        createBill,
        updateBill,
        togglePayBill,
        totalPaid,
        totalToPay,
        deleteBill,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export default BillProvider;
