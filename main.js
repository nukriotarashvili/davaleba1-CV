// --- JavaScript მონაცემები და რენდერი ---

// მონაცემების ობიექტი
const cvData = {
    personal: [
        { label: "Name", value: "Nukri Otarashvili" },
        { label: "Birthday", value: "5th of January 1985" },
        { label: "Nationality", value: "Georgian" },
        { label: "Languages", value: "Georgian, English, Russian" }
    ],
    contact: [
        { label: "Email", value: "nukriotarashvili@gmail.com", link: "nukriotarashvili@gmail.com" },
        { label: "Web", value: "https://github.com/nukriotarashvili", link: "https://github.com/nukriotarashvili" },
        { label: "LinkedIn", value: "linkedin.com/in/nukri-otarashvili-6baa80159", link: "linkedin.com/in/nukri-otarashvili-6baa80159" }
    ],
    software: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 75 },
        { name: "JS", percent: 80 },
        { name: "AI", percent: 80 },
        { name: "React", percent: 70 },
        { name: "Node.js", percent: 60 }
    ],
    work: [
        { year: "2012-2025", title: "Chief Accountant", place: "Telavi, Georgia" },
        { year: "2017-2025", title: "Tax advisor", place: "Telavi, Georgia" },
        { year: "2025", title: "Vibe Codinng", place: "Telavi, Georgia" }
    ],
    education: [
        { year: "2024", title: "Self-development", place: "Home" },
        { year: "2025", title: "Vibe Coding", place: "Home" }
    ]
};

// ფუნქციები რენდერისთვის
function renderPersonalInfo() {
    const container = document.getElementById('personal-info');
    container.innerHTML = `<h3 class="section-title">Personal</h3>`;
    
    cvData.personal.forEach(item => {
        container.innerHTML += `
            <div class="info-group">
                <div class="info-label">${item.label}</div>
                <div class="info-value">${item.value}</div>
            </div>
        `;
    });
}

function renderContactInfo() {
    const container = document.getElementById('contact-info');
    container.innerHTML = `<h3 class="section-title">Contact</h3>`;

    cvData.contact.forEach(item => {
        const valueHtml = item.link ? `<a href="${item.link}">${item.value}</a>` : item.value;
        container.innerHTML += `
            <div class="info-group">
                <div class="info-label">${item.label}</div>
                <div class="info-value">${valueHtml}</div>
            </div>
        `;
    });
}

function renderSoftware() {
    const container = document.getElementById('software-skills');
    cvData.software.forEach(skill => {
        container.innerHTML += `
            <div class="skill-bar-container">
                <div class="skill-name">${skill.name}</div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: ${skill.percent}%;"></div>
                </div>
            </div>
        `;
    });
}

