import { Heading } from "../ui/Heading";
import { ArrowLeft, Coins } from "phosphor-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
interface HeaderProps {
  title?: string;
  goBack?: boolean;
  children?: ReactNode;
}

export function Header({ title = "My Bills", goBack, children }: HeaderProps) {
  return (
    <header className="px-5 py-4 flex items-center  border-b-2 border-gray-800 bg-gray-900 z-50 sticky top-0">
      {goBack && (
        <Link to="/" className="active:opacity-75 mr-3">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      )}
      <Coins className="h-8 w-8 text-green-500" />
      <Heading size="md" asChild>
        <h1 className="ml-3">{title}</h1>
      </Heading>
      {children}
    </header>
  );
}
