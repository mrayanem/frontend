import styles from "../styles/prodCard.module.css";
import { CardButton } from "@components/CardButton";

export function ProdCard(props:any) {
  return (
    <div className={styles.cardProduto}>
      <div className={styles.imgProduto}>
        <img src={props.imageUrl} className={styles.imagem} />
      </div>
      <div className={styles.descProduto}>
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
        <CardButton url="#" />
      </div>
    </div>
  );
}
