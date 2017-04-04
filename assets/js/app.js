var img = document.getElementsByClassName('desvanecer');
var select = document.getElementById('select');

select.onchange = function(){
  if(select.value == "chile-4"){
    document.getElementById("chile-4").style.display = "inline";
    document.getElementById("lima-5").style.display = "none";
    document.getElementById("lima-6").style.display = "none";
  }else if (select.value == "lima-5") {
    document.getElementById("chile-4").style.display = "none";
    document.getElementById("lima-5").style.display = "inline";
    document.getElementById("lima-6").style.display = "none";
  }else if (select.value == "lima-6") {
    document.getElementById("lima-5").style.display = "none";
    document.getElementById("lima-").style.display = "none";
    document.getElementById("lima-6").style.display = "inline";
  }
}
