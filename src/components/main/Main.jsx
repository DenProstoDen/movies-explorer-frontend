import AboutProject from "./AboutProject/AboutProject";
import AboutTechs from "./Tech/Tech";
import AboutMe from "./AboutMe/AboutMe";
import PromoProject from "./Promo/Promo";
import ScrollToUp from "../ScrollUp/ScrollUp";


export default function Main() {
    return (
        <main>
            <ScrollToUp />
            <PromoProject/>
            <AboutProject />
            <AboutTechs />
            <AboutMe />
        </main>
    )
}