// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function

  // Save the element, value, and id of the filter that was changed


  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

function updateFilters() {
  let date = d3.select("#datetime").property("value"); // tell D3 to look for the #datetime id in the HTML tags. .property("value") will grab that information
  if (date) {
    filters['datetime'] = date; //if the date filter is active, update with the new date
  }
  else {
    delete filters['datetime']; // if not, delete it
  }

  let city = d3.select("#city").property("value");
  if (city) {
    filters['city'] = city;
  }
  else {
    delete filters['city'];
  }

  let state = d3.select("#state").property("value");
  if (state) {
    filters['state'] = city;
  }
  else {
    delete filters['state'];
  }

  let country = d3.select("#country").property("value");
  if (country) {
    filters['country'] = country;
  }
  else {
    delete filters['country'];
  }

  let shape = d3.select("#shape").property("value");
  if (shape) {
    filters['shape'] = shape;
  }
  else {
    delete filters['shape'];
  }


  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  var filteredData = tableData; // set default filter to original table

  // Loop through all of the filters and keep any data that
  // matches the filter values
  
  if(filters) {
    Object.keys(filters).forEach(function (key){
        filteredData = filteredData.filter(row => row[key] === filters[key]);
    });
  }



  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

d3.selectAll("input").on("change", updateFilters);
d3.selectAll("#filter-btn").on("click",filterTable);

// Build the table when the page loads
buildTable(tableData);
