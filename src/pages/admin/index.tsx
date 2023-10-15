import { ButtonA } from '@components/ButtonAdmin'
import { HeaderAdmin } from '@components/HeaderAdmin'
import { InputT } from '@components/inputAdmin'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const HomeAdmin: React.FC = () => {
  const [users, setUsers] = useState([])
  async function getUsers() {
    const adminUsers = await axios.get('http://localhost:5555/users')
    setUsers(adminUsers as any)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <HeaderAdmin />
      <div className={styles.homeContainer}>
        <h1>Usuários</h1>
        <div className={styles.addContainer}>
          <form>
            <span> Informações</span>
            <div className={styles.formInputs}>
              <InputT type="text" name="nome" title="Nome" />
              <InputT type="text" name="cpf" title="CPF" />
              <InputT type="text" name="cep" title="CEP" />
              <InputT type="text" name="telefone" title="Telefone" />
              <InputT type="email" name="email" title="Email" />
            </div>
            <ButtonA type="submit" title="Salvar" />
          </form>
        </div>
        <div className="col-md-12 table-responsive mt-5">
          <table className={'table table-bordered ' + styles.table}>
            <thead className='rounded-4'>
              <tr>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>CPF</th>
                <th className={styles.th}>CEP</th>
                <th className={styles.th}>Telefone</th>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>juj</td>
                <td>huh</td>
                <td>fdfg</td>
                <td>rt</td>
                <td>dfb</td>
                <td>ety6</td>
                <td className="d-flex justify-content-center gap-3 border-start-0">
                  <a href="#" className="border-0">
                    <PencilSimple size={30} weight="bold" color="blue"></PencilSimple>
                  </a>
                  <a href="#" className="border-0">
                    <Trash size={30} weight="bold" color="red"></Trash>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
