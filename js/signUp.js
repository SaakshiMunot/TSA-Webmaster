function display(id, text) {
  document.getElementById(id).innerHTML = text;
}  

function displayNum(id, text){
    var re = /^[A-Za-z]+$/;
    if(!re.test(text))
       document.getElementById(id).innerHTML = text;
}

function sed() {
  var image =  document.querySelector('.flip-box-inner');
  if (image.classList.contains('flip')) {
  } else {
    image.classList.add('flip');
  }
}

function unsed() {
  var image =  document.querySelector('.flip-box-inner');
  if (image.classList.contains('flip')) {
    image.classList.remove('flip');
  } else {
    image.classList.add('flip');
  }
}

document.querySelector('.flip-box-inner').addEventListener
('click',
function (){
    if (this.classList.contains('flip')){
      this.classList.remove('flip');
    } 
    else{
      this.classList.add('flip');
    }
  }
);
