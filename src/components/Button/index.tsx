import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}

export function Button({ title, ...restProps } : ButtonProps) {
  return <button {...restProps}>{title}</button>;
}
