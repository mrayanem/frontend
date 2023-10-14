import styles from "./styles.module.css";
import logo from "../assets/logo.svg";
import { ShoppingCartSimple, User } from "@phosphor-icons/react";

export function HeaderClient() {
  return (
    <header>
      <nav className={styles.navClient}>
        <div>
          <a href="#">
            <img src={logo} alt="Les Pattes" className={styles.logo} />
          </a>
        </div>
        <div className={styles.headerClient}>
          <div className={styles.dropdown}>
            <button className={styles.link}>Categorias</button>
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownHeading}>CACHORRO</div>
              <div className={styles.dropdownLinks}>
                <a href="#" className={styles.subLink}>
                  Alimentação
                </a>
                <a href="#" className={styles.subLink}>
                  Higiene
                </a>
                <a href="#" className={styles.subLink}>
                  Brinquedos
                </a>
              </div>
              <div className={styles.dropdownHeading}>GATO</div>
              <div className={styles.dropdownLinks}>
                <a href="#" className={styles.subLink}>
                  Alimentação
                </a>
                <a href="#" className={styles.subLink}>
                  Higiene
                </a>
                <a href="#" className={styles.subLink}>
                  Brinquedos
                </a>
              </div>
            </div>
            <a href="#" className={styles.contato}>
              Contato
            </a>
          </div>
        </div>
        <div className={styles.accLinks}>
          <a href="#" className={styles.login}>
            <User size={20} weight="bold" /> Login
          </a>
          <a href="#" className={styles.carrinho}>
            <ShoppingCartSimple size={20} weight="bold" />
            Carrinho
          </a>
        </div>
      </nav>
    </header>
  );
}