function renderTimeline(data, elementId) {
    const container = document.getElementById(elementId);
    data.forEach(item => {
        container.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="year-badge">${item.year}</div>
                <div class="timeline-content">
                    <h4>${item.title}</h4>
                    <span>${item.place}</span>
                </div>
            </div>
        `;
    });
}

// ფუნქციების გამოძახება
renderPersonalInfo();
renderContactInfo();
renderSoftware();
renderTimeline(cvData.work, 'work-timeline');
renderTimeline(cvData.education, 'edu-timeline');

// --- Dark Mode / Light Mode ფუნქციონალი ---
// localStorage-დან theme-ის წაკითხვა
function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

// theme-ის დაყენება
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // აიქონების განახლება
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
}

// theme-ის გადართვა
function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// გვერდის ჩატვირთვისას theme-ის აღდგენა
function initTheme() {
    const savedTheme = getTheme();
    setTheme(savedTheme);
    
    // toggle ღილაკზე დაკლიკება
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// theme-ის ინიციალიზაცია
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

// --- ფოტოს ატვირთვის ფუნქციონალი ---
const PROFILE_IMAGE_KEY = 'cv_profile_image';

// localStorage-დან ფოტოს აღდგენა
function loadProfileImage() {
    const savedImage = localStorage.getItem(PROFILE_IMAGE_KEY);
    const profileImg = document.getElementById('profile-img');
    
    if (savedImage) {
        profileImg.src = savedImage;
    }
}

// ფოტოს localStorage-ში შენახვა
function saveProfileImage(imageData) {
    localStorage.setItem(PROFILE_IMAGE_KEY, imageData);
}

// ფოტოს ატვირთვა და გადაქცევა base64-ში
function handleImageUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // ფაილის ტიპის შემოწმება
    if (!file.type.startsWith('image/')) {
        alert('გთხოვთ აირჩიოთ სურათის ფაილი');
        return;
    }
    
    // ფაილის ზომის შემოწმება (მაქს 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('სურათის ზომა არ უნდა აღემატებოდეს 5MB');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = e.target.result;
        const profileImg = document.getElementById('profile-img');
        
        // სურათის განახლება
        profileImg.src = imageData;
        
        // localStorage-ში შენახვა
        saveProfileImage(imageData);
    };
    
    reader.onerror = function() {
        alert('ფოტოს წაკითხვისას მოხდა შეცდომა');
    };
    
    reader.readAsDataURL(file);
}

// ფოტოს ატვირთვის ინიციალიზაცია
function initImageUpload() {
    const uploadInput = document.getElementById('profile-upload');
    const profileContainer = document.querySelector('.profile-pic-container');
    
    if (uploadInput) {
        uploadInput.addEventListener('change', handleImageUpload);
    }
    
    // კლიკი container-ზე ასევე იხსნება file picker-ს
    if (profileContainer) {
        profileContainer.addEventListener('click', (e) => {
            // თუ არ არის upload label-ზე კლიკი
            if (!e.target.closest('.upload-label')) {
                uploadInput.click();
            }
        });
    }
    
    // localStorage-დან ფოტოს აღდგენა
    loadProfileImage();
}

// გვერდის ჩატვირთვისას ინიციალიზაცია
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageUpload);
} else {
    initImageUpload();
}

// --- წრეების ანიმაცია ---
function getCSSVariable(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

// წრეების hover ფერები (HTML, CSS, JS, AI, React, Node.js)
const circleHoverColors = {
    'circle-html':  'var(--accent-cyan)',   // HTML
    'circle-css':   'var(--accent-pink)',   // CSS
    'circle-js':    'var(--accent-yellow)', // JS
    'circle-ai':    'var(--accent-cyan)',   // AI
    'circle-react': 'var(--accent-pink)',   // React
    'circle-node':  'var(--accent-yellow)'  // Node.js
};

function updateCircleBackground(circleElement, percent, color = null) {
    const progressBg = getCSSVariable('--progress-bg') || '#eee';
    const accentColor = color || getCSSVariable('--accent-cyan') || '#7adddd';
    circleElement.style.background = `conic-gradient(${accentColor} ${percent}%, ${progressBg} 0)`;
}

function animateCircle(circleElement, targetPercent) {
    let currentPercent = 0;
    const duration = 1500; // 1.5 წამი
    const startTime = performance.now();
    
    function updateCircle(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        currentPercent = easeOut * targetPercent;
        
        // conic-gradient-ის განახლება
        updateCircleBackground(circleElement, currentPercent);
        
        if (progress < 1) {
            requestAnimationFrame(updateCircle);
        } else {
            // ფინალური მნიშვნელობა
            updateCircleBackground(circleElement, targetPercent);
            // პროცენტის შენახვა data-ატრიბუტში hover-ისთვის
            circleElement.setAttribute('data-current-percent', targetPercent);
        }
    }
    
    requestAnimationFrame(updateCircle);
}

// Hover ეფექტის დამატება წრეებზე
function setupCircleHover(circleElement) {
    const circleClasses = Array.from(circleElement.classList);
    const hoverColorClass = circleClasses.find(cls => circleHoverColors.hasOwnProperty(cls));
    const hoverColorVar = hoverColorClass ? circleHoverColors[hoverColorClass] : null;
    
    if (!hoverColorVar) return;
    
    // CSS variable-ის სახელის მიღება
    const cssVarName = hoverColorVar.replace('var(', '').replace(')', '').trim();
    
    circleElement.addEventListener('mouseenter', () => {
        const currentPercent = parseInt(circleElement.getAttribute('data-current-percent') || 
                                       circleElement.getAttribute('data-percent') || 0);
        const hoverColorValue = getCSSVariable(cssVarName) || '#ffb6c1';
        updateCircleBackground(circleElement, currentPercent, hoverColorValue);
    });
    
    circleElement.addEventListener('mouseleave', () => {
        const currentPercent = parseInt(circleElement.getAttribute('data-current-percent') || 
                                       circleElement.getAttribute('data-percent') || 0);
        updateCircleBackground(circleElement, currentPercent);
    });
}

// ყველა წრის ანიმაცია
function animateAllCircles() {
    const circles = document.querySelectorAll('.circle-item[data-percent]');
    
    circles.forEach((circle, index) => {
        const targetPercent = parseInt(circle.getAttribute('data-percent'));
        
        // Hover ეფექტის დაყენება
        setupCircleHover(circle);
        
        // თითოეული წრე იწყება მცირე დაყოვნებით (stagger effect)
        setTimeout(() => {
            animateCircle(circle, targetPercent);
        }, index * 170); // 170ms დაყოვნება თითოეულ წრეს შორის
    });
}

// გვერდის ჩატვირთვისას ანიმაციის დაწყება
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(animateAllCircles, 300); // მცირე დაყოვნება გვერდის სრულად ჩატვირთვის შემდეგ
    });
} else {
    setTimeout(animateAllCircles, 300);
}

