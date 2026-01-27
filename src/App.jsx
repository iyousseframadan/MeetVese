import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/Auth/LoginPage"
import SignupPage from "./Pages/Auth/SignupPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";
import HomePage from "./Pages/Main/HomePage";
import MeetingsListPage from "./Pages/Meetings/MeetingsListPage";
import CreateMeetingPage from "./Pages/Meetings/CreateMeetingPage";
import JoinMeetingPage from "./Pages/Meetings/JoinMeetingPage";
import MeetingPage from "./Pages/Meetings/MeetingPage";
import MeetingReportsPage from "./Pages/Meetings/MeetingReportsPage";
import GroupsListPage from "./Pages/Groups/GroupsListPage";
import CreateGroupPage from "./Pages/Groups/CreateGroupPage";
import JoinGroupPage from "./Pages/Groups/JoinGroupPage";
import GroupDetailsPage from "./Pages/Groups/GroupDetailsPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ResetPassword from "./Pages/Auth/ResetPassword";
import OTPVerification from "./Pages/Auth/OTPVerification";
import NotFound from "./Pages/NotFoundPage.jsx/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Main / Dashboard */}
      <Route path="/home" element={<HomePage />} />

      {/* Meetings */}
      <Route path="/meetings" element={<MeetingsListPage />} />
      <Route path="/meetings/create" element={<CreateMeetingPage />} />
      <Route path="/meetings/join" element={<JoinMeetingPage />} />
      <Route path="/meetings/:id" element={<MeetingPage />} />
      <Route path="/meetings/:id/reports" element={<MeetingReportsPage />} />

      {/* Groups */}
      <Route path="/groups" element={<GroupsListPage />} />
      <Route path="/groups/create" element={<CreateGroupPage />} />
      <Route path="/groups/join" element={<JoinGroupPage />} />
      <Route path="/groups/:id" element={<GroupDetailsPage />} />

      {/* Profile */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
