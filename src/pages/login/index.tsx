import { Input } from '@components/Input';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <>
    <div className={'h-100 d-flex justify-content-center align-items-center ' + styles.container}>
      <div className={'card w-75 border-0 rounded-4'} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <div className='card-body p-0 justify-content-center'>
          <div className='row'>
            <div className={'col-md-4 d-grid align-items-center ' + styles.firstCard }>
              <div className={styles.title}>
                <h1>Crie sua conta</h1>
                <h6>Necessitamos dos seus dados para prosseguir</h6>
                <br/>
                <a href="../../cadastro">
                <button className='btn btn-outline-primary text-dark fw-bold rounded-4 p-3 col-5'>Cadastrar</button>
                </a>
              </div>


            </div>
            <div className={'col-md-8 p-4 ' + styles.secondCard}>
              <div className={styles.title}>
                <h1>Boas-vindas de volta </h1>
                <h6>Conecte-se novamente!</h6>
              </div>
              <div className='p-4'>
                <div className='col-md-12 mt-3'>
                  <Input
                    {...register('email')}
                    placeholder="&#xf0e0;   e-mail"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className='col-md-12 mt-3'>
                  <Input
                    {...register('password')}
                    placeholder='&#xf023;   senha'
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className='col-md-12 text-center mt-3'>
                  <a href='#' className={styles.forgotPass}>Esqueceu à senha ?</a>
                </div>

                <div className='row mt-5 justify-content-center'>
                  <a href='../../home' className='row mt-5 justify-content-center text-decoration-none'>
                    <button type="submit" className='btn btn-outline-primary text-dark fw-bold rounded-4 p-3 col-4'>Entrar</button>
                  </a>
                  </div>
              </div>
            </div>
            </div>


        </div>
      </div>
    </div>
    </>
  )
}
