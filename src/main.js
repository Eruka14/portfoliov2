import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/work.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/mobilemenu.css";
import "./styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import lazyLoading from "./utils/lazy-loading";
import animate from "./utils/animation";

mobileNav();
darkMode();
lazyLoading();
animate();
