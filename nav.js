
let images = document.querySelectorAll('main>a>img');
let links = document.querySelectorAll('nav>a');
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

let heading = document.querySelector('body>div>div>header>h1>a');
function updateContentLogo(){
	heading.innerHTML = "Tianlin Xie<br><i>(IMA Logo)</i>";
}
function updateContentLetter(){
	heading.innerHTML = "Tianlin Xie<br><i>(Letter Form)</i>";
}
function updateContentPattern(){
	heading.innerHTML = "Tianlin Xie<br><i>(Patter<br>n)</i>";
}
function resetContent(){
	heading.innerHTML = "Tianlin Xie";
}
images[0].addEventListener('mouseover',updateContentLogo);
images[1].addEventListener('mouseover',updateContentLetter);
images[2].addEventListener('mouseover',updateContentPattern);
images[0].addEventListener('mouseout',resetContent);
images[1].addEventListener('mouseout',resetContent);
images[2].addEventListener('mouseout',resetContent);
links[0].addEventListener('mouseover',updateContentLogo);
links[1].addEventListener('mouseover',updateContentLetter);
links[2].addEventListener('mouseover',updateContentPattern);
links[0].addEventListener('mouseout',resetContent);
links[1].addEventListener('mouseout',resetContent);
links[2].addEventListener('mouseout',resetContent);
