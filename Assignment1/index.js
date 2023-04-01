fetch('https://dummyjson.com/products')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var _data = data.products;
    var _Key = Object.keys(_data[0]);
    // create table
    var table = document.createElement("table");
    table.classList.add("tbl");
    var table_head = document.createElement("thead");
    table.appendChild(table_head);
    var thead_row = document.createElement("tr");
    table_head.appendChild(thead_row);
    // fetch table headings
    // _Key.length
    for (var i = 0; i <= 8; i++) {
        var thead_col = document.createElement("td");
        thead_col.innerText = _Key[i];
        thead_row.appendChild(thead_col);
    }
    var table_body = document.createElement("tbody");
    table.appendChild(table_body);
    // fetch table data
    // _data.length
    for (var k = 0; k <= 9; k++) {
        var element = Object.keys(_data[k]);
        var tbody_row = document.createElement("tr");
        table_body.appendChild(tbody_row);
        // 
        for (var j = 0; j <= 8; j++) {
            var tbody_col = document.createElement("td");
            tbody_col.innerText = _data[k][element[j]];
            tbody_row.appendChild(tbody_col);
        }
    }
    var body = document.getElementById("body");
    body === null || body === void 0 ? void 0 : body.appendChild(table);
});
