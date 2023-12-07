import { Router } from "./router";

const router = new Router();

router.add("/", "/Pages/Home.html");
router.add("/About", "/Pages/About.html");
router.add("/Contact", "/Pages/Contact.html");
router.add("/404", "/Pages/404.html");

router.handle();
window.onpopstate = () => router.handle();
window.router = () => router.route();
