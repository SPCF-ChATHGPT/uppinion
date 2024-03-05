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
import JoinRequestsPage from "../pages/community/JoinRequestsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import EventAnalytics from "../pages/events/EventAnalytics";
import MessagesPage from "../pages/messages/MessagesPage";

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

const joinRequests = {
  path: "/join-requests/:communityId",
  element: <JoinRequestsPage />,
};

const eventDetails = {
  path: "/event-details/:communityId/:eventId",
  element: <EventDetailsPage />,
};

const communityDetails = {
  path: "/community-details/:communityId",
  element: <CommunityDetailsPage />,
};

const profile = {
  path: "/profile/:userId",
  element: <ProfilePage />,
};

const analytics = {
  path: "/analytics",
  element: <EventAnalytics />,
};

const messages = {
  path: "/messages",
  element: <MessagesPage />,
};

const home = {
  element: <HomePage />,
  children: [
    events,
    eventDetails,
    communityDetails,
    joinRequests,
    profile,
    analytics,
    messages
  ],
};

const root = {
  element: <Root />,
  children: [home, communities, savedEvents],
};

const routes = [root, login, register];

export default createBrowserRouter(routes);
