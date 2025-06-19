import React from "react";

const base = "px-4 py-2 font-semibold rounded";
const variants = {
  primary: "bg-sky-500 text-white hover:bg-sky-700",
  secondary: "bg-gray-300 text-black hover:bg-gray-400",
};

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
