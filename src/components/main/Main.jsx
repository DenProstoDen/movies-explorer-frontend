import AboutProject from "./AboutProject/AboutProject";
import AboutTechs from "./Tech/Tech";
import AboutMe from "./AboutMe/AboutMe";
import Promo from "./Promo/Promo";


export default function Main() {
    return (
        <main>
            <Promo/>
            <AboutProject />
            <AboutTechs />
            <AboutMe />
        </main>
    )
}