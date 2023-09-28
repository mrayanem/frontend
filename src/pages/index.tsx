import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import  { Input } from '../components/ui/Input';

export default function Home(){
  return(
    <>
      <Head>
      <title>Les Pattes - Login</title>
      </Head>
       <div className={styles.containerCenter}>
        <h1>Boas-vindas de volta!</h1>
        <h3>Conecte-se novamente!</h3>
        <div className={styles.login}>
            <form>
                <Input placeholder='&#xf007; cpf'/>
            </form>
        </div>
        </div>
    </>
  )
}
