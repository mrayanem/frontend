import React from 'react'
import Head from 'next/head';
import { Input } from '../components/Input';

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
            <h1>Cadastre-se</h1>
            <h2>Necessitamos dos seus dados para prosseguir</h2>
          </div>

          <div>
            <div className='row'>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf4ff; nome'/>
              </div>
                <div className="col">
                  <Input type="text" className="form-control p-2" placeholder='&#xf095; telefone'/>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf015; cep' />
              </div>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf007; cpf' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf0e0; e-mail' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf023; senha' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-2' placeholder='&#xf023; confirmar senha' />
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
