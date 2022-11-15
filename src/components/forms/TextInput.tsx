import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={`
        h-12
        flex items-center space-x-2
        py-4 px-3 rounded 
        bg-gray-800
        w-full 
        focus-within:ring-2 ring-green-500
      `}
    >
      {children}
    </div>
  );
}
TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="outline-0 bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

function TextInputCurrency(props: CurrencyInputProps) {
  return (
    <CurrencyInput
      className="outline-0 bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Currency";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Currency: TextInputCurrency
};
