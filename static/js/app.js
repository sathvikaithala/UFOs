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