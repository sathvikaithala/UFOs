// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to build the table using data as an input
function buildTable(data) {
    tbody.html(""); // Clear the existing table

    // Add forEach function:
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // Add table row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); // Append data to the table
            cell.text(val); // the data that is entered
        });
	});
}

// Create a function to handle clicks:
function handleClick() {
    let date = d3.select("#datetime").property("value"); // tell D3 to look for the #datetime id in the HTML tags. .property("value") will grab that information
    let filteredData = tableData; // set default filter to original table

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };


    buildTable(filteredData); // If no date is filtered, the original table will be chosen. 
}

// The handleClick function will handle what happens when the button is clicked, but first we need to detect the click:
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads:
buildTable(tableData);
