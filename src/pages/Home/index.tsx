import { Plus } from "phosphor-react";
import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { BillsList } from "../../components/ui/BillsList";
import { Text } from "../../components/ui/Text";
import { useBill } from "../../hooks/useBill";
import { toCurrency } from "../../utils/toCurrency";
import { Link } from "react-router-dom";
export function Home() {
  const { totalPaid, totalToPay } = useBill();
  return (
    <Screen.Root>
      <Header />
      <Screen.Section>
        <Text asChild>
          <p className="text-gray-400 mt-3">
            Keep track of your bills and make your money worth more
          </p>
        </Text>
        <div className="my-4 flex">
          <div>
            <Text size="sm">Total paid</Text>
            <Text size="lg" asChild>
              <p className="font-bold text-green-300">
                {toCurrency(totalPaid)}
              </p>
            </Text>
          </div>
          <div className="ml-5">
            <Text size="sm">To pay</Text>
            <Text size="lg" asChild>
              <p className="font-bold ">{toCurrency(totalToPay)}</p>
            </Text>
          </div>
          <Link
            to="/add-bill"
            className="ml-auto p-3 rounded-md flex items-center text-green-500 hover:text-green-300 hover:bg-gray-800 transition-all active:opacity-75"
          >
            <Plus className="mr-2" />
            Add Bill
          </Link>
        </div>
        <BillsList />
      </Screen.Section>
    </Screen.Root>
  );
}
