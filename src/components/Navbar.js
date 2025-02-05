import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
    return (
        <div>
            {/* bg-body-tertiary */}
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="/">About</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch mx-5 text-light">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label" htmlFor="flexSwitchCheckDefault text-${props.mode==='light'?'dark':'light'}`}>Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title : 'set title here',
//     aboutText : "set about here"
// };
// Navbar.defaultProps.title = "set title here";
export default Navbar