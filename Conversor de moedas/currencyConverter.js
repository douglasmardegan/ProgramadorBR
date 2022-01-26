window.setInterval(updateData, 500);

function updateData() {
  let initialSelectedCurrency = document.getElementById(
    "initialSelectedCurrency"
  );
  let initialSelectedCurrency_string =
    initialSelectedCurrency.options[initialSelectedCurrency.selectedIndex].text;

  let initialSelectedCurrency_stringSliced =
    initialSelectedCurrency_string.slice(0, 3);

  let finalSelectedCurrency = document.getElementById("finalSelectedCurrency");
  let finalSelectedCurrency_string =
    finalSelectedCurrency.options[finalSelectedCurrency.selectedIndex].text;

  let finalSelectedCurrency_stringSliced = finalSelectedCurrency_string.slice(
    0,
    3
  );

  let currencyTypes =
    initialSelectedCurrency_stringSliced + finalSelectedCurrency_stringSliced;

  document.getElementById("initialCurrency").innerHTML =
    initialSelectedCurrency_stringSliced;
  document.getElementById("finalCurrency").innerHTML =
    finalSelectedCurrency_stringSliced;

  let initialUrl = "https://economia.awesomeapi.com.br/last/";

  let finalUrl =
    initialUrl +
    initialSelectedCurrency_stringSliced +
    "-" +
    finalSelectedCurrency_stringSliced;
}

function convertCurrency() {
  let inputtedValueToConvert = document.getElementById("inputValue");
  let inputtedValueToConvert_amended = parseFloat(
    inputtedValueToConvert
  ).toFixed(2);

  fetch(finalUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let currencyQuote = parseFloat(data.currencyTypes.high).toFixed(2);
      console.log(currencyQuote);

      // Para acessar a maior cotação fazer: console.log(data["USDBRL"]["high"]);
      // Ou: console.log(data.USDBRL.high);
      let currencyConversionResult = `${parseFloat(
        inputtedValueToConvert_amended * currencyQuote
      ).toFixed(2)}`;

      document.getElementById("currencyConversionResult").innerHTML =
        currencyConversionResult;
    });
}
