import ButtonMore from "../MoreButton/MoreButton";
import MoviesCard from "../movieCard/movieCard";
import {useState} from "react";
import Preloader from "../Preloader/Preloader";

export default function MovieList({moviesList, isLoading}) {

    const [countMovies, setCountMovies] = useState(6)

    function loadMore() {
        setCountMovies(count => count + 6);
    }

    return (
        <section className="movie">
            {isLoading ? <Preloader/> : (
                <>
                    <ul className="movie__list">
                        {moviesList.slice(0, countMovies).map((movie) => (
                            <MoviesCard
                                movie={movie}
                                key={movie.id}/>
                        ))}
                    </ul>
                    {countMovies < moviesList.length ? (
                        <ButtonMore handleMoreLoad={loadMore}/>) : null}
                </>
            )}
        </section>
    )
}