const gabarito = {
    q1: "O operador <> (diferente) impede o otimizador de usar um índice na coluna 'nome', pois ele precisa verificar todos os registros, exceto 'Pedro'. Isso resulta em uma varredura completa da tabela (Full Table Scan) para encontrar todos os valores que não correspondem ao especificado.",
    q2: "Com o operador AND, a condição mais restritiva (que retorna menos linhas) deve vir primeiro. Exemplo: Se há poucos alunos de 'Campos' mas muitos com 'a' no nome, o ideal é: SELECT * FROM Alunos WHERE cidade = 'Campos' AND nome_aluno LIKE 'A%';",
    q3: "Com o operador OR, a condição com maior probabilidade de ser verdadeira deve vir primeiro, pois o SGBD para de avaliar as outras condições assim que encontra uma verdadeira. Exemplo: Se 'Apartamento' é mais comum que a cidade 'Rio de Janeiro', o ideal é: SELECT * FROM Imoveis WHERE tipo = 'Apartamento' OR cidade = 'Rio de Janeiro';",
    q4: "O NOT impede o uso de índices. A consulta pode ser reescrita usando um operador oposto, que é mais performático. Reescrevendo: Select * from Vendas WHERE vendas <= 100.00;",
    q5: "Usar funções como UPPER() em uma coluna na cláusula WHERE (ex: UPPER(nome) = 'JOÃO') impede o uso de um índice padrão nessa coluna, causando lentidão. A recomendação é padronizar os dados no momento da inserção/atualização (ex: gravar tudo em maiúsculas), permitindo uma busca direta (WHERE nome = 'JOÃO').",
    q6: 'd',
    q7: 'b',
    q8: 'a',
    q9: 'c',
    q10: 'c',
    q11: "Benefício: acelera consultas (SELECT) que usam a coluna indexada. Custo: reduz o desempenho de operações de escrita (INSERT, UPDATE, DELETE), pois o índice também precisa ser atualizado, e ocupa espaço em disco.",
    q12: "Proativa: criação de índices durante o design do banco, baseada na Análise de Caminhos de Acesso (prevendo as consultas mais frequentes). Reativa: criação de índices após identificar consultas lentas em produção.",
    q13: "Cria um bitmap (sequência de bits) para cada valor distinto. Cada bit corresponde a uma linha, indicando ausência/presença do valor. É ideal para colunas de baixa cardinalidade (ex: 'sexo', 'estado civil'). Seu ponto fraco é o alto custo de atualização (operações DML), pois a modificação de um valor pode exigir o bloqueio de grandes partes do índice.",
    q14: "Ele armazena os bytes da chave do índice na ordem inversa. Visa resolver a contenção de blocos (hot blocks) em índices onde as inserções são sequenciais e crescentes (ex: primary keys de sequences). A desvantagem é que impede buscas por faixa (range scans), pois os valores adjacentes não ficam mais próximos no índice.",
    q15: "Primeiro, executa-se o comando `VALIDATE INDEX nome_do_indice;` para coletar estatísticas. Em seguida, consulta-se a tabela `INDEX_STATS` para analisar a fragmentação, verificando colunas como `HEIGHT`, `LF_BLKS`, e a relação entre `OPT_CMPR_COUNT` e `OPT_CMPR_PCTSAVE`.",
    q16: 'b',
    q17: 'b',
    q18: 'c',
    q19: 'c',
    q20: 'c',
    q21: "Um trigger é um bloco de código PL/SQL armazenado no banco que é executado (disparado) automaticamente, de forma implícita, quando um evento específico (como INSERT, UPDATE, DELETE) ocorre em uma tabela.",
    q22: "DML Triggers: Disparam em eventos de manipulação de dados (INSERT, UPDATE, DELETE). DDL Triggers: Disparam em eventos de definição de dados (CREATE, ALTER, DROP). INSTEAD OF Triggers: Substituem a operação DML padrão em uma VIEW que não é diretamente modificável.",
    q23: "1. Auditoria: Gravar logs de alterações em uma tabela separada. 2. Validação complexa: Implementar regras de negócio que não podem ser feitas com constraints. 3. Geração de valores: Atribuir valores a colunas automaticamente, como uma chave primária a partir de uma sequence.",
    q24: "É um trigger que executa 'em vez de' (instead of) uma operação DML em uma VIEW. No material, uma VIEW unia duas tabelas (EMP e DEPT). Uma tentativa de inserir dados na VIEW falhava, pois o Oracle não sabia como distribuir os dados nas tabelas base. O trigger INSTEAD OF intercepta o INSERT e executa os comandos corretos para inserir os dados em cada tabela subjacente.",
    q25: "1. Um trigger não pode conter comandos de controle de transação (TCL), como COMMIT, ROLLBACK ou SAVEPOINT. 2. Ele não pode fazer SELECT ou modificar uma tabela que já está sendo modificada pela instrução que disparou o trigger (evitar tabelas mutantes).",
    q26: 'd',
    q27: 'c',
    q28: 'b',
    q29: 'c',
    q30: 'b',
    q31: "Function: Obrigatoriamente retorna um único valor (cláusula RETURN) e é invocada como parte de uma expressão (ex: em um SELECT ou atribuída a uma variável). Procedure: Não retorna um valor diretamente (pode usar parâmetros OUT/IN OUT para isso) e é invocada como um comando autônomo (ex: `EXECUTE minha_procedure;`).",
    q32: "IN: Parâmetro de entrada (padrão). O valor é passado para o subprograma, mas não pode ser alterado por ele. OUT: Parâmetro de saída. Ignora qualquer valor inicial e é usado para retornar um valor do subprograma para o chamador. IN OUT: Parâmetro de entrada e saída. O valor é passado, pode ser modificado pelo subprograma, e o novo valor é retornado.",
    q33: "O código é pré-compilado e armazenado no dicionário de dados (p-code). Quando o subprograma é chamado, ele não precisa ser analisado (parsing) e compilado novamente, sendo executado diretamente. Isso reduz a sobrecarga e melhora significativamente o desempenho, especialmente para códigos executados com frequência.",
    q34: "Sim, uma Stored Procedure pode chamar uma Function para obter um valor e usá-lo. Porém, o contrário (uma Function chamar uma Procedure) não é permitido, pois uma procedure pode executar comandos de controle de transação (implícitos) que são proibidos dentro de uma function chamada a partir de um comando SQL.",
    q35: "Serve para conceder a um usuário específico a permissão de executar (chamar) a procedure `nome_procedure`. Sem essa permissão, o usuário não teria o direito de invocar o subprograma, mesmo que ele exista no banco de dados.",
    q36: 'c',
    q37: 'b',
    q38: 'c',
    q39: 'a',
    q40: 'c'
};

