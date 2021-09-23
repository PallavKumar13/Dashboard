import React, { useState } from 'react';
import './menu.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Menu() {
    const [active, setActive] = useState(false);

    return (
        <>
        <Router>
            <div>
                <div className={active ? "navbar " : "navbar active"}>
                    <div className={active ? "navbar-brand active" : "navbar-brand"} >
                        <Link to="#" className="brand">
                            <i class='bx bx-smile'></i>
                        </Link>
                    </div>
                    <div className={active ? "navbar-items active" : "navbar-items"}>
                        <div className={active ? "items-list active" : "items-list"}>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#"  onClick={() => setActive(!active)}><i class='bx bxs-home'></i>
                                <span className={active ? "item-name active" : "item-name"}>Home</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-bar-chart-square' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Chart</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-briefcase' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Case</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-folder' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Folder</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-calendar-check' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Calendar</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-map' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Location</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class='bx bxs-message-alt-detail' ></i>
                                <span className={active ? "item-name active" : "item-name"}>Notification</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}>{active ? [<i class='bx bx-log-in'></i>] : [<i class='bx bx-log-out'></i>]}
                                <span className={active ? "item-name active" : "item-name"} id="closebtn" >Close</span>
                            </Link>
                            <Link className={active ? "navbar-item active" : "navbar-item"} to="#" onClick={() => setActive(!active)}><i class="bi bi-gear-fill"></i>
                                <span className={active ? "item-name active" : "item-name"}>Setting</span>
                            </Link>
                        </div>
                    </div>
                    <button className={active ? "menubtn active": "menubtn"} onClick={() => setActive(!active)}>{active ? [<i class="bi bi-chevron-bar-expand"></i>] : [<i class="bi bi-chevron-bar-contract"></i>]}</button>
                </div>
            </div>
        </Router>
        </>
    )
}
