// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
// }

// Loop through each object in the array;
// Append a row to the HTML table;
// Add each value from the object into a cell:
function buildTable(data) {
    // "blank canvas" to clear
    //_'First, clear out any existing data'
    tbody.html("");
    
    // incorporate a `forEach` function to loop through data array,
    // and add *rows* of data to the table. (dataRow) is a parameter
    // to be used as a value when the function is called.
    //_'Next, loop through each object in the data
    //__and append a row and cells for each value in the row'
    data.forEach((dataRow) => {
        // create a variable to append a row to the table body:
        // find the <tbody> tag within the HTML, 
        // and add a table row ("`tr`").
        //_'Append a row to the table body'
        let row = tbody.append("tr");
        
        // val argument represents each item in the object;
        // such as location, shape, or duration.
        //_'Loop through each field in the dataRow and add
        //__each value as a table cell (td)'
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table:
            // (append data into table data tag (<td>)).
            let cell = row.append("td");

            // extract only the text of the value:
            cell.text(val);
            }
        );
    });
}