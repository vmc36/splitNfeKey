addEventListener("input", function () {
  const chaveNfe = document.getElementById("entrada").value;
  var tbody = document.querySelector('tbody');
  const slicedKey = chaveNfe.slice("");

  if (slicedKey.length === 44) {
    const splitKeyobj = [{
      "uf": "uf.: " + slicedKey.slice(0, 2),
      "date": "Data: " + slicedKey.slice(2, 6),
      "cnpj": "CNPJ: " + slicedKey.slice(6, 20),
      "mod": "Modelo da nota: " + slicedKey.slice(20, 22),
      "serie": "Série da Emissão: " + slicedKey.slice(22, 25),
      "numberNfe": "Número da Nfe: " + slicedKey.slice(25, 34),
      "codeNfe": "Código da Nfe no sistema emissor: " + slicedKey.slice(34, 43),
      "digito": "Digito Verificador: " + slicedKey.slice(43, 44),
    }];
    splitKeyobj.forEach(function (relatorio) {
      var tr = document.createElement('tr');
      for (var campo in relatorio) {
        var td = document.createElement('td');
        td.innerHTML = relatorio[campo];
        tr.appendChild(td);
      };
      tbody.appendChild(tr);
      document.querySelector('tr').display = "grid";
    });
  }
});