var vidslide = document.querySelectorAll('.vid')
var btns = document.querySelectorAll('.btn')
var contents = document.querySelectorAll('.content')

var currentIndex = 0 ;

 console.log(vidslide,' ',btns,' ',contents)

function currentSlide(manual) {
    vidslide.forEach( (item) => {
        item.classList.remove('active')
    })
    btns.forEach( (item) => {
        item.classList.remove('active')
    })
    contents.forEach( (item) => {
        item.classList.remove('active')
    })

    vidslide[manual].classList.add('active')
    btns[manual].classList.add('active')
    contents[manual].classList.add('active')
    currentIndex = manual ;
}

 btns.forEach( (item,index) => {
    item.addEventListener('click', () => { 
        currentSlide(index)
        currentIndex = index
    })
 })

 console.log(currentIndex)

 function autoSlide() {
    setInterval( () => {
        currentIndex++
      if(currentIndex > vidslide.length - 1) {
        currentIndex = 0
      }
      currentSlide(currentIndex)
    },10000)
 }

autoSlide()