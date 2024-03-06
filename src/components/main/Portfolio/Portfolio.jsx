import arrow from "../../../images/arrow.svg"
export default function Portfolio() {
    return (
        <section className="portfolio">
            <article className="portfolio__info">
                <h2 className="portfolio__title">Портфолио</h2>
                <nav className="portfolio__navigation">
                    <a
                        href="https://github.com/DenProstoDen/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__link link portfolio__link-border">
                        <p className="portfolio__subtitle">Статичный сайт</p>
                        <img src={arrow} alt="ссылка" className="portfolio__pic"/>
                    </a>
                    <a
                        href="https://denprostoden.github.io/russian-travel/"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__link link portfolio__link-border">
                        <p className="portfolio__subtitle">Адаптивный сайт</p>
                        <img src={arrow} alt="ссылка" className="portfolio__pic"/>
                    </a>
                    <a
                        href="https://github.com/DenProstoDen/react-mesto-api-full-gha"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__link link">
                        <p className="portfolio__subtitle">Одностраничное приложение</p>
                        <img src={arrow} alt="ссылка" className="portfolio__pic"/>
                    </a>
                </nav>
            </article>
        </section>
    )
}