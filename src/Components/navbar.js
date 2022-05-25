import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={props.styles}>
            <div className="container-fluid" style={props.styles}>
                <a className="navbar-brand" href="/" style={props.styles}>{props.title}</a>
                <button style={props.styles} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={props.styles} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={props.styles} className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li style={props.styles} className="nav-item">
                            <a className="nav-link active" style={props.styles} aria-current="page" href="/">Home</a>
                        </li>
                        <li style={props.styles} className="nav-item">
                            <a className="nav-link" style={props.styles} href="/">Link</a>
                        </li>
                        <li style={props.styles} className="nav-item dropdown">
                            <a style={props.styles} className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul style={props.styles} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li style={props.styles}><a className="dropdown-item" href="/">Action</a></li>
                                <li style={props.styles}><a className="dropdown-item" href="/">Another action</a></li>
                                <li style={props.styles}><hr className="dropdown-divider" /></li>
                                <li style={props.styles}><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li style={props.styles} className="nav-item">
                            <a style={props.styles} className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" onClick={props.func}>{props.text}</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}