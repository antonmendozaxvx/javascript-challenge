// from data.js
var tableData = data;
console.log(data);

// putting data into the HTML
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// getting the filtering button to work
var button = d3.select("filter-btn");
button.on("click", function() {

    tbody.html("");

    var dataInput = d3.select("datetime");
    var valueInput = dataInput.property("value");
    console.log(valueInput);

    var dataFilter = tableData.filter(sightings => sightings.datatime === valueInput);
    console.log(dataFilter);

    dataFilter.forEach(function(selections) {

        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(value, key);

            var cell = row.append("td");
            cell.text(value);
        });

    });


});

