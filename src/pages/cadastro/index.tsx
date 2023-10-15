import { Input } from '@components/Input'
import styles from './styles.module.scss'

export default function Cadastro () {
  return (
    <>
    <div className={'h-100 d-flex justify-content-center align-items-center ' + styles.container}>
      <div className='card w-75 border-0 rounded-4 p-2' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <div className='card-body d-grid justify-content-center'>
          <div className={styles.title}>
            <h1>Cadastre-se</h1>
            <h6>Necessitamos dos seus dados para prosseguir</h6>
          </div>

          <div className='p-4'>
            <div className='row'>
              <div className='col'>
                <Input placeholder='&#xf4ff;   nome'/>
              </div>
                <div className="col">
                  <Input placeholder='&#xf095;   telefone'/>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf015;   cep' />
              </div>
              <div className='col'>
                <Input placeholder='&#xf007;   cpf' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf0e0;   e-mail' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf023;   senha' />
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf023;   confirmar senha' />
              </div>
            </div>

            <div className='row mt-4 justify-content-center'>
              <button className='btn btn-outline-primary text-dark fw-bold rounded-4 p-3 col-4'>Cadastrar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
