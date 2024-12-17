import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AvailableBreed from './views/AvailableBreed';
import AvailableNamedCats from './views/AvailableNamedCats';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/breed/:breed'} element={<AvailableBreed />} />
        <Route path={'/name/:name'} element={<AvailableNamedCats />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/about-us'} element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
