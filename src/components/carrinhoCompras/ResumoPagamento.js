import React from 'react';
import { DivPagamento} from '../../styles/Carrinho';
import { ButtonBebidas } from '../../styles/Bebidas';

export const ResumoPagamento = ({ idPedido, formaPagamento, somaTotal }) => {
  return (
    <DivPagamento key={idPedido}>
      <h3>Resumo do pedido</h3>
      <p>Forma de Pagamento: {formaPagamento}</p>
      <p>{`Valor do Pedido: R$${somaTotal}`}</p>
      <ButtonBebidas>Finalizar Compra</ButtonBebidas>
    </DivPagamento>
  );
};
