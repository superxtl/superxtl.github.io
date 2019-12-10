
let images = document.querySelectorAll('main>a>img');

  console.log(images);

  function changeOpacity(){
    images[0].style.opacity = '0.7';
    images[1].style.opacity = '0.7';
    images[2].style.opacity = '0.7';
    console.log(this);
    this.style.opacity='1';
  }
  function resetOpacity(){
    images[0].style.opacity = '1';
    images[1].style.opacity = '1';
    images[2].style.opacity = '1';
  }

images[0].addEventListener('mouseover',changeOpacity);
images[1].addEventListener('mouseover',changeOpacity);
images[2].addEventListener('mouseover',changeOpacity);

images[0].addEventListener('mouseout',resetOpacity);
images[1].addEventListener('mouseout',resetOpacity);
images[2].addEventListener('mouseout',resetOpacity);

let heading = document.querySelector('body>div>header>h1>a');
function updateContentRunning(){
	heading.innerHTML = "Running";
}
function updateContentSwimming(){
	heading.innerHTML = "Swimming";
}
function updateContentBicycling(){
	heading.innerHTML = "Bicycling";
}
function resetContent(){
	heading.innerHTML = "Three types of Cardio";
}
images[0].addEventListener('mouseover',updateContentRunning);
images[1].addEventListener('mouseover',updateContentSwimming);
images[2].addEventListener('mouseover',updateContentBicycling);
images[0].addEventListener('mouseout',resetContent);
images[1].addEventListener('mouseout',resetContent);
images[2].addEventListener('mouseout',resetContent);


let day = new Date().getDay(); // get current hour

let aBoarder = document.querySelectorAll('main>a');

console.log(day); // display current hour in the web console
if(day==1){
	aBoarder[2].style.border= "thick solid blue";
}
if(day==2){
	aBoarder[0].style.border= "thick solid red";
}
if(day==3){
	aBoarder[2].style.border= "thick solid blue";
}
if(day==4){
	aBoarder[0].style.border= "thick solid red";
}
if(day==5){
	aBoarder[2].style.border= "thick solid blue";
}
if(day==6){
	aBoarder[1].style.border= "thick solid yellow";
}
if(day==7){
	aBoarder[1].style.border= "thick solid yellow";
}
