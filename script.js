// SELECT BUTTON
const toggleBtn = document.getElementById("toggle");

// LOAD SAVED THEME
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "☀️";
}

// TOGGLE THEME
toggleBtn.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
    }
};

function toggleProject(card) {
    card.classList.toggle("active");
}

function toggleProject(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("active");
    });

    card.classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch("https://formsubmit.co/ajax/shamanthshetty09@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch(error => {
        alert("Something went wrong!");
    });
});

