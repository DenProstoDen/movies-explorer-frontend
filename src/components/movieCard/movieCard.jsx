import {useLocation} from "react-router-dom";
import {useState} from "react";

export default function MovieCard({movie}) {
    const location = useLocation()
    const path = location.pathname

    const [buttonSave, setButtonSave] = useState(false)
    const buttonToggleClassName = `movie__button ${buttonSave ? "movie__button_saved" : ''}`

    const time = Math.floor(movie.duration / 60)
    const minutes = movie.duration % 60

    function toggleButton() {
        setButtonSave(!buttonSave)
    }
    
    return (
        <li className="movie__item">
            <img className="movie__image" alt="постер к фильму" src={movie.image}/>
            {path === "/saved-movies" ? (
                <button className="movie__button movie__button_delete"/>
            ) : (
                <button type="button" className={ buttonToggleClassName } onClick={toggleButton}>
                    {!buttonSave ? "Сохранить" : ''}
                </button>
            )}
            <div className="movie__content">
                <h2 className="movie__title">{movie.name}</h2>
                <p className="movie__duration">{`"${time}ч ${minutes}м"`}</p>
            </div>
        </li>
    )
}