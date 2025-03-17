import React, { JSX } from "react";

interface LinkButtonProps {
  text: string;
  icon: JSX.Element;
  link: string;
  bgColor: string;
}

export default function LinkButton({ text, icon, link, bgColor }: LinkButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 w-full p-3 text-white font-semibold rounded-xl shadow-md transition ${bgColor} hover:bg-opacity-80`}
    >
      {icon}
      {text}
    </a>
  );
}


