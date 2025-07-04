const menu_button = document.querySelector(".menu_button")
const menu_bar = document.createElement("div")
const social_btn = document.querySelector(".social")
const social_profiles = document.querySelectorAll(".social_prof")
const serial_button = document.querySelectorAll(".serial_buttons>button")
const titles = document.querySelector(".titles")
const institute = document.querySelector(".institute_img")


menu_bar.classList.add("menu_bar")

const overlay = document.createElement("div");
overlay.classList.add("overlay");

menu_button.addEventListener("click", () => {

    const is_show = menu_bar.classList.contains("showing")

    if (!is_show) {
        menu_bar.classList.add("showing");
        menu_bar.innerHTML = `
            <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            </nav>
            `

        document.body.classList.add("no_scroll")
        overlay.appendChild(menu_bar);
        document.body.appendChild(overlay);
        const anchor = document.querySelectorAll(".showing>nav>a")
        anchor.forEach(link => {
            link.addEventListener("click", () => {
                menu_bar.classList.remove("showing");
                menu_bar.innerHTML = ``;
                document.body.classList.remove("no_scroll")
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            })
        })
    } else {
        menu_bar.classList.remove("showing");
        menu_bar.innerHTML = ``;
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 600 && menu_bar.classList.contains("showing")) {
        menu_bar.classList.remove("showing");
        menu_bar.innerHTML = ``;
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }
});

social_btn.addEventListener("click", () => {
    social_profiles.forEach((element, index) => {
        setTimeout(() => {
            element.classList.toggle("show");
        }, index * 100);
    });
});

serial_button.forEach((btn) => {
    btn.addEventListener("click", () => {
        let standard;
        let year;
        let institute_name;
        let grade;
        let img;
        if (btn.innerText == 1) {
            standard = "Class X"
            year = "2022"
            institute_name = "Lovely Public Sr. Sec. School"
            grade = "95.6%"
            img = "https://content.jdmagicbox.com/comp/delhi/b4/011p1219747106r1a7b4/catalogue/lovely-public-sr-sec-school-priyadarshini-vihar-delhi-schools-vqxa9x.jpg"
        } else if (btn.innerText == 2) {
            standard = "Class XII"
            year = "2024"
            institute_name = "Naveen Bharti Sr. Sec. School"
            grade = "95%"
            img = "d11ae3a3-c9be-4855-a8f7-03a4c6cb5cc6.webp"
        } else if (btn.innerText == 3) {
            standard = "BTech, IT"
            year = "2024 - 2028"
            institute_name = "NSUT, Main Campus"
            grade = "8.18 CGPA"
            img = "inbound889787043112691000.avif"
        }
        titles.innerHTML = `
                            <h3 class="standard">${standard}</h3>
                            <p class="year">${year}</p>
                            <p class="institute">${institute_name}</p>
                            <p class="address">Delhi, India</p>
                            <p class="grade">${grade}</p>`

        institute.innerHTML = `
                            <img src="${img}" alt="">`


        const headings = document.querySelectorAll(".titles>h3, .titles>p")

        headings.forEach((element, index) => {
            setTimeout(() => {
                element.classList.toggle("show");
            }, index * 100);
        });
    })
})

