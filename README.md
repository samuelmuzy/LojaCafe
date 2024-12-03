Café_Dev - Front-End: A energia que seu sistema precisa
Descrição
O Café_Dev Front-End é uma interface moderna e eficiente para interação com a API de gerenciamento de pedidos de bebidas. Pensada para desenvolvedores que buscam facilidade e praticidade, assim como um bom café, nossa interface oferece a energia necessária para gerenciar pedidos de forma intuitiva. Através dela, é possível criar, visualizar e atualizar pedidos, adicionar bebidas ao carrinho e interagir com os clientes. A segurança no acesso à interface é garantida por tokens JWT, para que apenas usuários autorizados possam realizar ações.

Funcionalidades
Gerenciamento de Pedidos: Interface para criação, visualização, exclusão e atualização de pedidos.
Gerenciamento de Bebidas: Adição, atualização, exclusão e consulta de bebidas.
Carrinho de Compras: Adicionar bebidas ao carrinho e realizar o checkout.
Autenticação: Garantia de segurança utilizando JWT para login e controle de acesso.
Requisitos
Tenha o Node.js instalado na versão mais recente.
Tenha o npm instalado na versão mais recente.
Tenha o VS Code instalado na versão mais recente.
Tenha o React (ou qualquer outra biblioteca/framework Front-End de sua preferência) instalado.
Instalação
Clone este repositório para sua máquina local.
Abra o diretório do projeto no VS Code.
Execute o comando npm install para instalar todas as dependências do Front-End.
Execução
Clone o repositório do Backend:

Faça o download do backend aqui.
Crie as tabelas no MySQL:

Execute o seguinte script no MySQL para criar as tabelas necessárias:
sql
Copiar código
CREATE TABLE tbcliente (
    dfid_cliente VARCHAR(200) PRIMARY KEY,
    dfnome_cliente VARCHAR(200),
    dftelefone_cliente VARCHAR(20),
    dfemail_cliente VARCHAR(200) UNIQUE,
    dfsenha_cliente VARCHAR(200),
    dfuser_role VARCHAR(30)
);

CREATE TABLE tbbebidas (
    dfid_bebida VARCHAR(200) PRIMARY KEY,
    dfnome_bebida VARCHAR(200), 
    dfdescricao_bebida VARCHAR(200),
    dfpreco DOUBLE,
    dfcaminho_imagem VARCHAR(200),
    dfbebida_disponivel BOOLEAN
);

CREATE TABLE tbpedido (
    dfid_pedido VARCHAR(200) PRIMARY KEY,
    dfid_cliente VARCHAR(200) REFERENCES tbcliente(dfid_cliente) ON DELETE CASCADE,
    dfdata_pedido DATE,
    dfforma_pagamento VARCHAR(200),
    dfvalor_pedido DOUBLE
);

CREATE TABLE tbpedido_bebida (
    dfid_bebida VARCHAR(200),
    dfid_pedido VARCHAR(200),
    FOREIGN KEY (dfid_bebida) REFERENCES tbbebidas(dfid_bebida) ON DELETE CASCADE,
    FOREIGN KEY (dfid_pedido) REFERENCES tbpedido(dfid_pedido) ON DELETE CASCADE,
    dfquantidade DOUBLE,
    PRIMARY KEY(dfid_bebida, dfid_pedido)
);
Configuração da API:

Após instalar o backend, acesse o arquivo clienteService na API e altere o tipo de usuário para ADMIN para criar uma conta com acesso aos endpoints de alteração. Para testar como usuário comum, basta deixar o tipo de usuário como USER.
Após isso, pressione o botão de login e faça o cadastro no Front end. Apenas usuários logados poderão adicionar itens ao carrinho. Quando uma bebida for alterada para "indisponível", ela não aparecerá para usuários que não forem ADMIN.
Código para Cadastro de Usuário:

Aqui está o código para cadastrar um usuário com o tipo de usuário definido como ADMIN ou USER:

export const cadastro = async (nome: string, email: string, telefone: string, senha: string) => {
    try {
        // Validações
        if (!nome || !telefone || !email || !senha) {
            throw { status: 400, message: "Campo faltando" };  
        }
        if (typeof senha !== "string") {
            throw { status: 400, message: "A senha deve ser uma string." };  
        }

        // Verifica se o usuário já existe
        const user = await buscarEmailCliente(email);

        if (user) {
            throw { status: 409, message: "Usuário já cadastrado" }; 
        }

        const senhaHash = await hashPassword(senha);

        const id = v7();
        
        // ALTERE AQUI PARA ADMIN
        const role = userType.USER; 
        // ALTERE AQUI PARA ADMIN
        
        await cadastrarCliente(id, nome, email, telefone, senhaHash, role);

        return "Usuário cadastrado com sucesso";  // Retornando status 201 para sucesso

    } catch (error: any) {

        throw { status: error.status || 500, message: error.message || "Erro ao realizar o cadastro" };
    }
};
Documentação
A interface de usuário foi construída com React e a comunicação com o backend é feita por meio de requisições HTTP. A documentação para a API com a qual o Front-End interage pode ser acessada através do link da documentação da API.

Autores
Blendow Mendes
Gabriel Bianquini
Samuel Muzy
