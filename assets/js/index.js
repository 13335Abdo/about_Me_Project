var trans = document.querySelector(".trans")
var lightButton = document.getElementById("theme-toggle-button")
var toggle = document.getElementById("settings-toggle")
var sider = document.getElementById("settings-sidebar")
var close = document.getElementById("close-settings")
var fff = Array.from(document.querySelectorAll(".fff"))
var font = Array.from(document.querySelectorAll(".font"))
var body = document.querySelector(".body")
var reset=document.getElementById("reset-settings")
var rocet=document.querySelector(".rocet")
var firstSection = document.getElementById("hero-section")
var secondSection = document.getElementById("about")
var thirdSection = document.getElementById("portfolio")
var fourthSection = document.getElementById("experience")
var fifthSection = document.getElementById("testimonials")
var sixthSection = document.getElementById("contact")
var skillsSection = document.getElementById("skills-section")
var statisticsSection = document.getElementById("statistics-section")
var www = Array.from (document.querySelectorAll(".www"))
var portfolioFilter = Array.from(document.querySelectorAll(".portfolio-filter"))
var portfolioItem = Array.from(document.querySelectorAll(".portfolio-item"))
var testimonialsCarousel = document.getElementById("testimonials-carousel")
var nextTestimonial = document.getElementById("next-testimonial")
var prevTestimonial = document.getElementById("prev-testimonial")
var carouselIndicator = Array.from(document.querySelectorAll(".carousel-indicator"))
var sections = [
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection
];
var x
var y = 33.333
var z = 33.333

function translateX(x)
{
    x= 0 + y;
    y+=33.333;
    if(x>100)
    {
        y=0
        x=0
    }

    return x 
}

function translateeX(x)
{
    x= 0 - z;
    z=z+33.333;
    if(x<0)
    {
        z=0
        x=100
    }

    return x 
}

for (let i = 0; i < carouselIndicator.length; i++) {

    carouselIndicator[i].addEventListener("click", function () {

        testimonialsCarousel.style.transform =
            `translateX(${i * 33.33}%)`;

        // نشيل active من الكل
        for (let j = 0; j < carouselIndicator.length; j++) {
            carouselIndicator[j].classList.remove(
                "active",
                "bg-accent",
                "scale-125"
            );
            carouselIndicator[j].classList.add(
                "bg-slate-400",
                "dark:bg-slate-600"
            );
        }

        // نضيف active للي اتضغط عليه
        this.classList.remove(
            "bg-slate-400",
            "dark:bg-slate-600"
        );
        this.classList.add(
            "active",
            "bg-accent",
            "scale-125"
        );
    });
}


nextTestimonial.addEventListener("click" , function(){
    testimonialsCarousel.style.cssText=`transform: translateX(${translateX(x)}%);`
})
prevTestimonial.addEventListener("click" , function(){
    testimonialsCarousel.style.cssText=`transform: translateX(${translateeX(x)}%);`
})

portfolioFilter[0].addEventListener("click" , function() {
    for(var i=0 ; i<portfolioItem.length ;i++)
    {
        portfolioItem[i].style.cssText="opacity: 1; transform: scale(1); display: block;"
    }

})

portfolioFilter[1].addEventListener("click" , function() {
    for(var i=0 ; i<portfolioItem.length ;i++)
    {
        portfolioItem[i].style.cssText="opacity: 0; transform: scale(0.8); display: none;"
    }
    portfolioItem[0].style.cssText="opacity: 1; transform: scale(1); display: block;"
    portfolioItem[3].style.cssText="opacity: 1; transform: scale(1); display: block;"
    portfolioItem[6].style.cssText="opacity: 1; transform: scale(1); display: block;"
})
portfolioFilter[2].addEventListener("click" , function() {
    for(var i=0 ; i<portfolioItem.length ;i++)
    {
        portfolioItem[i].style.cssText="opacity: 0; transform: scale(0.8); display: none;"
    }
    portfolioItem[1].style.cssText="opacity: 1; transform: scale(1); display: block;"
    portfolioItem[4].style.cssText="opacity: 1; transform: scale(1); display: block;"
    portfolioItem[7].style.cssText="opacity: 1; transform: scale(1); display: block;"
})
portfolioFilter[3].addEventListener("click" , function() {
    for(var i=0 ; i<portfolioItem.length ;i++)
    {
        portfolioItem[i].style.cssText="opacity: 0; transform: scale(0.8); display: none;"
    }
    portfolioItem[8].style.cssText="opacity: 1; transform: scale(1); display: block;"
    portfolioItem[2].style.cssText="opacity: 1; transform: scale(1); display: block;"
})
portfolioFilter[4].addEventListener("click" , function() {
    for(var i=0 ; i<portfolioItem.length ;i++)
    {
        portfolioItem[i].style.cssText="opacity: 0; transform: scale(0.8); display: none;"
    }
    portfolioItem[5].style.cssText="opacity: 1; transform: scale(1); display: block;"
})






