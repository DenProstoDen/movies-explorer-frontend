import PromoProject from "../main/Promo/Promo";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import AboutProject from "../main/AboutProject/AboutProject";
import AboutTechs from "../main/Tech/Tech";
import AboutMe from "../main/AboutMe/AboutMe";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Header from "../header/Header";
import {useState} from "react";
import NotFound from "../notFound/NotFound";
import Register from "../auth/Register";
import Auth from "../auth/Login";
import Profile from "../profile/Profile";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import constantFilm from "../../utils/constant";
import burgerPopup from "../burgerPopup/burgerPopup";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function App() {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isBurgerMenu, setIsBurgerMenu] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isInfoToolTip, setIsInfoToolTip] = useState(false)

    const [user, setUser] = useState({name: "Den", email: 'Den@mail.ru'})
    const [movies, setMovies] = useState(constantFilm)
    const [savedMovies, setSavedMovies] = useState(constantFilm.slice(0, 3))

    function handleRegister() {
        setIsLoggedIn(true)
        setIsInfoToolTip(true)
        setIsSuccess(true)
        navigate('/signin', {replace: true})
    }
    function handleLogin() {
        setIsLoggedIn(true)
        setIsInfoToolTip(true)
        setIsSuccess(true)
        navigate('/')
    }

    function handleUpdateProfile() {
        setIsInfoToolTip(true)
        setIsSuccess(true)
        setUser(user)
        navigate('/profile')
    }

    function handleLogOut() {
        setIsLoggedIn(false)
        navigate('/')
    }

    function handleOpenBurger() {
        setIsBurgerMenu(true)
    }

    function handleClosePopup() {
        setIsBurgerMenu(false)
        setIsInfoToolTip(false)
    }

    return (
      <>
          <Header auth={isLoggedIn} openBurger={handleOpenBurger} />

          <Routes>
              <Route path="/"
                     element={<Main/>} />
              <Route path="/signup"
                     element={<Register onRegister={handleRegister}/>}/>
              <Route path="/signin"
                     element={<Auth onRegister={handleLogin}/>}/>
              <Route path="/profile"
                     element={ <Profile user={user}
                  onUpdateUser={handleUpdateProfile}
                  logout={handleLogOut}/>}/>
              <Route path="/movies"
                     element={<Movies moviesList={movies} isLoading={isLoading}/>}/>
              <Route path="/saved-movies"
                     element={<SavedMovies moviesList={savedMovies}/>}/>
              <Route path="*"
                     element={<NotFound/>} />
          </Routes>

          <Footer/>

          <burgerPopup
              isOpen={isBurgerMenu}
              onClose={handleClosePopup}
          />

          <InfoToolTip
              isSuccess={ isSuccess }
              isOpen={ isInfoToolTip }
              onClose={ handleClosePopup }
          />
      </>
  )
}

export default App;