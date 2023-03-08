import "./App.css";
import { GlobalUserProvider } from "./context/user.context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
function App() {
  return (
    <GlobalUserProvider>
      <RouterProvider router={router} />;
    </GlobalUserProvider>
  );
}

export default App;