for (var i = 0; i < portfolioFilter.length; i++) {
    portfolioFilter[i].addEventListener("click", function () {
        selectBtn(this);
    });
}

window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY + 200; // offset بسيط

    for (var i = 0; i < sections.length; i++) {

        if (
            scrollPos >= sections[i].offsetTop &&
            scrollPos < sections[i].offsetTop + sections[i].offsetHeight
        ) {
            // نشيل active من الكل
            for (var j = 0; j < www.length; j++) {
                www[j].classList.remove("active");
            }

            // نضيف active للعنصر المناسب
            www[i].classList.add("active");
        }
    }
});




window.addEventListener("scroll", function () {
    if (window.scrollY > firstSection.offsetHeight) {   //new
        rocet.style.display = "block";
    } else {
        rocet.style.display = "none";
    }
});


rocet.addEventListener("click" , function (){
    window.scrollTo(0, 0);  //new one
})


reset.addEventListener("click",function(){
    if(body.classList.contains("font-cairo"))
    {
        body.classList.remove("font-cairo")
    }else if(body.classList.contains("font-alexandria"))
    {
        body.classList.remove("font-alexandria")
    }
    body.classList.add("font-tajawal")
    
    document.documentElement.style.setProperty("--color-primary", "#6366f1");
    document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
    document.documentElement.style.setProperty("--color-accent", "#ec4899");
})

font[0].addEventListener("click",function(){
    if(body.classList.contains("font-cairo"))
    {
        body.classList.remove("font-cairo")
    }else if(body.classList.contains("font-tajawal"))
    {
        body.classList.remove("font-tajawal")
    }
    body.classList.add("font-alexandria")
})



font[1].addEventListener("click",function(){
    if(body.classList.contains("font-cairo"))
    {
        body.classList.remove("font-cairo")
    }else if(body.classList.contains("font-alexandria"))
    {
        body.classList.remove("font-alexandria")
    }
    body.classList.add("font-tajawal")
})




font[2].addEventListener("click",function(){
    if(body.classList.contains("font-alexandria"))
    {
        body.classList.remove("font-alexandria")
    }else if(body.classList.contains("font-tajawal"))
    {
        body.classList.remove("font-tajawal")
    }
    body.classList.add("font-cairo")
})

lightButton.addEventListener("click", function () {
    trans.classList.toggle("dark")
})

fff[0].addEventListener("click",function(){
    document.documentElement.style.setProperty("--color-primary", "#6366f1");// new one
    document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
    document.documentElement.style.setProperty("--color-accent", "#ec4899");
})


fff[1].addEventListener("click",function(){
    
    document.documentElement.style.setProperty("--color-primary", "#ec4899");
    document.documentElement.style.setProperty("--color-secondary", "#f97316");
    document.documentElement.style.setProperty("--color-accent", "#fb923c");
    
})


fff[2].addEventListener("click",function(){
    
    document.documentElement.style.setProperty("--color-primary", "#10b981");
    document.documentElement.style.setProperty("--color-secondary", "#059669");
    document.documentElement.style.setProperty("--color-accent", "#34d399");
    
})



fff[3].addEventListener("click",function(){
    
    document.documentElement.style.setProperty("--color-primary", "#3b82f6");
    document.documentElement.style.setProperty("--color-secondary", "#06b6d4");
    document.documentElement.style.setProperty("--color-accent", "#22d3ee");
    
})


fff[4].addEventListener("click",function(){
    
    document.documentElement.style.setProperty("--color-primary", "#ef4444");
    document.documentElement.style.setProperty("--color-secondary", "#f43f5e");
    document.documentElement.style.setProperty("--color-accent", "#fb7185");
    
})


fff[5].addEventListener("click",function(){
    
    document.documentElement.style.setProperty("--color-primary", "#f59e0b");
    document.documentElement.style.setProperty("--color-secondary", "#ea580c");
    document.documentElement.style.setProperty("--color-accent", "#fbbf24");
    
})


toggle.addEventListener("click", function (x) {
    toggle.style.cssText = "right : 20rem;";
    sider.classList.remove("translate-x-full")
    x.stopPropagation();

})


close.addEventListener("click",function(){
    returnAll()
})


sider.addEventListener("click", function (e) {
    e.stopPropagation();
});



function returnAll() {
    toggle.style.cssText = "right : 0rem;";
    sider.classList.add("translate-x-full")
}

document.addEventListener("click", function () {
    returnAll()
})


function selectBtn(btn) {

    // نشيل active من الكل
    for (var j = 0; j < portfolioFilter.length; j++) {
        portfolioFilter[j].classList.remove(
            "active",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50"
        );
    }

    // نضيف active للزرار اللي اتضغط عليه
    btn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50"
    );
}