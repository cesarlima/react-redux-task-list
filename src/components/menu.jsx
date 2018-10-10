import React from 'react'

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
            <div className='navbar-header'>
                <a href='/' className='navbar-brand'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href='#/todos'>Tarefas <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#/todos'>Sobre</a>
                    </li>
                </ul>
               
            </div>
        </div>
    </nav>
)

export default Menu