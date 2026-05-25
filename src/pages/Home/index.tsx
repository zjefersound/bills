import { useMemo, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { BillsList } from "../../components/ui/BillsList";
import { Menu } from "../../components/ui/Menu";
import { TimeFilter } from "../../components/ui/TimeFilter";
import { useBill } from "../../hooks/useBill";
import { HomeHeader } from "./components/HomeHeader";

function getEffectiveDate(bill: { dueDate?: Date; createdAt: Date }) {
  return new Date(bill.dueDate || bill.createdAt);
}

function formatMonthKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function formatMonthLabel(year: number, month: number) {
  const date = new Date(year, month - 1);
  const monthName = date.toLocaleDateString("pt-BR", { month: "long" });
  return `${monthName}/${year}`;
}

export function Home() {
  const { bills } = useBill();
  const now = new Date();
  const currentMonth = formatMonthKey(now);

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const monthOptions = useMemo(() => {
    const seen = new Set<string>();
    const months: { value: string; label: string }[] = [];

    for (const bill of bills) {
      const key = formatMonthKey(getEffectiveDate(bill));
      if (!seen.has(key)) {
        seen.add(key);
        const [yearStr, monthStr] = key.split("-");
        months.push({
          value: key,
          label: formatMonthLabel(Number(yearStr), Number(monthStr)),
        });
      }
    }

    months.sort((a, b) => b.value.localeCompare(a.value));
    return months;
  }, [bills]);

  const filteredBills = useMemo(() => {
    if (selectedMonth === "all") return bills;
    return bills.filter((bill) => {
      const key = formatMonthKey(getEffectiveDate(bill));
      return key === selectedMonth;
    });
  }, [bills, selectedMonth]);

  const sumBills = (sum: number, bill: { value: number }) => sum + bill.value;
  const filteredTotalPaid = filteredBills
    .filter((bill) => bill.isPaid)
    .reduce(sumBills, 0);
  const filteredTotalToPay = filteredBills
    .filter((bill) => !bill.isPaid)
    .reduce(sumBills, 0);

  return (
    <Screen.Root>
      <Header>
        <Menu />
      </Header>
      <Screen.Section>
        <HomeHeader totalPaid={filteredTotalPaid} totalToPay={filteredTotalToPay} />
        <TimeFilter
          months={monthOptions}
          selected={selectedMonth}
          onChange={setSelectedMonth}
        />
        <BillsList bills={filteredBills} />
      </Screen.Section>
    </Screen.Root>
  );
}
