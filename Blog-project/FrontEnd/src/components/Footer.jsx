import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h3>About This Website</h3>
                    <p className="mt-3 text-light">
                        This Blog App is built using React, React Router, and Bootstrap.
                        It allows users to perform CRUD operations on blogs in a simple and
                        elegant way.
                    </p>
                </div>
            </div>

            <footer className="bg-black text-center text-light py-3">
                <p className="mb-0">© 2026 Blog App | Made with ❤️ by You</p>
            </footer>
        </>
    )
}

export default Footer