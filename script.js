
// Buttons
let button = document.querySelector('.project-button');
let element = document.querySelector('.colmar'); // Select the element to show/hide

function toggleDropdown() {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'grid';
        
       
    } else {
        element.style.display = 'none';
    }
}

// Add an event listener to the button for toggling
button.addEventListener('click', toggleDropdown);
