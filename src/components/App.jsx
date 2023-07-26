import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import MoviesByGenre from '../pages/MoviesByGenre';
import AboutMovie from '../pages/AboutMovie';

// const Register = lazy(() => import("../pages/Registration"));
// const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const Search = lazy(() => import('../pages/Search'));
const Favorite = lazy(() => import('../pages/Favorite'));
const MyList = lazy(() => import('../pages/MyList'));
// const MoviesByGenre = lazy(() => import("../pages/MoviesByGenre"));
// const AboutMovie = lazy(() => import("../pages/AboutMovie"));

const App = () => {
  return (
    <>
      {/* {isRefreshing && <Loader />}
      {isLoading && <Loader />} */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="/movies/:category" element={<MoviesByGenre />} />
          </Route>
          <Route path="/movie/:id" element={<AboutMovie />}></Route>
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<MyList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import ProfilePage from "../pages/ProfilePage";

// const App = () => {
//   const { isLoading, isAuthenticated, loginWithRedirect, logout, user } =
//     useAuth0();

//   useEffect(() => {
//     // Виконується при завантаженні компонента App
//     // Можна реалізувати додаткову логіку, якщо потрібно
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
