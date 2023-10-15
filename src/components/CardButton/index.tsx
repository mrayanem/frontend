import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
interface CardButtonProps extends InputHTMLAttributes<HTMLLinkElement>{
  url: string;
}

export function CardButton({ url }: CardButtonProps) {
  return (
    <>
        <a href={url} className={'btn ' + styles.btnProduto}>
          Adicionar ao Carrinho
        </a>
    </>
  );
}
