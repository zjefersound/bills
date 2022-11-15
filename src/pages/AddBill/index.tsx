import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BillForm } from "../../components/forms/BillForm";
import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { Heading } from "../../components/ui/Heading";
import { useBill } from "../../hooks/useBill";
import { IBill } from "../../models/IBill";

export function AddBill() {
  const navigate = useNavigate();
  const { createBill } = useBill();
  const [data, setData] = useState({
    title: "",
    value: 0,
  });

  const handleInputChange = (value: any, name: string) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveBill = (event: FormEvent) => {
    event.preventDefault();
    const bill = {
      id: Math.random().toString(),
      createdAt: new Date(),
      title: data.title,
      value: Number(data.value),
      isPaid: false,
    } as IBill;
    createBill(bill);
    navigate("/");
  };

  return (
    <Screen.Root>
      <Header title="Add Bill" goBack />
      <Screen.Section className="space-y-4">
        <Heading>Create a new bill</Heading>
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
          <BillForm.SubmitButton />
        </BillForm.Root>
      </Screen.Section>
    </Screen.Root>
  );
}
