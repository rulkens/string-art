import React from 'react';
import './Sidebar.css';

function Sidebar({ onChange, circleProps }) {
    return (
        <div className="Sidebar hidden-print">
            <div className="Sidebar__item">
                # of points:
                <input
                    min={10}
                    max={200}
                    type="range"
                    value={circleProps.numPoints}
                    onChange={(e) => onChange({ ...circleProps, numPoints: Number(e.target.value) })}
                />{' '}
                ({circleProps.numPoints})
            </div>
            <div className="Sidebar__item">
                Size:{' '}
                <input
                    min={100}
                    max={1000}
                    type="range"
                    value={circleProps.size}
                    onChange={(e) => onChange({ ...circleProps, size: Number(e.target.value) })}
                />{' '}
                ({circleProps.size})
            </div>
            <div className="Sidebar__item">
                Point radius:{' '}
                <input
                    min={0.1}
                    max={5.1}
                    type="range"
                    value={circleProps.pointRadius}
                    step={0.1}
                    onChange={(e) => onChange({ ...circleProps, pointRadius: Number(e.target.value) })}
                />{' '}
                ({circleProps.pointRadius})
            </div>
        </div>
    );
}

export default Sidebar;
