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
 var navText = ["Početna",
                 "Kontakt"]
var navDiv = `<div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0 color-primary">`;
for(let i in navLinks){
    navDiv += `<a href="${navLinks[i]}" class="nav-item nav-link ${i==1?`active`:``}">${navText[i]}</a>`
}
navDiv += `</div></div>
            <a href="autor.html" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Autor<i class="fa fa-arrow-right ms-3"></i></a>
        </div>`;
nav.innerHTML += navDiv;

// Uvod
var contactIntro = document.getElementById("contactIntro");
var h1intro = document.createElement("h1");
h1intro.classList.add('display-3', 'text-white', 'mb-3', 'animated', 'slideInDown');
h1intro.textContent='Kontakt';
contactIntro.appendChild(h1intro)

var arrContact = document.getElementById("arrayContact");
var capText = ["Pozivom na fiksni",
                "Pozivom na telefon",
                "ili kroz popunjavanjem forme"]
var info = ["+030 428 555",
                "+381 62 345 6789",
                "Odmah ispod bloka"]
for(let i in capText){
    arrContact.innerHTML+=`<div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 class="text-capitalize"> // ${capText[i]} // </h5>
                                    <p class="m-0"><i class="${i!=2?`fa fa-phone-alt`:`fa fa-envelope-open`} text-primary me-2"></i>${info[i]}</p>
                                </div>
                            </div>`
}

// Zakazivanje Termina
var advice = document.getElementById("advice");
var h6advice = document.createElement("h6");
h6advice.classList.add('text-primary', 'text-uppercase');
h6advice.textContent='// Zakažite Termin //';
advice.appendChild(h6advice)
var h1advice = document.createElement("h1");
h1advice.classList.add('mb-5',);
h1advice.textContent='Možete da zakažete termin...';
advice.appendChild(h1advice)


//Dinamički ispis prvih 6 upita
var inputs = document.getElementById("inputs");
var inputTextContent = ["Vaše Ime",
                        "Vaše Prezime",
                        "E-Mail Adresa",
                        "Telefon",
                        "Marka",
                        "Model"
]
var inputLabels = ["Fname",
                    "Lname",
                    "email",
                    "phone",
                    "brand",
                    "model"
]
for(let i in inputTextContent){
    inputs.innerHTML += `<div class="${i < 2 ? `col-md-6`: i >= 2 && i < 4 ? `col-md-12` : `col-md-4`}">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="${inputLabels[i]}" placeholder="${inputTextContent[i]}">
                                <label for="${inputLabels[i]}">${inputTextContent[i]}</label>
                            </div>
                            <span id="${inputLabels[i]}Err" class="text-danger" style="display: none;"></span>
                        </div>`
}
//input za gorivo
inputs.innerHTML +=`<div class="col-md-4">
                        <div class="form-floating">
                            <select id="gorivo" name="gorivo" class="w-100 h-100 p-3">

                            </select>
                        </div>
                        <span id="fuelErr" class="text-danger" style="display: none;"></span>
                    </div>`
var fuel = document.getElementById("gorivo")
var fuelValue = ["0",
                 "benzin",
                 "dizel",
                 "hibrid",
                 "elektricni",
                 "bTNG",
                 "bCNG",]
var fuelText = ["Vrsta Goriva:",
    "Benzin",
    "Dizel",
    "Benzin + Gas",
    "Benzin + Metan",
    "Električni Pogon",
    "Hibridni Pogon",]
for(let i in fuelValue){
    fuel.innerHTML += `<option value="${fuelValue[i]}" ${i==0 ? `selected` : ``}>${fuelText[i]}</option>`
}

// input Registarske tablice
inputs.innerHTML += `<div class="col-md-12">
                        <div class="form-floating" id="rgTab">
                                        
                        </div>
                        <span id="regTabErr" class="text-danger"></span>
                    </div>`
var regTab = document.getElementById("rgTab");
var RTtext = document.createElement("input");
RTtext.type = "text";
RTtext.classList.add('form-control');
RTtext.id = "regTablice";
RTtext.placeholder = "Registarske Tablice";
regTab.appendChild(RTtext);
var RTlabel = document.createElement("label");
RTlabel.for = "regTablice";
RTlabel.textContent = "Registarske Tablice"
regTab.appendChild(RTlabel);

// CheckBox usluge
inputs.innerHTML += `<div class="col-md-12 h-auto">
                        <h4 class="text-md-center">Usluge:</h4>
                        <div class="form-floating col-md-12 d-flex flex-column flex-md-row flex-wrap h-auto" id="service">

                        </div>
                        <span id="serviceErr" class="text-danger" style="display: none;"></span>
                    </div>
                    <p id="info" class="col-md-12 text-success">
                    </p>`
var service = document.getElementById("service");
var serviceText = [
                    "Mali Servis",
                    "Veliki Servis",
                    "Auto Dijagnostika",
                    "Vulkanizerska"
]
var serviceValue = [
    "maliServis",
    "velikiServis",
    "autoDijagnostika",
    "vulkanizerska"
]
for(let i in serviceValue){
    service.innerHTML += `<div class="col-6 col-md-3">
                    <input type="checkbox" name="usluge" id="${serviceValue[i]}">
                    <label for="${serviceValue[i]}">${serviceText[i]}</label>
                    </div>`
}

// Dugme
inputs.innerHTML += `<div class="col-12" id="btn">
                    </div> `
var btn = document.getElementById("btn");
var button = document.createElement("button");
button.setAttribute('id', 'formButton')
button.classList.add('btn','btn-primary','w-100','py-3');
button.type = "button";
button.textContent = "Pošaljite poruku"
btn.appendChild(button);


