import React, { ReactNode } from "react";

export interface ScreenRootProps {
  children: ReactNode;
}

export interface ScreenSectionProps {
  className?: string;
  children: ReactNode;
}

export function ScreenRoot({ children }: ScreenRootProps) {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-auto text-white bg-gray-900">{children}</main>
  );
}
ScreenRoot.displayName = "Screen.Root";

export function ScreenSection({ children, className }: ScreenSectionProps) {
  return <section className={`p-5 ${className}`}>{children}</section>;
}
ScreenRoot.displayName = "Screen.Section";

export const Screen = {
  Root: ScreenRoot,
  Section: ScreenSection,
};
