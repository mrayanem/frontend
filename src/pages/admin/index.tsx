import { ButtonA } from '@components/ButtonAdmin'
import { HeaderAdmin } from '@components/HeaderAdmin'
import { InputT } from '@components/inputAdmin'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import { User } from 'models/User'
import { useEffect, useState } from 'react'
import {
  createUser,
  getUsers,
  removeUser
} from 'services/UserService'
import styles from './styles.module.scss'

export default function HomeAdmin() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  async function getData() {
    const res = await getUsers()

    console.log(res)

    if (res) {
      setUsers(res)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  async function handleCreate() {
    const user = {
      cep,
      cpf,
      email,
      name,
      password: senha,
      telefone
    }

    await createUser(user)

    await getData()
  }

  async function handleUpdate({ id, cep, cpf, email, name, password, telefone }: User) {

  }

  async function handleDelete(id: string) {
    await removeUser(id)

    await getData()
  }


  return (
    <>
      <HeaderAdmin />
      <div className={styles.homeContainer}>
        <h1>Usuários</h1>
        <div className={styles.addContainer}>
          <form>
            <span> Informações</span>
            <div className={styles.formInputs}>
              <InputT
                type="text"
                name="nome"
                title="Nome"
                onChange={(e) => setName(e.target.value)}
              />
              <InputT
                type="text"
                name="cpf"
                title="CPF"
                onChange={(e) => setCpf(e.target.value)}
              />
              <InputT
                type="text"
                name="cep"
                title="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
              <InputT
                type="text"
                name="telefone"
                title="Telefone"
                onChange={(e) => setTelefone(e.target.value)}
              />
              <InputT
                type="email"
                name="email"
                title="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ButtonA
              type="button"
              title="Salvar"
              onClick={() => handleCreate()}
            />
          </form>
        </div>
        <div className="col-md-12 table-responsive mt-5">
          <table className={'table table-bordered ' + styles.table}>
            <thead className="rounded-4">
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
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.cep}</td>
                  <td>{user.telefone}</td>
                  <td>{user.email}</td>
                  <td className="d-flex justify-content-center gap-3 border-start-0">
                    <button
                      style={{ background: 'transparent', border: 'none' }}
                    >
                      <PencilSimple size={30} weight="bold" color="#86b6c6" />
                    </button>
                    <button
                      style={{ background: 'transparent', border: 'none' }}
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash size={30} weight="bold" color="#dc2626" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
