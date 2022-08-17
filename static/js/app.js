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
};

// "Handle" what to do after input is given,
// e.g. filter table by date
function handleClick() {
    // select first element matching selector string "#datetime"
    // (#datetime is id of datetime in HTML tags)
    // chain .property("value") to "grab the information
    // and hold it in the 'date' variable.
    //_'Grab the datetime value from the filter'
    let date = d3.select("#datetime").property("value");

    // set default filter and save to a new variable
    let filteredData = tableData;

    // check for date; if present, return only data with that date
    // (note the use of strict matching '===' for type and value)
    //_'Check to see if a date was entered and filter the data
    //__using that date.'
    if (date) {
        filteredData = filteredData.filter( row => row.datetime === date );
    };

    //_'Rebuild the table using the filtered data
    //__@NOTE: If no date was entered, then filteredData will
    //__just be the original tableData.'
    buildTable(filteredData);
};

// Many event actions can be listened for and handled
// with D3.js > :tooltip can display when mouse-over a
// specific element on a webpage; :keyboard, forms, text
// composition events (some quite advanced) also

// "Listen" for the click to be handled
// ("tell" D3 to execute the `handleClick()` function
// when button with an id of `filter-btn` is clicked)
//_'Attach an event to listen for the form button'
d3.selectAll("#filter-btn").on("click", handleClick);

//_'Build the table when the page loads'
buildTable(tableData);