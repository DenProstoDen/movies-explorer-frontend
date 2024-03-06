import AboutProject from "./AboutProject/AboutProject";
import AboutTechs from "./Tech/Tech";
import AboutMe from "./AboutMe/AboutMe";
import PromoProject from "./Promo/Promo";


export default function Main() {
    return (
        <main>
            <PromoProject/>
            <AboutProject />
            <AboutTechs />
            <AboutMe />
        </main>
    )
}