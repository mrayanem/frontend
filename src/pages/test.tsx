
import Head from 'next/head';
import { Input } from '../components/Input';

export default function Home(){
  return(
    <>
      <Head>
      <title>Les Pattes - Login</title>
      </Head>
       <div>
        <h1>Boas-vindas de volta!</h1>
        <h3>Conecte-se novamente!</h3>
        <div>
          <form>
              <Input placeholder='&#xf007; cpf'/>
              <Input placeholder='&#xf007; e-mail'/>
              <Input placeholder='&#xf007; senha'/>
          </form>
        </div>
        </div>
    </>
  )
}
