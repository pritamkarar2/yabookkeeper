var pages = {
    "": "Home",
    "about": "About",
    "service": "Services",
    "solution": "Solutions",
    "contact": "Contact Us"
};

var host = window.location;
console.log(host.pathname);

var isProduction = (host.hostname != '127.0.0.1' && host.hostname != 'localhost' && host.hostname != '0.0.0.0');
var page = '';
$.each(pages, function (key, val) {
    var isActive = (host.pathname == ('/' + key));
    page += `<li class="nav-item"><a class="nav-link` + (isActive ? ' active" aria-current="page"' : '"') + ` href="./` + key + ((isProduction || val == "Home") ? '' : '.html') + `">` + val + `</a></li>`;
});

var pageLinks = `<ul class="navbar-nav ms-auto">` + page + `</ul>`;
var nav = document.getElementById("navbarNav");
nav.innerHTML = pageLinks;