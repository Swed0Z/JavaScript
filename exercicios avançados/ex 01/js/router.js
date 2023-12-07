export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = this.routes
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle();
    }
    handle() {
        const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
            .then(response => response.text())
            .then(html => {
                window.document.querySelector('#APP').innerHTML = html;
            });
    }
}