
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

  // Prevent the page from refreshing
  d3.event.preventDefault();
  console.log("someone clicked filter")
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var tableData = data.filter(siting => siting.datetime === inputValue);

  console.log(tableData);

  // rewrite the table

  var tbody = d3.select("tbody");

  tbody.html("<tbody></tbody>");
  tableHtml = tbody.node()
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


