import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <section>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/CachingNik/CP2-FRS-Frontend"
            role="button"
          >
            Frontend <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/CachingNik/CP2-FRS-Backend"
            role="button"
          >
            Backend <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </section>
        <section>
          <strong>© 2021 Copyright: GP-1</strong>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
