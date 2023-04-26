import { Route, Navigate, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './components/Layout/Layout';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { FormPage } from './pages/FormPage/FormPage';
import { NotFound } from './pages/NotFound/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="form" element={<FormPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
