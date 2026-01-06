// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Active Navbar on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// ===============================
// Header Shadow on Scroll
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
});


// ===============================
// Animated Counter (Quick Stats)
// ===============================
const counters = document.querySelectorAll(".stat h2");
let counterStarted = false;

function runCounter() {
    counters.forEach(counter => {
        const target = +counter.innerText.replace("+", "");
        let count = 0;
        const increment = target / 100;

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + (counter.innerText.includes("+") ? "+" : "");
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + (counter.innerText.includes("+") ? "+" : "");
            }
        };
        updateCounter();
    });
}

window.addEventListener("scroll", () => {
    const statsSection = document.getElementById("quick-stats");
    const sectionTop = statsSection.offsetTop - window.innerHeight;

    if (!counterStarted && scrollY > sectionTop) {
        runCounter();
        counterStarted = true;
    }
});


// ===============================
// Form Validation (Reservation)
// ===============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const date = form.querySelector('input[name="date"]').value;
        const time = form.querySelector('input[name="time"]').value;

        if (!name || !email || !phone || !date || !time) {
            alert("Mohon lengkapi semua data reservasi!");
            return;
        }

        alert(`Terima kasih ${name}, reservasi kamu berhasil!`);
        form.reset();
    });
}


// ===============================
// Map Placeholder Interaction
// ===============================
const mapPlaceholder = document.getElementById("map-placeholder");

if (mapPlaceholder) {
    mapPlaceholder.addEventListener("click", () => {
        alert("Integrasikan Google Maps API di sini.");
    });
}
