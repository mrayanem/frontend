import { ButtonA } from '@components/ButtonAdmin'
import { HeaderAdmin } from '@components/HeaderAdmin'
import { InputT } from '@components/inputAdmin'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import { User } from 'models/User'
import { useEffect, useState } from 'react'
import {
  createUser,
  getUsers,
  removeUser,
  updateUser
} from 'services/UserService'
import styles from './styles.module.scss'

export default function HomeAdmin() {
  const [users, setUsers] = useState<User[]>([])
  const [id, setId] = useState('')
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

  async function handleSave() {
    const user = {
      cep,
      cpf,
      email,
      name,
      password: senha,
      telefone
    }

    id ? await updateUser(id, user) : await createUser(user);

    await getData()
  }

  async function handleUpdate({ id, cep, cpf, email, name, password, telefone }: User) {

    setId(id)
    setCep(cep)
    setCpf(cpf)
    setEmail(email)
    setName(name)
    setSenha(password)
    setTelefone(telefone)

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputT
                type="text"
                name="cpf"
                title="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <InputT
                type="text"
                name="cep"
                title="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <InputT
                type="text"
                name="telefone"
                title="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <InputT
                type="email"
                name="email"
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ButtonA
              type="button"
              title="Salvar"
              onClick={() => handleSave()}
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
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.cep}</td>
                  <td>{user.telefone}</td>
                  <td>{user.email}</td>
                  <td className="d-flex justify-content-center gap-3 border-start-0">
                    <button
                      style={{ background: 'transparent', border: 'none' }}
                      onClick={() => handleUpdate(user)}
                    >
                      <PencilSimple size={30} weight="bold" color="#86b6c6"/>
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
