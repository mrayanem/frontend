import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface FooterProps extends InputHTMLAttributes<HTMLDivElement>{
}

export function Footer({ }: FooterProps) {
  return (
    <>
      <footer>
        <div className={'d-flex justify-content-around align-items-center ' + styles.baseFooter}>
          <div className={styles.detailFooter}>
            <a href="../../privacidade">Política de Privacidade</a>
          </div>
          <a href="#">
            <img src='/logo.svg' alt="Les Pattes" className={'align-items-center' + styles.logo} />
          </a>
          <div className={styles.detailFooter}>
            <a href="../../sobrenos">Sobre Nós</a>
          </div>
        </div>
      </footer>
    </>
  );
}
