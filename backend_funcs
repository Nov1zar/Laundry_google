const formattedDate = Utilities.formatDate(new Date(), "GMT", "dd.MM.yyyy");
const currentDate = new Date();
const todayDate = "";
const basiclocation = "Прачечная";


function showAutoSideBar(){

   var template = HtmlService.createTemplateFromFile("newpage");
   var html = template.evaluate();
  html.setTitle("Smart-приемка");
  SpreadsheetApp.getUi().showSidebar(html);
  // SpreadsheetApp.getUi().showModelessDialog(html, "Добавь новую вещь");
}

function showSideBar(){

  var template = HtmlService.createTemplateFromFile("UserForm");
  var html = template.evaluate();
  html.setTitle("Добавь новую вещь сюда");
  SpreadsheetApp.getUi().showSidebar(html);
  // .showModelessDialog(html, "Добавь новую вещь");
  // .showSidebar(html);

}

function backToLaundrySidebar(){

   var template = HtmlService.createTemplateFromFile("backToLaundry");
   var html = template.evaluate();
  html.setTitle("Вернуть вещи на прачечную");
  SpreadsheetApp.getUi().showSidebar(html);
  // SpreadsheetApp.getUi().showModelessDialog(html, "Добавь новую вещь");
}

function sendToKitchenSidebar(){

   var template = HtmlService.createTemplateFromFile("sendToKitchen");
   var html = template.evaluate();
  html.setTitle("Отправить вещи на кухню");
  SpreadsheetApp.getUi().showSidebar(html);
  // SpreadsheetApp.getUi().showModelessDialog(html, "Добавь новую вещь");
}



function appendData(data){

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  ws.appendRow([currentDate,data.barcode,data.stufftype,data.size,basiclocation]);
  logs.appendRow([formattedDate,"Добавили через ручную приемку",data.barcode,data.stufftype,"",basiclocation]);
  

}


// function onEdit(e) {

//   var row = e.range.getRow();
//   var col = e.range.getColumn();

  
//   if(col === 6 && row > 1){
//     e.source.getSheetByName("Base").getRange(row,7).setValue(new Date()).setNumberFormat("dd.MM.yyyy HH:mm:ss");
  
//   }
// }



function addNewStuff(data){
  
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  
  ws.appendRow([currentDate,data.barcode,data.stype,data.size,basiclocation]);
  logs.appendRow([currentDate,"Добавили через smart приемку",data.barcode,data.stype,"",basiclocation]);
  

}


function lookForType(bCode){

  var bcsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var data = bcsheet.getRange(1,1,bcsheet.getLastRow(),8).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var typeList = data.map(function(r){return r[1].toString();});
  
  

  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
  if(position > -1){
    return typeList[position];
  }else{
    return "Не найден в базе";
  }
  
}

function lookForSize(bCode){

  var bcsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var data = bcsheet.getRange(1,1,bcsheet.getLastRow(),8).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var sizeList = data.map(function(r){return r[2].toString();});
  
  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
  if(position > -1){
    return sizeList[position];
  }else{
    return "Не найден в базе";
  }
}


function returnItems (bCode, size, loc){


  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var wdata = ws.getRange(1,2,ws.getLastRow(),8).getValues();
  var bCodeList = wdata.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1

  // Logger.log(bCode) 
  if(position > -1){
    ws.getRange(position,5).setValue(basiclocation);
    ws.getRange(position,6).setValue("FALSE");
    logs.appendRow([currentDate,"Вернули на прачечную",bCode,size,loc,basiclocation]); 
  }else{
    Browser.msgBox ("Error");
  }
  
  
}

// function checkInfo(bCode){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var typeList = data.map(function(r){return r[1];});
//   var sizeList = data.map(function(r){return r[2];});
  
  
//   var position = bCodeList.indexOf(bCode);
//   Logger.log(position);
//    return [typeList[position],sizeList[position]];
// }

// function checkLocation(bCode){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var locationList = data.map(function(r){return r[3];});
  
//   var position = bCodeList.indexOf(bCode);
//   Logger.log(position);
//    return locationList[position];
// }

// function checkPosition(bCode){

//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var position = bCodeList.indexOf(bCode)+1;
//   Logger.log(position);
//    return position;
// }


