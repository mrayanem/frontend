import { HeaderClient } from "@components/HeaderClient/index";
import { ProdCard } from "@components/ProdCard";
import { Footer } from "@components/Footer";
import { CaretRight } from "@phosphor-icons/react";
import styles from './styles.module.scss';

const Catalogo: React.FC = () =>{
  return (
    <>
      <HeaderClient />
      <main>
        <p className={styles.categoriaTitulo}>
          CACHORRO <CaretRight size={18} weight="bold" /> Alimentação
        </p>
        <div className={styles.containerCard}>
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1658420112702.jpg"
            title="Ração GoldeN, 1Kg"
            subtitle="R$ 22,90"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1669836951520.jpg"
            title="Ração Premier, 10Kg"
            subtitle="R$ 260,00"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1688504430156.jpg"
            title="Ração Gran Plus, 3Kg"
            subtitle="R$ 62,90"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1660163973690.jpg"
            title="Ração Royal Canin, 1Kg"
            subtitle="R$ 82,90"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1537548285362.jpg"
            title="Ração N&D, 800g"
            subtitle="R$ 105,00"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1633722306582.jpg"
            title="Ração Premier, 2Kg"
            subtitle="R$ 95,90"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1666728054402.jpg"
            title="Ração Royal Canin, 1,5Kg"
            subtitle="R$ 130,00"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1620994884891.jpg"
            title="Ração Hill's, 800g"
            subtitle="R$ 60,00"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Catalogo