// RegEx
var RegExFirstName = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,14}$/
var RegExLastName = /^[A-ZŠĐŽČĆ][a-zšđžčć]{4,17}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{4,17})?$/
var regExEmail = /^[^\.][^,\s]{3,24}[^\.](@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/
var regExBrand = /^[A-ZŠ][\w]{1,11}((\s|-)[\w]{2,8})?$/
var regExModel = /^[A-Z][\w\d]{1,19}$/     
var regExPhone = /^\+381\s(6[012345689]|67[78])\s[\d]{3,4}\s[\d]{3}$/
var regExRegTablice = /^[A-ZŠĐŽČĆ]{2}-([\d]{3,5}-[A-ZŠĐŽČĆ]{2}|[A-ZŠĐŽČĆ]{3,5})$/

//Elementi Forme
var fname = document.getElementById("Fname");
var lname = document.getElementById("Lname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
var fuel = document.forma.gorivo;
var regTablice = document.getElementById("regTablice");
var services = document.forma.usluge;
var formButton = document.getElementById("formButton")

// model će bude uključen kad prođe validaciju za brand/marku
// Validacija grešaka
var chBoxValidation = false;
formButton.addEventListener("click", function(){
    //Ime
    let FnameErr = document.getElementById("FnameErr");
    if(RegExFirstName.test(fname.value)){
        FnameErr.style.display = "none";
    }
    else{
        FnameErr.style.display = "block";
        FnameErr.textContent = `Nepravilno ime. Mora početi s velikim slovom, bez razmaka, bez broja
        i max. 14 slova.`
        
    }
    //Prezime
    let LnameErr = document.getElementById("LnameErr");
    if(RegExLastName.test(lname.value)){
        LnameErr.style.display = "none";
    }
    else{
        LnameErr.style.display = "block";
        LnameErr.textContent = `Nepravilno prezime. Mora početi s velikim slovom, mora postojati razmak u slučaju unosa dva prezimena, bez broja
        i max. 14 slova.`
        
    }
    //Email
    let emailErr = document.getElementById("emailErr");
    if(regExEmail.test(email.value)){
        emailErr.style.display = "none";
    }
    else{
        emailErr.style.display = "block";
        emailErr.textContent = `Nepravilna Email adresa. Proveriti korisničko ime i da li je prihvatljiv domen, primeri domena: "@gmail.com", "@yahoo.com", "@ict.edu.rs"`
        
    }
    //Telefon
    let phoneErr = document.getElementById("phoneErr");
    if(regExPhone.test(phone.value)){
        phoneErr.style.display = "none";
    }
    else{
        phoneErr.style.display = "block";
        phoneErr.textContent = `Nepravilan broj telefona. Primeri: +381 (60-69) 123/1234 567, +381 67(7/8) 123/1234 567`
    }
    //Marka
    let brandErr = document.getElementById("brandErr");
    if(regExBrand.test(brand.value)){
        model.disabled = false;
        brandErr.style.display = "none";
    }
    else{
        brandErr.style.display = "block";
        brandErr.textContent = `Nepravillno ime marke vozila.`
    }
    //Model
    let modelErr = document.getElementById("modelErr");
    if(regExModel.test(model.value)){
        modelErr.style.display = "none";
    }
    else{
        modelErr.style.display = "block";
        modelErr.textContent = `Prazno ili nepravillno ime modela vozila.`
    }
    //Gorivo
    if(gorivo.options.selectedIndex){
        fuelErr.style.display = "none";
    }
    else{
        fuelErr.style.display = "block";
        fuelErr.textContent = `Odaberite vrstu goriva.`
    }
    //Reg Tablice
    let regTabErr = document.getElementById("regTabErr")
    if(regExRegTablice.test(regTablice.value)){
        regTabErr.style.display = "none";
    }
    else{
        regTabErr.style.display = "block";
        regTabErr.textContent = `Nepravilno uneta registarska tablica. Primer: BG-2005-GH, ako imate custom tablice: [Grad]-[3-5 slova]`
    }
    // Usluge
    let serviceErr = document.getElementById("serviceErr")
    for(let i in services){
        if(services[i].checked){
            serviceErr.style.display = "none";
            chBoxValidation = true;
            break;
        }
        else{
            serviceErr.style.display = "block";
            serviceErr.textContent = `Morate odabrati bar jednu uslugu.`
            chBoxValidation = false;
        }
    }

    //Ako je svako polje korektno popunjeno
    if(RegExFirstName.test(fname.value) && 
    RegExLastName.test(lname.value) &&
    regExEmail.test(email.value) &&
    regExPhone.test(phone.value) &&
    regExBrand.test(brand.value) &&
    regExModel.test(model.value) &&
    gorivo.options.selectedIndex &&
    regExRegTablice.test(regTablice.value) &&
    chBoxValidation){
        fname.disabled = true;
        lname.disabled = true;
        email.disabled = true;
        phone.disabled = true;
        brand.disabled = true;
        model.disabled = true;
        gorivo.disabled = true;
        regTablice.disabled = true;
        for(let i in services){
            services[i].disabled = true;
            }
        var info = document.getElementById("info")
        info.textContent = `Vaša forma je uspešno prosleđena! Informacije o terminu i ukupnoj ceni usluga ćete
            dobiti putem E-Mail adrese koju ste uneli u ovaj formular.`
    }
})


// Zabrana unosa Modela vozila, ako je Marka prazna ili neispravna
brand.addEventListener("blur",function(){
    if(regExBrand.test(brand.value)){
        model.disabled = false;
    }
    else{
        model.disabled = true;
        model.value = ""
    }
})


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


// template jQuery
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

