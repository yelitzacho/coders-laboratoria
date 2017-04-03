var img = document.getElementsByClassName('desvanecer');
var select = document.getElementById('select');

select.onchange = function(){
  if(select.value == "chile-4"){
    for (var i = 0; i < img.length; i++) {
      img[i].classList.add("chile");
      img[i].classList.remove("lima");
      img[i].classList.remove("lima");
    }
  }else if (select.value == "lima-5") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("chile");
      img[i].classList.add("lima");
      img[i].classList.remove("lima");
    }
  }else if (select.value == "lima-6") {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("chile");
      img[i].classList.remove("lima");
      img[i].classList.add("lima");
    }
  }
}
