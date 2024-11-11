// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
}

// Enroll button alert
document.getElementById("enrollButton").addEventListener("click", () => {
    alert("Enrollment page is under development. Stay tuned!");
});

// Form submission message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch soon!");
});
