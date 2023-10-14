import PropTypes from "prop-types";
import logo from "../assets/logo.svg";
import styles from "./styles.module.css";
import { SignOut } from "@phosphor-icons/react";

export function HeaderAdmin() {
  return (
    <header>
      <nav className={styles.navAdmin}>
        <div>
          <a href="#">
            <img src={logo} alt="Les Pattes" className={styles.logo} />
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
