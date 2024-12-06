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
var topbarStartHTML = `<div class="col-lg-7 px-5 text-start">`;
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
topbarStartHTML += topBarStartInner;
topbarEndHTML += topBarEndInner;

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
                "#onama",
                "#usluge",
                "#klijenti",
                "kontakt.html"]
 var navText = ["Početna",
                 "O Nama",
                 "Usluge",
                 "Klijenti",
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


// Dinamičko ispisivanje sekcije O Nama
var about = document.getElementById("o-nama");
var aboutHTML = ``
var aboutHtext = [ "Garancija na rad",
                    "Vulkanizerske usluge",
                    "Prosta Elektrika",
]
var aboutText = [ "Svi naši radovi su pokriveni garancijom kako biste imali potpuni mir i sigurnost. <br/><br/> Auto nikad ne predajemo vlasniku bez prethodne provere i detaljnog testiranja.",
    "Sve vrste vulkanizerskih usluga i centriranje trapa.<br/><br/>Dvorište, parking, ispred zgrade, na ulici... Izlazimo i van grada, ako vas guma izda na putu.",
    "Auto elektrika je grana auto mehanike koja se specijalizovano bavi električnim komponentama vozila. <br/><br/>Svaki savremeni motor sastavljen je od gotovo istovetnog broja električnih kao i mehaničkih komponenti.",
]
var bullet = 1
var delay = 0.1
for(let i in aboutText){
    aboutHTML += `<div class="col-12 wow fadeIn" data-wow-delay="${delay}">
                            <div class="d-flex">
                                <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style="width: 45px; height: 45px;">
                                    <span class="fw-bold text-secondary">${(bullet)}</span>
                                </div>
                                <div class="ps-3">
                                    <h6>${aboutHtext[i]}</h6>
                                    <span>${aboutText[i]}</span>
                                </div>
                            </div>
                    </div>`
    delay++;
    bullet++;
}
aboutHTML += ``
about.innerHTML += aboutHTML;

var stats = document.getElementById("stats");
var statTag = ["fa fa-check fa-2x text-white mb-3",
                "fa fa-users-cog fa-2x text-white mb-3",
                "fa fa-users fa-2x text-white mb-3"] 
var statNumber = [15,
                  30,
                  1000,]
var statText = [ "Godina Iskustva",
                  "Iskusnih Radnika",
                  "Zadovoljnih Klijenta",]
var statHTML = `<div class="container">
            <div class="row g-4 d-flex justify-content-md-evenly">`
for(let i in statTag){
    statHTML += `<div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="${delay}">
                    <i class="${statTag[i]}"></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">${statNumber[i]}</h2>
                    <p class="text-white mb-0">${statText[i]}</p>
                </div>`
    delay++
}
statHTML += `</div></div></div>`
stats.innerHTML += statHTML;

//Dinamicko ispisvanje uskuga
var services = document.getElementById("service");
var serviceHTML = `<div class="container" id="usluge">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary text-uppercase">// Naše Usluge //</h6>
                <h1 class="mb-5">Istražite Naše Usluge</h1>
            </div>
            <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div class="col-lg-4">
                    <div class="nav w-100 nav-pills me-4">`
var serviceIcon = [ "fa fa-car-side fa-2x me-3",
                "fa fa-car fa-2x me-3",
                "fa fa-cog fa-2x me-3",
                "fa fa-oil-can fa-2x me-3"]                    
var serviceText = [ "Auto dijagnostika",
                    "Veliki Servis",
                    "Vulkanizerska Radnja",
                    "Mali Servis"]
var number = 1;
for(let i in serviceIcon){
    serviceHTML += `<button class="nav-link w-100 d-flex align-items-center text-start p-4 ${i==serviceIcon.Length - 1?`mb=0`:`mb-4`} ${i==0?`active`:``}" data-bs-toggle="pill" data-bs-target="#tab-pane-${number}" type="button">
                        <i class="${serviceIcon[i]}"></i>
                        <h4 class="m-0">${serviceText[i]}</h4>
                    </button>`
    number++;
}
serviceHTML += `</div>
                </div>
                <div class="col-lg-8">
                    <div class="tab-content w-100">`
var serviceImgSrc = [ "img/service-1.jpg",
                    "img/service-2.jpg",
                    "img/service-3.jpg",
                    "img/service-4.jpg"]
var serviceImgAlt = [ "Auto Dijagnostika",
                        "Veliki Servis",
                        "Vulkanizerska",
                        "Mali Servis"]
var serviceTitle = [ "21 Godina Auto Dijagnostike",
                        "Veliki Servis Na Svakih 60.000km",
                        "Vulkanizerska Radnja",
                        "Zašto Raditi Mali Servis"]
var serviceDesc = [ `Auto dijagnostika se vrši pomoću uređaja za auto dijagnostiku (poznat kao dijagnostički tester), koji se spaja na kompjuter u vozilu. Ova usluga omogućuje proveru ukupnog tehničkog stanja vozila, uključujući poređenje parametara vozila s idealnim parametrima. 
    <br/><br/>
    Sve je više i više automobila koji se trenutno voze na našim putevima opremljeni su kompjuterima odgovornim za pravilno funkcionisanje kompletnog Sistema i svih podsistema na vozilu. Takav kompjuter nije ništa drugo nego mehanizam koji nadgleda sve što se događa u vozilu.`,
                    `Veliki servis je zaista neophodan ukoliko ne želite da vaš sledeći set nedoumica bude o havarisanom motoru. Svakako, veliki servis je od vitalnog značaja i za bezbednost putnika. Ne treba zaboraviti da se u Srbiji skoro svakoga dana prosečno dogodi 80 saobrćajnih nesreća, a visoki procenat dolazi od neispravnosti vozila.
    <br/><br/>
    Automobili su značajan deo vaše imovine. Kao i kuću, što više održavate vaš automobil, duže će trajati i imaće veću vrednost. Ovo je svakako bitna stavka kada želite da ga prodate.`,
                    `Vulkanizerska radnja opremljena je najsavremenijim mašinama, za montažu, balansiranje i vulkaniziranje točkova.
    <br/><br/>
    Auto sevis CarMedic pruža sve vrste vulkanizerskih usluga u najkraćem mogućem roku. Pored ovih usluga vršimo i prodaju novih spoljnih i unutrašnjih guma, svih svetskih i domaćih proizvođača (Michelin, Kleber, Continental, Goodyear, Dunlop, Pirelli, BFGoodrich, Sava, Tigar, Barum i dr). Pored putničkih pneumatika u ponudi su i gume za terenska i laka dostavna vozila.`,
                    `Svi delovi i sklopovi vašeg vozila su podložni trošenju ili tokom vremena oslabi njihova funkcija ili se jednostavno zapuše tokom upotrebe. Mali servis je preventivna zamena delova pre nego što dođe do njihovog otkazivanja i time uzrokuju mnogo veće kvarove. <br/><br/> Servis je potrebno odraditi bez obzira na stanje delova. Jednostavnije je obaviti mali servis na vreme nego rizikovati da dođe do nekog većeg kvara.`]
var int = 1;
for(let i in serviceText){
    serviceHTML += `<div class="tab-pane fade${i==0?` show active`:``}" id="tab-pane-${int}">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="position-relative h-100">
                                        <img class="position-absolute img-fluid w-100 h-100" src="${serviceImgSrc[i]}"
                                            style="object-fit: cover;" alt="${serviceImgAlt[i]}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="mb-3">${serviceTitle[i]}</h3>
                                    <p class="mb-4">${serviceDesc[i]}</p>
                                </div>
                            </div>
                        </div>`
    int++
}
serviceHTML += `</div></div></div></div></div></div>`
services.innerHTML = serviceHTML;

// Dinamičko ispisvanje mišljenja
var testimonial = document.getElementById("klijenti");
var testimonialHTML = ` <div class="container">
            <div class="text-center">
                <h6 class="text-primary text-uppercase">// Klijenti //</h6>
                <h1 class="mb-5">Šta naši klijenti kažu</h1>
            </div>
            <div class="owl-carousel testimonial-carousel position-relative">`;
var testimonialPicture = ["img/testimonial-1.jpg",
                "img/testimonial-2.jpg",
                "img/testimonial-3.jpg",
                "img/testimonial-4.jpg"]
var testimonialName = ["Aleksa Jovanović",
                    "Jelena Kuzmanović",
                    "Nikola Mitrović",
                    "Anđela Kovačević"]
var testimonialRating = `<i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>`
var testimonialComment = ["Ja sam sa CarMedic-om bas zadovoljan. Vec 11 godina kod njih teram Audi i ekipa koja radi prijem je super i uvek je bilo ispostovano sve sto se dogovorimo.",
                          "Preko osam godina samo u CarMedic i suprug i ja dovozimo kola, iako više ne živimo u Beograd. Sve pohvale",
                          "Prezadovoljna saradnjom i uslugom, sve ispostovano sto se tice dogovora, sve pohvale",
                          "Odlična saradnja, veoma ljubazno osoblje."
]
for(let i in testimonialName){
    testimonialHTML += `<div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="${testimonialPicture[i]}" style="width: 80px; height: 80px;">
                    <h5 class="mb-1">${testimonialName[i]}</h5>
                    <div class="mb-3">
                        ${testimonialRating}
                    </div>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">${testimonialComment[i]}</p>
                    </div>
                </div>`
}
testimonialHTML += `</div></div></div>`
testimonial.innerHTML = testimonialHTML;

// Dugme za kontakt.html
var contactBtn = document.getElementById("contactBtn");
contactBtn.classList.add('container','wow','fadeInUp','d-block','mx-auto')
var contactBtnLink = document.createElement('a');
contactBtnLink.classList.add('text-white')
contactBtnLink.href = "kontakt.html";
contactBtnLink.textContent = "Zakaži Termin"
var contactButton = document.createElement('button');
contactButton.type = "button";
contactButton.classList.add('btn','btn-secondary','py-2','fs-2','d-block','mx-auto');
contactButton.appendChild(contactBtnLink);
contactBtn.appendChild(contactButton);


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
    "#o-nama",
    "#usluge",
    "#klijenti",
    "kontakt.html",
    "autor.html",
    "dokumentacija.pdf",
    "xml/sitemap.xml"
]
var footerLinksText = ["Početna",
"O Nama",
"Usluge",
"Klijenti",
"Kontakt",
"Autor",
"Dokumentacija",
"Sitemap"
]
for(let i in footerLinks){
    footerLink.innerHTML += `<a class="btn btn-link text-center" href="${footerLinks[i]}">${footerLinksText[i]}</a>`
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

