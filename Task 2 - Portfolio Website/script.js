// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
    if (menu.classList.contains("bx-menu")) {
        menu.classList.replace("bx-menu", "bx-x");
    }
    else {
        menu.classList.replace("bx-x", "bx-menu");
    }
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

let link = document.querySelectorAll("nav-link").forEach(() => {
    navbar.classList.toggle("active");
}) 



// Dark Mode
let darkmode = document.querySelector("#darkmode");
let setDarkMode = localStorage.getItem("dark");
if (setDarkMode === "on") {
    document.body.classList.toggle("active");
    darkmode.classList.add("bx-sun");
    darkmode.classList.remove("bx-moon");
}

darkmode.onclick = () => {
    setDarkMode = localStorage.getItem("dark");
    if (setDarkMode !== "on") {
        darkmode.classList.add("bx-sun");
        darkmode.classList.remove("bx-moon");
        document.body.classList.toggle("active");
        setDarkMode = localStorage.setItem("dark", "on");
    }
    else {
        darkmode.classList.add("bx-moon");
        darkmode.classList.remove("bx-sun");
        document.body.classList.toggle("active");
        setDarkMode = localStorage.setItem("dark", null);
    }
}

// Scroll Top 
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
})

// Form Validation 
function Validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let sendBtn = document.querySelector(".contact-button");
    
    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyError();
        }
        else {
            success();
        }
    })
}
Validate();

function emptyError() {
    swal({
        title: "Oh no...",
        text: "Fields cannot be empty!",
        icon: "error",
        button: "OK",
      });
}

function success() {
    swal({
        title: "Good Job!",
        text: "Your response has been submitted",
        icon: "success",
        button: "OK",
      });
}