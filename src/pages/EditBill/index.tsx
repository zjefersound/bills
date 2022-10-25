import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleIsPaidChange = (newValue: boolean) => {
    setData((prev) => ({
      ...prev,
      isPaid: newValue,
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
  }, [id]);

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
            onChange={handleIsPaidChange}
          />
          <BillForm.SubmitButton />
        </BillForm.Root>
      </Screen.Section>
    </Screen.Root>
  );
}
