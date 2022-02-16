<script>


function generateDailyDashboard(dataArray){
  
  var dbody = document.getElementById("dashboard-daily-body");

  dataArray.forEach(function(r){

  var row = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");
  var col5 = document.createElement("td");

  col1.textContent = r[0];
  col2.textContent = r[1];
  col3.textContent = r[2];
  col4.textContent = r[3];
  col5.textContent = r[4];

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);

  dbody.appendChild(row);
  });
}
</script>


<script>
  document.getElementById("butn").addEventListener("click",updapePickedDate);

  function updapePickedDate(){
  M.toast({html: 'Спасибо, Обновили!'});
  var pickedDate = document.getElementById("datepicker").value;
  var tbody = document.getElementById("dashboard-daily-body");
  google.script.run.withSuccessHandler(updateDailyDashboard).updateDailyDashboardData(pickedDate)
  // tbody.refresh();
};



function updateDailyDashboard(dataArray){
  
  
  var dbody = document.getElementById("dashboard-daily-body");
  dbody.innerHTML = "";

  dataArray.forEach(function(r){

  var row = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");
  var col5 = document.createElement("td");

  col1.textContent = r[0];
  col2.textContent = r[1];
  col3.textContent = r[2];
  col4.textContent = r[3];
  col5.textContent = r[4];

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);

  dbody.appendChild(row);
  });
}
</script>
