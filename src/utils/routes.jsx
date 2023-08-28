import AboutPage from "../components/Pages/AboutPage/AboutPage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import GalleryPage from "../components/Pages/GalleryPage/GalleryPage";
import HomePage from "../components/Pages/HomePage/HomePage";
import LocationPage from "../components/Pages/LocationPage/LocationPage";
import MenuPage from "../components/Pages/MenuPage/MenuPage";
import ReservationPage from "../components/Pages/ReservationPage/ReservationPage";
import StyleGuide from "../components/Pages/StyleGuidePage/StyleGuide";

const routes = {
  home: {
    path: "/",
    element: <HomePage />,
    name: "home",
    includeInNav: true,
  },
  about: {
    path: "/about",
    element: <AboutPage />,
    name: "about",
    includeInNav: true,
  },
  menu: {
    path: "/menu",
    element: <MenuPage />,
    name: "menu",
    includeInNav: true,
  },
  gallery: {
    path: "/gallery",
    element: <GalleryPage />,
    name: "gallery",
    includeInNav: true,
  },
  reservations: {
    path: "/reservations",
    element: <ReservationPage />,
    name: "reservations",
    includeInNav: true,
  },
  location: {
    path: "/location",
    element: <LocationPage />,
    name: "location",
    includeInNav: true,
  },
  styleGuide: {
    path: "/styleGuide",
    element: <StyleGuide />,
    name: "styleGuide",
    includeInNav: false,
  },
  errorPage: {
    path: "/styleGuide",
    element: <ErrorPage />,
    name: "errorPage",
    includeInNav: false,
  },
};

export default routes;
