// Clicking on images creates a popup, clicking again enlarges them and clicking besides the img closes them
const masonry = document.querySelector(".masonry")
let popup = document.getElementById("popup");
let popupImg = document.querySelector("#popup img");
const selectedImage = document.getElementById("selectedImage")
// const imageIndexes = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24];
const masonryImages = document.querySelectorAll('.grid-images img');
const selectedIndex = null;

masonryImages.forEach(image => {
    image.addEventListener('click', () => {
        // init popup
        let container = document.body;

        // image.style.scale = '1.5'
        // image.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        popup.setAttribute("id", "popup");
        popup.style.cssText = 'visibility: visible;';
        popup.style.opacity = '1';
        // popup.style.transition = 'all 0.4s ease-in';
        popup.style.transition = 'all 0.4s ease-out';
        popup.setAttribute("onclick", "closeImg()");

        popupImg.setAttribute("src", image.src);
        popupImg.setAttribute("onclick", "enlargeImg()");

    })
})

function closeImg() {
    if ($(event.target).is('div')) {
        popupElem = document.querySelector('#popup');
        // popupElem.style.transform = 'translateY(-200%)';
        popupElem.style.opacity = '0';
        popupElem.style.visibility = 'hidden'
        popupElem.style.transition = 'all 0.4s ease-out';
        popupElem.firstChild.src = ''
    }
}

function enlargeImg() {
    popupImg.classList.add('enlarged')
    popupImg.setAttribute("onclick", "shrinkImg()");
}

function shrinkImg() {
    popupImg.classList.remove('enlarged')
    popupImg.setAttribute("onclick", "enlargeImg()");

}

