interface TimeFilterProps {
  months: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

export function TimeFilter({ months, selected, onChange }: TimeFilterProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full bg-gray-800 text-gray-100 text-xs rounded px-3 mb-4 appearance-none cursor-pointer outline-0 focus:ring-2 ring-green-500"
    >
      <option value="all">Todos os períodos</option>
      {months.map((month) => (
        <option key={month.value} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>
  );
}
