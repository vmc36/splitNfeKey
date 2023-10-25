addEventListener('input', async function () {
  const chaveNfe = document.getElementById('entrada').value;
  const newValueChaveNfe = chaveNfe.replace(/\s/g, '');
  const slicedKey = newValueChaveNfe.slice('');
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

    const showButtonMoreInformation = document.getElementById('show-button');
    showButtonMoreInformation.style.display = 'flex';

    function formatDateInvoice(dateString) {
      const ano = dateString.slice(2, 4);
      const mes = dateString.slice(0, 2);
      const dateFormated = `${mes}/${ano}`;
      return dateFormated;
    }

    const dateFormated = formatDateInvoice(infoKeyNfe.date);

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
        const showCNPJInvalid = document.getElementById('cnpj-invalid');
        showCNPJInvalid.textContent = 'Erro ao consultar CNPJ: ' + error.message;
        showCNPJInvalid.style.display = 'block';
        throw new Error('Erro ao consultar CNPJ: ' + error.message);
      }
    }
    let modalVisible = false;

    function showModal() {
      const modal = document.getElementById('modal-info');

      if (modal) {
        modalVisible = !modalVisible;
        modalVisible ? (modal.style.display = 'flex') : (modal.style.display = 'none');
      }
    }

    let requestCount = 0;
    const maxRequestsPerMinute = 2; // Limite de requisições por minuto
    let lastRequestTimestamp = 0;

    async function getCNPJInformation() {
      if (requestCount >= maxRequestsPerMinute) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastRequestTimestamp;

        if (timeDiff < 60000) {
          const showInfoApiLimit = document.getElementById('errorapi');
          showInfoApiLimit.textContent = 'Limite de requisições atingido. Aguarde um momento antes de fazer mais requisições.';
          showInfoApiLimit.style.display = 'block';
          return;
        } else {
          requestCount = 0;
        }
      }

      const cnpj = infoKeyNfe.cnpj;

      try {
        requestCount++;
        lastRequestTimestamp = new Date().getTime();

        function formatDateBrazil(dataUTCString) {
          const dataUTC = new Date(dataUTCString);
          const options = {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
          };
          const dataFormatada = dataUTC.toLocaleString('pt-BR', options);
          return dataFormatada;
        }
        const resultApi = await consultarCNPJApi(cnpj);
        const empresa = resultApi;
        const razaoSocial = empresa.razao_social;
        const email = empresa.estabelecimento.email;
        const cidade = empresa.estabelecimento.cidade.nome;
        const dataInfo = empresa.atualizado_em;
        const commercialActivity = empresa.estabelecimento.atividade_principal.descricao;
        const dateFormatedtoBr = formatDateBrazil(dataInfo);

        document.getElementById('razao-social').textContent = razaoSocial;
        document.getElementById('email').textContent = email;
        document.getElementById('cidade').textContent = cidade;
        document.getElementById('data-info').textContent = dateFormatedtoBr;
        document.getElementById('atividade-comercial').textContent = commercialActivity;
        showModal();
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    const cnpjButton = document.getElementById('cnpjButton');
    cnpjButton.addEventListener('click', getCNPJInformation);
  } else {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Número da chave inválida';
    errorMessage.style.display = 'block';
  }
});
