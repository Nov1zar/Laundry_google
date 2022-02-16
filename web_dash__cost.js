<script src="https://www.kryogenix.org/code/browser/sorttable/sorttable.js"></script>

<script>

document.addEventListener("DOMContentLoaded",function(){

  google.script.run.withSuccessHandler(generateCostDashboard).getCostDashboardData();
  google.script.run.withSuccessHandler(generateCostMainDashboard).getCostMainDashboardData()
  google.script.run.withSuccessHandler(generateDashboard).getDashboardData();
  google.script.run.withSuccessHandler(generateMainDashboard).getMainDashboardData();
  google.script.run.withSuccessHandler(generateDailyDashboard).getDailyDashboardData();
  google.script.run.withSuccessHandler(generateWriteOffDashboard).getWriteOffDashboardData();
  ;

});






function generateCostDashboard(dataArray){

  const numBit = (item) => {

    const numData = item.toFixed(0) 

    return  numData  > 0 ? Number(numData).toLocaleString()+" ₽" : numData +" ₽"
  }
  
            var dbody = document.getElementById("dashboard-cost-body");

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
            var col9 = document.createElement("td");
            col1.textContent = r[0];

            col2.textContent = numBit(r[1]) 
            col3.textContent = numBit(r[2])
            col4.textContent = numBit(r[3])
            col5.textContent = numBit(r[4])
            col6.textContent = numBit(r[5])
            col7.textContent = numBit(r[6])
            col8.textContent = numBit(r[7])
            col9.textContent = numBit(r[8])
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            row.appendChild(col5);
            row.appendChild(col6);
            row.appendChild(col7);
            row.appendChild(col8);
            row.appendChild(col9);
            dbody.appendChild(row);
            });
}




</script>
