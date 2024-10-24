let humberger__open = document.querySelector(".humberger__open");
let links = document.querySelector("#links")
let blor = document.querySelector(".blor")
let hed =document.querySelector(".hed")
humberger__open.onclick = function () {
  links.style.left= "19%";
  console.log("FF")
  blor.style.display = "block";
  hed.style.display = "flex"

}
hed.onclick = function () {
  links.style.left= "121%";
  blor.style.display ="none";
}
