import Link from "next/link";
import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  navigationLink?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  className = "",
  onClick,
  children,
  navigationLink,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
  "px-3 py-2 border border-black rounded-full";
  if (navigationLink) {
    return (
      <Link href={navigationLink}>
        <button className={`${baseClasses} ${className}`} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
