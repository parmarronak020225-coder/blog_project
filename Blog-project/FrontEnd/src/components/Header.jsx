import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
        <div className="container">
          <h3 className="text-warning fw-bold">📝 Blog App</h3>

          <div>
             <NavLink to="/home" className="btn btn-outline-light me-2">
                Home
            </NavLink >
            <NavLink to="/add" className="btn btn-outline-light me-2">
              Add Blog
            </NavLink >
            <NavLink   to="/list" className="btn btn-warning fw-semibold">
              View Blogs
            </NavLink >
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header