import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  className,
}) => {
  const buttonClasses = `
    text-xl text-white transition duration-300 border-black rounded-xl px-3 py-2
    ${
      variant === "primary"
        ? "bg-rose-500 to-cyan-300 border-black hover:rose-600 transition duration-300"
        : variant === "secondary"
        ? "bg-cyan-500 text-white border-[2px] border-black hover:bg-gray-300"
        : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-600"
    } 
    ${className} 
  `;

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
