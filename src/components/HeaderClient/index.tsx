import { ShoppingCartSimple, User } from "@phosphor-icons/react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function HeaderClient() {
  return (
    <header>
      <nav className={styles.navClient}>
        <div>
          <a href="#">
            <img src='/logo.svg' alt="Les Pattes" className={styles.logo} />
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
          <Link href={'/login'} className={styles.login}>
            <User size={20} weight="bold" /> Login
          </Link>
          <Link href={'/cadastro'} className={styles.carrinho}>
            <ShoppingCartSimple size={20} weight="bold" />
            Carrinho
          </Link>
        </div>
      </nav>
    </header>
  );
}
