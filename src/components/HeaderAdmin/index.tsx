import { SignOut } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

export function HeaderAdmin() {
  return (
    <header>
      <nav className={styles.navAdmin}>
        <div>
          <a href="#">
            <img src='logo.svg' alt="Les Pattes" className={styles.logo} />
          </a>
        </div>
        <div className={styles.header}>
          <a href="#">Usuários</a>
          <a href="#">Produtos</a>
          <a href="#">Pedidos</a>
        </div>
        <div className={styles.icon}>
          <SignOut size={20} weight="bold" />
        </div>
      </nav>
    </header>
  );
}
