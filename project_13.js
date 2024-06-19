//Add Event Listener 


const my_button = document.querySelector('.arrow-image')

my_button.addEventListener('click', () => {
    my_button.classList.toggle("arrow-image-open");
});
