// Dinamičko ispisivanje Topbar-a
var topbar = document.getElementById("topbar");
var topbarText = ["Grčića Milenka 23, Voždovac, Beograd",
                  "Ponedeljak - Petak : 08.00 - 15.00"];
var topbarTextStyle = ["fa fa-map-marker-alt text-primary me-2",
                      "far fa-clock text-primary me-2"];
var topbarLinks = ["https://www.facebook.com",
                   "https://www.twitter.com",
                   "https://www.linkedin.com",
                   "https://www.instagram.com",]
var topbarLinksStyle = ["fab fa-facebook-f",
                        "fab fa-twitter",
                        "fab fa-linkedin-in",
                        "fab fa-instagram",]
var topbarStartHTML = `
                    <div class="col-lg-7 px-5 text-start">`;
var topBarStartInner = "";
for(let i in topbarText){
    topBarStartInner += `<div class="h-100 d-inline-flex align-items-center py-3 ${i%2==0?`me-3`:``}">
                            <small class="${topbarTextStyle[i]}"></small>
                            <small>${topbarText[i]}</small>
                            </div>`
}    
var topbarEndHTML = `<div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">`;
var topBarEndInner = "";
for( let i in topbarLinks){
    topBarEndInner += `<a class="btn btn-sm-square bg-white text-primary me-1" href="${topbarLinks[i]}"><i class="${topbarLinksStyle[i]}"></i></a>`
}
topBarEndInner += `</div></div></div></div>`
topbarEndHTML += topBarEndInner;
topbarStartHTML += topBarStartInner;
topbar.innerHTML += topbarStartHTML;
topbar.innerHTML += topbarEndHTML;



// Dinamičko ispisivanje Navbar-a
var nav = document.getElementById("nav");
var index = `<a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarMedic</h2>
        </a>`;
var burgerButton = `<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>`
nav.innerHTML += index;
nav.innerHTML += burgerButton;
var navLinks = ["index.html",
                "kontakt.html"]
 var navText = ["Index",
                 "Kontakt"]
var navDiv = `<div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0 color-primary">`;
for(let i in navLinks){
    navDiv += `<a href="${navLinks[i]}" class="nav-item nav-link ${i==0?`active`:``}">${navText[i]}</a>`
}
navDiv += `</div></div>
            <a href="autor.html" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Autor<i class="fa fa-arrow-right ms-3"></i></a>
        </div>`;
nav.innerHTML += navDiv;

// Dinamičko ispisvanje footer-a
var footer = document.getElementById("footer");
var footerHTML = `<div class="container py-5">
            <div class="row g-5 d-flex justify-content-md-evenly text-center">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Adresa</h4>`;
var footerAdrIcon = ["fa fa-map-marker-alt",
                    "fa fa-phone-alt",
                    "fa fa-envelope"]
var footerAdrText = ["Grčića Milenka 43, Voždovac, Beograd",
                        "+012 345 67890",
                        "bogdan.bogdanovic.8.23@ict.edu.rs"]
var footerAdrSocial = ["fab fa-twitter",
                        "fab fa-facebook-f",
                        "fab fa-youtube",
                        "fab fa-linkedin-in"]
var footerAdrSocialLink = ["https://www.twitter.com",
                        "https://www.facebook.com",
                        "https://www.youtube.com",
                        "https://www.linkedin.com"]
for(let i in footerAdrIcon){
    footerHTML += `<p class="mb-2"><i class="${footerAdrIcon[i]} me-3"></i>${footerAdrText[i]}</p>`
}
footerHTML+=`<div class="d-flex pt-2 d-flex justify-content-center">`;
for(let i in footerAdrSocial){
    footerHTML += `<a class="btn btn-outline-light btn-social" href="${footerAdrSocialLink[i]}"><i class="${footerAdrSocial[i]}"></i></a>`
}
footerHTML += `</div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Radno Vreme</h4>
                    <h6 class="text-light">Ponedeljak - Petak:</h6>
                    <p class="mb-4">08.00 - 15.00</p>
                    <h6 class="text-light">Subota:</h6>
                    <p class="mb-0">09.00 - 14.00</p>
                </div>
                <div class="col-lg-3 col-md-6" id="links">
                    

                </div>
            </div>
        </div>`;
footer.innerHTML = footerHTML;
var footerLink = document.getElementById("links")
var h4tag = document.createElement('h4');
h4tag.classList.add('text-light','mb-4');
h4tag.textContent = "Linkovi";
footerLink.appendChild(h4tag)
var footerLinks = ["index.html",
    "#kontakt",
    "autor.html",
    "dokumentacija.pdf",
    "xml/sitemap.xml"
]
var footerLinksText = ["Početna",
"Kontakt",
"Autor",
"Dokumentacija",
"Sitemap"
]
for(let i in footerLinks){
    footerLink.innerHTML += `<a class="btn btn-link" href="${footerLinks[i]}">${footerLinksText[i]}</a>`
}
var copyrightHTML = `<div class="container">
            <div class="copyright" id="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">CarMedic</a>, Sva prava zadržana.
                    </div></div></div></div></div></div></div>`
footer.innerHTML += copyrightHTML;


//Dugme za povratak na pocetak
var buttonTop = document.getElementById("btt");
var btt = document.createElement("a");
btt.setAttribute('href', '#');
btt.classList.add('btn', 'btn-lg', 'btn-primary', 'btn-lg-square', 'back-to-top');
var i = document.createElement("i");
i.classList.add('bi','bi-arrow-up');
btt.appendChild(i);
buttonTop.appendChild(btt);



// Template jQuery kodovi
(function ($) {
    "use strict";
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);