function sendItemsToKitchens(bCode, nLoc, loc, size){
  
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),1).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1;
  
  

  if(position > -1){
    
    ws.getRange(position,5).setValue(nLoc);
    ws.getRange(position,6).setValue("TRUE");
    ws.getRange(position,7).setValue(currentDate);
    ws.getRange(position,9).setValue("УК");
    logs.appendRow([currentDate,"Отправили вещь на кухню",bCode, size,loc,nLoc]); 
  }
  
}


// function checkSendInfo(bCode){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var data = ws.getRange(1,2,ws.getLastRow(),4).getValues()
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var typeList = data.map(function(r){return r[1];});
//   var sizeList = data.map(function(r){return r[2];});
//   var position = bCodeList.indexOf(bCode);
//   Logger.log(position);
//   return [typeList[position],sizeList[position]];
     
// }


function newCheckInfo(bCode){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var array = ws.getRange(1,2,ws.getLastRow(),1).getValues()
  var bCodeList = array.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1;
  if (position > -1){
    var info = {
      bCode: ws.getRange(position,2).getValues(),
      type: ws.getRange(position,3).getValues(),
      size: ws.getRange(position,4).getValues(),
      location: ws.getRange(position,5).getValues(),
    }
    
    return info
  }
}

function newLookInfo(bCode){

  var bcsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var data = bcsheet.getRange(1,1,bcsheet.getLastRow(),3).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1;


  Logger.log(position);
  if (position > -1){
    var info = {
      type: bcsheet.getRange(position,2).getValues(),
      size: bcsheet.getRange(position,3).getValues(),
    }
    Logger.log(info);
    return info
  }else{
    return "Не найден в базе"
  }
}


function modernLookInfo(bCode){

  var bcsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var array = bcsheet.getRange(1,1,bcsheet.getLastRow(),1).getValues();
  // var bCode = 5100205901


  for(var i = 0; i<array.length;i++){
    if(array[i] == bCode.toString().toLowerCase()){ //[1] because column B
      
      if (i+1 > -1){
      var info = {
                  type: bcsheet.getRange(i+1,2).getValues(),
                  size: bcsheet.getRange(i+1,3).getValues(),
                  
                  }
      
      return info
    }else return "Не найден в базе"
  }
}
}


// function checkSendInfo(bCode){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var wdata = ws.getRange(1,2,ws.getLastRow(),4).getValues()
//   var data = wdata.filter(function(dataRow){
//     return dataRow[3] === basiclocation ;});
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var typeList = data.map(function(r){return r[1];});
//   var sizeList = data.map(function(r){return r[2];});
//   var position = bCodeList.indexOf(bCode);
//   Logger.log(position);
//   return [typeList[position],sizeList[position]];
   
// }

function checkSendLocation(bCode){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),4).getValues()
  var bCodeList = data.map(function(r){return r[0].toString();});
  var locationList = data.map(function(r){return r[3];});
  
  var position = bCodeList.indexOf(bCode);
  
   return locationList[position];
}



// function checkSendLocation(bCode){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var wdata = ws.getRange(1,2,ws.getLastRow(),4).getValues()
//   var data = wdata.filter(function(dataRow){
//     return dataRow[3] === basiclocation;});
//   var bCodeList = data.map(function(r){return r[0].toString();});
//   var locationList = data.map(function(r){return r[3];});
  
//   var position = bCodeList.indexOf(bCode);
//   Logger.log(position);
//    return locationList[position];
// }

// function getSendWords(){
//   var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
//   var data = ws.getRange(2,2,ws.getLastRow(),4).getValues()
//   array = data.filter(function(dataRow){return dataRow[3] === basiclocation;})
//   var options = {}
//   array.forEach(function(v){
//     options[v[0]]= false;
//   });
//   Logger.log(options);
//   return options;
// }


function getWords(){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(2,2,ws.getLastRow(),1).getValues();
  var options = {}
  data.forEach(function(v){
    options[v[0]]= false;
  });
  return options;
}

// function getDashboardData(){

//   var ss = SpreadsheetApp.openByUrl(url);
//   var ws = ss.getSheetByName("Дашборд");
//   var data = ws.getRange(3,1,ws.getLastRow()-1,8).getValues();
//   Logger.log(data);
//   return data;
// }

// function getCostDashboardData(){
//    var ss = SpreadsheetApp.openByUrl(url);
//   var ws = ss.getSheetByName("Dashboard $$");
//   var data = ws.getRange(2,1,ws.getLastRow()-1,8).getValues();
//   Logger.log(data);
//   return data;
// }

