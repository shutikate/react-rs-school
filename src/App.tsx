import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { FormPage } from './pages/FormPage/FormPage';
import { NotFound } from './pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="form" element={<FormPage />} />
      </Route>
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
