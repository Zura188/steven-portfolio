/* =================================
   DARK MODE
================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    if (isDark) {

        themeBtn.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =================================
   MOBILE MENU
================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =================================
   SCROLL ANIMATION
================================= */

const elements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".about-details, " +
    ".skill-card, " +
    ".education-item, " +
    ".project-card, " +
    ".contact-info, " +
    ".contact-form"
);


elements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elements.forEach(element => {

    observer.observe(element);

});


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            alert(
                "Silakan isi semua bagian terlebih dahulu."
            );

            return;

        }


        alert(
            `Terima kasih, ${name}!\n\nPesan kamu sudah diterima.`
        );


        contactForm.reset();

    }
);


/* =================================
   CURRENT YEAR
================================= */

const year =
    new Date().getFullYear();


const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        `© ${year} Steven Irfan R. All rights reserved.`;

}


/* =================================
   CONSOLE
================================= */

console.log(
    "Steven Irfan R Portfolio loaded successfully."
);