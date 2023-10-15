import { Footer } from "@components/Footer";
import { HeaderClient } from "@components/HeaderClient";
import styles from "./styles.module.scss";

export default function Privacidade() {
  return (
    <>
 <HeaderClient />
      <div className={styles.wrapper}>
        <h1>Sobre Nós</h1>
        <p>
        Les Pattes é muito mais do que apenas um pet shop.
        Somos um paraíso para os amantes de animais de estimação,
        onde o amor, o estilo e o cuidado se unem. Fundada por
        apaixonados por animais, nossa missão é proporcionar uma
        experiência única e completa para você e seu melhor amigo
        peludo.No Les Pattes, comprometemo-nos a oferecer uma ampla
        gama de produtos de alta qualidade para atender às necessidades
        de seus animais de estimação. Acreditamos que cada pet merece o
        melhor, e é por isso que selecionamos cuidadosamente os produtos
        que vendemos, desde alimentos premium até brinquedos, roupas,
        acessórios e produtos de higiene.
        </p>
      </div>
      <br/><br/><br/><br/>
      <Footer />
    </>
  );
}
