import styles from "./styles.module.scss";
import logo2 from "../../assets/logo2.svg";

export function Footer(props:any) {
  return (
    <>
      <footer>
        <div className={styles.baseFooter}>
          <div className={styles.detailFooter}>
            <a href="#">Política de Privacidade</a>
          </div>
          <a href="#">
            <img src={logo2} alt="Les Pattes" className={styles.logo} />
          </a>
          <div className={styles.detailFooter}>
            <a href="#">{props.title}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
