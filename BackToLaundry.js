<script>

  var barcodeBox = document.getElementById("bcdn");
  var typeBox = document.getElementById("stype");
  var sizeBox = document.getElementById("size");
  var locationBox = document.getElementById("location");

  document.getElementById("butn").addEventListener("click",backToLaundryItems);
  document.getElementById("bcdn").addEventListener("input",getStype);
  document.getElementById("bcdn").addEventListener("input",getSize);
  document.getElementById("bcdn").addEventListener("input",getPosition);

  function backToLaundryItems(){
    var barcode = barcodeBox.value;
    var bCode = document.getElementById("bcdn").value;
      if (barcode.trim().length !== 10){ M.toast({html: 'Баркод должен быть из 10 цифр'});} 
          else{

        var size = sizeBox.value;
        var loc = locationBox.value;
        if (loc == "Прачечная" ){ M.toast({html: 'Вещь уже находится на прачечной, проверь данные'});} 
        else{ if (size == "Прачечная" || loc == "Не найден в базе" || loc == "" ){ M.toast({html: 'Проверь информацию по вещи, должны быть указаны информация и местоположение'});} 
          else{
        google.script.run.returnItems(bCode, size, loc);

        barcodeBox.value = "";
        typeBox.value = "";
        sizeBox.value = "";
        locationBox.value ="";
      

        M.updateTextFields();
        M.toast({html: 'Спасибо, сохранили!'});
        }
        }
      } //end barcode 10 symbols
  } //end addnew

  function getStype(){
    var bCode = document.getElementById("bcdn").value;
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updateType).checkLocation(bCode);
    }else{
      document.getElementById("location").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end getStype

  function updateType(cost){
    document.getElementById("location").value = cost;
    M.updateTextFields();

  }

  function getSize(){
    var bCode = document.getElementById("bcdn").value.toString();
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updateSize).checkInfo(bCode);
    }else{
      document.getElementById("size").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end getSize

    function updateSize(cost){
    document.getElementById("size").value = cost;
    M.updateTextFields();

  }

function getPosition(){
    var bCode = document.getElementById("bcdn").value.toString();
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updatePosition).checkPosition(bCode);
    }else{
      document.getElementById("stype").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end getSize

    function updatePosition(cost){
    document.getElementById("stype").value = cost;
    M.updateTextFields();

  }




</script>
