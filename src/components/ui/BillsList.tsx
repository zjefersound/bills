import { useBill } from "../../hooks/useBill";
import { Bill } from "./Bill";

export function BillsList() {
  const { bills } = useBill();
  return (
    <ul className="space-y-3">
      {bills?.map((bill) => (
        <li key={bill.id}>
          <Bill data={bill} />
        </li>
      ))}
    </ul>
  );
}
