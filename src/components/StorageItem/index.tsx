import { setCookie } from 'nookies';
import { NavLink, useHistory } from 'react-router-dom';
import style from './storageitem.module.scss';

interface StorageItemData {
  id: number;
  name: string;
  quantity: string;
  weight: string
}

interface Props {
  data: StorageItemData;
}

const StorageItem = (props: Props) => {
  const history = useHistory();
  const { data } = props;
  const {
    id, name, quantity, weight,
  } = data;

  const handleClickDetalhes = () => {
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
              {(name.length === 0) ? '- -' : name}
            </td>
            <td>
              <span>Quantity (in stock)</span>
              <br />
              {(quantity) || '- -'}
            </td>
            <td>
              <span>Weight (g)</span>
              <br />
              {(weight) || '- -'}
            </td>
            <td style={{ width: '50px' }}>
              <button type="button" style={{ display: 'table-cell' }} onClick={handleClickDetalhes}>+1</button>
            </td>
            <td style={{ width: '50px' }}>
              <button type="button" style={{ display: 'table-cell' }} onClick={handleClickDetalhes}>-1</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { StorageItem };
