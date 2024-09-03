var images=document.querySelectorAll('.image-container');
var dots=document.querySelectorAll('.fa-circle');
var index = 0;

// show first image only
function ShowFirstSlide(){
        dots[0].style.color='blue';
        images[0].style.display='flex';
}
ShowFirstSlide()

// show each image and its dot
function showSlide(index) {
    if(index > 3){
        index=0
    }else if(index < 0){
        index=3;
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.color = 'grey';
        images[i].style.display = 'none';
    }
    dots[index].style.color = 'blue';
    images[index].style.display = 'flex';
}

// click on dots 
function dot(index) {
    showSlide(index);
}

// click on arrows
function nextImage(number, index) {
    index = (number + index)
    showSlide(index);
}

// Automatic slider
function startAutoSlide() {
    interval=setInterval(function() {
        index = (index + 1) 
        if(index > 3){
            index=0
        }else if(index < 0){
            index=3;
        }
        showSlide(index);
    }, 2500); 
}
startAutoSlide();

function stop(){
    clearInterval(interval)
}
function swipe(event,index){
  
let startX=0;
let endX = 0;   
document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX; 
});
document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX; 

    // to know the user swipes the screen left to right or right to left 
    // if distance is greater than zero => swipe left to right 
    var distance = endX - startX;
    if (distance > 0) {
        showSlide(index-1)
    } else if (distance < 0) {  
        // if distance is greater than zero => swipe right to left
        showSlide(index+1)
    }
});

}

