import { HeaderClient } from "@components/HeaderClient";
import { ProdCard } from "@components/ProdCard";
import { Footer } from "@components/Footer";
import { Clock, Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <HeaderClient />
      <section className={styles.mainContainer}>
        <div className={styles.main}>
          <h1 className={styles.mainText}>
            Lutamos para oferecer uma vida digna para quem não pode falar
          </h1>
          <img src='/gato.png' className={styles.mainFoto}></img>
        </div>
      </section>
      <section>
        <div className={styles.cardTitle}>
          <p> Produtos Recomendados</p>
        </div>
        <div className={styles.cardContainer}>
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1658420112702.jpg"
            title="Ração GoldeN, 1Kg"
            subtitle="R$ 22,90"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1502308227115.jpg"
            title="Antipulgas Simparic 20mg, 3 un"
            subtitle="R$ 264,30"
          />
          <ProdCard
            imageUrl="https://images.petz.com.br/fotos/1688143004271.jpg"
            title="Brinquedo Pelúcia Macaco"
            subtitle="R$ 30,90"
          />
        </div>
      </section>
      <section className={styles.contato}>
        <div className={styles.contatoText}>
          <h1> Entre em contato com a gente!</h1>
          <br />
          <p>
            Entre em contato com a Les Pattes, queremos tirar as suas dúvidas,
            ouvir suas queixas surgestões e elogios.
          </p>
          <button className={styles.btnContato}>Entre em contato!</button>
        </div>
        <div className={styles.contatoInfo}>
          <p>
            <Clock weight="bold" size={22}></Clock>
            09:00 ~ 17:30
          </p>
          <p>
            <Phone weight="bold" size={22}></Phone>
            4178-9201
          </p>
          <p>
            <WhatsappLogo weight="bold" size={22}></WhatsappLogo>
            (11) 94729-4172
          </p>
          <p>
            <EnvelopeSimple weight="bold" size={22}></EnvelopeSimple>
            contatoLesPattes@hotmail.com
          </p>
          <p>
            <MapPin weight="bold" size={22}></MapPin>
            Al. Rio Negro - Alphaville
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home
