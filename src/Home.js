import React from 'react';

const Home = ({handleSignOut}) => {
    return (
    <section className="home">
        <nav>
            <h2>Portfolio Builder</h2>
            <div className="nav-buttons">
            <button>Home</button>
            <button>Templates</button>
            <button>Account</button>
            <button>About Us</button>
            <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </nav>
    </section>
    )
}

export default Home;