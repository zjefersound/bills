import { Heading } from "../ui/Heading";
import { Coins } from "phosphor-react";

export function Header() {
  return (
    <div className="px-5 py-4 flex items-center space-x-3 border-b-2 border-gray-800 bg-gray-900 z-50 sticky top-0">
      <Coins className="h-8 w-8 text-green-500" />
      <Heading size="md" asChild>
        <h1>My Bills</h1>
      </Heading>
    </div>
  );
}
