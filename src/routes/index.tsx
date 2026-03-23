import { RouteObject } from "react-router";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import WithDrawCryptoView from "../pages/WithdrawManagement/ViewCrypto";
import WithdrawInr from "../pages/WithdrawManagement/WithdrawInr";
import NotFound from "../pages/OtherPage/NotFound";
import UserList from "../pages/UserManagement/UserList";
import CategoryList from "../pages/CategoryManagement/CategoryList";
import AddCategory from "../pages/CategoryManagement/AddCategory";
import KycList from "../pages/KycManagement/KycList";
import KycView from "../pages/KycManagement/ViewKyc";
import ContentMangement from "../pages/SataticContentMangment/ContentMangement";
import ViewStaticContent from "../pages/SataticContentMangment/ViewStaticContent";
import EditStaticContent from "../pages/SataticContentMangment/EditStaticContent";
import DepositList from "../pages/DepositManagement";
import DepositView from "../pages/DepositManagement/ViewDeposit";
import FeeStructure from "../pages/FeeStructure";
import SendNotification from "../pages/Notification/SendNotification";
import NotificationList from "../pages/Notification/NotificationList";
import NotificationView from "../pages/Notification/NotificationView";
import CallHistoryList from "../pages/CallHistory";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { path: "/withdraw-inr", element: <WithdrawInr /> },

      { path: "/withdraw-view", element: <WithDrawCryptoView /> },
      { path: "/kyc-view", element: <KycView /> },
      { path: "/user-list", element: <UserList /> },
      { path: "/category-list", element: <CategoryList /> },
      { path: "/add-category", element: <AddCategory /> },
      { path: "/kyc-list", element: <KycList /> },
      { path: "/static-content-mangment", element: <ContentMangement /> },
      { path: "/view-static-content/:id", element: <ViewStaticContent /> },
      {
        path: "/edit-static-content/:id/:type",
        element: <EditStaticContent />,
      },
      { path: "/deposit-list", element: <DepositList /> },
      { path: "/deposit-view", element: <DepositView /> },
      { path: "/fee-structure", element: <FeeStructure /> },
      { path: "/send-notification", element: <SendNotification /> },
      { path: "/notification", element: <NotificationList /> },
      { path: "/view-notification", element: <NotificationView /> },
      { path: "/call-history", element: <CallHistoryList /> },

    ],
  },
  { path: "/", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
  // { path: "/view-pdf", element: <ViewPDF /> },
];

export default routes;
