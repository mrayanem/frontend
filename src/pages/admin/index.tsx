import styles from "./styles.module.scss";
import { HeaderAdmin } from "@components/HeaderAdmin";
import { Trash, PencilSimple } from "@phosphor-icons/react";
import { InputT } from "@components/inputAdmin";
import { ButtonA } from "@components/ButtonAdmin";

const HomeAdmin: React.FC = () => {
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
        <div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>CPF</th>
                <th className={styles.th}>CEP</th>
                <th className={styles.th}>Telefone</th>
                <th className={styles.th}>Email</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td className={styles.td}>juj</td>
                <td className={styles.td}>huh</td>
                <td className={styles.td}>fdfg</td>
                <td className={styles.td}>rt</td>
                <td className={styles.td}>dfb</td>
                <td className={styles.td}>ety6</td>
                <td className={styles.td}>
                  <PencilSimple size={20} weight="bold"></PencilSimple>
                  <Trash size={20} weight="bold"></Trash>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin
