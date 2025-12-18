// Yumyum js scripts

// Hover effect: enlarge images slightly
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.className = "btn btn-success";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Theme";
toggleBtn.className = "btn btn-secondary m-2";
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// Modal popup for newsletter (only on Home Page)
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    setTimeout(() => {
        const modal = document.createElement("div");
        modal.className = "modal fade show";
        modal.style.display = "block";
        modal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content p-3">
        <h5>Join YumNum Newsletter</h5>
        <p>Get weekly deals straight to your inbox!</p>
        <button id="closeModal" class="btn btn-primary">Close</button>
        </div>
    </div>`;
        document.body.appendChild(modal);

        document.getElementById("closeModal").addEventListener("click", () => {
            modal.remove();
        });
    }, 3000);
}

// Review Page form validation
if (document.title.includes("Review")) {
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll("input, textarea, select").forEach(field => {
            if (!field.value) {
                valid = false;
                field.classList.add("is-invalid");
            } else {
                field.classList.remove("is-invalid");
            }
        });
        if (valid) {
            alert("Thank you for your review!");
            form.reset();
        }
    });
}

// Location Page fake map interaction
if (document.title.includes("Location")) {
    const map = document.querySelector("#map");
    if (map) {
        map.addEventListener("click", () => {
            alert("Opening directions to YumNum Market...");
        });
    }
}

// Department Pages: highlight cards on click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("border");
        card.classList.toggle("border-success");
    });
});