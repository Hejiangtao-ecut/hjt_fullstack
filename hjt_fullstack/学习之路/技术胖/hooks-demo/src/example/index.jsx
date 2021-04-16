import React, { Component } from 'react';
import Buttons from './buttones';
import ShowText from './showText';
import { Color } from './color';

function Index() {
    return (
        <div>
            <Color >
                <ShowText />
                <Buttons />
            </Color>
        </div>
    )
}

export default Index