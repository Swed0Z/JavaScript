import { Router } from "./router"; 
 const router = new Router()
 router.add("/","/Pages/Home.html")
 router.add("/About","/Pages/About.html")
 router.add("/Contact","/Pages/Contact.html")
 router.add(404,"/Pages/404.html")
 
 /*const routes={
    "/":"/Pages/Home.html",
    "/About": "/Pages/About.html",
    "/Contact": "/Pages/Contact.html",
    404: "/Pages/404.html",
}

handle();
window.onpopstate = () =>handle()*/