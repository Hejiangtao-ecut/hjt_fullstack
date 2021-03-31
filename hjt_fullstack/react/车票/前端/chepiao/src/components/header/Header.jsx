import React from 'react';
import PropsTypes from 'prop-types';
import './Header.css'

const Header = (props) => {
    const { onBack, title } = props;
    return (
        <div className="header">
            <div className="header-back" onClick={onBack}>
                <svg width="42" height="42">
                    <polyline
                        points="25,13 16,21 25,29"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none"
                    />
                    <h1 className="header-title">{ title }</h1>
                </svg>
            </div>
        </div>
    )
}

Header.PropsTypes = {
    onBack: PropsTypes.func.isRequired,
    title:PropsTypes.string.isRequired
}

export default Header