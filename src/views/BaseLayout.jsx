import { Link, Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SearchFilter from '../components/search&filter';
const BaseLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const breeds = ['sphynx', 'peterbald', 'birman', 'abyssinian', 'persian', 'bengal', 'siamese']
  const splitLocation = location.pathname.split('/');
  console.log(splitLocation[2])

  const getNamedCats = () => {
    navigate(`/name/${searchTerm}`);
  }
  const set = (e) => {
    setSearchTerm(e.target.value);
  }
  console.log(searchTerm)
  return (

    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              {breeds.includes(splitLocation[2]) || splitLocation[1] === 'available-cats' || splitLocation[1] === 'name'
                ?

                <SearchFilter searchTerm={searchTerm}
                  setSearch={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  breeds={breeds} getNamedCats={getNamedCats}
                />
                : <></>
              }
            </li>

            {/* <nav>
          <ul className="nav"> */}
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats" style={{ color: splitLocation[1] === 'available-cats' ? 'brown' : 'blue' }}>
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" style={{ color: splitLocation[1] === 'contact-us' ? 'brown' : 'blue' }}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us" style={{ color: splitLocation[1] === 'about-us' ? 'brown' : 'blue' }}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
