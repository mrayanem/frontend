import { Input } from '@components/Input'
import styles from './styles.module.scss'

export default function loginAdmin () {
  return (
    <>
    <div className={'h-100 d-flex justify-content-center align-items-center ' + styles.container}>
      <div className='card w-75 border-0 rounded-4 p-2' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <div className='card-body d-grid justify-content-center'>
          <div className={styles.title}>
            <h1>Login</h1>
            <h6>Seja bem-vindo de volta!</h6>
          </div>
          <div>
          <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf0e0;   e-mail' id="email" name="email" type="email" autoComplete="email" required/>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <Input placeholder='&#xf023;   senha' id="password" name="password" type="password" required/>
              </div>
            </div>

            <div className='row mt-4 justify-content-center'>
              <a href="../../admin" className='row mt-4 justify-content-center text-decoration-none'>
                 <button className={styles.btn} >Entrar</button>
              </a>
            </div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
  }
