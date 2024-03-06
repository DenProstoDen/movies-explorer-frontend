import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MovieList/MovieList";

export default function SavedMovies({moviesList}) {
    return (
        <section>
            <SearchForm/>
            <MoviesCardList moviesList={moviesList}/>
        </section>
    )
}