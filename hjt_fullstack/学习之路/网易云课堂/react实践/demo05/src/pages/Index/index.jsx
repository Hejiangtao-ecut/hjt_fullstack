import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <div>
            <div>Index</div>
            <div><Link to='/My'>my</Link></div>
            <div><Link to='/goods'>goods</Link></div>
            
        </div>
    )
}