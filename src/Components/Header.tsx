import { useState } from 'react';
import { HeaderWrapper } from './../Styles/Header.style';

function Header({ setSelectedTemplate }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <HeaderWrapper>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="/">
            CreatOptics
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isCollapsed ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${isCollapsed ? ' show' : ''}`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setSelectedTemplate('Instagram')}
                >
                  Instagram Post
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setSelectedTemplate('Twitter')}
                >
                  Twitter Header
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setSelectedTemplate('Story')}
                >
                  Story
                </a>
              </li>
            </ul>
            {isCollapsed ? (
              <>
                <div className="text-success">
                  <hr />
                </div>
                <span className="navbar-text text-center p-4">
                  <h6>
                    Select a template and start creating
                    <p className="fst-italic fs-5">Captivating Ads!</p>
                  </h6>
                </span>
              </>
            ) : (
              <>
                <span className="navbar-text">
                  Customize, Generate, Advertise - Effortlessly!
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
      <h1>Banner Ad AI Generator</h1>
    </HeaderWrapper>
  );
}

export default Header;
