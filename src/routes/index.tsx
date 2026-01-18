
import { RouteObject } from "react-router";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import WithDrawCryptoView from "../pages/WithdrawManagement/ViewCrypto";
import WithdrawInr from "../pages/WithdrawManagement/WithdrawInr";
import NotFound from "../pages/OtherPage/NotFound";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { path: "/withdraw-inr", element: <WithdrawInr /> },
    
      { path: "/withdraw-crypto-view/:id", element: <WithDrawCryptoView /> },
    ],
  },
  { path: "/", element: <SignIn /> },
  { path: "*", element: <NotFound /> },
  // { path: "/view-pdf", element: <ViewPDF /> },
];

export default routes;
