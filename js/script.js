addEventListener('input', async function () {
  const chaveNfe = document.getElementById('entrada').value;
  const slicedKey = chaveNfe.slice('');

  if (slicedKey.length === 44) {
    const infoKeyNfe = {
      uf: slicedKey.slice(0, 2),
      date: slicedKey.slice(2, 6),
      cnpj: slicedKey.slice(6, 20),
      mod: slicedKey.slice(20, 22),
      serie: slicedKey.slice(22, 25),
      numberNfe: slicedKey.slice(25, 34),
      codeNfe: slicedKey.slice(34, 43),
      digito: slicedKey.slice(43, 44),
    };

    function formatDate(dateString) {
      const ano = dateString.slice(2, 4);
      const mes = dateString.slice(0, 2);
      const dateFormated = `${mes}/${ano}`;
      return dateFormated;
    }

    const dateFormated = formatDate(infoKeyNfe.date);

    function formatCnpj(cnpj) {
      const cnpjtoString = cnpj.slice('');
      const cnpjFormated = cnpjtoString.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      return cnpjFormated;
    }

    const cnpjFormated = formatCnpj(infoKeyNfe.cnpj);

    const infoKeyNfeArray = infoKeyNfe;
    document.getElementById('ufHTML').innerText = infoKeyNfeArray.uf;
    document.getElementById('dataNota').textContent = dateFormated;
    document.getElementById('cnpj').textContent = cnpjFormated;
    document.getElementById('modelo').textContent = infoKeyNfeArray.mod;
    document.getElementById('serie').textContent = infoKeyNfeArray.serie;
    document.getElementById('numeroNfe').textContent = infoKeyNfeArray.numberNfe;
    document.getElementById('digito').textContent = infoKeyNfeArray.digito;

    const estados = {
      11: 'Rondônia',
      12: 'Acre',
      13: 'Amazonas',
      14: 'Roraima',
      15: 'Pará',
      16: 'Amapá',
      17: 'Tocantins',
      21: 'Maranhão',
      22: 'Piauí',
      23: 'Ceará',
      24: 'Rio Grande do Norte',
      25: 'Paraíba',
      26: 'Pernambuco',
      27: 'Alagoas',
      28: 'Sergipe',
      29: 'Bahia',
      31: 'Minas Gerais',
      32: 'Espirito Santo',
      33: 'Rio de Janeiro',
      35: 'São Paulo',
      41: 'Paraná',
      42: 'Santa Catarina',
      43: 'Rio Grande do Sul',
      50: 'Mato Grosso do Sul',
      51: 'Mato Grosso',
      52: 'Goiás',
      53: 'Distrito Federal',
    };

    const filterUfInfo = infoKeyNfeArray.uf;

    const nomeEstado = estados[filterUfInfo];

    document.getElementById('ufCode').textContent = nomeEstado;

    async function consultarCNPJApi(cnpj) {
      const apiUrl = `https://publica.cnpj.ws/cnpj/${cnpj}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Erro ao consultar CNPJ');
        }

        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Erro ao consultar CNPJ: ' + error.message);
      }
    }

    async function getCNPJ() {
      const cnpj = infoKeyNfe.cnpj;

      try {
        const empresa = await consultarCNPJApi(cnpj);
        console.log('Empresa:', empresa);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    const consultarCnpjButton = document.getElementById('consultarCnpjButton');
    consultarCnpjButton.addEventListener('click', getCNPJ);
  } else {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Número da chave inválida';
    errorMessage.style.display = 'block';
  }
});
