import { createBrowserRouter } from "react-router-dom";
import CombinationsPage from "./pages/CombinationsPage";
import FactsPage from "./pages/FactsPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HistoryPage from "./pages/HistoryPage";
import Beans from "./pages/Beans";
import BeanPage from "./pages/Bean";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import About from "./pages/About";
import RecipesPage from "./pages/RecipesPage";


const router = createBrowserRouter([
    {
      path: 'JellyBeansProject',
      element: <Layout />,
      loader: Loader,
      children: [
        { index: true, element: <Home /> },
        { path: 'facts', element: <FactsPage /> },
        { path: 'history', element: <HistoryPage /> },
        { path: 'beans', element: <Beans /> },
        { path: 'bean/:beanId', element: <BeanPage /> },
        { path: 'recipes', element: <RecipesPage /> },
        { path: 'combinations', element: <CombinationsPage /> },
        { path: 'about', element: <About /> },
        { path: 'review', element: <Review /> },
        { path: "*", element: <NotFound /> },
      ],
    },
]);

export default router;