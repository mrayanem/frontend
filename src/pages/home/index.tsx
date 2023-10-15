import { Footer } from "@components/Footer";
import { HeaderClient } from "@components/HeaderClient";
import { ProdCard } from "@components/ProdCard";
import { Clock, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <HeaderClient />
      <section className={styles.mainContainer}>
        <div className={styles.main}>
          <div className={styles.mainText}>
            <h1>Lutamos para oferecer uma vida digna para quem não pode falar</h1>
            <p>Está esperando o que para fazer seu pet mais feliz? Aqui você encontra os produtos necessarios para o cuidado com o seu pet.</p>
          </div>

          <img src='/gato.png' className={styles.mainFoto}></img>
        </div>
      </section>
      <section>
        <div className={styles.cardTitle}>
          <p> Produtos Recomendados</p>
        </div>
        <div className={styles.containerCard}>
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
        <div id="contato" className={styles.contatoText}>
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
            <Clock size={22}></Clock>
            09:00 ~ 17:30
          </p>
          <p>
            <Phone size={22}></Phone>
            4178-9201
          </p>
          <p>
            <WhatsappLogo size={22}></WhatsappLogo>
            (11) 94729-4172
          </p>
          <p>
            <EnvelopeSimple size={22}></EnvelopeSimple>
            contatoLesPattes@hotmail.com
          </p>
          <p>
            <MapPin size={22}></MapPin>
            Al. Rio Negro - Alphaville
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home
