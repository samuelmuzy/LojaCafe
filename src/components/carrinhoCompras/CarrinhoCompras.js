import React from 'react';
import {
  DivCarrinho,
  DivCardCarrinho,
  DivPagamento,
  CardCarinho,
  ImgBebidaCarrinho,
  Gap,
  ButtonDeletar,
  ButtonBebidas,
} from '../../styles/Carrinho';
import { ResumoPagamento } from './ResumoPagamento';
import { ItemCarrinho } from './ItemCarrinho';

export const CarrinhoCompras = ({ pedido, deletarBebida }) => {
  if (!pedido.bebidas || pedido.bebidas.length === 0) {
    return <p>Carrinho vazio</p>;
  }

  return (
    <DivCarrinho>
      <DivCardCarrinho>
        <h1>Carrinho de compras</h1>
        {pedido.bebidas.map((bebida) => (
          <ItemCarrinho
            key={bebida.productId}
            bebida={bebida}
            idPedido={pedido.idPedido}
            deletarBebida={deletarBebida}
          />
        ))}
      </DivCardCarrinho>
      <ResumoPagamento
        idPedido={pedido.idPedido}
        formaPagamento={pedido.formaPagamento}
        somaTotal={pedido.somaTotal}
      />
    </DivCarrinho>
  );
};

