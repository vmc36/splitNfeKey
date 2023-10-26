# splitNfeKey

**# Documentação: Funcionalidade de Interpretação da Chave de Acesso da NF-e**

Esta documentação descreve a funcionalidade e uso do código JavaScript fornecido, que permite a interpretação da chave de acesso da Nota Fiscal Eletrônica (NF-e) no contexto de uma aplicação web.

## Funcionalidade:

A funcionalidade principal desse código inclui:

1. **Entrada da Chave de Acesso:**
   O código reage ao evento 'input' em um campo de entrada específico, permitindo que os usuários insiram a chave de acesso da NF-e.

2. **Validação da Chave de Acesso:**
   A aplicação valida a chave de acesso, assegurando que possua o comprimento correto de 44 caracteres, conforme exigido pela NF-e.

3. **Processamento da Chave de Acesso:**
   Se a chave de acesso for válida, o código a divide em segmentos representando informações cruciais, como UF, data, CNPJ, modelo, série, número da NF-e, código da NF-e e dígito verificador. Esses dados são organizados em um objeto.

4. **Exibição na Interface:**
   As informações extraídas da chave de acesso são apresentadas de forma estruturada em uma tabela, facilitando a compreensão e interpretação para o usuário.

5. **Mensagem de Erro:**
   Se a chave de acesso não atender ao comprimento esperado (44 caracteres), uma mensagem de erro é exibida, alertando que a chave de acesso é inválida.

## Utilização:

Para usar essa funcionalidade em uma aplicação web:

1. **Integração do Código:**
   Integre o código JavaScript fornecido na sua aplicação web, garantindo que esteja associado ao campo de entrada devidamente marcado com o ID 'entrada'.

2. **Interatividade:**
   Ao inserir ou modificar a chave de acesso no campo 'entrada', a aplicação iniciará o processamento automático.

3. **Observação dos Resultados:**
   A aplicação exibirá as informações interpretadas da chave de acesso na tabela da interface, proporcionando uma visão detalhada dos elementos da chave da NF-e.

4. **Validação de Chave de Acesso:**
   A aplicação verifica automaticamente se a chave de acesso possui o comprimento adequado (44 caracteres). Caso contrário, a mensagem de erro correspondente é exibida.

Essa funcionalidade é essencial em aplicações relacionadas à área fiscal e contábil, permitindo aos usuários analisar e compreender rapidamente as informações contidas na chave de acesso da NF-e ao inseri-la no sistema.

# Tecnologias utilizadas

- Vanilla JS
- Html
- TailwindCss

## Instalação e Utilização:

```bash
# Clone o Projeto
git clone https://github.com/vmc36/splitNfeKey.git
```

```bash
# Abra a pasta do repositório
cd local-da-pasta
```

```bash
# Instale as dependências
 npm install
```

---

## Para rodar o Projeto

```bash
Utilize o live server.

# utilize para buildar as quando alterar o css:
npm run start-tailwind
```

---

![alt text](https://imageupload.io/ib/lBGmlad2SAZPm33_1697893775.jpg)

# Contato

Sinta-se a vontade em clonar e utilizar o repositório.
Se você tiver alguma dúvida ou encontrar algum problema ao utilizar a aplicação, entre em contato através do endereço de e-mail viniciusmodesto.dev@gmail.com.
