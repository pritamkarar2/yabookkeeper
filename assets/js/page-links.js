const pageList = {
    "": "Home",
    "about": "About Us",
    "service": "Services",
    "solution": "Solutions",
    "contact": "Contact Us"
};

const host = window.location; const hostname = host.hostname;
const isProduction = (hostname != '127.0.0.1' && hostname != 'localhost' && hostname != '0.0.0.0');
let pages = '';
$.each(pageList, function (slug, name) {
    const isActive = (host.pathname == ('/' + slug));
    pages += `<li class="nav-item"><a class="nav-link` + (isActive ? ' active" aria-current="page"' : '"') + ` href="./` + slug + ((isProduction || name == "Home") ? '' : '.html') + `">` + name + `</a></li>`;
});
document.getElementById("navbarNav").innerHTML = `<ul class="navbar-nav ms-auto">` + pages + `</ul>`;