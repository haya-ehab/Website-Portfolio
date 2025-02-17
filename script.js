const nightModeBtn = document.getElementById('nightModeBtn');
const langToggleBtn = document.getElementById('langToggleBtn');
const title = document.getElementById('title');
const aboutHeading = document.querySelector('#about h2');
const aboutParagraph = document.querySelector('#about p');
const projectsHeading = document.querySelector('#projects h2');
const projectItems = document.querySelectorAll('#projects li');
const footerParagraph = document.getElementById('contact-info'); // Ensure this matches the ID in your HTML

let isNightMode = false;
let isEnglish = true;

// Night Mode Toggle
nightModeBtn.addEventListener('click', () => {
    isNightMode = !isNightMode;
    document.body.classList.toggle('night-mode', isNightMode);
    nightModeBtn.textContent = isNightMode ? 'Day Mode' : 'Night Mode';
});

// Language Toggle
langToggleBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langToggleBtn.textContent = isEnglish ? 'Switch to Arabic' : 'Switch to English';
    
    // Update text content based on language
    title.textContent = isEnglish ? 'My Portfolio' : 'محفظتي';
    aboutHeading.textContent = isEnglish ? 'About Me' : 'عني';
    aboutParagraph.textContent = isEnglish ? 'Welcome to my portfolio. I am a web developer.' : 'مرحبًا بكم في محفظتي. أنا مطور ويب.';
    projectsHeading.textContent = isEnglish ? 'Projects' : 'المشاريع';
    
    projectItems.forEach(item => {
        item.textContent = isEnglish ? item.getAttribute('data-en') : item.getAttribute('data-ar');
    });
    
    // Update footer contact info
    footerParagraph.textContent = isEnglish ? footerParagraph.getAttribute('data-en') : footerParagraph.getAttribute('data-ar');
});
    
    