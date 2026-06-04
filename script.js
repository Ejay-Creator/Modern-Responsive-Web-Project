// =====================================
// PREMIUM MEDICAL PORTFOLIO JAVASCRIPT
// =====================================

// ==========================
// ELEMENTS
// ==========================

const themeBtn = document.getElementById("themeToggle");
const themeIcon = themeBtn.querySelector("i");

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const header = document.querySelector(".header");

// ==========================
// THEME MEMORY
// ==========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

// ==========================
// THEME TOGGLE
// ==========================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }

    themeBtn.animate(
        [
            { transform: "rotate(0deg)" },
            { transform: "rotate(180deg)" },
            { transform: "rotate(360deg)" }
        ],
        {
            duration: 600
        }
    );
});

// ==========================
// MOBILE MENU
// ==========================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// ==========================
// CLOSE MENU ON LINK CLICK
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".glass-card, .card-box, .service-card, .stat-card, .timeline-item"
);

revealElements.forEach(el => {
    el.classList.add("fade-up");
});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// HEADER EFFECT
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,10,20,0.95)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background =
            "rgba(5,10,20,.45)";

        header.style.boxShadow =
            "none";
    }
});

// ==========================
// ACTIVE NAV LINK
// ==========================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active-link");
        }
    });
});

// ==========================
// TESTIMONIAL SLIDER
// ==========================

const testimonials = [

    `"Dr. David provided outstanding care and made me feel comfortable throughout my treatment."`,

    `"Professional, compassionate, and highly skilled. I strongly recommend his services."`,

    `"One of the best doctors I've met. Excellent communication and patient care."`,

    `"His dedication to patient wellbeing is remarkable. Truly exceptional healthcare service."`,

    `"Knowledgeable, friendly, and attentive. An excellent healthcare professional."`
];

const testimonialText =
    document.getElementById("testimonialText");

let testimonialIndex = 0;

function changeTestimonial() {

    testimonialIndex++;

    if (
        testimonialIndex >= testimonials.length
    ) {
        testimonialIndex = 0;
    }

    testimonialText.style.opacity = "0";

    setTimeout(() => {

        testimonialText.textContent =
            testimonials[testimonialIndex];

        testimonialText.style.opacity = "1";

    }, 300);
}

setInterval(changeTestimonial, 5000);

// ==========================
// CONTACT FORM (UPDATED VALIDATION ONLY)
// ==========================

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Please fill in all fields before sending your message.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            return;
        }

        const button = form.querySelector("button");

        button.textContent = "Message Sent ✓";
        button.disabled = true;

        setTimeout(() => {

            form.reset();

            button.textContent =
                "Send Message";

            button.disabled = false;

        }, 2500);
    });
}

// ==========================
// SMOOTH START ANIMATION
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity .8s ease";

        document.body.style.opacity = "1";

    }, 100);
});

// ==========================
// PARALLAX HERO IMAGE
// ==========================

const heroImage =
    document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollValue =
        window.scrollY * 0.08;

    heroImage.style.transform =
        `translateY(${scrollValue}px)`;
});