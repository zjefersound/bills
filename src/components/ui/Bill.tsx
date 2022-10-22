import {
  CaretDoubleUp,
  CurrencyDollar,
  PencilSimple,
  Trash,
} from "phosphor-react";
import { IBill } from "../../models/IBill";
import { toCurrency } from "../../utils/toCurrency";
import { Checkbox } from "../forms/Checkbox";
import { Text } from "./Text";
import { format } from "date-fns";
import { useBill } from "../../hooks/useBill";
import { useState } from "react";
import clsx from "clsx";

interface BillProps {
  data: IBill;
}

export function Bill({ data }: BillProps) {
  const [open, setOpen] = useState(false);
  const { togglePayBill, deleteBill } = useBill();
  return (
    <div className="flex">
      <div
        className={`h-10 w-10 my-auto bg-gray-900 flex 
          items-center justify-center rounded-full border-green-500 border
        text-green-500 -mr-3 z-10
        `}
      >
        <CurrencyDollar className="h-6 w-6" />
      </div>
      <div className="bg-gray-800 p-4 pl-6 flex-1 rounded-md">
        <div className="flex items-center">
          <div onClick={() => setOpen((prev) => !prev)}>
            <Text asChild>
              <p>{data.title}</p>
            </Text>
            <p className="text-gray-400">
              {format(new Date(data.createdAt), "dd/MM/yyyy")}
            </p>
          </div>
          <div className="ml-auto mr-3">
            <Text asChild>
              <span className="font-bold">{toCurrency(data.value)}</span>
            </Text>
          </div>
          <Checkbox
            value={data.isPaid}
            onChange={() => togglePayBill(data.id)}
          />
        </div>
        <div
          className={clsx(
            "flex max-h-0 transition-all overflow-hidden space-x-5",
            {
              "max-h-40 pt-3": open,
            }
          )}
        >
          <button
            className="text-green-300 flex items-center"
            onClick={() => setOpen(false)}
          >
            <CaretDoubleUp />
          </button>
          <button className=" flex items-center">
            <PencilSimple className="mr-2" /> Edit
          </button>
          <button
            className="text-red-300 flex items-center"
            onClick={() => deleteBill(data.id)}
          >
            <Trash className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
