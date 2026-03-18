import {createBrowserRouter} from "react-router-dom";
import {MovieDetailsPage} from "../pages/MovieDetailsPage";
import {MainLayout} from "../layout/MainLayout";
import {MoviesPage} from "../pages/MoviesPage";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: "movie/:id", element: <MovieDetailsPage/>}
        ]
    }
]);