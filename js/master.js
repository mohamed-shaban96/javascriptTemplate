// Check If There Is Local Storage Color Option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Items
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element With Data-color === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active");

        } 
    });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There Is Local Storage RandomBackground Item
let backgroundLocalItem = localStorage.getItem("background-option");

// check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem == 'true') {

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }

    // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");

    } 

}

// Toggle Spin Class On Icon ======
document.querySelector(".toggle-settings").onclick = function () {

    // Toggle Class Fa-Spin For Rotation On Self
    document.querySelector(".toggle-settings .fa-cog").classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorLi.forEach(li => {

    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);

        // Remove Active Class From All Childrens.
        handelActive(e);
    });

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All List spans
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

        // Function Remove , Add Active Class From All Spans
        handelActive(e);

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background-option", true);
            
        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background-option", false);

        } 

    });

});


// select landing Page Element =====
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["slider-image1.jpg", "slider-image2.jpg", "slider-image3.jpg", "slider-image4.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
            
            }, 5000);

    }

}


// Select Skills Selector ==============
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

// Create Popup With Image ================
let OurGallery = document.querySelectorAll(".gallery img");

OurGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        //Create The Popup
        let popupBox = document.createElement("div");
        
        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            //Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("sapn");
        
        // Create The Close Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        // Remove The Curent Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

// select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Bullets
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere (element) {

    element.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
    
            });
    
        });
    
    });

}

scrollToSomewhere (allBullets);
scrollToSomewhere (allLinks);

// Handel Active State 
function handelActive(ev) {

    // Remove Active Class From All Childrens.
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Class Active On Self
    ev.target.classList.add("active");

}

// Show Bullets ===================

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem != null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';
            
            localStorage.setItem("bullets-option", 'block');

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets-option", 'none');

        }

        handelActive(e);

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("bullets-option");
    window.location.reload();

};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation On Span
    e.stopPropagation();

    // Toggle Class menu-active On Button
    this.classList.toggle("menu-active");

    // Toggle Class open On Links
    tLinks.classList.toggle("open");

}

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Open
        if (tLinks.classList.contains("open")) {

            // Toggle Class menu-active On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class open On Links
            tLinks.classList.toggle("open");

        }

    }

});

// Stop Propagation On Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}