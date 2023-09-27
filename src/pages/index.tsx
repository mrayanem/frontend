import React from 'react'
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';

const Login: React.FC = () => {
  return (
    <>

    <Head>
    <title>Les Pattes - Login</title>
   </Head>

    <div className='container d-flex justify-content-center align-items-center w-100 h-100'>
      <div className='card p-5 w-100 h-auto'>
        <div className='card-body d-grid justify-content-center'>
          <div className='row mb-4 text-center'>
            <h2>Cadastre-se</h2>
            <p>Necessitamos dos seus dados para prosseguir</p>
          </div>

          <div>
            <div className='row'>
              <div className='col'>
                <input className='form-control p-2' placeholder='&#xf007;   nome' style={{fontFamily: 'Arial, FontAwesome'}} />
              </div>
                <div className="col">
                  <input type="text" className="form-control p-2" placeholder="nome"/>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <input className='form-control p-2' placeholder='cep' />
              </div>
              <div className='col'>
                <input className='form-control p-2' placeholder='cpf' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <input className='form-control p-2' placeholder='e-mail' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <input className='form-control p-2' placeholder='senha' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <input className='form-control p-2' placeholder='confirmar senha' />
              </div>
            </div>

            <div className='row mt-4 justify-content-center'>
              <button className='btn btn-outline-primary text-dark fw-bold rounded-4 p-2 col-4'>Cadastrar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default Login
