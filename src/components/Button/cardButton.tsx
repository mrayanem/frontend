import styles from "../styles/cardButton.module.css";

export function CardButton(props:any) {
  return (
    <>
      <div className={styles.botao}>
        <a href={props.url} className={styles.btnProduto}>
          Adicionar ao Carrinho
        </a>
      </div>
    </>
  );
}
