import { InputHTMLAttributes } from "react";
import styles from './styles.module.scss';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
  title: string;
}

export function ButtonA({ title } : ButtonProps) {
  return <button className={styles.ButtonA}>{title}</button>;
}
