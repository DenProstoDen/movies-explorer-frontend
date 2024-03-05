import profileImg from ""
import Portfolio from "../Portfolio/Portfolio";
function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <div className="text-head">Студент</div>
            <div className="aboutMe__info">
                <div className="aboutMe__profile">
                    <h2 className="aboutMe__title">Денис</h2>
                    <p className="aboutMe__subtitle">Фронтенд-разработчик, 21 год</p>
                    <p className="aboutMe__caption">
                        .........................................................
                        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
                        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
                        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
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