import React from 'react'
import Head from 'next/head';
import { Input } from '../components/Input';
import { Title } from '@/components/Login/styles';
import { Container } from '@/components/Login/styles';

const Login: React.FC = () => {
  return (
    <>
    <Head>
    <title>Les Pattes - Login</title>
   </Head>

    <Container className='container d-flex justify-content-center align-items-center'>
      <div className='card p-5 border-0'>
        <div className='card-body d-grid justify-content-center'>
          <Title className='row mb-4 text-center'>
            <h1>Cadastre-se</h1>
            <h2>Necessitamos dos seus dados para prosseguir</h2>
          </Title>

          <div className='w-75'>
            <div className='row'>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf4ff; nome'/>
              </div>
                <div className="col">
                  <Input type="text" className="form-control p-3" placeholder='&#xf095; telefone'/>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf015; cep' />
              </div>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf007; cpf' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf0e0; e-mail' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf023; senha' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input className='form-control p-3' placeholder='&#xf023; confirmar senha' />
              </div>
            </div>

            <div className='row mt-4 justify-content-center'>
              <button className='btn btn-outline-primary text-dark fw-bold rounded-4 p-3 col-4'>Cadastrar</button>
            </div>
          </div>

        </div>
      </div>
    </Container>
    </>
  )
}


export default Login
