// Rotating text functionality - tags style
const textItems = document.querySelectorAll('.text-item');
let currentIndex = 0;

function rotateText() {
    // Remove active class from current item
    textItems[currentIndex].classList.remove('active');
    
    // Move to next item
    currentIndex = (currentIndex + 1) % textItems.length;
    
    // Add active class to new item
    textItems[currentIndex].classList.add('active');
}

// Show first few items initially with stagger
setTimeout(() => {
    textItems[1].classList.add('active');
}, 500);

setTimeout(() => {
    textItems[2].classList.add('active');
}, 1000);

setTimeout(() => {
    textItems[3].classList.add('active');
}, 1500);

// Start rotation after all items have appeared
setTimeout(() => {
    setInterval(rotateText, 2500);
}, 3000);