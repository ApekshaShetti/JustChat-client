import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

// const variable called App and FC is function component of type React
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
