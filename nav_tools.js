<script>
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var inst = M.Tabs.getInstance(elems);

  });
</script>

<script>

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(elems, {});


  });
</script>

<script>
  const todayDate = new Date(Date.now()).toLocaleString("ru-RU").split(',')[0]
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.getElementById("datepicker");    
    var instances = M.Datepicker.init(elems,{format: 'dd.mm.yyyy', autoClose: true});
    elems.defaultValue = todayDate
    
  });
</script>
