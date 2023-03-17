import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { NotFound } from './pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
