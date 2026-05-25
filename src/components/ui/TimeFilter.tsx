import { CalendarBlank } from "@phosphor-icons/react";

interface TimeFilterProps {
  months: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

export function TimeFilter({ months, selected, onChange }: TimeFilterProps) {
  return (
    <div className="h-12 flex items-center space-x-2 py-4 px-3 rounded bg-gray-800 w-full mb-4 focus-within:ring-2 ring-green-500">
      <CalendarBlank className="w-6 h-6 text-gray-400 shrink-0" />
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="outline-0 bg-gray-800 flex-1 text-gray-100 text-xs appearance-none cursor-pointer"
      >
        <option value="all">Todos os períodos</option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
    </div>
  );
}
