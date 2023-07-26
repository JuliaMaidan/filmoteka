import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import MoviesByGenre from '../pages/MoviesByGenre';
import AboutMovie from '../pages/AboutMovie';

const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const Search = lazy(() => import('../pages/Search'));
const Favorite = lazy(() => import('../pages/Favorite'));
const MyList = lazy(() => import('../pages/MyList'));

const App = () => {
  return (
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
  );
};

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />}>
//           <Route path="/movies/:category" element={<MoviesByGenre />} />
//         </Route>
//         <Route path="/movie/:id" element={<AboutMovie />} />
//         <Route path="/favorite" element={<Favorite />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/watchlist" element={<MyList />} />
//       </Route>
//     </Routes>
//   );
// };

export default App;
