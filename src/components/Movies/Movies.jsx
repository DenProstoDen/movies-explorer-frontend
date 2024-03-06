import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MovieList/MovieList";

export default function Movies({moviesList, isLoading}) {
    return (
        <section>
            <SearchForm/>
            <MoviesCardList moviesList={moviesList} isLoading={isLoading}/>
        </section>
    )
}