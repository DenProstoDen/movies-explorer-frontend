import {useState} from "react";

export default function ScrollUp() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(scrollTop > 0);
    };

    const scrollTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollAnimation = window.requestAnimationFrame(scrollTop);

        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            window.cancelAnimationFrame(scrollAnimation);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            {visible && (
                <p id="scrollUpBtn" onClick={scrollTop} className="scrollUp">Наверх</p>
            )}
        </>
    )
}