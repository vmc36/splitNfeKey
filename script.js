addEventListener('input', function () {
  const chaveNfe = document.getElementById('entrada').value;
  const slicedKey = chaveNfe.slice('');

  if (slicedKey.length === 44) {
    // Verificação da chave e criação do objeto com as informaçoes.
    const infoKeyNfe = [
      {
        uf: slicedKey.slice(0, 2),
        date: slicedKey.slice(2, 6),
        cnpj: slicedKey.slice(6, 20),
        mod: slicedKey.slice(20, 22),
        serie: slicedKey.slice(22, 25),
        numberNfe: slicedKey.slice(25, 34),
        codeNfe: slicedKey.slice(34, 43),
        digito: slicedKey.slice(43, 44),
      },
    ];

    function formatDate(getDataFromObject) {
      const dateToString = getDataFromObject.slice('');
      const ano = dateToString.slice(0, 2);
      const mes = dateToString.slice(2, 4);
      const dateFormated = `${mes}/${ano}`;
      return dateFormated;
    }
    const getDataFromObject = infoKeyNfe[0].date;
    const dateFormated = formatDate(getDataFromObject);

    function formatCnpj(cnpj) {
      const cnpjtoString = cnpj.slice('');
      const cnpjFormated = cnpjtoString.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      return cnpjFormated;
    }
    const getCnpjFromObject = infoKeyNfe[0].cnpj;
    const cnpjFormated = formatCnpj(getCnpjFromObject);

    const infoKeyNfeArray = infoKeyNfe[0];
    document.getElementById('ufHTML').innerText = infoKeyNfeArray.uf;
    document.getElementById('dataNota').textContent = dateFormated;
    document.getElementById('cnpj').textContent = cnpjFormated;
    document.getElementById('modelo').textContent = infoKeyNfeArray.mod;
    document.getElementById('serie').textContent = infoKeyNfeArray.serie;
    document.getElementById('numeroNfe').textContent = infoKeyNfeArray.numberNfe;
    document.getElementById('digito').textContent = infoKeyNfeArray.digito;

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

    function compareufCode(uf) {
      for (let i = 0; i < estados.length; i++) {
        if (estados[i].cod === uf) {
          return estados[i].nome;
        }
      }
      return null; // Retornar null se o código de UF não for encontrado
    }

    const filterUfInfo = infoKeyNfe[0].uf;

    const nomeEstado = compareufCode(filterUfInfo);

    nomeEstado ? (document.getElementById('ufCode').textContent = nomeEstado) : '';
  } else {
    // Caso de chave inválida.
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Número da chave inválida';
    errorMessage.style.display = 'block';
  }
});
