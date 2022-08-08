import { setCookie } from 'nookies';
import { NavLink, useHistory } from 'react-router-dom';
import style from './listaprojetoitem.module.scss';

interface ProjetoData {
  id: number;
  nome: string;
  cliente: string;
  status: string
}

interface Props {
  data: ProjetoData;
}

const ListaProjetoItem = (props: Props) => {
  const history = useHistory();
  const { data } = props;
  const {
    id, nome, cliente, status,
  } = data;
  let choosenStatus = '';
  if (status === 'Aprovado') {
    choosenStatus = style.StatusVerde;
  } else if (status === 'Reprovado') {
    choosenStatus = style.StatusVermelho;
  } else {
    // Aguardando
    choosenStatus = style.StatusAmarelo;
  }

  const handleClickDetalhes = () => {
    // Save JWT token in cookie
    setCookie(undefined, 'nextauth.p', id.toString(), {
      maxAge: 60 * 60 * 24 * 30, // 30 days,
      path: '/',
      sameSite: true,
    });

    history.push({
      pathname: '/CotacaoProjeto',
      // search: `?id=${data.id}`,
      state: { pid: id },
    });
  };

  return (
    <div className={style.listaProjetoItemClass}>
      <table>
        <tbody>
          <tr>
            <td style={{ width: '50px' }}>
              <span>Código</span>
              <br />
              #
              {id}
            </td>
            <td style={{ width: '150px' }}>
              <span>Projeto</span>
              <br />
              {(nome.length === 0) ? '- -' : nome}
            </td>
            <td>
              <span>Cliente</span>
              <br />
              {cliente}
            </td>
            <td style={{ width: '50px' }}>
              <span>Status</span>
              <br />
              <span className={choosenStatus}>{status}</span>
            </td>
            <td style={{ width: '50px' }}>
              <button type="button" onClick={handleClickDetalhes}>Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { ListaProjetoItem };
