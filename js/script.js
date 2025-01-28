// Animation function for About section sentences
function animateAboutSentences() {
    const sentences = document.querySelectorAll('.about-sentence');
    // First reset all sentences to initial state
    sentences.forEach(sentence => sentence.classList.remove('visible'));
    
    // Animate each sentence with a delay
    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            sentence.classList.add('visible');
        }, index * 2000); // 2 second delay between each sentence
    });
}

// Main tab navigation
document.querySelectorAll('.main-tab').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs and content
        document.querySelectorAll('.main-tab').forEach(btn => 
            btn.classList.remove('active'));
        document.querySelectorAll('.main-content').forEach(content => 
            content.classList.remove('active'));
        
        // Add active class to clicked tab and its content
        button.classList.add('active');
        const tabContent = document.getElementById(button.dataset.tab);
        if (tabContent) {
            tabContent.classList.add('active');
            
            // If about tab is clicked, trigger the animation
            if (button.dataset.tab === 'about') {
                animateAboutSentences();
            }
        }
    });
});

// Company tab navigation
document.querySelectorAll('.company-tab').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all company tabs and sections
        document.querySelectorAll('.company-tab').forEach(btn => 
            btn.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(content => 
            content.classList.remove('active'));
        
        // Add active class to clicked tab and its content
        button.classList.add('active');
        const tabContent = document.getElementById(button.dataset.tab);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    });
});

// Case study toggle functionality
document.querySelectorAll('.case-study-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('active');
    });
});

// Contact info toggle function (if needed)
function toggleContactInfo() {
    var info = document.getElementById("contact-info");
    if (info.classList.contains("visible")) {
        info.classList.remove("visible");
    } else {
        info.classList.add("visible");
    }
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // If about section is active on page load, trigger animation
    if (document.getElementById('about').classList.contains('active')) {
        animateAboutSentences();
    }
});