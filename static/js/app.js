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

// 1. Create a variable to keep track of all the filters as an object.
var filters = {
    // date: "",
    // city: "",
    // state: "",
    // country: "",
    // shape: ""
    };

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var changedElement = d3.event.target;
    // console.log(changedElement);

    // 4b. Save the value that was changed as a variable.
    var changedValue = changedElement.value;
    // console.log(changedValue);

    // 4c. Save the id of the filter that was changed as a variable.
    // var changedFilter = d3.select("#changedFilter").id;
    var changedFilter = changedElement.id;
    // console.log(`${changedFilter} was changed !`);
    
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue.length > 0) {
        // console.log('reached line 54');
        filters[changedFilter] = changedValue;
        // console.log(filters[changedFilter]);
        // filteredData = filteredData.filter( row => row.changedElement === changedValue );
    }
    else {
        // console.log(filters[changedFilter]);
        delete filters[changedFilter];
        // console.log(Object.entries(filters));
    };
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    // console.log("in filterTable function");
    // console.log();
    // 8. Set the filtered data to the tableData.
    filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // Object.entries(filteredData).forEach(function( [key,value] ){
 
    //    })
    for (prop in filters) {
        // console.log(prop);
        // console.log(filteredData[0][prop]);
        // console.log(filters[prop])
        filteredData = filteredData.filter( row => row[prop] === filters[prop] );
    };

    // if (filters.date) {
    //     filteredData = filteredData.filter( row => row.datetime === filters.date );
    // };    
    // if (filters.city) {
    //     filteredData = filteredData.filter( row => row.city === filters.city );
    // };    
    // if (filters.state) {
    //     filteredData = filteredData.filter( row => row.state === filters.state );
    // };
    // if (filters.country) {
    //     filteredData = filteredData.filter( row => row.country === filters.country );
    // };
    // if (filters.shape) {
    //     filteredData = filteredData.filter( row => row.shape === filters.shape );
    // };
          
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  // d3.selectAll("list-group-item").on("change", updateFilters);
  d3.selectAll("#datetime").on("change", updateFilters);
  d3.selectAll("#city").on("change", updateFilters);
  d3.selectAll("#state").on("change", updateFilters);
  d3.selectAll("#country").on("change", updateFilters);
  d3.selectAll("#shape").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
