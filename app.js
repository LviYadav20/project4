// ========================================
// Freelancer Marketplace - app.js
// ========================================

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// ========================================
// Sticky Header
// ========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,.08)";
    }
});

// ========================================
// Search Button
// ========================================

const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {

        if (searchInput.value.trim() == "") {
            alert("Please enter a skill.");
            return;
        }

        alert("Searching for: " + searchInput.value);

    });
}

// ========================================
// Newsletter
// ========================================

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

// ========================================
// FAQ Accordion
// ========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const p = item.querySelector("p");

    p.style.display="none";

    item.addEventListener("click",()=>{

        if(p.style.display==="block"){

            p.style.display="none";

        }else{

            faqItems.forEach(i=>{

                i.querySelector("p").style.display="none";

            });

            p.style.display="block";

        }

    });

});

// ========================================
// Counter Animation
// ========================================

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/100;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}
else{

counter.innerText=target+"+";

}

}

update();

});

// ========================================
// Scroll Animation
// ========================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ========================================
// Back To Top Button
// ========================================

const topBtn=document.createElement("div");

topBtn.className="back-top";

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}
else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ========================================
// Dark Mode
// ========================================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";
darkBtn.style.bottom="90px";
darkBtn.style.right="25px";
darkBtn.style.width="50px";
darkBtn.style.height="50px";
darkBtn.style.borderRadius="50%";
darkBtn.style.border="none";
darkBtn.style.cursor="pointer";
darkBtn.style.background="#2563eb";
darkBtn.style.color="#fff";
darkBtn.style.fontSize="20px";
darkBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️";

}
else{

darkBtn.innerHTML="🌙";

}

};

// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ========================================
// Active Navigation
// ========================================

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

// ========================================
// Freelancer Card Hover
// ========================================

const cards=document.querySelectorAll(".freelancer-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ========================================
// Project Apply Button
// ========================================

const applyBtns=document.querySelectorAll(".project-btn");

applyBtns.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

alert("Application submitted successfully!");

});

});

// ========================================
// CTA Button
// ========================================

const cta=document.querySelector(".cta-btn");

if(cta){

cta.addEventListener("click",()=>{

alert("Welcome to FreelanceHub!");

});

}

// ========================================
// Footer Year
// ========================================

const copy=document.querySelector(".copyright p");

if(copy){

const year=new Date().getFullYear();

copy.innerHTML="© "+year+" FreelanceHub. All Rights Reserved.";

}

console.log("FreelanceHub Loaded Successfully");