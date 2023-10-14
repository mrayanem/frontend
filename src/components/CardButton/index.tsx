import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
interface CardButtonProps extends InputHTMLAttributes<HTMLLinkElement>{
  url: string;
}

export function CardButton({ url }: CardButtonProps) {
  return (
    <>
      <div className={styles.botao}>
        <a href={url} className={styles.btnProduto}>
          Adicionar ao Carrinho
        </a>
      </div>
    </>
  );
}
