import { Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Text } from "../../../components/ui/Text";
import { toCurrency } from "../../../utils/toCurrency";

interface HomeHeaderProps {
  totalPaid: number;
  totalToPay: number;
}

export function HomeHeader({ totalPaid, totalToPay }: HomeHeaderProps) {
  return (
    <>
      <Text asChild>
        <p className="text-gray-400 mt-3">
          Keep track of your bills and make your money worth more
        </p>
      </Text>
      <div className="my-4 grid grid-cols-3">
        <div>
          <Text size="sm">Total paid</Text>
          <Text asChild>
            <p className="font-bold text-green-300 text-ellipsis overflow-hidden">
              {toCurrency(totalPaid)}
            </p>
          </Text>
        </div>
        <div className="ml-2">
          <Text size="sm">To pay</Text>
          <Text asChild>
            <p className="font-bold text-ellipsis overflow-hidden">
              {toCurrency(totalToPay)}
            </p>
          </Text>
        </div>
        <Link
          to="/add-bill"
          className="ml-auto p-3 rounded-md flex items-center whitespace-nowrap text-green-500 hover:text-green-300 hover:bg-gray-800 transition-all active:opacity-75"
        >
          <Plus className="mr-2" />
          Add Bill
        </Link>
      </div>
    </>
  );
}
