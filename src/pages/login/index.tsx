import { Input } from '@components/Input'
import React from 'react'
import styles from './styles.module.scss'

const Login: React.FC = () => {
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
              <div className='p-5'>

                <div className='col-md-12 mt-3'>
                  <Input placeholder='&#xf0e0;   e-mail' />
                </div>

                <div className='col-md-12 mt-3'>
                  <Input placeholder='&#xf023;   senha' />
                </div>

                <div className='col-md-12 text-center mt-3'>
                  <a href='#' className={styles.forgotPass}>Esqueceu à senha ?</a>
                </div>

                <div className='row mt-5 justify-content-center'>
                  <a href="../../home">
                    <button className='btn btn-outline-primary text-dark fw-bold rounded-4 p-3 col-4'>Entrar</button>
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


export default Login
