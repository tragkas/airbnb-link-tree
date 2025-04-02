import React, { ReactNode } from "react";

interface LinkSocialProps {
  icon: ReactNode;
  link: string;
  textColor?: string;
  hoverColor?: string;
  className?: string;
}

export default function LinkSocial({
  icon,
  link,
  textColor = "text-black",
  hoverColor = "hover:text-gray-600",
  className = "",
}: LinkSocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${textColor} text-2xl ${hoverColor} transition ${className}`}
    >
      {icon}
    </a>
  );
}
