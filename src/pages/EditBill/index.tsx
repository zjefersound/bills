import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BillForm } from "../../components/forms/BillForm";
import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { Heading } from "../../components/ui/Heading";
import { useBill } from "../../hooks/useBill";
import { IBill } from "../../models/IBill";

export function EditBill() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBillById, updateBill } = useBill();
  const [data, setData] = useState<IBill>({} as IBill);
  const [dueDateStr, setDueDateStr] = useState("");

  const handleInputChange = (value: any, name: string) => {
    if (name === "dueDate") {
      setDueDateStr(value);
      setData((prev) => ({
        ...prev,
        dueDate: value ? new Date(value + "T00:00:00") : prev.dueDate,
      }));
      return;
    }
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveBill = (event: FormEvent) => {
    event.preventDefault();
    updateBill(data);
    navigate("/");
  };

  useEffect(() => {
    if (!id) return navigate("/");
    const currentBill = getBillById(id);
    if (!currentBill) return navigate("/");
    setData(currentBill);
    setDueDateStr(formatDateToInput(currentBill.dueDate));
  }, [id]);

function formatDateToInput(date: Date) {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

  return (
    <Screen.Root>
      <Header title="Edit Bill" goBack />
      <Screen.Section className="space-y-4">
        <Heading>Update the selected bill</Heading>
        <p className="text-gray-400">Fill the following fields</p>
        <BillForm.Root onSubmit={saveBill}>
          <BillForm.TitleInput
            value={data.title}
            onChange={handleInputChange}
          />
          <BillForm.ValueInput
            value={data.value}
            onChange={handleInputChange}
          />
          <BillForm.IsPaidInput
            value={data.isPaid}
            onChange={handleInputChange}
          />
          <BillForm.DueDateInput
            value={dueDateStr}
            onChange={handleInputChange}
          />
          <BillForm.SubmitButton />
        </BillForm.Root>
      </Screen.Section>
    </Screen.Root>
  );
}
