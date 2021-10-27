<script>

  var barcodeBox = document.getElementById("bcdn");
  var typeBox = document.getElementById("stype");
  var sizeBox = document.getElementById("size");

  document.getElementById("butn").addEventListener("click",addNewItem);
  document.getElementById("bcdn").addEventListener("input",getStype);
  document.getElementById("bcdn").addEventListener("input",getSize);
  document.getElementById("bcdn").addEventListener("change",getStype);
  document.getElementById("bcdn").addEventListener("change",getSize);

  function addNewItem(){
    var barcode = barcodeBox.value;
    var stype = typeBox.value;
    var size = sizeBox.value;


      if (barcode.trim().length !== 10){ M.toast({html: 'Баркод должен быть из 10 цифр'});} 
          else{

        var data = {
          barcode: barcodeBox.value,
          stype: typeBox.value,
          size: sizeBox.value
  
          };
        google.script.run.addNewStuff(data);

        barcodeBox.value = "";
        typeBox.value = "";
        sizeBox.value = "";


        M.updateTextFields();
        M.toast({html: 'Спасибо, сохранили!'});
      } //end barcode 10 symbols
  } //end addnew

  function getStype(){
    var bCode = document.getElementById("bcdn").value;
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updateType).lookForType(bCode);
    }else{
      document.getElementById("stype").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end getStype

  function updateType(cost){
    document.getElementById("stype").value = cost;
    M.updateTextFields();

  }

  function getSize(){
    var bCode = document.getElementById("bcdn").value;
    if(bCode.length === 10){
    google.script.run.withSuccessHandler(updateSize).lookForSize(bCode);
    }else{
      document.getElementById("size").value = "Не найден в базе";
      M.updateTextFields();
    } // end Else
  } // end getSize

    function updateSize(cost){
    document.getElementById("size").value = cost;
    M.updateTextFields();

  }





</script>
