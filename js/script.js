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



// -----

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 3000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.3s'
}
