import Portfolio from "../Portfolio/Portfolio";
import profileImg from "../../../images/photo.jpg"
function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <div className="text-head">Студент</div>
            <div className="aboutMe__info">
                <div className="aboutMe__profile">
                    <h2 className="aboutMe__title">Денис</h2>
                    <p className="aboutMe__subtitle">Фронтенд-разработчик, 21 год</p>
                    <p className="aboutMe__caption">
                    Всем привет, меня зовут Денис, я родился в Пскове, а сейчас живу в Тбилиси.
                    Со школы я мечтал заняться кодингом, по этому начал проходить курсы Web-разработки.
                    Нигде особо пока не работал, но надеюсь буду работаь по спциальности web или frontend разработки.
                    Люблю котиков, а также имею 2 котов, которые помогают расслабляться после учебы.
                    </p>
                    <a className="aboutMe__link link"
                       href="https://github.com/DenProstoDen"
                       rel="noreferrer"
                       target="_blank">GitHub</a>
                </div>
                <img className="aboutMe__pic" src={profileImg} alt="фото"/>
            </div>
            <Portfolio/>
        </section>
    )
}

export default AboutMe