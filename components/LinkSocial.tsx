import React, { JSX } from "react";

export default function LinkSocial({ icon, link }: { icon: JSX.Element; link: string }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-2xl hover:text-gray-600 transition"
      >
        {icon}
      </a>
    );
  }
  