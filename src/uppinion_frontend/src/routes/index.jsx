import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import EventDetailsPage from "../pages/events/EventDetailsPage";
import EventsPage from "../pages/events/EventsPage";
import CommunitiesPage from "../pages/community/CommunitiesPage";
import SavedEventsPage from "../pages/events/SavedEventsPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CommunityDetailsPage from "../pages/community/CommunityDetailsPage";

// const home = {
//   path: "/",
//   element: <HomePage />,
// };

const login = {
  path: "/login",
  element: <LoginPage />,
};

const register = {
  path: "/register",
  element: <RegisterPage />,
};

const events = {
  path: "/events",
  element: <EventsPage />,
};

const savedEvents = {
  path: "/saved-events",
  element: <SavedEventsPage />,
};

const communities = {
  path: "/communities",
  element: <CommunitiesPage />,
};

const eventDetails = {
  path: "/event-details/:communityId/:eventId",
  element: <EventDetailsPage />,
};

const communityDetails = {
  path: "/community-details/:communityId",
  element: <CommunityDetailsPage />,
};

const home = {
  element: <HomePage />,
  children: [events, eventDetails, communityDetails],
};

const root = {
  element: <Root />,
  children: [home, communities, savedEvents],
};

const routes = [root, login, register];

export default createBrowserRouter(routes);
