import { CurrencyDollar, Tag } from "phosphor-react";
import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";
import { TextInput } from "../../components/forms/TextInput";
import { Button } from "../../components/ui/Button";
import { Text } from "../../components/ui/Text";

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
  onChange: ChangeEventHandler<HTMLInputElement>;
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
          onChange={onChange}
          required
        />
      </TextInput.Root>
    </div>
  );
}
BillFormTitleInput.displayName = "BillForm.TitleInput";

interface BillFormValueInputProps {
  value?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function BillFormValueInput({ value, onChange }: BillFormValueInputProps) {
  return (
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
          value={value}
          onChange={onChange}
          required
        />
      </TextInput.Root>
    </div>
  );
}
BillFormValueInput.displayName = "BillForm.ValueInput";

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
  SubmitButton: BillFormSubmitButton,
};
