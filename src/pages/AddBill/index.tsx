import { CurrencyDollar, Tag } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components/forms/TextInput";
import { Header } from "../../components/layout/Header";
import { Screen } from "../../components/layout/Screen";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";
import { useBill } from "../../hooks/useBill";
import { IBill } from "../../models/IBill";

export function AddBill() {
  const navigate = useNavigate();
  const { saveBill } = useBill();
  const [data, setData] = useState({
    title: "",
    value: undefined,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const createBill = (event: FormEvent) => {
    event.preventDefault();
    const bill = {
      id: Math.random().toString(),
      createdAt: new Date(),
      title: data.title,
      value: Number(data.value),
      isPaid: false,
    } as IBill;
    saveBill(bill);
    navigate("/");
  };

  return (
    <Screen.Root>
      <Header title="Add Bill" goBack />
      <Screen.Section className="space-y-4">
        <Heading>Create a new bill</Heading>
        <p className="text-gray-400">Fill the following fields</p>
        <form onSubmit={createBill}>
          <div className="space-y-1">
            <Text>Title</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Tag />
              </TextInput.Icon>
              <TextInput.Input
                id="title"
                placeholder="Type the title"
                value={data.title}
                onChange={handleInputChange}
                required
              />
            </TextInput.Root>
          </div>
          <div className="space-y-1">
            <Text>Value</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <CurrencyDollar />
              </TextInput.Icon>
              <TextInput.Input
                id="value"
                type="number"
                placeholder="0.00"
                value={data.value}
                onChange={handleInputChange}
                required
              />
            </TextInput.Root>
          </div>
          <div className="pt-5">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Screen.Section>
    </Screen.Root>
  );
}
