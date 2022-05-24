let save;
let lang = window.location.hash;
function recordData(response) {
    if(!sessionStorage.getItem("autosave")){
    if (response.country == "UA") {
        changeClass("#uk");
        show(lang);
    } else if (response.country == "RU") {
        changeClass("#ru");
        show(lang);
    } else {
        changeClass("#en");
        show(lang);
    }
} else {
    save = sessionStorage.getItem("autosave");
    location.href = window.location.pathname + "#" + save;
    $(".language__item").removeClass('active');
    $(`a[href='#${save}']`).parent().addClass("active");
    document.querySelector("html").setAttribute("lang", `${save}`);
    show(save);
}
};
$(".language__item").click(function () {
    $(".language__item").removeClass('active');
    $(this).addClass("active");
    setTimeout(function () {
        let changeLang = window.location.hash.substr(1);
        save = sessionStorage.setItem("autosave", changeLang);
        document.querySelector("html").setAttribute("lang", `${changeLang}`);
        show(changeLang);
    }, 0)
});

function changeClass(value){
    $(".language__item").removeClass('active');
    $(`a[href='${value}']`).parent().addClass("active");
    location.href = window.location.pathname + value;
    lang = value.substr(1);
    document.querySelector("html").setAttribute("lang", value);
}

function show(lang) {
    for (let key in data) {
        let elem = document.querySelector(".lang-" + key);
        if (elem) {
            if (lang == 'UNDEFINED') alert("ERROR");
            elem.innerHTML = data[key][lang];
        }
    }
}

let i = 0;
const step = 4;
let showElement = 3;
let nextElement = showElement + step;
document.querySelector(".more__products").addEventListener("click", function () {
    let products = document.querySelectorAll(".product");
    if(nextElement > products.length) nextElement = products.length;
    while (products) {
        if (i == products.length) {
            document.querySelector(".more__products").style.display = "none";
            return;
        }
        if (i > nextElement) {
            nextElement = showElement + step;
            break;
        }
        if (i > showElement) {
            showElement++;
            products[i].style.display = "block";
        }
        i++;
    }
    event.preventDefault();
});

const hamburger = document.querySelector(".hamburger__button");
hamburger.onclick = function(){
    this.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
}
