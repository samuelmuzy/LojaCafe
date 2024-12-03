import React from 'react';
import { CardCarinho, ImgBebidaCarrinho, Gap} from '../../styles/Carrinho';
import ButtonDeletar from '../buttons/ButtonDeletar';

export const ItemCarrinho = ({ bebida, idPedido, deletarBebida }) => {
  return (
    <CardCarinho>
      <ImgBebidaCarrinho src={`http://localhost:3003${bebida.caminhoImagem}`} />
      <Gap>
        <h3>{bebida.nomeBebida}</h3>
        <ButtonDeletar Click={() => deletarBebida(bebida.productId, idPedido)}>Deletar</ButtonDeletar>
      </Gap>
      <Gap>
        <p>Quantidade</p>
        <p>{bebida.quantity}</p>
      </Gap>
      <Gap>
        <p>subTotal</p>
        <p>{`R$ ${bebida.valorTotal}`}</p>
      </Gap>
    </CardCarinho>
  );
};
