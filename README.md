-----

# Prova de Banco de Dados Interativa

Este é um projeto de front-end que simula uma prova interativa sobre conceitos avançados de banco de dados, com foco em Otimização de Consultas, Índices, Triggers e Stored Procedures/Functions. A interface foi desenhada para ser limpa, responsiva e intuitiva.

O principal diferencial do projeto é a funcionalidade de **gerar um gabarito completo**, que permite ao usuário conferir suas respostas, ver as soluções corretas e baixar um arquivo `.txt` com a análise detalhada de seu desempenho.

*(Sugestão: substitua o link acima por um screenshot ou GIF do seu projeto em ação)*

-----

## ✨ Principais Funcionalidades

  * **Interface Moderna e Responsiva**: Aparência limpa e adaptável a diferentes tamanhos de tela (desktop, tablet e mobile).
  * **40 Questões Abrangentes**: Uma seleção de perguntas dissertativas e de múltipla escolha sobre tópicos importantes de banco de dados.
  * **Validação de Campos**: O sistema verifica se todas as perguntas foram respondidas antes de permitir a geração do gabarito.
  * **Correção Automática**: As questões de múltipla escolha são corrigidas automaticamente.
  * **Geração de Gabarito em `.txt`**: Ao clicar em "Gerar Gabarito", um arquivo de texto é gerado e baixado, contendo:
      * A resposta fornecida pelo usuário para cada questão.
      * A resposta correta (gabarito).
      * O status de "Certo" ou "Errado" para as questões de múltipla escolha.
      * Um resumo final com a contagem de acertos e erros.

-----

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais, sem a necessidade de frameworks ou bibliotecas externas.

  * **HTML5**: Para a estrutura e semântica do conteúdo.
  * **CSS3**: Para a estilização, layout e responsividade.
  * **JavaScript (Vanilla)**: Para toda a lógica interativa, validação do formulário e a funcionalidade de geração do gabarito.

-----

## 🚀 Como Executar

Não é necessário nenhum servidor ou processo de build para executar este projeto. Basta seguir os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/wellingtonspdev/Prova-BDL.git)
    ```


2.  **Navegue até a pasta do projeto:**

    ```bash
    Prova-BDL
    ```

3.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

-----

## 📂 Estrutura dos Arquivos

O código está organizado da seguinte forma para facilitar a manutenção e o entendimento:

```
/
├── index.html   # Contém toda a estrutura HTML da prova.
├── style.css    # Contém todas as regras de estilo para a aparência da página.
└── script.js    # Contém toda a lógica, incluindo o gabarito e a função de correção.
```

  * `index.html`: O esqueleto da página.
  * `style.css`: Responsável pela parte visual, cores, fontes e layout.
  * `script.js`: O cérebro do projeto, onde a interatividade acontece.

-----
