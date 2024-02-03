import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileNo from "./mobileNo";
import OtpPage from "./OtpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MobileNo />,
  },
  {
    path: "/otp-page",
    element: <OtpPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
