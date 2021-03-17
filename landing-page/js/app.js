/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//getting all sections in document 
const sections = document.querySelectorAll('section');
//geting the nav bar unordered list
const navList = document.querySelector('#navbar__list');

const navItems = document.createDocumentFragment();
//const navMenu = document.querySelector('.navbar__menu');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const section of sections) {
    //creating nav list item and it's link
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');

    //adding reference and text and css class to the link 
    navLink.href = "#" + section.getAttribute('id');
    navLink.textContent = section.getAttribute('data-nav');
    navLink.classList.add("menu__link")

    //adding link to the list item
    navItem.appendChild(navLink);
    if(section.getAttribute('id') == "section1"){
        navItem.classList.add("your-active-class");
    }
    
    //adding nav item to the nav fregment
    navItems.appendChild(navItem);
}
navList.appendChild(navItems);


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', changeActiveLink);
function changeActiveLink(){
	const observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
            const previousActive = document.querySelectorAll('.your-active-class');
            for (const previous of previousActive){
                previous.classList.remove('your-active-class');
            }
            const id = '#' + entry.target.getAttribute('id');
            const section = document.querySelector(id)
            document.querySelector(`[href="${id}"]`).classList.add('your-active-class');
            section.classList.add('your-active-class');
			observer.unobserve(entry.target);
		}
		});
	}, {threshold : "0.90"});

	sections.forEach(section => { observer.observe(section) });
}


// Scroll to anchor ID using scrollTO event
navList.addEventListener('click', scrollToSection); 
function scrollToSection(event){
    event.preventDefault();
    const refer = event.target.hash
    const selectedSection = document.querySelector(refer);
    selectedSection.scrollIntoView({behavior: 'smooth', block: 'center'});
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


