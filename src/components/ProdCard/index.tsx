import { CardButton } from "@components/CardButton";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ProdCardProps extends InputHTMLAttributes<HTMLDivElement>{
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function ProdCard({ imageUrl, title, subtitle}: ProdCardProps) {
  return (
    <div className={'p-3 rounded-3 ' + styles.cardProduto}>
      <div className={styles.imgProduto}>
        <img src={imageUrl} className={styles.imagem} />
      </div>
      <div className={styles.descProduto}>
        <p>{title}</p>
        <p>{subtitle}</p>
        <CardButton url="#" />
      </div>
    </div>
  );
}
