// Language Data
const translations = {
    en: {
        logo: "Website Logo",
        home: "Home",
        about: "About",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
        heroTitle: "Welcome to Our Website",
        heroSubtitle: "Creating Excellence Together",
        heroCta: "Learn More",
        featuresTitle: "Our Features",
        feature1: "Feature 1",
        feature2: "Feature 2",
        feature3: "Feature 3",
        testimonialsTitle: "What Our Clients Say",
        testimonialText: "This is the best service I've ever used!",
        ctaTitle: "Ready to Start?",
        ctaButton: "Get Started Today",
        footerName: "Your Website Name",
        privacy: "Privacy Policy",
        aboutTitle: "About Us",
        aboutSubtitle: "Learn more about who we are and what we do.",
        teamTitle: "Our Team",
        teamMember1: "Team Member 1",
        teamMember2: "Team Member 2",
        teamMember3: "Team Member 3",
        servicesTitle: "Our Services",
        servicesSubtitle: "Explore the services we offer to help you succeed.",
        service1: "Service 1",
        service2: "Service 2",
        service3: "Service 3",
        galleryTitle: "Gallery",
        gallerySubtitle: "Check out our latest work and projects.",
        project1: "Project 1",
        project2: "Project 2",
        project3: "Project 3",
        contactTitle: "Contact Us",
        contactSubtitle: "We'd love to hear from you. Get in touch!",
        contactButton: "Send Message",
        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactMessagePlaceholder: "Your Message",
        whatWeOffer: "What We Offer",
        ourWork: "Our Work",
        sendUsMessage: "Send Us a Message",
    },
    ar: {
        logo: "شعار الموقع",
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        gallery: "المعرض",
        contact: "اتصل بنا",
        heroTitle: "مرحبًا بكم في موقعنا",
        heroSubtitle: "نخلق التميز معًا",
        heroCta: "تعلم المزيد",
        featuresTitle: "ميزاتنا",
        feature1: "الميزة ١",
        feature2: "الميزة ٢",
        feature3: "الميزة ٣",
        testimonialsTitle: "ما يقوله عملاؤنا",
        testimonialText: "هذه أفضل خدمة استخدمتها على الإطلاق!",
        ctaTitle: "هل أنت مستعد للبدء؟",
        ctaButton: "ابدأ اليوم",
        footerName: "اسم موقعك",
        privacy: "سياسة الخصوصية",
        aboutTitle: "من نحن",
        aboutSubtitle: "تعرف على المزيد حول من نحن وما نفعله.",
        teamTitle: "فريقنا",
        teamMember1: "عضو الفريق ١",
        teamMember2: "عضو الفريق ٢",
        teamMember3: "عضو الفريق ٣",
        servicesTitle: "خدماتنا",
        servicesSubtitle: "اكتشف الخدمات التي نقدمها لمساعدتك على النجاح.",
        service1: "الخدمة ١",
        service2: "الخدمة ٢",
        service3: "الخدمة ٣",
        galleryTitle: "المعرض",
        gallerySubtitle: "اطلع على أحدث أعمالنا ومشاريعنا.",
        project1: "المشروع ١",
        project2: "المشروع ٢",
        project3: "المشروع ٣",
        contactTitle: "اتصل بنا",
        contactSubtitle: "نود أن نسمع منك. تواصل معنا!",
        contactButton: "إرسال الرسالة",
        contactNamePlaceholder: "اسمك",
        contactEmailPlaceholder: "بريدك الإلكتروني",
        contactMessagePlaceholder: "رسالتك",
        whatWeOffer: "ما نقدمه",
        ourWork: "أعمالنا",
        sendUsMessage: "أرسل لنا رسالة",
    },
};

// Get the current language from localStorage or default to 'en'
let currentLanguage = localStorage.getItem("language") || "en";

// Get the current theme from localStorage or default to 'dark'
let currentTheme = localStorage.getItem("theme") || "dark";

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    localStorage.setItem("language", currentLanguage); // Save the selected language
    updateLanguage();
}

// Function to toggle between dark and light mode
function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", currentTheme); // Save the selected theme
    applyTheme();
}

