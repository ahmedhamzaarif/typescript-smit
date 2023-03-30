fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    let _data = data.products;
    let _Key = Object.keys(_data[0]);

    // create table
    const table = document.createElement("table");
    table.classList.add("tbl");
    const table_head = document.createElement("thead");
    table.appendChild(table_head);

    let thead_row = document.createElement("tr");
    table_head.appendChild(thead_row);

    // fetch table headings
    // _Key.length
    for (let i = 0; i <= 8; i++) {

        let thead_col = document.createElement("td");
        thead_col.innerText = _Key[i];
        thead_row.appendChild(thead_col);
    }
        
    const table_body = document.createElement("tbody");
    table.appendChild(table_body);
    
    // fetch table data
    // _data.length
    for (let k = 0; k <= 9; k++) {
        
        let element = Object.keys(_data[k]);
        
        let tbody_row = document.createElement("tr");
        table_body.appendChild(tbody_row);
        
        // 
        for (let j = 0; j <= 8; j++) {
            
            let tbody_col = document.createElement("td");
            tbody_col.innerText = _data[k][element[j]];
            tbody_row.appendChild(tbody_col);
            
        }
        
    }
    
    const body = document.getElementById("body");
    body?.appendChild(table);
    
});
