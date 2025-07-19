import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="yorumlar" element={<ReviewPage />} />
        <Route path="galeri" element={<GalleryPage />} />
        <Route path="hizmet/:slug" element={<ServicePage />} />
      </Route>
    </Routes>
  );
}

export default App;