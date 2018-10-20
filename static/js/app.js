
var text = d3.select("#datetime");
// assign new variable with data from data.js
var tableData = data;

// test
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log("writing the unfiltered table");
tableData.forEach((siting) => {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Function to handle datetime input change
function handleChange(event) {
    // grab the value of the input field
    var inputText = d3.event.target.value;
    console.log(inputText);
}

text.on("change", handleChange);
  
// Select the submit button
var submit = d3.select(".btn-default");

submit.on("click", function() {
  var dateValue = "ALL";
  var stateValue = "ALL";
  var tableData = data;
  // Prevent the page from refreshing
  d3.event.preventDefault();
  console.log("someone clicked filter")
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var dateValue = inputElement.property("value");

  var inputElement = d3.select("#city");
  var cityValue = inputElement.property("value");
  cityValue = cityValue.toLowerCase();

  var inputElement = d3.select("#state");
  var stateValue = inputElement.property("value");
  stateValue = stateValue.toLowerCase();

  var inputElement = d3.select("#country");
  var countryValue = inputElement.property("value");
  countryValue = countryValue.toLowerCase();

  var inputElement = d3.select("#shape");
  var shapeValue = inputElement.property("value");
  shapeValue = shapeValue.toLowerCase();


  if (dateValue === "") {dateValue = "ALL"};
  if (stateValue === "") {stateValue = "ALL"};
  if (cityValue === "") {cityValue = "ALL"};
  if (countryValue === "") {countryValue = "ALL"};
  if (shapeValue === "") {shapeValue = "ALL"};

  console.log(stateValue);
  console.log(dateValue);
  console.log(cityValue);
  console.log(countryValue);
  console.log(shapeValue);

  console.log(tableData);

  if (dateValue.toUpperCase() == "ALL") {} else {var tableData = tableData.filter(siting => siting.datetime === dateValue)};
  if (stateValue.toUpperCase() == "ALL") {} else {var tableData = tableData.filter(siting => siting.state === stateValue)};
  if (cityValue.toUpperCase() == "ALL") {} else {var tableData = tableData.filter(siting => siting.city === cityValue)};
  if (countryValue.toUpperCase() == "ALL") {} else {var tableData = tableData.filter(siting => siting.country === countryValue)};
  if (shapeValue.toUpperCase() == "ALL") {} else {var tableData = tableData.filter(siting => siting.shape === shapeValue)};

  console.log(tableData);

  // rewrite the table

  var tbody = d3.select("tbody");

  tbody.html("<tbody></tbody>");
  tableHtml = tbody.node();
  console.log(tableHtml);
  console.log("writing the filtered table");
  tableData.forEach((siting) => {
      var row = tbody.append("tr");
      Object.entries(siting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
});


