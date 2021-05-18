import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <div>
            Index
            <br />
            <Link to='/My'>my</Link>
        </div>
    )
}