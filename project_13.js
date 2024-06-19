//Add Event Listener 


const my_button = document.querySelector('.arrow-image')
const dropdownList = document.querySelector('.drop-down-list')

my_button.addEventListener('click', () => {
    my_button.classList.toggle("arrow-image-open");
    dropdownList.classList.toggle("drop-down-visible");
});