import React from "react";

export interface ButtonProps {
  dark: boolean;
  transparent: boolean;
  children: JSX.Element | string;
}
export default function Button({ dark, transparent, children }: ButtonProps) {
  const defaultClass = "border p-5 h-10 flex items-center rounded-xl ";
  const textColor = dark === false ? "text-primary " : "text-white ";
  const backgroundColor = dark === true ? "bg-primary " : "bg-secondary ";
  const opacity = transparent === true ? "opacity-0 " : "opacity-100";
  return (
    <li className={defaultClass + textColor + backgroundColor + opacity}>
      {children}
    </li>
  );
}
