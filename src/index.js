import { loadbase } from "./home";
import { template } from "./home";

loadbase()

const mainbody = document.querySelector('body')
mainbody.appendChild(template())