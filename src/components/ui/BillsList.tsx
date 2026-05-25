import { IBill } from "../../models/IBill";
import { Bill } from "./Bill";

interface BillsListProps {
  bills: IBill[];
}

export function BillsList({ bills }: BillsListProps) {
  if (bills.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-10">
        Nenhuma conta encontrada
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {bills.map((bill) => (
        <li key={bill.id}>
          <Bill data={bill} />
        </li>
      ))}
    </ul>
  );
}
