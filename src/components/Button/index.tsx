import { InputHTMLAttributes } from "react";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
  title: string;
}

export function Button({ title } : ButtonProps) {
  return <button>{title}</button>;
}
