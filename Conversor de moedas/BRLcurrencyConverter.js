const url =
  "https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,BRL-JPY,BRL-AUD,BRL-CHF,BRL-CAD,BRL-CNY,BRL-ARS,BRL-TRY";

function converter() {
  let input = document.getElementById("input_value");
  let input_value = parseFloat(input.value).toFixed(2);
  console.log(input_value);

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let cotBRL_USD = parseFloat(data.BRLUSD.high).toFixed(2);
      let cotBRL_EUR = parseFloat(data.BRLEUR.high).toFixed(2);
      let cotBRL_GBP = parseFloat(data.BRLGBP.high).toFixed(2);
      let cotBRL_JPY = parseFloat(data.BRLJPY.high).toFixed(2);
      let cotBRL_AUD = parseFloat(data.BRLAUD.high).toFixed(2);
      let cotBRL_CHF = parseFloat(data.BRLCHF.high).toFixed(2);
      let cotBRL_CAD = parseFloat(data.BRLCAD.high).toFixed(2);
      let cotBRL_CNY = parseFloat(data.BRLCNY.high).toFixed(2);
      let cotBRL_ARS = parseFloat(data.BRLARS.high).toFixed(2);
      let cotBRL_TRY = parseFloat(data.BRLTRY.high).toFixed(2);

      // Para acessar a maior cotação fazer: console.log(data["USDBRL"]["high"]);
      // Ou: console.log(data.USDBRL.high);
      let conversionUSD = `${parseFloat(input_value * cotBRL_USD).toFixed(2)}`;
      let conversionEUR = `${parseFloat(input_value * cotBRL_EUR).toFixed(2)}`;
      let conversionGBP = `${parseFloat(input_value * cotBRL_GBP).toFixed(2)}`;
      let conversionJPY = `${parseFloat(input_value * cotBRL_JPY).toFixed(2)}`;
      let conversionAUD = `${parseFloat(input_value * cotBRL_AUD).toFixed(2)}`;
      let conversionCHF = `${parseFloat(input_value * cotBRL_CHF).toFixed(2)}`;
      let conversionCAD = `${parseFloat(input_value * cotBRL_CAD).toFixed(2)}`;
      let conversionCNY = `${parseFloat(input_value * cotBRL_CNY).toFixed(2)}`;
      let conversionARS = `${parseFloat(input_value * cotBRL_ARS).toFixed(2)}`;
      let conversionTRY = `${parseFloat(input_value * cotBRL_TRY).toFixed(2)}`;

      document.getElementById("conversionUSD").innerHTML = conversionUSD;
      document.getElementById("conversionEUR").innerHTML = conversionEUR;
      document.getElementById("conversionGBP").innerHTML = conversionGBP;
      document.getElementById("conversionJPY").innerHTML = conversionJPY;
      document.getElementById("conversionAUD").innerHTML = conversionAUD;
      document.getElementById("conversionCHF").innerHTML = conversionCHF;
      document.getElementById("conversionCAD").innerHTML = conversionCAD;
      document.getElementById("conversionCNY").innerHTML = conversionCNY;
      document.getElementById("conversionARS").innerHTML = conversionARS;
      document.getElementById("conversionTRY").innerHTML = conversionTRY;
    });
}
