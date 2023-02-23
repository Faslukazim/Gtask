import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link ms-3 active text-white fs-5 fw-semibold " style={{textShadow:"0px 2px 5px black"}} aria-current="page" href="/Task01">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5 active text-white fs-5 fw-semibold" style={{textShadow:"0px 2px 5px black"}} aria-current="page" href="/add">
                                    ADD
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
