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
}

function convertCurrency() {
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

  let initialUrl = "https://economia.awesomeapi.com.br/last/";

  let finalUrl =
    initialUrl +
    initialSelectedCurrency_stringSliced +
    "-" +
    finalSelectedCurrency_stringSliced;

  let inputtedValueToConvert = document.querySelector(".inputValue").value;
  let inputtedValueToConvert_amended = `${parseFloat(
    inputtedValueToConvert
  ).toFixed(2)}`;

  fetch(finalUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let currencyTypes =
        initialSelectedCurrency_stringSliced +
        finalSelectedCurrency_stringSliced;
      let currencyHighQuote = parseFloat(data[currencyTypes].bid);
      let currencyLowQuote = parseFloat(data[currencyTypes].ask);
      let currencyMeanQuote = `${(
        (currencyHighQuote + currencyLowQuote) /
        2
      ).toFixed(2)}`;

      let currencyConversionResult = (
        inputtedValueToConvert_amended * currencyMeanQuote
      ).toFixed(2);

      document.getElementById("currencyConversionResult").innerHTML =
        currencyConversionResult;
    });
}
