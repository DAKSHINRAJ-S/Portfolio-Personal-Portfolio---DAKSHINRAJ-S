document.addEventListener("DOMContentLoaded", () => {
    const text = "Motivated Full-Stack Developer driven by a passion for crafting intuitive and engaging digital experiences through refined UI/UX practices and cutting-edge web technologies. Constantly curious and committed to learning, evolving, and contributing to impactful and inventive digital solutions .";
    const target = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            target.innerHTML += text[index]; 
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    // Delay typing effect by 1 seconds (9000ms)
    setTimeout(typeEffect, 1000);
});

// open social media 

let linkedin=()=>{
    let lin=open('https://www.linkedin.com/in/dakshin-raj-362a96251/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank')
}

let instagram=()=>{
    let insta=open('https://www.instagram.com/dakshin5345?igsh=aHE3Y3U2bHc3a2Zi','_blank')
}

let github=()=>{
    let gitt=open('https://github.com/DAKSHINRAJ-S','_blank')
}


// send mail 
let email=()=>{
    window.location.href = "mailto:dakshinraj135@gmail.com?subject=Hello!!&body=Hi Dakshinraj,";
}

// download resume 
let download=()=>{
        window.location.href = 'http://drive.usercontent.google.com/u/0/uc?id=1rO9KyDL1tqaqrvArfvzsEb1PBgmiTjhs&export=download';
}

// scrolling section 
// about scroll
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".about").addEventListener("click", function () {
        document.getElementById("About-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#about").addEventListener("click", function () {
        document.getElementById("About-page").scrollIntoView({ behavior: "smooth" });
    });
});
// education scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".education").addEventListener("click", function () {
        document.getElementById("Education-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#education").addEventListener("click", function () {
        document.getElementById("Education-page").scrollIntoView({ behavior: "smooth" });
    });
    
});

// skillscroll
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".skills").addEventListener("click", function () {
        document.getElementById("Skills-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#skill").addEventListener("click", function () {
        document.getElementById("Skills-page").scrollIntoView({ behavior: "smooth" });
    });
});
// project scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".project").addEventListener("click", function () {
        document.getElementById("Projects-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#project").addEventListener("click", function () {
        document.getElementById("Projects-page").scrollIntoView({ behavior: "smooth" });
    });
});
// contact scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#contact").addEventListener("click", function () {
        document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
    });
});
// scroll homr 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".home").addEventListener("click", function () {
        document.querySelector("#main").scrollIntoView({ behavior: "smooth" });
    });
});



// skill

function showDialog(text) {
    document.getElementById('dialogue-box').innerText = text;
    document.getElementById('dialogue-box').style.display = 'block';
    document.querySelector('.skills-container').style.animationPlayState = 'paused';
}

function hideDialog() {
    document.getElementById('dialogue-box').style.display = 'none';
    document.querySelector('.skills-container').style.animationPlayState = 'running';
}

// project page 
        const container = document.querySelector('.projects-container');
        const scrollLeft = document.getElementById('scroll-left');
        const scrollRight = document.getElementById('scroll-right');

        scrollLeft.addEventListener('click', () => {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRight.addEventListener('click', () => {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });



        // for contact page 
        const d = new Date();
        let year = d.getFullYear();
        document.getElementById("date").innerHTML = year;

        document.getElementById('contactForm').addEventListener('submit', function (event) {
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
            const successMessage = document.getElementById('successMessage');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                emailError.style.display = 'block';
                successMessage.style.display = 'none';
                event.preventDefault(); // Prevent form submission on error
            } else {
                emailError.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });
