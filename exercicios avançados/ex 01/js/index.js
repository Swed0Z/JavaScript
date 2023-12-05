const routes={
    "/":"/Pages/Home.html",
    "/About": "/Pages/About.html",
    "/Contact": "/Pages/Contact.html",
    404: "/Pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle();
}

function handle() {
    const pathname = window.location.pathname
    const route = routes[pathname] || routes[404]

    fetch(route)
        .then(response => response.text())
        .then(html => {
            window.document.querySelector('#APP').innerHTML = html;
        });
}

handle();
window.onpopstate = () =>handle()