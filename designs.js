//Defining the table
var table = document.getElementById("pixel_canvas");

//definfing the color picker
var colorPicker = document.getElementById("colorPicker").value;

//This function makes the table

function makeGrid() {
  
  //calling the table variable to enable the browser know where to insert the table

  var table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  
  //a while loop to initialize creation of the grid/table

  while(table.rows.length > 0)
    table.deleteRow(0);

  //defining the rows and columns for the table/grid
  var rows;
  var columns;

  
  rows = document.getElementById("input_height").value;
  columns = document.getElementById("input_width").value;

  //adding a for loop to create the table

  for (var i = 0; i < rows; i++) {
    var row_elem = table.insertRow(i);
    row_elem.setAttribute("class", "row");
    
    //adding an inner for loop to create the cells 

    for (var j = 0; j < columns; j++) {
      var cell= row_elem.insertCell(j);

      //an event listener to listen to when a color is selected by the user, it stores the value of the color
      //it also checks for when a cell in the grid/table is selected
      //a function also assigns the value of the selected color to the selected cell

      cell.addEventListener('click', function(colorSelector) {
        colorSelector.target.style.backgroundColor = document.getElementById("colorPicker").value;
        //to add boxshadow property to the selected cell
        this.style.boxShadow="0 0 10px #9ecaed";
      });
    }
  }
  return false;
}

//defining the submit button
//adding an event listener that checks when the submit button is clicked
//this also calls the makeGrid function which creates the table when submit is clicked

document.getElementById("size_picker").addEventListener("submit", function(colorSelector) {
  colorSelector.preventDefault();
  makeGrid();
});
