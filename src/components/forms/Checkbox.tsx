import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEventHandler } from "react";

export interface CheckboxProps {
  value?: boolean;
  className?: string;
  onChange?: FormEventHandler<HTMLButtonElement>;
}

export function Checkbox({ value, onChange, className }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      checked={value}
      className={`w-7 h-7 p-[1px] rounded bg-gray-700 shrink-0 ${className}`}
      onClick={onChange}
    >
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight="bold" className="h-6 w-6 text-green-500" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
}
