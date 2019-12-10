let day = new Date().getDay(); // get current hour

let footer = document.querySelector('footer>p>a');

console.log(day); // display current hour in the web console
if(day==1){
	footer.innerHTML+=" (Monday)"
}
if(day==2){
	footer.innerHTML+=" (Tuesday)"
}
if(day==3){
	footer.innerHTML+=" (Wednesday)"
}
if(day==4){
	footer.innerHTML+=" (Thursday)"
}
if(day==5){
	footer.innerHTML+=" (Friday)"
}
if(day==6){
	footer.innerHTML+=" (Saturday)"
}
if(day==7){
	footer.innerHTML+=" (Sunday)"
}
