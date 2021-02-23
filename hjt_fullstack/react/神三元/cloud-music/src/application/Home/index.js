import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const { route } = props;
    return (
        <div>Home
            <NavLink to="./Recommend">Recommend</NavLink>
            <NavLink to="./Singers">Singers</NavLink>
            <NavLink to="./Rank">Rank</NavLink>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Home;