// Function to apply the selected theme
function applyTheme() {
    const body = document.body;
    const themeToggle = document.querySelector(".theme-toggle");

    if (currentTheme === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "🌞 Light Mode";
    } else {
        body.classList.remove("light-mode");
        themeToggle.textContent = "🌙 Dark Mode";
    }
}

// Function to update the site's language
function updateLanguage() {
    const langData = translations[currentLanguage];

    // Update common elements
    document.getElementById("logo").textContent = langData.logo;
    document.getElementById("home-link").textContent = langData.home;
    document.getElementById("about-link").textContent = langData.about;
    document.getElementById("services-link").textContent = langData.services;
    document.getElementById("gallery-link").textContent = langData.gallery;
    document.getElementById("contact-link").textContent = langData.contact;
    document.getElementById("footer-name").textContent = langData.footerName;
    document.getElementById("privacy-link").textContent = langData.privacy;

    // Update Home Page
    if (document.getElementById("hero-title")) {
        document.getElementById("hero-title").textContent = langData.heroTitle;
        document.getElementById("hero-subtitle").textContent = langData.heroSubtitle;
        document.getElementById("hero-cta").textContent = langData.heroCta;
        document.getElementById("features-title").textContent = langData.featuresTitle;
        document.getElementById("feature-1").textContent = langData.feature1;
        document.getElementById("feature-2").textContent = langData.feature2;
        document.getElementById("feature-3").textContent = langData.feature3;
        document.getElementById("testimonials-title").textContent = langData.testimonialsTitle;
        document.getElementById("testimonial-text").textContent = langData.testimonialText;
        document.getElementById("cta-title").textContent = langData.ctaTitle;
        document.getElementById("cta-button").textContent = langData.ctaButton;
    }

    // Update About Page
    if (document.getElementById("about-title")) {
        document.getElementById("about-title").textContent = langData.aboutTitle;
        document.getElementById("about-subtitle").textContent = langData.aboutSubtitle;
        document.getElementById("team-title").textContent = langData.teamTitle;
        document.getElementById("team-member-1").textContent = langData.teamMember1;
        document.getElementById("team-member-2").textContent = langData.teamMember2;
        document.getElementById("team-member-3").textContent = langData.teamMember3;
    }

    // Update Services Page
    if (document.getElementById("services-title")) {
        document.getElementById("services-title").textContent = langData.servicesTitle;
        document.getElementById("services-subtitle").textContent = langData.servicesSubtitle;
        document.getElementById("service-1").textContent = langData.service1;
        document.getElementById("service-2").textContent = langData.service2;
        document.getElementById("service-3").textContent = langData.service3;
    }

    // Update Gallery Page
    if (document.getElementById("gallery-title")) {
        document.getElementById("gallery-title").textContent = langData.galleryTitle;
        document.getElementById("gallery-subtitle").textContent = langData.gallerySubtitle;
        document.getElementById("project-1").textContent = langData.project1;
        document.getElementById("project-2").textContent = langData.project2;
        document.getElementById("project-3").textContent = langData.project3;
    }

    // Update Contact Page
    if (document.getElementById("contact-title")) {
        document.getElementById("contact-title").textContent = langData.contactTitle;
        document.getElementById("contact-subtitle").textContent = langData.contactSubtitle;
        document.getElementById("contact-button").textContent = langData.contactButton;
        document.querySelector(".contact-form input[type='text']").placeholder = langData.contactNamePlaceholder;
        document.querySelector(".contact-form input[type='email']").placeholder = langData.contactEmailPlaceholder;
        document.querySelector(".contact-form textarea").placeholder = langData.contactMessagePlaceholder;
    }

    // Update "What We Offer" and "Our Work" sections
    if (document.getElementById("what-we-offer-title")) {
        document.getElementById("what-we-offer-title").textContent = langData.whatWeOffer;
    }
    if (document.getElementById("our-work-title")) {
        document.getElementById("our-work-title").textContent = langData.ourWork;
    }
    if (document.getElementById("send-us-message-title")) {
        document.getElementById("send-us-message-title").textContent = langData.sendUsMessage;
    }

    // Update language toggle button text
    document.querySelector(".language-toggle").textContent =
        currentLanguage === "en" ? "🌐 العربية" : "🌐 English";
}

// Initialize language and theme on page load
document.addEventListener("DOMContentLoaded", () => {
    updateLanguage();
    applyTheme();
});