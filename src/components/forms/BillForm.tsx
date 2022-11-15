import { CurrencyDollar, Tag } from "phosphor-react";
import { FormEventHandler, ReactNode } from "react";
import { TextInput } from "../../components/forms/TextInput";
import { Button } from "../../components/ui/Button";
import { Text } from "../../components/ui/Text";
import { Checkbox } from "./Checkbox";

interface BillFormRootProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}

function BillFormRoot({ onSubmit, children }: BillFormRootProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
    </form>
  );
}
BillFormRoot.displayName = "BillForm.Root";

interface BillFormTitleInputProps {
  value?: string;
  onChange: (value: string, name: string) => void;
}

function BillFormTitleInput({ value, onChange }: BillFormTitleInputProps) {
  return (
    <div className="space-y-1">
      <Text>Title</Text>
      <TextInput.Root>
        <TextInput.Icon>
          <Tag />
        </TextInput.Icon>
        <TextInput.Input
          id="title"
          placeholder="Type the title"
          value={value}
          onChange={(e) => onChange(e.target.value, e.target.id)}
          required
        />
      </TextInput.Root>
    </div>
  );
}
BillFormTitleInput.displayName = "BillForm.TitleInput";

interface BillFormValueInputProps {
  value?: number;
  onChange: (value: number, name: string) => void;
}

function BillFormValueInput({ value, onChange }: BillFormValueInputProps) {
  return (
    <div className="space-y-1">
      <Text>Value</Text>
      <TextInput.Root>
        <TextInput.Icon>
          <CurrencyDollar />
        </TextInput.Icon>
        {typeof value === 'number' && (
          <TextInput.Currency
            name="value"
            placeholder="0.00"
            intlConfig={{ locale: "pt-BR", currency: "BRL" }}
            defaultValue={value}
            decimalsLimit={2}
            onValueChange={(_, name, values) =>
              onChange(values?.float || 0, name || "")
            }
            required
          />
        )}
      </TextInput.Root>
    </div>
  );
}
BillFormValueInput.displayName = "BillForm.ValueInput";

interface BillFormIsPaidInputProps {
  value?: boolean;
  onChange: (value: boolean, name: string) => void;
}

function BillFormIsPaidInput({ value, onChange }: BillFormIsPaidInputProps) {
  return (
    <div className="space-y-1 flex flex-col">
      <Text>Is paid</Text>
      <label className="flex items-center w-fit cursor-pointer space-x-2">
        <Checkbox value={value} onChange={() => onChange(!value, "isPaid")} />
        <span>Is it already paid?</span>
      </label>
    </div>
  );
}
BillFormIsPaidInput.displayName = "BillForm.IsPaidInput";

function BillFormSubmitButton() {
  return (
    <div className="pt-5">
      <Button type="submit">Save</Button>
    </div>
  );
}
BillFormSubmitButton.displayName = "BillForm.SubmitButton";

export const BillForm = {
  Root: BillFormRoot,
  TitleInput: BillFormTitleInput,
  ValueInput: BillFormValueInput,
  IsPaidInput: BillFormIsPaidInput,
  SubmitButton: BillFormSubmitButton,
};
