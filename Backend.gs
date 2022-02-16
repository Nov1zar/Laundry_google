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



var url = "https://docs.google.com/spreadsheets/d/1l6h8vtZ7LlV7-OsiJlJlPcpKeqg_IORKsRqpNEya33c/edit";
var Route = {};
  Route.path = function (route,callback){
  Route[route] = callback;
}



function doGet(e) {
  Route.path("newpage",loadnewpage);
  Route.path("sendToKichen", loadsendToKitchen);
  Route.path("about",loadAbout);
  // Route.path("backToLaundry",loadBackToLaundry);

  if(Route[e.parameters.v]){
  return Route[e.parameters.v]();
  }else{
    return render("homepage", {title: "Это главная страница", other: "Нажми нам меню чтобы начать работу"}).setTitle("homepage");
  }
}

function loadnewpage(){
  return render ("newpage").setTitle("Smart-приемка");
}

function loadsendToKitchen (){
    return render("sendToKitchen").setTitle("Отгрузка вещей")
}


function loadbackToLaundry (){
    return render("backToLaundry").setTitle("Dashboard");
}

function loadAbout(){
      return render("about", {title: "Text", other: "Other text"});
      
}

