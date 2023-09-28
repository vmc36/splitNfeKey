addEventListener('input', function () {
  const chaveNfe = document.getElementById('entrada').value;
  const tbody = document.querySelector('tbody');
  const slicedKey = chaveNfe.slice('');

  if (slicedKey.length === 44) { // Verificação da chave e criação do objeto com as informaçoes.
    const splitKeyobj = [
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
     {
        uf: 'RO', nome:'Rondônia', cod: '11',
        uf: 'AC', nome:'Acre', cod: '12',
        uf: 'AM', nome:'Amazonas', cod: '13',
        uf: 'RR', nome:'Roraima', cod: '14',
        uf: 'PA', nome:'Pará', cod: '15',
        uf: 'AP', nome:'Amapá', cod: '16',
        uf: 'TO', nome:'Tocantins', cod: '17',

        uf: 'MA', nome:'Maranhão', cod: '21',
        uf: 'PI', nome:'Piauí', cod: '22', 
        uf: 'CE', nome:'Ceará', cod: '23',
        uf: 'RN', nome:'Rio Grande do Norte', cod: '24',
        uf: 'PB', nome:'Paraíba', cod: '25',
        uf: 'PE', nome:'Pernambuco', cod: '26',
        uf: 'AL', nome:'Alagoas', cod: '27',
        uf: 'SE', nome:'Sergipe', cod: '28',
        uf: 'BA', nome:'Bahia', cod: '29',

        uf: 'MG', nome:'Minas Gerais', cod: '31',
        uf: 'ES', nome:'Espirito Santo', cod: '32',
        uf: 'RJ', nome:'Rio de Janeiro', cod: '33',
        uf: 'SP', nome:'São Paulo', cod: '35',

        uf: 'PR', nome:'Paraná', cod: 41,
        uf: 'SC', nome:'Santa Catarina', cod: 42,
        uf: 'RS', nome:'Rio Grande do Sul', cod: 43,

        uf: 'MS', nome:'Mato Grosso do Sul', cod: 50,
        uf: 'MT', nome:'Mato Grosso', cod: 51,
        uf: 'GO', nome:'Goiás', cod: 52,
        uf: 'DF', nome:'Distrito Federal', cod: 53,

      },
    ];
    splitKeyobj.forEach(function (relatorio) {
      var tr = document.createElement('tr');
      for (var campo in relatorio) {
        var td = document.createElement('td');
        td.innerHTML = relatorio[campo];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
      document.querySelector('tr').display = 'grid';
    });
  } else { // Caso de chave inválida.
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Número da chave inválida';
    errorMessage.style.display = 'block';
  }

  if (chaveNfe.length === 0) {
    tbody.innerHTML = '';
  }


});


