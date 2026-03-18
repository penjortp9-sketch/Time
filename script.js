// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    const viewProjectsBtn = document.querySelector('.primary-btn');
    const showImageBtn = document.querySelector('.secondary-btn');
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            const section = this.textContent; // Get the text (Home, Projects, About, Contact)
            
            // Handle different navigation clicks
            switch(section) {
                case 'Home':
                    // Scroll to top smoothly
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    break;
                    
                case 'Projects':
                    // Show projects section or scroll to projects
                    alert('Projects page will be available soon!');
                    break;
                    
                case 'About':
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    break;
                    
                case 'Contact':
    // Scroll to contact section
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    break;
            }
        });
    });
    
    // Handle "View My Projects" button
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Projects page is under construction!');
            // You can replace this with actual navigation later
            // window.location.href = 'projects.html';
        });
    }
    
    // Handle "Show Another Image" button (your existing function)
    if (showImageBtn) {
        showImageBtn.addEventListener('click', function(e) {
            changeImage(); // Calls your existing function
        });
    }
    
    // Add back to top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            // Show back to top button if you want to add one
            if (!document.getElementById('backToTop')) {
                addBackToTopButton();
            }
        }
    });
});

// Function to add back to top button
function addBackToTopButton() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s;
    `;
    
    button.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    document.body.appendChild(button);
}

// Your existing changeImage function (keep this as is)
let images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000",
    "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=1000",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1000",
    "https://images.unsplash.com/photo-1487017159836-4e23d0b6a5f6?w=1000",
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1000"
];

function changeImage() {
    const img = document.getElementById("projectImage");
    if (img) {
        let randomIndex = Math.floor(Math.random() * images.length);
        img.style.opacity = '0';
        
        setTimeout(() => {
            img.src = images[randomIndex];
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s';
        }, 300);
    }
}