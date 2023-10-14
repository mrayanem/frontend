import styles from "./styles.module.scss";

export function Footer(props:any) {
  return (
    <>
      <footer>
        <div className={styles.baseFooter}>
          <div className={styles.detailFooter}>
            <a href="#">Política de Privacidade</a>
          </div>
          <a href="#">
            <img src='/logo.svg' alt="Les Pattes" className={styles.logo} />
          </a>
          <div className={styles.detailFooter}>
            <a href="#">Sobre Nós</a>
          </div>
        </div>
      </footer>
    </>
  );
}
