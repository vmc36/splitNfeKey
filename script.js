entrada.addEventListener("input", function (e) {
    const chaveNfe = document.getElementById("entrada").value;
    const chaveNfearray = chaveNfe.slice("");
    const splitKeyobj = {
      uf: chaveNfearray.slice(0, 2),
      date : chaveNfearray.slice(2, 6),
      cnpj : chaveNfearray.slice(6, 20),
      mod : chaveNfearray.slice(20, 22),
      serie : chaveNfearray.slice(22, 25),
      numberNfe : chaveNfearray.slice(25, 34),
      codeNfe : chaveNfearray.slice(34, 43),
      digito : chaveNfearray.slice(43,44),
    }
    alert (JSON.stringify(splitKeyobj));
   });
   