import React from 'react';
import { CardCarinho, ImgBebidaCarrinho, Gap, GapQ, CardC } from '../../styles/Carrinho';
import ButtonDeletar from '../buttons/ButtonDeletar';
import { ApiUrl } from '../../const/apiUrl';

export const ItemCarrinho = ({ bebida, idPedido, deletarBebida }) => {
  return (
    <CardCarinho>
      <ImgBebidaCarrinho src={bebida.caminhoImagem} />
      <Gap>
        <h3>{bebida.nomeBebida}</h3>
        <ButtonDeletar Click={() => deletarBebida(bebida.productId, idPedido)}>Deletar</ButtonDeletar>
      </Gap>
      <CardC>
        <GapQ>
          <p>Quantidade</p>
          <p>{bebida.quantity}</p>
        </GapQ>
        <GapQ>
          <p>subTotal</p>
          <p>{`R$ ${bebida.valorTotal}`}</p>
        </GapQ>
      </CardC>
    </CardCarinho>
  );
};
