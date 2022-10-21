import { Heading } from "../ui/Heading";
import { ArrowLeft, Coins } from "phosphor-react";
import { Link } from "react-router-dom";
interface HeaderProps {
  title?: string;
  goBack?: boolean;
}

export function Header({ title = "My Bills", goBack }: HeaderProps) {
  return (
    <header className="px-5 py-4 flex items-center space-x-3 border-b-2 border-gray-800 bg-gray-900 z-50 sticky top-0">
      {goBack && (
        <Link to="/" className="active:opacity-75">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      )}
      <Coins className="h-8 w-8 text-green-500" />
      <Heading size="md" asChild>
        <h1>{title}</h1>
      </Heading>
    </header>
  );
}
