 function onOpen(){
  var ui = SpreadsheetApp.getUi();

    ui.createMenu("Работа с вещами")
      .addItem("Ручная-приемка", "showSideBar")
      .addSeparator()
      .addItem("Smart-приемка","showAutoSideBar")
      .addSeparator()
      .addItem("Вернуть вещи на прачечную","backToLaundrySidebar")
      .addSeparator()
      .addItem("Отгрузка вещей на кухню","sendToKitchenSidebar")
      .addToUi();
}


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
  const currentDate = new Date
  const basiclocation = "Прачечная"
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  ws.appendRow([currentDate,data.barcode,data.stufftype,data.size,basiclocation]);
  logs.appendRow([currentDate,"Добавили через ручную приемку",data.barcode,data.stufftype,"",basiclocation]);
  Logger.log([currentDate,"Добавили через ручную приемку",data.barcode,data.stufftype,"",basiclocation]);
}


// function onEdit(e) {

//   var row = e.range.getRow();
//   var col = e.range.getColumn();

  
//   if(col === 6 && row > 1){
//     e.source.getSheetByName("Base").getRange(row,7).setValue(new Date()).setNumberFormat("dd.MM.yyyy HH:mm:ss");
  
//   }
// }

function include(filename){
  return HtmlService.createTemplateFromFile(filename).getRawContent();
}

function addNewStuff(data){
  var basiclocation = "Прачечная"
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  var currentDate = new Date();
  ws.appendRow([currentDate,data.barcode,data.stype,data.size,basiclocation]);
  logs.appendRow([currentDate,"Добавили через smart приемку",data.barcode,data.stype,"",basiclocation]);
  Logger.log([currentDate,"Добавили через smart приемку",data.barcode,data.stype,"",basiclocation]);

}


function lookForType(bCode){

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var data = ws.getRange(1,1,ws.getLastRow(),8).getValues();
  var bCodeList = data.map(function(r){return r[0];});
  var typeList = data.map(function(r){return r[1];});
  
  

  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
  if(position > -1){
    return typeList[position];
  }else{
    return "Не найден в базе";
  }
  
}

function lookForSize(bCode){

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Barcode List");
  var data = ws.getRange(1,1,ws.getLastRow(),8).getValues();
  var bCodeList = data.map(function(r){return r[0];});
  var sizeList = data.map(function(r){return r[2];});
  
  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
  if(position > -1){
    return sizeList[position];
  }else{
    return "Не найден в базе";
  }
}


function returnItems (bCode, size, loc){

  var location = "Прачечная";
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var wdata = ws.getRange(1,2,ws.getLastRow(),8).getValues();
  var bCodeList = wdata.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1
  var currentDate = new Date();
  // Logger.log(bCode) 
  if(position > -1){
    ws.getRange(position,5).setValue(location);
    ws.getRange(position,6).setValue("FALSE");
    logs.appendRow([currentDate,"Вернули на прачечную",bCode,size,loc,location]); 
  }else{
    Browser.msgBox ("Error");
  }
  
  Logger.log([currentDate,"Вернули на прачечную",bCode,size,loc,location]);
}

function checkInfo(bCode){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var typeList = data.map(function(r){return r[1];});
  var sizeList = data.map(function(r){return r[2];});
  var locationList = data.map(function(r){return r[3];});
  
  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
   return [typeList[position],sizeList[position]];
}

function checkLocation(bCode){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var locationList = data.map(function(r){return r[3];});
  
  var position = bCodeList.indexOf(bCode);
  Logger.log(position);
   return locationList[position];
}

function checkPosition(bCode){

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),5).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1;
  Logger.log(position);
   return position;
}


function sendItemsToKitchens(bCode, nLoc, loc, size){
  
  var logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),1).getValues();
  var bCodeList = data.map(function(r){return r[0].toString();});
  var position = bCodeList.indexOf(bCode)+1;
  
  

  if(position > -1){
    var currentDate = new Date();
    
    ws.getRange(position,5).setValue(nLoc);
    ws.getRange(position,6).setValue("TRUE");
    ws.getRange(position,7).setValue(currentDate);
    ws.getRange(position,9).setValue("УК");
    logs.appendRow([currentDate,"Отправили вещь на кухню",bCode, size,loc,nLoc]); 
  }
  Logger.log([currentDate,"Отправили вещь на кухню",bCode, size,loc,nLoc]);
}

function getWords(){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Base");
  var data = ws.getRange(1,2,ws.getLastRow(),1).getValues();
  var options = {}
  data.forEach(function(v){
    options[v[0]]= null;
  });
  Logger.log(data);
  return options;
}


