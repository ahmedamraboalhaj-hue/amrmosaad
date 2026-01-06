// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Validation & Submission to WhatsApp
document.getElementById('mainContactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelectorAll('input')[0].value;
    const phone = this.querySelectorAll('input')[1].value;
    const message = this.querySelector('textarea').value;

    const whatsappNumber = "201022888222";
    const text = `السلام عليكم شيف عمرو،%0Aأنا: ${name}%0Aرقمي: ${phone}%0Aرسالتي: ${message}`;

    const submitBtn = this.querySelector('button');
    submitBtn.innerText = 'جاري تحويلك للواتساب...';

    setTimeout(() => {
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        submitBtn.innerText = 'إرسال الطلب';
        this.reset();
    }, 1000);
});

// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item, .about-content, .about-image, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});
