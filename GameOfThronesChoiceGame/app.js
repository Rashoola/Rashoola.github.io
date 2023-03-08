const images = Array.from(document.querySelectorAll(".picbox"));
let i = 1;

function addToTheFirstOne(){
  let pom;
  images[0].addEventListener("click",function(){
    images[1].style.display="none";
    pom=images[1];
    images[1]=images[i+1];
    images[i+1]=pom;
    i++;
    addToTheSecondOne();
  });
}
function addToTheSecondOne(){
  let pom;
  images[1].addEventListener("click",function(){
    images[0].style.display="none";
    pom=images[0];
    images[0]=images[i+1];
    images[i+1]=pom;
    i++;
    addToTheFirstOne();
  });
}

addToTheFirstOne();
addToTheSecondOne();