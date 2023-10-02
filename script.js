addEventListener('input', function () {
  const chaveNfe = document.getElementById('entrada').value;
  const tbody = document.querySelector('tbody');
  const slicedKey = chaveNfe.slice('');

  if (slicedKey.length === 44) {
    // Verificação da chave e criação do objeto com as informaçoes.
    const infoKeyNfe = [
      {
        uf: 'uf.: ' + slicedKey.slice(0, 2),
        date: 'Data: ' + slicedKey.slice(2, 6),
        cnpj: 'CNPJ: ' + slicedKey.slice(6, 20),
        mod: 'Modelo da nota: ' + slicedKey.slice(20, 22),
        serie: 'Série da Emissão: ' + slicedKey.slice(22, 25),
        numberNfe: 'Número da Nfe: ' + slicedKey.slice(25, 34),
        codeNfe: 'Código da Nfe no sistema emissor: ' + slicedKey.slice(34, 43),
        digito: 'Digito Verificador: ' + slicedKey.slice(43, 44),
      },
    ];

    infoKeyNfe.forEach(function (relatorio) {
      var tr = document.createElement('tr');
      for (var campo in relatorio) {
        var td = document.createElement('td');
        td.innerHTML = relatorio[campo];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
      document.querySelector('tr').display = 'grid';
    });
    const estados = [
      { nome: 'Rondônia', cod: '11' },
      { nome: 'Acre', cod: '12' },
      { nome: 'Amazonas', cod: '13' },
      { nome: 'Roraima', cod: '14' },
      { nome: 'Pará', cod: '15' },
      { nome: 'Amapá', cod: '16' },
      { nome: 'Tocantins', cod: '17' },
      { nome: 'Maranhão', cod: '21' },
      { nome: 'Piauí', cod: '22' },
      { nome: 'Ceará', cod: '23' },
      { nome: 'Rio Grande do Norte', cod: '24' },
      { nome: 'Paraíba', cod: '25' },
      { nome: 'Pernambuco', cod: '26' },
      { nome: 'Alagoas', cod: '27' },
      { nome: 'Sergipe', cod: '28' },
      { nome: 'Bahia', cod: '29' },
      { nome: 'Minas Gerais', cod: '31' },
      { nome: 'Espirito Santo', cod: '32' },
      { nome: 'Rio de Janeiro', cod: '33' },
      { nome: 'São Paulo', cod: '35' },
      { nome: 'Paraná', cod: '41' },
      { nome: 'Santa Catarina', cod: '42' },
      { nome: 'Rio Grande do Sul', cod: '43' },
      { nome: 'Mato Grosso do Sul', cod: '50' },
      { nome: 'Mato Grosso', cod: '51' },
      { nome: 'Goiás', cod: '52' },
      { nome: 'Distrito Federal', cod: '53' },
    ];

    function compararComCodigo(uf) {
      for (let i = 0; i < estados.length; i++) {
        if (estados[i].cod === uf) {
          return estados[i].nome;
        }
      }
      return null; // Retornar null se o código de UF não for encontrado
    }

    const filterUfInfo = infoKeyNfe[0].uf;
    const filteredUfInfo = filterUfInfo.slice(5, 7);

    console.log(estados[0].cod);
    console.log(estados[0].nome);

    const nomeEstado = compararComCodigo(filteredUfInfo);

    if (nomeEstado) {
      const selectTbody = document.querySelector('tbody');
      const selectUfOnTable = selectTbody.querySelector('tr:first-child');
      // Cria uma nova célula e insere o nome do estado
      const newCell = document.createElement('td');
      newCell.textContent = `- ${nomeEstado}`;
      selectUfOnTable.appendChild(newCell);
    }
  } else {
    // Caso de chave inválida.
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Número da chave inválida';
    errorMessage.style.display = 'block';
  }

  if (chaveNfe.length === 0) {
    //Limpa o input
    tbody.innerHTML = '';
  }
});
