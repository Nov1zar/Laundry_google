<script>

          document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('select');
          var instances = M.FormSelect.init(elems);

            google.script.run.withSuccessHandler(populateWords).getWords();
            document.getElementById("butn").addEventListener("click",sendToKitchenItems);
            document.getElementById("bcdn").addEventListener("input",getStype);
            document.getElementById("bcdn").addEventListener("input",getSize);
            document.getElementById("bcdn").addEventListener("input",getPosition);
            document.getElementById("bcdn").addEventListener("change",getStype);
            document.getElementById("bcdn").addEventListener("change",getSize);
            document.getElementById("bcdn").addEventListener("change",getPosition);

        });


  
  function sendToKitchenItems(){
    var barcodeBox = document.getElementById("bcdn");
    var typeBox = document.getElementById("stype");
    var sizeBox = document.getElementById("size");
    var locationBox = document.getElementById("location");
    var newLocationBox = document.getElementById("newlocation");
    // if (barcodeBox.trim().length !== 10){ M.toast({html: 'Баркод должен быть из 10 цифр'});} 
    //       else{
            
              var bCode = barcodeBox.value;
              var nLoc =  newLocationBox.value;
              var loc = locationBox.value;
              var size = sizeBox.value;

              if (bCode.trim().length !== 10){ M.toast({html: 'Баркод должен быть из 10 цифр'});} 
          else{ if(loc == "" || loc == "Не найден в базе" || size == "Не найден в базе" || size == ""){ M.toast({html: 'Проверь информацию по вещи, должны быть указаны информация и местоположение'});}
            else{
              if(loc == "Прачечная" ){
                google.script.run.sendItemsToKitchens(bCode, nLoc, loc, size);
            
          

        barcodeBox.value = "";
        typeBox.value = "";
        sizeBox.value = "";
        locationBox.value ="";

        M.updateTextFields();
        M.toast({html: 'Спасибо, сохранили!'});
              
      }
      else{ M.toast({html: 'Вещь уже отправлена на кухню'});}
            }
    } // end barcode 10 symbols
  } // end sendToKitchensItems
  

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
    var bCode = document.getElementById("bcdn").value;
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
    var bCode = document.getElementById("bcdn").value;
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updatePosition).checkPosition(bCode);
    }else{
      document.getElementById("stype").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end

function updatePosition(cost){
  document.getElementById("stype").value = cost;
  M.updateTextFields();
}


function populateWords(words){
          
  var autocomplete = document.getElementById('bcdn');
  var instances = M.Autocomplete.init(autocomplete, {data: words});      
      M.updateTextFields();

}

       


</script>
