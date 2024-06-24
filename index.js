
let menuBtn = document.querySelector("#menu-btn");
let crossBtn = document.querySelector(".cross-btn");
let sidebar = document.querySelector("ul");

let sidebarContent = "show";

menuBtn.addEventListener("click", () => {

    if(sidebarContent === "show") {
        sidebarContent = "hide";

        sidebar.style.animationName = "showAnimation";

        sidebar.style.display = "flex";
    } else {
        sidebarContent = "show";

        sidebar.style.animationName = "hideAnimation";

        setTimeout(() => {
            sidebar.style.display = "none";
        }, 120);
    }
});

crossBtn.addEventListener("click", () => {
    
        sidebarContent = "show";

        sidebar.style.animationName = "hideAnimation";

        setTimeout(() => {
            sidebar.style.display = "none";
        }, 120);
});

let mql = window.matchMedia("(max-width: 530px)");

if(mql.matches) {
    // 500px<=
    menuBtn.addEventListener("click", () => {
        menuBtn.style.display = "none";
    });

    crossBtn.addEventListener("click", () => {
        menuBtn.style.display = "flex";
    });
} else {
    // more than 500px
    menuBtn.addEventListener("click", () => {
        menuBtn.style.display = "flex";
    });

    crossBtn.addEventListener("click", () => {
        menuBtn.style.display = "flex";
    });
}