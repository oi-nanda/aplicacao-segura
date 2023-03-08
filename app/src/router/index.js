import { createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../ui/screens/login/loginScreen";
import { SingUpScreen } from "../ui/screens/cadastrar/singUpScreen";
import { ProfileScreen } from "../ui/screens/detalhar/profileScreen";
import { AlterProfileScreen } from "../ui/screens/alterar/alterProfileScreen";
import { PrivateRoute } from "./private-router.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/login",
    element: <PrivateRoute Screen={LoginScreen} />,
  },
  {
    path: "/singUp",
    element: <SingUpScreen />,
  },
  {
    path: "/profile",
    element: <PrivateRoute Screen={ProfileScreen} />,
  },
  {
    path: "/alterProfile",
    element: <PrivateRoute Screen={AlterProfileScreen} />,
  },
]);
