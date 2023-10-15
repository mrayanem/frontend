import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}

export function ButtonA({ title, ...restProps } : ButtonProps) {
  return <button {...restProps} className={styles.ButtonA}>{title}</button>;
}
