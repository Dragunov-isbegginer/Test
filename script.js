const btn = document.getElementById('testBtn');
const resetBtn = document.getElementById('resetBtn');
const finger = document.getElementById('finger');
const title = document.getElementById('mainTitle');
const gif = document.getElementById('gifContainer');

// CLICK ME BUTTON LOGIC
btn.addEventListener('click', () => {
    gif.classList.add('show-gif');
    resetBtn.classList.add('show-reset'); // Show the reset button
    
    finger.classList.add('poke-animation');
    btn.classList.add('push-effect');
    
    title.innerText = "Muaw:><3";
    title.classList.add('heart-title');

    setTimeout(() => {
        finger.classList.remove('poke-animation');
        btn.classList.remove('push-effect');
    }, 500);
});

// RESET BUTTON LOGIC
resetBtn.addEventListener('click', () => {
    // Hide the GIF and Reset button
    gif.classList.remove('show-gif');
    resetBtn.classList.remove('show-reset');
    
    // Reset the title
    title.innerText = "Is it working?";
    title.classList.remove('heart-title');
});
