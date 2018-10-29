var tbl;
var tblBody = document.createElement("tbody");
var cell = [];

function appendToBody (){
  tbl = document.getElementsByTagName("table")[0];
  tbl.appendChild(tblBody);
  //document.getElementsByTagName("body")[0].appendChild(tbl);
  //console.log("EYOOO!!");
  for (let i = 0; i < 5; i++){
    expandWorld();
  }
}

function addRow(){
  let row = document.createElement("tr");
  cell.push([]);
  for (let i = 0; i < cell.length; i++){
    cell[cell.length - 1].push(document.createElement("td"));
    row.appendChild(cell[cell.length - 1][i]);
  }
  tblBody.appendChild(row);
}

function addCol(){
  for (let i = 0; i < cell.length; i++){
    cell[i].push(document.createElement("td"));
    tblBody.rows[i].appendChild(cell[i][cell[i].length - 1]);
  }
}

function expandWorld(){
  addCol();
  addRow();
}

var power;
var heat;
var money;
