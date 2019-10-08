import React, { useState } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import Sidebar from './Sidebar/Sidebar';
import { DEFAULT_CIRCLE_PROPS } from './constants';

function App() {
    const [circleProps, setCircleProps] = useState(DEFAULT_CIRCLE_PROPS);
    return (
        <div className="App">
            <header className="App-header">
                <Circle {...circleProps} />
            </header>
            <Sidebar onChange={setCircleProps} circleProps={circleProps} />
        </div>
    );
}

export default App;