document.getElementById('provaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validarRespostas()) {
        return;
    }
    alert('Prova enviada com sucesso! Em um Google Forms real, suas respostas seriam salvas automaticamente.');
});

function validarRespostas() {
    const formData = new FormData(document.getElementById('provaForm'));
    const totalQuestoes = 40;
    let todasRespondidas = true;
    let questoesNaoRespondidas = [];

    for (let i = 1; i <= totalQuestoes; i++) {
        const fieldName = `q${i}`;
        if (!formData.get(fieldName)) {
            todasRespondidas = false;
            questoesNaoRespondidas.push(`Questão ${i}`);
        }
    }

    if (!todasRespondidas) {
        alert(`Por favor, responda todas as questões obrigatórias. Faltando: ${questoesNaoRespondidas.join(', ')}`);
        return false;
    }
    return true;
}

function gerarGabarito() {
    if (!validarRespostas()) {
        alert("Você precisa responder todas as questões antes de gerar o gabarito.");
        return;
    }

    const formData = new FormData(document.getElementById('provaForm'));
    let resultadoTexto = "GABARITO E CORREÇÃO DA PROVA DE BANCO DE DADOS\n";
    resultadoTexto += "================================================\n\n";

    let acertos = 0;
    const totalQuestoes = 40;

    for (let i = 1; i <= totalQuestoes; i++) {
        const nomeQuestao = `q${i}`;
        const respostaUsuario = (formData.get(nomeQuestao) || "Não respondida").trim();
        const respostaCorreta = gabarito[nomeQuestao];
        
        let isCorrect = false;
        // Para questões de múltipla escolha, a comparação é direta
        if (['6','7','8','9','10','16','17','18','19','20','26','27','28','29','30','36','37','38','39','40'].includes(i.toString())) {
            if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
                isCorrect = true;
            }
        } else {
            // Para questões dissertativas, apenas marcamos como "para conferência"
            isCorrect = null; 
        }

        resultadoTexto += `----------------- Questão ${i} -----------------\n\n`;
        resultadoTexto += `Sua Resposta:\n${respostaUsuario}\n\n`;
        resultadoTexto += `Resposta Esperada (Gabarito):\n${respostaCorreta}\n\n`;

        if (isCorrect === true) {
            resultadoTexto += "Status: CERTO ✔️\n\n";
            acertos++;
        } else if (isCorrect === false) {
            resultadoTexto += "Status: ERRADO ❌\n\n";
        } else { // isCorrect === null
            resultadoTexto += "Status: A conferir (dissertativa)\n\n";
        }
    }
    
    const totalMultiplaEscolha = 20;
    const erros = totalMultiplaEscolha - acertos;

    resultadoTexto += "================================================\n";
    resultadoTexto += "                  RESULTADO FINAL\n";
    resultadoTexto += "================================================\n\n";
    resultadoTexto += `Total de Acertos (Múltipla Escolha): ${acertos} de ${totalMultiplaEscolha}\n`;
    resultadoTexto += `Total de Erros (Múltipla Escolha): ${erros} de ${totalMultiplaEscolha}\n`;
    resultadoTexto += "As questões dissertativas devem ser conferidas manually com base no gabarito.\n";

    // Criar e baixar o arquivo de texto
    const blob = new Blob([resultadoTexto], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'gabarito_respostas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
    alert("Gabarito gerado com sucesso! O download do arquivo 'gabarito_respostas.txt' foi iniciado.");
}