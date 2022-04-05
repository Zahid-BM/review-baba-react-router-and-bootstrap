import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bolder fs-2 text-warning" to="/">Review<span>দেন</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-info fw-bold" to='/home'>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-info fw-bold" to='/reviews'>Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info fw-bold" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info fw-bold" to='/blogs'>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info fw-bold" to='/about'>About</Link>
                        </li>
                    </ul>
                    <span className="navbar-text text-white fst-italic">
                        Genuine customers reviews
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;