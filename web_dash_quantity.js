<script>


function generateDashboard(dataArray){
  
  var dbody = document.getElementById("dashboard-body");

  dataArray.forEach(function(r){

  var row = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");
  var col5 = document.createElement("td");
  var col6 = document.createElement("td");
  var col7 = document.createElement("td");
  var col8 = document.createElement("td");
  col1.textContent = r[0];
  col2.textContent = r[1];
  col3.textContent = r[2];
  col4.textContent = r[3];
  col5.textContent = r[4];
  col6.textContent = r[5];
  col7.textContent = r[6];
  col8.textContent = r[7];
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  row.appendChild(col6);
  row.appendChild(col7);
  row.appendChild(col8);
  dbody.appendChild(row);
  });
}


</script>
