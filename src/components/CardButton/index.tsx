import styles from "./styles.module.scss";

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
