import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  title: string;
  link: string;
  size?: "small" | "regular";
}

const ButtonLink = ({ title, link, size = "regular" }: ButtonLinkProps) => {
  return (
    <Link href={link}>
      <a>
        <button
          className={`rounded-md border-2 border-ds-accent text-ds-accent transition-all duration-200 hover:bg-ds-accent/10 ${
            size === "small" ? "py-1 px-4" : "py-2 px-6"
          }`}
        >
          {title}
        </button>
      </a>
    </Link>
  );
};

export default ButtonLink;
