
var images=document.querySelectorAll('.image-container');
var dots=document.querySelectorAll('.fa-circle');

function ShowSlides(){
    for(var i=0;i<dots.length;i++){
        dots[i+1].style.color='grey';
        dots[0].style.color='blue';
        images[i+1].style.display='none';
    }
}
ShowSlides()

// click on dots
function dot(n){
for(var i=0;i<dots.length;i++){
    dots[i].style.color='grey'
    images[i].style.display='none'
}
dots[n].style.color='blue'
images[n].style.display='flex'
}

// click on arrows
function nextImage(number,index){
    for(var i=0;i<dots.length;i++){
        dots[i].style.color='grey'
        images[i].style.display='none'
    }
    dots[index+number].style.color='blue'
    images[index+number].style.display='flex'
}

images.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    sliderWrapper.style.transform = `translateX(${currentTranslate + diff}px)`;
});