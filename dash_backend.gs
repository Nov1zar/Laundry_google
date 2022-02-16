function getDashboardData(){

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Дашборд");
  var data = ws.getRange(6,1,ws.getLastRow()-1,8).getValues();
  Logger.log(data);
  return data;
}

function getCostDashboardData(){
   var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Dashboard $$");
  var data = ws.getRange(7,1,ws.getLastRow()-1,9).getValues();
  
  Logger.log(data);
  return data;
}


function getCostMainDashboardData(){
   var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Dashboard $$");
  var data = ws.getRange(4,1,3,9).getValues();
  Logger.log(data);
  return data;
}

function getMainDashboardData(){
   var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Дашборд");
  var data = ws.getRange(3,1,3,8).getValues();
  Logger.log(data);
  return data;
}


function getDailyDashboardData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("бекэнд");
  ws.getRange(2,2).setValue(todayDate); 
  let data = ws.getRange(4,1,7,5).getValues();
  
  Logger.log(data);
  return data; 
}

function updateDailyDashboardData(pickedDate){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("бекэнд");
  ws.getRange(2,2).setValue(pickedDate);  
   let data = ws.getRange(4,1,7,5).getValues();
  
  Logger.log(data);
  return data; 
}

function getWriteOffDashboardData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("бекэнд"); 
  let data = ws.getRange(17,1,8,3).getValues();
  
  Logger.log(data);
  return data; 
}

