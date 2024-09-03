var images=document.querySelectorAll('.image-container');
var dots=document.querySelectorAll('.fa-circle');
var currentIndex = 0;

// show first image only
function ShowSlides(){
        dots[0].style.color='blue';
        images[0].style.display='flex';
}
ShowSlides()

// Function to update the slides and dots
function updateSlider(index) {
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.color = 'grey';
        images[i].style.display = 'none';
    }
    dots[index].style.color = 'blue';
    images[index].style.display = 'flex';
}

// Function for dot navigation
function dot(n) {
    currentIndex = n; // Update the current index
    updateSlider(n);
}

// Function for arrow navigation
function nextImage(number, index) {
    currentIndex = (number + index)
    updateSlider(currentIndex);
}

// Function to auto-cycle through images every 2 seconds
function startAutoSlide() {
    interval=setInterval(function() {
        currentIndex = (currentIndex + 1) 
        if(currentIndex > 3){
            currentIndex=0
        }else if(currentIndex < 0){
            currentIndex=3;
        }
        updateSlider(currentIndex);
    }, 2500); 
}

startAutoSlide();

function stop(){
    clearInterval(interval)
}

function m(event){
    updateSlider(0)
}